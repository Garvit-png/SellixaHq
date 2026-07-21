"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, Fog } from "@react-three/drei";
import * as THREE from "three";
import { Particles } from "./Particles";
import { ProjectMesh } from "./ProjectMesh";

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  nextImageUrl?: string;
}

interface MainSceneProps {
  projects: Project[];
  scrollProgress: number;
  mouseX: number;
  mouseY: number;
  activeSection: "hero" | "works" | "about" | "contact";
}

export function MainScene({
  projects,
  scrollProgress,
  mouseX,
  mouseY,
  activeSection,
}: MainSceneProps) {
  const { camera, size } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const cameraTargetX = useRef(0);
  const cameraTargetY = useRef(0);
  const cameraTargetZ = useRef(5);

  // Spacing between project planes
  const SPACING = 3.2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Smooth mouse parallax on camera
    cameraTargetX.current += (mouseX * 0.4 - cameraTargetX.current) * 0.04;
    cameraTargetY.current += (mouseY * 0.25 - cameraTargetY.current) * 0.04;

    // Slow floating
    const floatX = Math.sin(t * 0.18) * 0.06;
    const floatY = Math.cos(t * 0.13) * 0.04;

    camera.position.x += (cameraTargetX.current + floatX - camera.position.x) * 0.06;
    camera.position.y += (cameraTargetY.current + floatY - camera.position.y) * 0.06;

    // Camera Z based on section
    let targetZ = 5;
    if (activeSection === "works") targetZ = 4.5;
    if (activeSection === "about") targetZ = 6;
    if (activeSection === "contact") targetZ = 7;
    cameraTargetZ.current += (targetZ - cameraTargetZ.current) * 0.03;
    camera.position.z += (cameraTargetZ.current - camera.position.z) * 0.06;

    camera.lookAt(0, 0, 0);

    // Rotate group subtly with scroll velocity
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseX * 0.015 - groupRef.current.rotation.y) * 0.03;
    }
  });

  // Aspect-aware scale
  const aspect = size.width / size.height;
  const planeW = Math.min(2.8, aspect * 1.4);
  const planeH = planeW * 1.35;

  return (
    <>
      {/* Fog */}
      <fog attach="fog" args={["#080808", 8, 22]} />

      {/* Ambient */}
      <ambientLight intensity={0.15} />

      {/* Area lights */}
      <rectAreaLight
        position={[3, 3, 2]}
        width={6}
        height={6}
        intensity={1.2}
        color="#ffffff"
      />
      <rectAreaLight
        position={[-3, -2, 2]}
        width={4}
        height={4}
        intensity={0.5}
        color="#8888ff"
      />
      <pointLight position={[0, 4, 3]} intensity={0.4} color="#ffffff" />

      {/* Particles */}
      <Particles count={320} />

      {/* Project planes */}
      <group ref={groupRef}>
        {projects.map((project, i) => {
          // Position projects in a slight arc
          const angle = (i - (projects.length - 1) / 2) * 0.12;
          const x = Math.sin(angle) * 0.5;
          const z = -i * SPACING;
          const y = 0;

          return (
            <ProjectMesh
              key={project.id}
              imageUrl={project.imageUrl}
              position={[x, y, z]}
              scale={[planeW, planeH, 1]}
              scrollProgress={scrollProgress}
              index={i}
              total={projects.length}
            />
          );
        })}
      </group>
    </>
  );
}
