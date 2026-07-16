"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "framer-motion";
import { CurrencyScramble } from "./CurrencyScramble";

interface Point {
  x: number;
  y: number;
  age: number;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform sampler2D uVideoTexture;
  uniform sampler2D uTextTexture;
  uniform sampler2D uTrailTexture;
  uniform vec2 uResolution;
  uniform vec2 uVideoResolution;
  uniform float uTextYOffset;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Calculate aspect ratio cover for video
    vec2 videoUv = uv;
    float videoAspect = uVideoResolution.x / uVideoResolution.y;
    float screenAspect = uResolution.x / uResolution.y;
    if (screenAspect > videoAspect) {
      float scale = videoAspect / screenAspect;
      videoUv.y = (uv.y - 0.5) * scale + 0.5;
    } else {
      float scale = screenAspect / videoAspect;
      videoUv.x = (uv.x - 0.5) * scale + 0.5;
    }

    // Dynamic fluid distortion using FBM / Simplex Noise
    float noise1 = snoise(uv * 3.0 + uTime * 0.4);
    float noise2 = snoise(uv * 4.0 - uTime * 0.5);
    vec2 distortion = vec2(noise1, noise2) * 0.06;
    
    // Sample trail mask with distortion
    float mask = texture2D(uTrailTexture, uv + distortion).r;
        // Add extra edge turbulence (watercolor bleed effect)
    float edgeNoise = snoise(uv * 8.0 + uTime) * 0.1;
    mask = smoothstep(0.1, 0.9, mask + edgeNoise);

    vec4 videoColor = texture2D(uVideoTexture, videoUv);
    
    // Smoothly fade to black in the bottom right corner to hide the star watermark
    float distToCorner = distance(uv, vec2(1.0, 0.0));
    float cornerMask = smoothstep(0.15, 0.25, distToCorner);
    videoColor.rgb *= cornerMask;
    
    // Offset goes from -0.5 (bottom) to 0.0 (center)
    float yOffset = 0.0;
    
    vec2 textUv = uv;
    textUv.y -= yOffset; 
    
    // Background Yellow
    vec4 textColor = vec4(1.0, 1.0, 0.0, 1.0); 
    if (textUv.y >= 0.0 && textUv.y <= 1.0) {
      vec4 textSample = texture2D(uTextTexture, textUv);
      textColor = mix(vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 0.0, 1.0), textSample.a);
    }
    
    // Mix top layer (Text + White Bg) with bottom layer (Video) using organic mask
    gl_FragColor = mix(textColor, videoColor, mask);
  }
`;

const HeroShaderMaterial = () => {
  const { size, viewport } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);
  const [textTexture, setTextTexture] = useState<THREE.CanvasTexture | null>(null);
  const [trailTexture, setTrailTexture] = useState<THREE.CanvasTexture | null>(null);
  
  const trailCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const trailCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pointsRef = useRef<Point[]>([]);
  
  const [videoRes, setVideoRes] = useState<THREE.Vector2>(new THREE.Vector2(1920, 1080));

  // Init Video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/sellixa.mp4";
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    
    video.onloadedmetadata = () => {
      setVideoRes(new THREE.Vector2(video.videoWidth, video.videoHeight));
    };
    
    video.playbackRate = 1.5; // Speed up the video playback
    video.play();
    
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    setVideoTexture(texture);
    
    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      texture.dispose();
    };
  }, []);

  // Init Text Overlay
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const dpr = window.devicePixelRatio || 2;
    canvas.width = size.width * dpr; 
    canvas.height = size.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000000";
      // Dynamically calculate font size to fill exactly 96% of screen width
      const testFontSize = 1000;
      ctx.font = `900 ${testFontSize}px "Geist", "Inter", sans-serif`;
      ctx.letterSpacing = "-0.08em"; 
      
      const metrics = ctx.measureText("SELLIXA");
      const targetWidth = canvas.width * 0.88;
      const scale = targetWidth / metrics.width;
      const fontSize = testFontSize * scale;
      
      ctx.font = `900 ${fontSize}px "Geist", "Inter", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SELLIXA", canvas.width / 2, canvas.height / 2);
      
      // Diagonal cut to separate the two "L"s
      const fullMetrics = ctx.measureText("SELLIXA");
      const startX = canvas.width / 2 - fullMetrics.width / 2;
      const selWidth = ctx.measureText("SEL").width;
      
      // Exact bottom of the text
      const textBottom = canvas.height / 2 + fullMetrics.actualBoundingBoxDescent;
      
      const sellWidth = ctx.measureText("SELL").width;
      
      // The vertical stems of the 2nd L and the I start at roughly these X coordinates
      const cut1X = startX + selWidth - (fontSize * 0.015); 
      const cut2X = startX + sellWidth - (fontSize * 0.015); 
      
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = fontSize * 0.02; // Thin, precision blade cut
      ctx.lineCap = "butt"; // Flat edges, no pill shapes
      ctx.beginPath();
      
      // Shift baseline slightly up to keep the cut clean inside the letter bounds
      const baseline = textBottom - (fontSize * 0.01);
      
      // Define the exact 45-degree angle offsets
      const startOffsetX = fontSize * 0.06;
      const startOffsetY = fontSize * 0.02; // Extends slightly below
      const endOffsetX = fontSize * 0.02;
      const endOffsetY = fontSize * 0.19; // Extends high up to slice the stem fully

      // 1st Cut: Between 1st L and 2nd L
      ctx.moveTo(cut1X - startOffsetX, baseline + startOffsetY);
      ctx.lineTo(cut1X + endOffsetX, baseline - endOffsetY);

      // 2nd Cut: Between 2nd L and I
      ctx.moveTo(cut2X - startOffsetX, baseline + startOffsetY);
      ctx.lineTo(cut2X + endOffsetX, baseline - endOffsetY);
      ctx.stroke();
      
      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setTextTexture(tex);
      
      return () => {
        tex.dispose();
      };
    }
  }, [size.width, size.height]);

  // Init Trail Canvas
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;
    trailCtxRef.current = canvas.getContext("2d");
    trailCanvasRef.current = canvas;
    const texture = new THREE.CanvasTexture(canvas);
    setTrailTexture(texture);

    const onMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointsRef.current.push({ x: e.touches[0].clientX, y: e.touches[0].clientY, age: 0 });
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      texture.dispose();
    };
  }, [size.width, size.height]);

  const idleFramesRef = useRef(0);

  // Render Loop
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if (trailCtxRef.current && trailCanvasRef.current && trailTexture) {
      const ctx = trailCtxRef.current;
      const canvas = trailCanvasRef.current;
      
      if (pointsRef.current.length === 0) {
        if (idleFramesRef.current < 2) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // eslint-disable-next-line react-hooks/immutability
          trailTexture.needsUpdate = true;
          idleFramesRef.current++;
        }
      } else {
        idleFramesRef.current = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let points = pointsRef.current;
        points.forEach(p => p.age += delta);
        points = points.filter(p => p.age < 1.5); // Smooth fade over 1.5s
        pointsRef.current = points;
        
        points.forEach((p) => {
          const opacity = Math.max(0, 1 - (p.age / 1.5));
          const spread = 1 + (p.age * 0.4); 
          const baseSize = canvas.width * 0.04 * spread; // Brush size
          
          ctx.beginPath();
          // A simple radial gradient brush on canvas.
          // The GLSL shader will completely distort and liquefy this shape!
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, baseSize);
          grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
          ctx.fillStyle = grad;
          ctx.arc(p.x, p.y, baseSize, 0, Math.PI * 2);
          ctx.fill();
        });

        trailTexture.needsUpdate = true;
      }
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uVideoTexture: { value: null },
    uTextTexture: { value: null },
    uTrailTexture: { value: null },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uVideoResolution: { value: videoRes },
    uTextYOffset: { value: -0.5 } // Start from bottom
  }), [size.width, size.height, videoRes]);

  useEffect(() => {
    if (materialRef.current) {
      if (videoTexture) materialRef.current.uniforms.uVideoTexture.value = videoTexture;
      if (textTexture) materialRef.current.uniforms.uTextTexture.value = textTexture;
      if (trailTexture) materialRef.current.uniforms.uTrailTexture.value = trailTexture;
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
      materialRef.current.uniforms.uVideoResolution.value.copy(videoRes);
    }
  }, [videoTexture, textTexture, trailTexture, size.width, size.height, videoRes]);

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export function HeroWebGL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-[#ffff00] z-0 overflow-hidden cursor-default">
      <Canvas 
        dpr={1} 
        frameloop={isInView ? "always" : "demand"}
        style={{ pointerEvents: "none" }} 
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      >
        <HeroShaderMaterial />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none z-10">
        <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold tracking-[0.8em] text-[10px] md:text-sm pt-[28vh] md:pt-[36vh] pl-[0.8em]">
          <CurrencyScramble text="MONETIZE YOUR AUDIENCE" />
        </h2>
      </div>
    </div>
  );
}
