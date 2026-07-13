"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] py-32 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-6"
        >
          <div className="w-8 h-px bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-semibold">
            // Pick a slot
          </span>
          <div className="w-8 h-px bg-[#D4AF37]/40"></div>
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-thin tracking-tight leading-[1.05] mb-16"
        >
          <span className="text-white/90">Schedule it </span>
          <span className="italic text-[#FACC15]">right here.</span>
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
          className="relative w-full max-w-4xl h-[700px] rounded-[32px] p-[2px] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Default Border (Subtle) */}
          <div className="absolute inset-0 bg-white/5 rounded-[32px] transition-opacity duration-300"></div>

          {/* Interactive Spotlight Border */}
          <div 
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.4), transparent 40%)`
            }}
          />

          {/* Inner Container */}
          <div className="relative w-full h-full bg-[#0A0A0B] rounded-[30px] overflow-hidden flex items-center justify-center p-8 md:p-16">
            {/* Soft inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(250,204,21,0.05)] pointer-events-none"></div>
            
            <iframe
              src="https://calendly.com/contact-sellixahq/30min?embed_domain=sellixahq.com&embed_type=Inline&hide_gdpr_banner=1&month=2026-07"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full max-w-3xl rounded-[16px] bg-white shadow-2xl"
              title="Schedule a Meeting"
            ></iframe>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
