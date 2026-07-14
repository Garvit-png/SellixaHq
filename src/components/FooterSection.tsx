"use client";

import { Mail, Apple, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#050505] flex flex-col items-center justify-center z-20 relative overflow-hidden pt-12">
      
      {/* Top: Dark Footer Bar (Style of Photo 1) */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 md:px-8 pb-16 relative z-10">
        
        {/* Left: Logo & Brand */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FDE047] via-[#FACC15] to-[#EAB308] shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center">
            <span className="text-black font-sans font-bold text-[6px] tracking-[0.15em] uppercase">
              Sellixa
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-sans font-bold text-sm tracking-wide">Sellixa</span>
            <span className="text-[#555555] font-mono text-[9px] uppercase tracking-[0.1em]">Creator commerce, handled.</span>
          </div>
        </div>

        {/* Middle: Copyright */}
        <div className="text-[#555555] font-mono text-[10px] uppercase tracking-[0.05em] text-center">
          © 2026 Sellixa. Built for creators who'd rather create.
        </div>

        {/* Right: Socials & Legal */}
        <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-[#555555] hover:text-[#FACC15] transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs tracking-widest uppercase">Gmail</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 text-[#555555] hover:text-[#FACC15] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-mono text-xs tracking-widest uppercase">Instagram</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[#555555]/50 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>

      {/* Bottom: Massive Faint Background Text */}
      <div className="w-full flex justify-center pointer-events-none select-none z-0 opacity-[0.08] leading-none mt-4 pb-4">
        <h1 className="text-[16vw] font-sans font-black text-[#FACC15] whitespace-nowrap tracking-[0.05em]">
          SELLIXA
        </h1>
      </div>

    </footer>
  );
}
