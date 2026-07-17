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
    <section id="deal" className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 md:py-32 overflow-hidden bg-[#ffff00]">
      {/* Paint spill transition from the black PortfolioSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#000000] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-4 md:px-12 relative z-10 flex flex-col items-center mt-12 md:mt-24">
        
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-black text-xs md:text-sm font-mono tracking-[0.2em] uppercase font-bold">The Deal</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light leading-[1.05] tracking-tight text-center mb-6">
          <span className="text-black drop-shadow-sm">We only win </span>
          <span className="italic text-black font-bold drop-shadow-sm">when you win.</span>
        </h2>
        
        <p className="text-black/80 text-sm md:text-base font-medium max-w-2xl text-center leading-relaxed mb-24">
          No retainers. No hourly fees. No setup costs. We take <strong className="text-black font-bold">30%</strong> commission —<br className="hidden md:block" /> only on actual sales.
        </p>

        {/* The Deal Box */}
        <div 
          ref={ref}
          className="relative w-full max-w-5xl bg-black/5 backdrop-blur-xl border border-black/10 rounded-[24px] md:rounded-[32px] p-5 md:p-12 shadow-xl overflow-hidden"
        >
          {/* Subtle animated gradient sweep on the main box border */}
          <div className="absolute inset-0 w-full h-full rounded-[32px] border-2 border-transparent [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [mask-clip:padding-box,border-box] [mask-composite:exclude] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/20 before:to-transparent before:w-[200%] before:animate-[spin_4s_linear_infinite]"></div>
          {/* Subtle glow behind the box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-black/5 hidden md:block blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

          {/* Progress Bar Container */}
          <div className="w-full flex items-end gap-3 h-[130px] md:h-[150px] mb-10 rounded-[24px]">
            {/* Creator (Black) Bar */}
            <motion.div 
              className="relative h-[100px] md:h-[140px] bg-black flex flex-col justify-center items-center rounded-[16px] md:rounded-[20px] shadow-lg overflow-hidden cursor-pointer"
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
                <motion.span className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight whitespace-nowrap">
                  {roundedCreator}
                </motion.span>
                <span className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight">%</span>
              </div>
              <span className="text-white/70 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-2 relative z-10">
                Creator
              </span>
            </motion.div>

            {/* Sellixa (Transparent) Bar */}
            <motion.div 
              className="h-[100px] md:h-[140px] bg-black/10 flex flex-col justify-center items-center rounded-[16px] md:rounded-[20px] border border-black/20 overflow-hidden cursor-pointer"
              initial={{ width: "100%" }}
              animate={{ width: isInView ? "30%" : "100%" }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], y: { duration: 0.2, ease: "easeOut" }, scale: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="flex items-baseline px-4">
                <motion.span className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-black tracking-tight whitespace-nowrap">
                  {roundedSellixa}
                </motion.span>
                <span className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-black tracking-tight">%</span>
              </div>
              <span className="text-black/60 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
                Sellixa
              </span>
            </motion.div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-black/5 rounded-[16px] p-5 flex items-start gap-4 border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-black/10 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-[#ffff00] text-xs font-bold font-mono">
                $0
              </div>
              <div>
                <h4 className="text-black text-sm font-bold mb-1">Zero upfront</h4>
                <p className="text-black/70 text-xs font-medium">No risk, no invoices.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/5 rounded-[16px] p-5 flex items-start gap-4 border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-black/10 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div>
                <h4 className="text-black text-sm font-bold mb-1">Your brand</h4>
                <p className="text-black/70 text-xs font-medium">Ships under your name.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/5 rounded-[16px] p-5 flex items-start gap-4 border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-black/10 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-black text-sm font-bold mb-1">Pay on success</h4>
                <p className="text-black/70 text-xs font-medium">Only on actual sales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
