"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { InlineWidget } from "react-calendly";

export function CalendlySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Spotlight effect for the container border
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="schedule" 
      className="relative w-full flex flex-col items-center justify-center bg-[#ffff00] py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full mt-8 md:mt-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-6"
        >
          <div className="w-8 h-px bg-black/40"></div>
          <span className="text-black text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-bold">
            // Pick a slot
          </span>
          <div className="w-8 h-px bg-black/40"></div>
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-[1.05] mb-12 md:mb-16 text-black"
        >
          <span className="text-black">Schedule it </span>
          <span className="italic text-black font-bold">right here.</span>
        </motion.h2>

        {/* Unique Calendly Wrapper with Spotlight Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full max-w-4xl h-[950px] sm:h-[800px] md:h-[750px] rounded-[32px] p-[2px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
        >
          {/* Default Border (Subtle) */}
          <div className="absolute inset-0 bg-black/10 rounded-[32px] transition-opacity duration-300"></div>

          {/* Interactive Spotlight Border */}
          <div 
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.6), transparent 40%)`
            }}
          />

          {/* Inner Container */}
          <div className="relative w-full h-full bg-[#0A0A0B] rounded-[30px] overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-16 border border-black/20">
            {/* Soft inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            
            <div className="w-full h-full max-w-3xl rounded-[16px] bg-white shadow-2xl overflow-hidden relative z-10">
              <InlineWidget
                url="https://calendly.com/contact-sellixahq/30min"
                pageSettings={{
                  hideGdprBanner: true,
                }}
                styles={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
