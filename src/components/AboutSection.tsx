"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="w-full min-h-screen flex items-start justify-center pt-12 md:pt-24 pb-16 md:pb-24 bg-[#050505] relative z-20 overflow-hidden group">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
        style={{ backgroundImage: "url('/group.jpg')" }}
      ></div>
      
      {/* Gradients to fade into surrounding sections and make text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
      
      {/* Subtle Yellow Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-[#FACC15]/5 hidden md:block blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10 min-h-[65vh] md:min-h-[75vh] justify-between">
        
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">II</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
            <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              About Sellixa
            </span>
          </div>

          {/* Mission & Vision Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-3xl"
          >
            <h2 className="text-4xl md:text-7xl text-white font-serif font-light leading-[1.1] mb-8 drop-shadow-2xl">
              We turn influence into<br />
              <span className="text-[#FACC15] italic">empires.</span>
            </h2>
          </motion.div>
        </div>
          
        {/* Sub Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-4 md:py-6 drop-shadow-2xl max-w-3xl mt-12 md:mt-auto"
        >
          <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed mb-6">
            Most creators are leaving money on the table. You spend years building an audience, but monetizing them is often a chaotic process of stitching together different software, hiring expensive freelancers, and dealing with support tickets.
          </p>
          <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed">
            Our mission is to bridge the gap between content and commerce. We build, host, and scale your digital products, so you can focus entirely on what you do best: creating content and engaging with your community.
          </p>
          
          <div className="mt-8 flex items-center gap-4 pt-8">
            <span className="text-[#FACC15] font-mono text-[10px] tracking-[0.2em] uppercase drop-shadow-xl font-bold">Built by creators, for creators.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
