"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function CloudTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    clouds: THREE.Mesh[];
    scrollProgress: number;
    timeOffset: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Sky background (will transition from blue to yellow)
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    // Cloud particle system
    const cloudCount = 20;
    const clouds: THREE.Mesh[] = [];

    // Create fluffy cloud geometry
    const createCloudGeometry = () => {
      const cloud = new THREE.Group();
      const geometry = new THREE.SphereGeometry(1, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        fog: false
      });

      // Create multiple spheres to form a cloud
      for (let i = 0; i < 5; i++) {
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.random() * 2 - 1;
        sphere.position.y = Math.random() * 0.5;
        sphere.position.z = Math.random() * 2 - 1;
        sphere.scale.setScalar(0.5 + Math.random() * 0.5);
        cloud.add(sphere);
      }

      return cloud;
    };

    // Generate clouds
    for (let i = 0; i < cloudCount; i++) {
      const cloudGroup = createCloudGeometry();
      
      // Position clouds in a tunnel-like formation
      const angle = (i / cloudCount) * Math.PI * 2;
      const radius = 8 + Math.random() * 4;
      
      cloudGroup.position.x = Math.cos(angle) * radius;
      cloudGroup.position.y = Math.sin(angle) * radius - 5; // Start below viewport
      cloudGroup.position.z = -i * 5 - 10;
      
      cloudGroup.userData = {
        originalY: cloudGroup.position.y,
        speed: 0.5 + Math.random() * 0.5,
        angle: angle
      };

      scene.add(cloudGroup);
      clouds.push(cloudGroup as any);
    }

    // Store scene data
    sceneRef.current = {
      scene,
      camera,
      renderer,
      clouds,
      scrollProgress: 0,
      timeOffset: 0
    };

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!sceneRef.current) return;

      const { scene, camera, renderer, clouds, scrollProgress } = sceneRef.current;
      const elapsed = clock.getElapsedTime();

      // Move clouds forward continuously
      clouds.forEach((cloud, i) => {
        const speed = cloud.userData.speed;
        
        // Move forward (toward camera)
        cloud.position.z += speed * 0.1;
        
        // Reset cloud when it passes the camera
        if (cloud.position.z > 10) {
          cloud.position.z = -50;
        }

        // Scroll-based vertical movement
        const scrollOffset = scrollProgress * 15; // Move up based on scroll
        cloud.position.y = cloud.userData.originalY + scrollOffset;

        // Gentle floating animation
        cloud.position.y += Math.sin(elapsed + i) * 0.02;
        cloud.position.x += Math.cos(elapsed * 0.5 + i) * 0.01;

        // Rotate clouds slightly
        cloud.rotation.y += 0.001;
      });

      // Transition background color from sky blue to yellow
      const skyBlue = new THREE.Color(0x87ceeb);
      const yellow = new THREE.Color(0xffff00);
      const currentColor = skyBlue.lerp(yellow, scrollProgress);
      scene.background = currentColor;

      // Slight camera movement for depth
      camera.position.y = Math.sin(elapsed * 0.2) * 0.2;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Scroll handler
    const handleScroll = () => {
      if (!sceneRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      // Starts at 0 when section enters viewport, reaches 1 when it exits
      let progress = 0;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Section is in viewport
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const totalScrollable = rect.height + viewportHeight;
        const scrolled = viewportHeight - rect.top;
        progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      } else if (rect.bottom <= 0) {
        // Section has scrolled past
        progress = 1;
      }

      sceneRef.current.scrollProgress = progress;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Resize handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      const { camera, renderer } = sceneRef.current;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      
      if (sceneRef.current) {
        sceneRef.current.clouds.forEach(cloud => {
          cloud.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              if (child.material instanceof THREE.Material) {
                child.material.dispose();
              }
            }
          });
        });
        sceneRef.current.renderer.dispose();
        containerRef.current?.removeChild(sceneRef.current.renderer.domElement);
      }
    };
  }, [isMobile]);

  if (isMobile) {
    // Mobile fallback: CSS gradient transition
    return (
      <div className="w-full h-screen sticky top-0 -z-10">
        <div 
          className="w-full h-full transition-all duration-1000"
          style={{
            background: "linear-gradient(to bottom, #87ceeb 0%, #ffff00 100%)"
          }}
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen sticky top-0 -z-10"
      style={{ 
        position: "sticky",
        top: 0,
        zIndex: -1
      }}
    />
  );
}











e



