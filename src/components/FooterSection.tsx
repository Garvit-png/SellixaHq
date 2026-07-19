"use client";
import { LazyVideo } from "@/components/ui/LazyVideo";

import { Mail, Apple, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#050505] flex flex-col items-center justify-center z-20 relative overflow-hidden pt-12">
      
      {/* Top: Dark Footer Bar (Style of Photo 1) */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 md:px-8 pb-16 relative z-10">
        
        {/* Left: Logo & Brand */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF] shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center">
            <span className="text-black font-sans font-bold text-[6px] tracking-[0.15em] uppercase">
              Sellixa
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#ffff00] font-sans font-bold text-sm tracking-wide">Sellixa</span>
            <span className="text-[#ffff00]/70 font-mono text-[9px] uppercase tracking-[0.1em]">Creator commerce, handled.</span>
          </div>
        </div>

        {/* Middle: Copyright */}
        <div className="text-[#ffff00]/60 font-mono text-[10px] uppercase tracking-[0.05em] text-center">
          © 2026 Sellixa. Built for creators who'd rather create.
        </div>

        {/* Right: Socials & Legal */}
        <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">
          <div className="flex items-center space-x-6">
            <a href="mailto:sellixahq@gmail.com" className="flex items-center space-x-2 text-[#ffff00]/80 hover:text-[#ffff00] transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs tracking-widest uppercase">Gmail</span>
            </a>
            
            <a href="https://www.instagram.com/sellixa._hq" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#ffff00]/80 hover:text-[#ffff00] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-mono text-xs tracking-widest uppercase">Instagram</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[#ffff00]/50 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-[#ffff00] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#ffff00] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>

      {/* Bottom: Massive Video Background with Yellow Text */}
      <div className="relative w-full flex justify-center items-center select-none z-0 mt-4 overflow-hidden py-8 md:py-16">
        {/* Background Video */}
        <LazyVideo 
          src="/cheeta.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 filter grayscale-[0.5]"
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
        
        {/* Yellow Overlay Text */}
        <h1 className="relative z-20 text-[16vw] font-sans font-light text-[#ffff00] whitespace-nowrap tracking-widest leading-none drop-shadow-[0_0_30px_rgba(255,255,0,0.5)] blur-[3px] opacity-90">
          SELLIXA
        </h1>
      </div>

    </footer>
  );
}
