"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

function Dots() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // 60x60 grid
  const w = 60;
  const h = 60;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(w * h * 3);
    let i = 0;
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        // Space them out by 0.5 units
        pos[i++] = (x - w / 2) * 0.5;
        pos[i++] = (y - h / 2) * 0.5;
        pos[i++] = 0;
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        const px = (x - w / 2) * 0.5;
        const py = (y - h / 2) * 0.5;
        
        // Gentle crossing sine waves
        const z = Math.sin(px * 0.2 + time * 0.5) * 1.5 + Math.cos(py * 0.2 + time * 0.4) * 1.5;
        
        pos[i + 2] = z;
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow drift rotation
    pointsRef.current.rotation.z = time * 0.02;
  });

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#F4B400" 
        transparent 
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
  );
}

export function DottedSurface({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <Dots />
          <fog attach="fog" args={["#090909", 5, 30]} />
        </Canvas>
      </div>
      {/* Dimmer overlay for better text contrast */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#090909]/80 via-transparent to-[#090909]/80" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
