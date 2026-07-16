"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FloatingParallaxGallery() {
  return (
    <div className="relative w-full py-24 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Background text to create depth behind images */}
      <h2 
        className="absolute z-0 text-[15vw] font-serif font-black text-white/5 whitespace-nowrap pointer-events-none select-none"
      >
        AESTHETIC
      </h2>

      {/* Center Text */}
      <div className="relative z-30 flex flex-col items-center pointer-events-none mix-blend-difference mb-16">
        <h3 className="text-white text-5xl md:text-7xl font-serif italic mb-4">
          Visual <span className="font-sans font-bold not-italic">Gravity</span>
        </h3>
        <p className="text-white/70 font-light tracking-widest uppercase text-sm">
          Motion creating emotion
        </p>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Static Image 1 */}
        <div className="w-full md:w-1/3 max-w-[300px] aspect-[4/5] overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Abstract 1"
            className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        </div>

        {/* Static Image 2 */}
        <div className="w-full md:w-1/4 max-w-[250px] aspect-square overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:-translate-y-12">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
            alt="Abstract 2"
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        </div>

        {/* Static Image 3 */}
        <div className="w-full md:w-1/4 max-w-[200px] aspect-[3/4] overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:translate-y-8">
          <img
            src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2670&auto=format&fit=crop"
            alt="Abstract 3"
            className="w-full h-full object-cover grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
