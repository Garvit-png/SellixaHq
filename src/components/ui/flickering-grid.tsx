"use client";

import React, { useEffect, useRef, useState } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.1,
  color = "#000000",
  width,
  height,
  className,
  maxOpacity = 0.5,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: width || 0, height: height || 0 });

  useEffect(() => {
    if (width !== undefined && height !== undefined) {
      setDimensions({ width, height });
      return;
    }
    
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const { width: w, height: h } = dimensions;
    if (w === 0 || h === 0) return;

    // Use device pixel ratio for sharper rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cols = Math.floor(w / (squareSize + gridGap));
    const rows = Math.floor(h / (squareSize + gridGap));
    
    // Initialize opacity map
    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * maxOpacity;
    }

    const draw = (time: number) => {
      // Throttle flickering to ~15fps so it's not crazy fast, but rendering remains smooth
      if (time - lastTime > 1000 / 15) {
        lastTime = time;
        
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = color;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const index = i * rows + j;
            
            // Randomly update opacity
            if (Math.random() < flickerChance) {
              squares[index] = Math.random() * maxOpacity;
            }

            ctx.globalAlpha = squares[index];
            ctx.fillRect(
              i * (squareSize + gridGap),
              j * (squareSize + gridGap),
              squareSize,
              squareSize
            );
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, squareSize, gridGap, flickerChance, color, maxOpacity]);

  return (
    <div ref={containerRef} className={`w-full h-full overflow-hidden ${className || ""}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
