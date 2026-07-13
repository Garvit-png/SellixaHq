"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
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
    // Center and correct aspect ratio
    vec2 uv = (vUv - 0.5) * 2.0;
    
    // Zoom out significantly to show many small waves instead of one giant one
    uv *= 8.0; 
    
    // Distort uv with noise to create wavy fluid feel
    float n1 = snoise(uv * 1.5 + uTime * 0.5);
    float n2 = snoise(uv * 3.0 - uTime * 0.3 + n1);
    
    // Create soft wavy bands
    float wave = sin(uv.y * 3.0 + n2 * 4.0 + uTime);
    
    // Smooth the wave and map to brightness
    float intensity = smoothstep(0.0, 1.0, wave * 0.5 + 0.5);
    
    // Color tint
    vec3 col = uColor * intensity;
    
    // Fade out at the top and bottom so it blends into the section gracefully
    float alpha = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
    
    gl_FragColor = vec4(col, alpha * intensity * 0.4);
}
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function ShaderMesh({ speed }: { speed: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#F4B400") } // Golden accent color
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime() * speed * 40.0;
    }
  });

  return (
    <mesh>
      {/* 2x2 plane exactly covers a standard orthographic camera */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function WavyShader({ speed = 0.015, className }: { speed?: number, className?: string }) {
  return (
    <div className={cn("w-full h-full pointer-events-none z-0", className)}>
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1, left: -1, right: 1, top: 1, bottom: -1 }} dpr={[1, 1.2]}>
        <ShaderMesh speed={speed} />
      </Canvas>
    </div>
  );
}
