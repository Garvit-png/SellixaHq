"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BackgroundPathsProps {
  title?: string;
  subtitle?: string;
  titleBackground?: boolean;
  backgroundStyle?: "glass" | "gradient" | "solid" | "glow";
  children?: React.ReactNode;
}

export function BackgroundPaths({ 
  title, 
  subtitle, 
  titleBackground, 
  backgroundStyle = "gradient",
  children 
}: BackgroundPathsProps) {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Generate an infinity symbol with a few slightly offset lines
    const newPaths = [];
    for (let i = 0; i < 7; i++) {
      // Small random offsets to give a sketch/layered look
      const oX = (Math.random() - 0.5) * 4;
      const oY = (Math.random() - 0.5) * 4;
      
      // Infinity loop path centered at (50, 50)
      // Left loop: goes from 50,50 -> top left -> far left -> bottom left -> 50,50
      // Right loop: goes from 50,50 -> top right -> far right -> bottom right -> 50,50
      newPaths.push(
        `M 50 50 
         C ${30 + oX} ${10 + oY}, ${0 + oX} ${30 + oY}, ${15 + oX} ${60 + oY} 
         C ${25 + oX} ${80 + oY}, ${45 + oX} ${60 + oY}, 50 50 
         C ${55 + oX} ${40 + oY}, ${75 + oX} ${20 + oY}, ${85 + oX} ${40 + oY} 
         C ${100 + oX} ${70 + oY}, ${70 + oX} ${90 + oY}, 50 50`
      );
    }
    setPaths(newPaths);
  }, []);

  return (
    <div className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-transparent`}>
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden opacity-50 mix-blend-multiply">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="black" stopOpacity="1" />
              <stop offset="80%" stopColor="black" stopOpacity="0.4" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
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
              const color = "#ffff00"; // Yellow for all lines
              const strokeWidth = 0.05 + (i % 3) * 0.08;
              const opacity = 0.15 + (i % 3) * 0.2; // Opacity 0.15 to 0.55
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

      <div className="relative z-10 w-full flex flex-col items-center">
        {title && (
          <div className="flex flex-col items-center text-center max-w-3xl mb-8 mt-48">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#ffff00] font-serif font-light leading-tight drop-shadow-sm">
              {title.split('\\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
              {subtitle && (
                <span className="text-[#ffff00] italic font-medium block mt-4">{subtitle}</span>
              )}
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
