"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundPaths() {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Generate 60 curved paths flowing left to right
    const newPaths = [];
    for (let i = 0; i < 60; i++) {
      const startX = -10 + Math.random() * 20; // Start on far left
      const startY = -20 + Math.random() * 140; // Any vertical position
      
      const endX = 90 + Math.random() * 30; // End on far right
      const endY = -20 + Math.random() * 140; // Any vertical position

      // Spread control points across the screen horizontally
      const cp1X = 20 + Math.random() * 30;
      const cp1Y = startY + (Math.random() * 60 - 30);
      
      const cp2X = 50 + Math.random() * 30;
      const cp2Y = endY + (Math.random() * 60 - 30);
      
      newPaths.push(
        `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
      );
    }
    setPaths(newPaths);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden opacity-70 mix-blend-screen">
      <svg
        className="w-full h-full drop-shadow-[0_0_8px_rgba(244,180,0,0.5)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask">
            <rect width="100" height="100" fill="url(#fadeGradient)" />
          </mask>
        </defs>

        <motion.g
          mask="url(#fadeMask)"
          animate={{ x: ["-1%", "1%", "-1%"], y: ["-1%", "1%", "-1%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {paths.map((path, i) => {
            const color = i % 2 === 0 ? "#FFFFFF" : "#FFFFFF"; // Very bright gold and pale yellow
            const strokeWidth = 0.05 + (i % 3) * 0.08;
            const opacity = 0.5 + (i % 3) * 0.2; // Opacity 0.5 to 0.9
            const duration = 4 + (i % 5) * 1.5;

            return (
              <motion.path
                key={i}
                d={path}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                style={{ opacity }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
