"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">II</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            About Sellixa
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 w-full">
          {/* Mission & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1] mb-8">
              We turn influence into<br />
              <span className="text-[#FACC15] italic">empires.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              Most creators are leaving money on the table. You spend years building an audience, but monetizing them is often a chaotic process of stitching together different software, hiring expensive freelancers, and dealing with support tickets.
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Our mission is to bridge the gap between content and commerce. We build, host, and scale your digital products, so you can focus entirely on what you do best: creating content and engaging with your community.
            </p>
          </motion.div>

          {/* Founders */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="w-full rounded-[24px] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md p-8 flex items-center gap-6 group hover:border-[#FACC15]/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/10 overflow-hidden border border-white/10">
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FACC15] font-mono text-[9px] tracking-widest uppercase mb-1">Co-Founder & CEO</span>
                <span className="text-white font-serif text-2xl mb-1">Alex Carter</span>
                <span className="text-white/40 text-sm">Vision & Strategy</span>
              </div>
            </div>

            <div className="w-full rounded-[24px] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md p-8 flex items-center gap-6 group hover:border-[#FACC15]/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/10 overflow-hidden border border-white/10">
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FACC15] font-mono text-[9px] tracking-widest uppercase mb-1">Co-Founder & CTO</span>
                <span className="text-white font-serif text-2xl mb-1">Jordan Lee</span>
                <span className="text-white/40 text-sm">Product & Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
