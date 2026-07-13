"use client";

import { useEffect, useRef } from "react";

export const GridTrailCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const gridSize = 40; // Pixel block size
    let lastCell = { cx: -1, cy: -1 };
    const cells: { cx: number; cy: number; time: number }[] = [];
    const maxAge = 600; // milliseconds until it completely fades to normal

    const handleMouseMove = (e: MouseEvent) => {
      // Since canvas is fixed to the viewport, we can use clientX/clientY directly
      const x = e.clientX;
      const y = e.clientY;
      
      const cx = Math.floor(x / gridSize) * gridSize;
      const cy = Math.floor(y / gridSize) * gridSize;

      // Only add if it's a new cell to avoid stacking too many on one spot
      if (cx !== lastCell.cx || cy !== lastCell.cy) {
        cells.push({ cx, cy, time: Date.now() });
        lastCell = { cx, cy };
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const draw = () => {
      // Clear the canvas completely so it returns to normal
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Draw all active cells
      for (let i = cells.length - 1; i >= 0; i--) {
        const cell = cells[i];
        const age = now - cell.time;

        if (age > maxAge) {
          // Remove old cells
          cells.splice(i, 1);
        } else {
          // Calculate opacity: 1 (new) to 0 (old)
          const opacity = 1 - (age / maxAge);
          // Increased opacity drastically to make the current cursor position a very bright yellow
          ctx.fillStyle = `rgba(250, 204, 21, ${opacity * 0.95})`; 
          ctx.fillRect(cell.cx, cell.cy, gridSize, gridSize);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-screen pointer-events-none z-[999] mix-blend-screen"
    />
  );
};
