"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  const words = ["Coaches", "Creators", "Traders", "Teachers", "Coders"];
  
  // Repeat enough to ensure smooth infinite loop
  const items = [...words, ...words, ...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-[#ffff00] py-6 overflow-hidden flex items-center relative z-20 shadow-[0_0_50px_rgba(255,255,0,0.3)] border-y border-black/20">

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="flex whitespace-nowrap items-center animate-marquee-scroll">
        {items.map((word, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-black font-serif italic text-4xl md:text-5xl lg:text-6xl px-8">
              {word}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="black"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
