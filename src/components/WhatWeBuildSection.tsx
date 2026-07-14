"use client";

import { motion } from "framer-motion";

export function WhatWeBuildSection() {
  return (
    <section id="build" className="w-full flex justify-center py-16 md:py-20 bg-[#050505] relative z-20">
      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">IV</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            What we build for you
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-light leading-[1.1] mb-10 md:mb-14">
          Courses, materials &<br />
          <span className="text-[#FACC15] italic">branded themes.</span>
        </h2>

        {/* Cards Container */}
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* CARD 1: Digital Material */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full rounded-[32px] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-between relative overflow-hidden group"
          >
            {/* Corner Decorative Brackets */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20"></div>
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#FACC15]/40"></div>

            <div className="w-full flex-grow flex items-center justify-center py-8">
              {/* Ebook Mockup */}
              <div className="w-56 h-72 rounded-xl bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-white/10 shadow-[0_0_50px_rgba(250,204,21,0.08)] group-hover:shadow-[0_0_60px_rgba(250,204,21,0.15)] transition-shadow duration-500 flex flex-col p-6 relative">
                {/* Left yellow binding */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FACC15] rounded-l-xl"></div>
                
                <div className="text-[#FACC15] font-mono text-[8px] tracking-[0.25em] uppercase mb-auto">
                  01 - Digital Material
                </div>
                
                <div className="mt-auto flex flex-col">
                  <div className="text-white font-serif text-2xl md:text-3xl mb-2 font-light">The Trader's Edge</div>
                  <div className="text-white/40 font-serif italic text-sm mb-8">A Market Psychology Playbook</div>
                  <div className="text-[#FACC15] font-mono text-[9px] tracking-widest">by @yourhandle</div>
                </div>
              </div>
            </div>

            {/* Bottom Labels */}
            <div className="w-full flex justify-between text-white/30 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] mt-8">
              <span>Ebooks · PDFs</span>
              <span className="hidden sm:inline">Templates</span>
              <span>Your theme</span>
            </div>
          </motion.div>


          {/* CARD 2: Course Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-[1.3] w-full rounded-[32px] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md p-6 md:p-8 flex flex-col relative overflow-hidden group"
          >
            {/* Corner Decorative Brackets */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#FACC15]/40"></div>
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#FACC15]/40"></div>

            <div className="w-full flex-grow flex items-center justify-center py-4">
              {/* Browser Mockup */}
              <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#0C0C0C] overflow-hidden flex flex-col shadow-2xl">
                {/* Browser Top Bar */}
                <div className="h-10 border-b border-white/5 bg-[#111] flex items-center px-4 relative">
                  <div className="flex gap-1.5 absolute left-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="mx-auto text-white/20 font-mono text-[9px] tracking-wider">
                    yourhandle.sellixa.co
                  </div>
                </div>
                
                {/* Module Content */}
                <div className="p-5 md:p-8 flex flex-col">
                  <div className="text-[#FACC15] font-mono text-[8px] tracking-[0.25em] uppercase mb-4">
                    Module 03 / 08 · Your Theme
                  </div>
                  <div className="text-white font-serif text-2xl md:text-3xl mb-3 font-light">
                    Risk-Reward Framework
                  </div>
                  <div className="text-white/40 font-mono text-[9px] tracking-widest mb-8">
                    12 lessons · 2h 14m
                  </div>

                  <div className="h-[1px] w-full bg-white/5 mb-6"></div>

                  {/* Lessons List */}
                  <div className="flex flex-col gap-1 md:gap-2">
                    
                    <div className="flex items-center gap-4 text-white/60 font-sans text-xs md:text-sm py-1.5">
                      <span className="text-[#FACC15] text-[10px]">✓</span>
                      <span>The 1% Rule, Rewritten</span>
                    </div>
                    
                    {/* Active Lesson */}
                    <div className="flex items-center justify-between border border-[#FACC15]/20 bg-[#FACC15]/[0.03] rounded-lg p-2.5 my-1.5">
                      <div className="flex items-center gap-4 text-white font-sans text-xs md:text-sm">
                        <span className="text-[#FACC15] text-xs">▶</span>
                        <span>Asymmetric Bets</span>
                      </div>
                      <div className="bg-[#FACC15] text-black font-mono text-[8px] font-bold px-2 py-1 rounded">
                        NOW
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-white/40 font-sans text-xs md:text-sm py-1.5">
                      <span className="w-3 text-center">·</span>
                      <span>Drawdown Recovery</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Labels */}
            <div className="w-full flex justify-between text-white/30 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] mt-8">
              <span>Courses · Cohorts</span>
              <span className="hidden sm:inline">Storefront</span>
              <span>Hosted for you</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
