"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DitheringShaderProps {
  shape?: "wave" | "sphere" | "plane";
  type?: "2x2" | "4x4" | "8x8";
  colorBack?: string;
  colorFront?: string;
  pxSize?: number;
  speed?: number;
}

const fragmentShader = `
  uniform vec3 uColorBack;
  uniform vec3 uColorFront;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPxSize;
  
  varying vec2 vUv;

  const float bayer8x8[64] = float[64](
    0.0/64.0, 32.0/64.0, 8.0/64.0, 40.0/64.0, 2.0/64.0, 34.0/64.0, 10.0/64.0, 42.0/64.0,
    48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0, 50.0/64.0, 18.0/64.0, 58.0/64.0, 26.0/64.0,
    12.0/64.0, 44.0/64.0, 4.0/64.0, 36.0/64.0, 14.0/64.0, 46.0/64.0, 6.0/64.0, 38.0/64.0,
    60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0, 62.0/64.0, 30.0/64.0, 54.0/64.0, 22.0/64.0,
    3.0/64.0, 35.0/64.0, 11.0/64.0, 43.0/64.0, 1.0/64.0, 33.0/64.0, 9.0/64.0, 41.0/64.0,
    51.0/64.0, 19.0/64.0, 59.0/64.0, 27.0/64.0, 49.0/64.0, 17.0/64.0, 57.0/64.0, 25.0/64.0,
    15.0/64.0, 47.0/64.0, 7.0/64.0, 39.0/64.0, 13.0/64.0, 45.0/64.0, 5.0/64.0, 37.0/64.0,
    63.0/64.0, 31.0/64.0, 55.0/64.0, 23.0/64.0, 61.0/64.0, 29.0/64.0, 53.0/64.0, 21.0/64.0
  );

  void main() {
    // Pixelate coordinates
    vec2 coord = gl_FragCoord.xy / max(uPxSize, 1.0);
    int x = int(mod(coord.x, 8.0));
    int y = int(mod(coord.y, 8.0));
    float threshold = bayer8x8[y * 8 + x];

    float t = uTime * uSpeed;
    vec2 uv = vUv; // 0.0 to 1.0 (bottom to top)
    
    // Create a complex wavy heightmap (hills)
    float h = sin(uv.x * 3.0 + t) * 0.2;
    h += sin(uv.x * 6.0 - t * 1.3) * 0.1;
    h += sin(uv.x * 12.0 + t * 2.0) * 0.05;
    
    // Set base height to 0.7 so it occupies a good chunk of the container
    h += 0.7; 
    
    // Diff is positive below the hill surface, negative above
    float diff = h - uv.y;
    
    // Map depth to brightness (luma)
    // Surface is bright, getting darker as we go deep, completely dark in the sky
    float luma = 0.0;
    if (diff > 0.0) {
        // We are underground/inside the hill
        // Create a gradient that the Bayer matrix will turn into dither bands
        luma = clamp(diff * 2.0, 0.0, 1.0);
        // Boost contrast slightly
        luma = smoothstep(0.0, 0.8, luma);
    }
    
    // Add an ambient glow around the surface edge
    luma += exp(-abs(diff) * 15.0) * 0.3;

    // Dither step
    vec3 color = luma > threshold ? uColorFront : uColorBack;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function ShaderMaterialMesh({ colorBack, colorFront, pxSize, speed }: DitheringShaderProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(() => ({
    uColorBack: { value: new THREE.Color(colorBack) },
    uColorFront: { value: new THREE.Color(colorFront) },
    uTime: { value: 0 },
    uSpeed: { value: speed },
    uPxSize: { value: pxSize }
  }), [colorBack, colorFront, pxSize, speed]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Plane covers full screen */}
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export function DitheringShader({
  shape = "wave",
  type = "8x8",
  colorBack = "#001122",
  colorFront = "#ff0088",
  pxSize = 3,
  speed = 0.6,
}: DitheringShaderProps) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderMaterialMesh 
          colorBack={colorBack} 
          colorFront={colorFront} 
          pxSize={pxSize} 
          speed={speed} 
        />
      </Canvas>
    </div>
  );
}
