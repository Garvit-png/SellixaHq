"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export function TheDealSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const creatorPercent = useMotionValue(0);
  const sellixaPercent = useMotionValue(100);

  const roundedCreator = useTransform(creatorPercent, (latest) => Math.round(latest));
  const roundedSellixa = useTransform(sellixaPercent, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(creatorPercent, 70, { duration: 2.5, ease: [0.22, 1, 0.36, 1] }); // Smooth easeOut cubic
      animate(sellixaPercent, 30, { duration: 2.5, ease: [0.22, 1, 0.36, 1] });
    }
  }, [isInView, creatorPercent, sellixaPercent]);

  return (
    <section id="deal" className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden bg-transparent">
      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-12">
          <span className="text-[#D4AF37] font-serif italic text-xl">VIII</span>
          <div className="w-12 h-px bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-semibold">The Deal</span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-thin leading-[1.05] tracking-tight text-center mb-6">
          <span className="text-white/90">We only win </span>
          <span className="italic text-[#D4AF37] font-light">when you win.</span>
        </h2>
        
        <p className="text-[#A3A3A3] text-sm md:text-base font-light max-w-2xl text-center leading-relaxed mb-24">
          No retainers. No hourly fees. No setup costs. We take <strong className="text-[#D4AF37] font-medium">30%</strong> commission —<br className="hidden md:block" /> only on actual sales.
        </p>

        {/* The Deal Box */}
        <div 
          ref={ref}
          className="relative w-full max-w-5xl bg-[#0d0d0d]/40 backdrop-blur-xl border border-[#D4AF37]/30 rounded-[32px] p-6 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_0_30px_rgba(212,175,55,0.05)] overflow-hidden"
        >
          {/* Subtle animated gradient sweep on the main box border */}
          <div className="absolute inset-0 w-full h-full rounded-[32px] border border-transparent [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [mask-clip:padding-box,border-box] [mask-composite:exclude] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#D4AF37] before:to-transparent before:w-[200%] before:animate-[spin_4s_linear_infinite]"></div>
          {/* Subtle glow behind the box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

          {/* Progress Bar Container */}
          <div className="w-full flex items-end gap-3 h-[130px] md:h-[150px] mb-10 rounded-[24px]">
            {/* Creator (Yellow) Bar */}
            <motion.div 
              className="relative h-[120px] md:h-[140px] bg-gradient-to-r from-[#FFF080] via-[#FACC15] to-[#EAB308] flex flex-col justify-center items-center rounded-[20px] shadow-[0_0_50px_rgba(250,204,21,0.4)] overflow-hidden border border-[#FFF080]/60 cursor-pointer"
              initial={{ width: "0%" }}
              animate={{ width: isInView ? "70%" : "0%" }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], y: { duration: 0.2, ease: "easeOut" }, scale: { duration: 0.2, ease: "easeOut" } }}
            >
              {/* Continuous Shine Effect */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]"
                initial={{ left: "-150%" }}
                animate={{ left: "150%" }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  ease: "easeInOut" 
                }}
              />

              <div className="flex items-baseline px-4 relative z-10">
                <motion.span className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-black tracking-tight whitespace-nowrap">
                  {roundedCreator}
                </motion.span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-black tracking-tight">%</span>
              </div>
              <span className="text-black/70 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-2 relative z-10">
                Creator
              </span>
            </motion.div>

            {/* Sellixa (Dark) Bar */}
            <motion.div 
              className="h-[120px] md:h-[140px] bg-[#222222] flex flex-col justify-center items-center rounded-[20px] border border-white/5 overflow-hidden cursor-pointer"
              initial={{ width: "100%" }}
              animate={{ width: isInView ? "30%" : "100%" }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], y: { duration: 0.2, ease: "easeOut" }, scale: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="flex items-baseline px-4">
                <motion.span className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight whitespace-nowrap">
                  {roundedSellixa}
                </motion.span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight">%</span>
              </div>
              <span className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
                Sellixa
              </span>
            </motion.div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-[#111111]/80 rounded-[16px] p-5 flex items-start gap-4 border border-white/[0.03]">
              <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center flex-shrink-0 text-[#D4AF37] text-xs font-bold font-mono">
                $0
              </div>
              <div>
                <h4 className="text-white/90 text-sm font-semibold mb-1">Zero upfront</h4>
                <p className="text-[#777777] text-xs font-light">No risk, no invoices.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#111111]/80 rounded-[16px] p-5 flex items-start gap-4 border border-white/[0.03]">
              <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div>
                <h4 className="text-white/90 text-sm font-semibold mb-1">Your brand</h4>
                <p className="text-[#777777] text-xs font-light">Ships under your name.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#111111]/80 rounded-[16px] p-5 flex items-start gap-4 border border-white/[0.03]">
              <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white/90 text-sm font-semibold mb-1">Pay on success</h4>
                <p className="text-[#777777] text-xs font-light">Only on actual sales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
