"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, ArrowRight, Mail } from "lucide-react";

const AnimatedUserRow = () => {
  const containerRef = useRef(null);
  // Removed margin so it triggers as soon as it enters the viewport (essential since it's at the very bottom of the page)
  const isInView = useInView(containerRef, { once: false });
  
  // Create an array of 40 items to span across the bottom
  const users = Array.from({ length: 40 });

  return (
    <div className="absolute bottom-[-10px] left-0 w-full flex items-end justify-center pointer-events-none z-30" ref={containerRef}>
      
      {/* Base row (dimmed/gray users) - Made slightly more visible so you know they are there */}
      <div className="flex w-full justify-around px-4 opacity-40">
        {users.map((_, i) => (
          <User key={i} className="w-8 h-8 md:w-12 md:h-12 text-white/50" strokeWidth={1.5} />
        ))}
      </div>

      {/* Sweeping Highlight row (Glowing Yellow users) */}
      <motion.div 
        className="absolute bottom-0 left-0 flex w-full justify-around px-4"
        initial={{ clipPath: "inset(-50% 100% -50% 0)" }}
        animate={{ clipPath: isInView ? "inset(-50% -10% -50% 0)" : "inset(-50% 100% -50% 0)" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        {users.map((_, i) => (
          <User 
            key={i} 
            className="w-8 h-8 md:w-12 md:h-12 text-[#ffff00] drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" 
            strokeWidth={2} 
          />
        ))}
      </motion.div>
      
      {/* Soft gradient fade at the bottom so they blend smoothly into the edge */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
    </div>
  );
};

export function FinalCtaSection() {
  return (
    <section 
      id="launch" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] overflow-hidden py-32 relative overflow-hidden"
    >

      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      {/* Very subtle noise overlay for the cinematic feel to match previous sections */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>
      
      {/* Gentle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E5E5E5]/5 hidden md:block blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        
        {/* SELLIXA Logo Circle */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffff00] via-[#ffff00] to-[#ffff00] shadow-[0_0_40px_rgba(255,255,0,0.3)] flex items-center justify-center mb-12"
        >
          <span className="text-black font-sans font-bold text-[10px] tracking-[0.15em] uppercase">
            Sellixa
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-thin tracking-tight leading-[1.05] mb-8"
        >
          <span className="text-white">Turn your audience<br />into </span>
          <span className="italic text-[#ffff00]">income.</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/60 font-sans font-light text-base md:text-lg lg:text-xl max-w-2xl leading-[1.6] mb-12"
        >
          Courses, digital materials, a fully branded theme — launched under your name. Zero upfront. You keep 75%.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-gradient-to-r from-[#ffff00] via-[#ffff00] to-[#ffff00] hover:from-[#ffff00] hover:to-[#ffff00] text-black px-10 py-4 rounded-full font-bold text-[15px] md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(255,255,0,0.25)] hover:shadow-[0_0_50px_rgba(255,255,0,0.5)] flex items-center space-x-3 mb-8"
        >
          <span>Book a meet</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Email Fallback */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center space-x-3 mb-16 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase"
        >
          <span>Or Email</span>
          <Mail className="w-3.5 h-3.5" />
          <a href="mailto:contact@sellixahq.com" className="text-[#ffff00] hover:text-white transition-colors lowercase tracking-normal text-[13px] font-sans font-medium">
            contact@sellixahq.com
          </a>
        </motion.div>

        {/* Bottom Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[#555555] font-mono text-sm md:text-base tracking-[0.1em]"
        >
          // 15 minutes. zero pressure. straight to fit.
        </motion.p>

      </div>

      {/* Curve at the bottom of the section pointing downwards into the yellow Calendly section */}
      <div className="absolute bottom-[-1px] left-0 w-full z-20 pointer-events-none rotate-180">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>
    </section>
  );
}
