"use client";

import { motion } from "framer-motion";

export function GlowyWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      <svg
        className="absolute w-[200%] h-full left-[-50%] opacity-60"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Wave 1 - Front */}
        <motion.path
          d="M 0 300 C 250 350, 250 150, 500 200 C 750 250, 750 150, 1000 250 C 1250 350, 1250 150, 1500 250 C 1750 350, 1750 150, 2000 200 L 2000 500 L 0 500 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ x: 0 }}
          animate={{ x: "-1000px" }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        {/* Wave 2 - Middle */}
        <motion.path
          d="M 0 250 C 250 150, 250 350, 500 300 C 750 250, 750 100, 1000 200 C 1250 300, 1250 150, 1500 250 C 1750 350, 1750 200, 2000 200 L 2000 500 L 0 500 Z"
          fill="none"
          stroke="rgba(244,180,0,0.5)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ x: "-1000px" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        />

        {/* Wave 3 - Back */}
        <motion.path
          d="M 0 200 C 250 300, 250 200, 500 250 C 750 300, 750 150, 1000 150 C 1250 150, 1250 300, 1500 200 C 1750 100, 1750 300, 2000 250 L 2000 500 L 0 500 Z"
          fill="none"
          stroke="rgba(244,180,0,0.2)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ x: 0 }}
          animate={{ x: "-1000px" }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
