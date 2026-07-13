"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  const words = ["Coaches", "Creators", "Traders", "Teachers", "Coders"];
  
  // Repeat enough to ensure smooth infinite loop
  const items = [...words, ...words, ...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-[#FACC15] py-6 overflow-hidden flex items-center relative z-20 shadow-[0_0_50px_rgba(250,204,21,0.15)]">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        {items.map((word, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-[#050505] font-serif italic text-4xl md:text-5xl lg:text-6xl px-8">
              {word}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#050505"/>
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
