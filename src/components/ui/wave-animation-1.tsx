"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface WaveAnimationProps {
  width?: number;
  height?: number;
  waveSpeed?: number;
  waveIntensity?: number;
  particleColor?: string;
  pointSize?: number;
  gridDistance?: number;
  className?: string;
}

export function WaveAnimation({
  width = 1200,
  height = 600,
  waveSpeed = 3,
  waveIntensity = 50,
  particleColor = "#F4B400",
  pointSize = 2,
  gridDistance = 20,
  className,
}: WaveAnimationProps) {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", className)}>
      <Canvas camera={{ position: [0, 200, 1000], fov: 75 }} dpr={[1, 1.5]}>
        <Particles 
          width={width}
          height={height}
          waveSpeed={waveSpeed}
          waveIntensity={waveIntensity}
          particleColor={particleColor}
          pointSize={pointSize}
          gridDistance={gridDistance}
        />
      </Canvas>
    </div>
  );
}

function Particles({ width, height, waveSpeed, waveIntensity, particleColor, pointSize, gridDistance }: any) {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Dynamically calculate grid dimensions based on viewport to guarantee edge-to-edge terrain
  const separation = gridDistance * 3; // Tune separation for dense horizon effect
  const amountX = Math.max(50, Math.floor((width * 2) / separation)); // Exaggerate width to span horizon fully
  const amountY = Math.max(50, Math.floor((height * 4) / separation)); // Exaggerate depth 

  const positions = useMemo(() => {
    const numParticles = amountX * amountY;
    const pos = new Float32Array(numParticles * 3);
    let i = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        pos[i] = ix * separation - (amountX * separation) / 2;
        pos[i + 1] = 0;
        pos[i + 2] = iy * separation - (amountY * separation) / 2;
        i += 3;
      }
    }
    return pos;
  }, [amountX, amountY, separation]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * waveSpeed * 0.3;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        pos[i + 1] = 
          (Math.sin((ix + time) * 0.3) * waveIntensity) + 
          (Math.sin((iy + time) * 0.5) * waveIntensity);
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={pointSize * 3}
        color={particleColor}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}
