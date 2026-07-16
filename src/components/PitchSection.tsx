"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export function PitchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  

  return (
    <section id="pitch" ref={sectionRef} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 py-24 overflow-hidden bg-black">
      {/* Paint spill transition from the yellow WatchHimGrowSection */}
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

      <div className="max-w-7xl mx-auto w-full flex flex-col items-start relative z-10 mt-12 md:mt-24">
        
        {/* Main Content Box */}
        <div 
          className="bg-black/90 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-[0_0_30px_rgba(255,255,0,0.15)] border-2 border-[#ffff00] max-w-5xl"
        >
          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-16 font-thin">
            <span className="block text-white">You have the <span className="font-bold text-[#ffff00]">audience.</span></span>
            <span className="block text-white">You have the <span className="font-bold text-[#ffff00]">knowledge.</span></span>
            <span className="block text-white/60 italic mt-2">You just don't sell them<br/>anything.</span>
          </h2>

          {/* Two Column Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
              Most mid-size creators sit on a goldmine of attention — but never monetize it. Because a real product means a <span className="font-bold text-[#ffff00]">course</span>, <span className="font-bold text-[#ffff00]">digital materials</span>, a <span className="font-bold text-[#ffff00]">branded storefront</span>, launch assets, funnels... a full studio's worth of work.
            </p>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
              Sellixa is that studio. We design the product, the materials, and the theme — ship it under your name, and turn your audience into actual revenue.
            </p>
          </div>
        </div>

      </div>
      
      {/* Scroll Spacer */}
      <div className="h-[15vh] md:h-[20vh] w-full relative z-10"></div>

      {/* Principle Quote Section */}
      <div 
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full pb-24 relative z-10"
      >
        <div className="bg-black/90 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-[0_0_30px_rgba(255,255,0,0.15)] border-2 border-[#ffff00] w-full flex flex-col items-center">
          {/* Quote mark */}
          <span className="text-white text-6xl md:text-7xl font-serif font-black leading-none opacity-90 mb-8">❞</span>
          
          {/* Quote Text */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-white mb-12">
            “We design the product, the materials, and the theme.<br/>
            You keep your audience and <span className="font-bold text-[#ffff00]">75% of every sale.</span>”
          </h3>

          {/* Divider */}
          <div className="flex items-center space-x-6">
            <div className="w-12 md:w-20 h-px bg-white/50"></div>
            <span className="text-white/50 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em]">Sellixa Founding Principle</span>
            <div className="w-12 md:w-20 h-px bg-white/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
