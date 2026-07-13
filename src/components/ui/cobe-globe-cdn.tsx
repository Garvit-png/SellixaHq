"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function GlobeCdn() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 1, // dark mode (black background behind dots if they are transparent)
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0, 0, 0], // Dark base
      markerColor: [212 / 255, 175 / 255, 55 / 255],
      glowColor: [212 / 255, 175 / 255, 55 / 255], // Yellow/gold glow
      markers: [
        // Add some random markers if desired
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.0060], size: 0.1 },
      ],
      // @ts-expect-error: cobe types might not include onRender but it is a valid property
      onRender: (state) => {
        // Rotate the globe continuously
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1/1",
        }}
      />
    </div>
  );
}
