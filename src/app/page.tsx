"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyText } from "@/components/GooeyText";
import Image from "next/image"; // In case we need it, though logo is text

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [phase, setPhase] = useState<"morphing" | "paused" | "transition" | "main">("morphing");

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleComplete = useCallback(() => {
    setPhase("paused");
    setTimeout(() => {
      setPhase("transition");
      setTimeout(() => {
        setPhase("main");
      }, 1000); // 1s for transition animation
    }, 500); // 0.5s pause on SELLIXA
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Intro Backgrounds (Hidden once transition completes) */}
      <AnimatePresence>
        {phase !== "main" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            {/* Diagonal Moving Grid */}
            <div 
              className="absolute z-0 pointer-events-none inset-0"
              style={{
                backgroundSize: '40px 40px',
                backgroundImage: 'linear-gradient(to right, rgba(244,180,0,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,180,0,0.4) 1px, transparent 1px)',
                animation: 'moveGridSmall 8s linear infinite',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black Paint Wipe Transition */}
      <motion.div
        initial={{ y: "-100%", top: "-200px" }}
        animate={{ y: phase === "transition" || phase === "main" ? "0%" : "-100%" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed left-0 w-full h-[120vh] bg-bg-primary z-30"
      >
        {/* Irregular Paint Drip Edge */}
        <div className="absolute top-full left-0 w-full h-[200px] bg-repeat-x"
             style={{ 
               backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 200" fill="%230B0B0B" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 L1200,0 L1200,20 Q1150,120 1100,30 Q1050,-10 1000,50 Q950,150 900,40 Q850,0 800,80 Q750,180 700,50 Q650,-20 600,60 Q550,160 500,40 Q450,-10 400,90 Q350,190 300,50 Q250,10 200,70 Q150,150 100,20 Q50,-20 0,60 Z"/></svg>')`,
               backgroundSize: '1200px 100%'
             }}
        />
      </motion.div>

      {/* Intro Sequence Text */}
      {phase === "morphing" && (
        <div className="absolute z-40 w-full h-full flex items-center justify-center pointer-events-none">
          <GooeyText 
            texts={["MONETIZE", "YOUR", "AUDIENCE", "SELLIXA"]} 
            morphTime={0.8}
            cooldownTime={0.3}
            className="w-full h-full flex items-center justify-center"
            onComplete={handleComplete}
          />
        </div>
      )}

      {/* SELLIXA Moving Logo (Animated Manually for Smoothness) */}
      <AnimatePresence>
        {(phase === "paused" || phase === "transition" || phase === "main") && (
          <motion.div
            initial={false}
            animate={{
              top: phase === "transition" || phase === "main" ? "32px" : "50%",
              left: phase === "transition" || phase === "main" ? "32px" : "50%",
              x: phase === "transition" || phase === "main" ? "0%" : "-50%",
              y: phase === "transition" || phase === "main" ? "0%" : "-50%",
              scale: phase === "transition" || phase === "main" ? 0.2 : 1,
              color: phase === "transition" || phase === "main" ? "#FFFFFF" : "#000000"
            }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed z-50 text-[clamp(4rem,10vw,9rem)] font-heading font-bold tracking-tight select-none origin-top-left flex flex-col"
          >
            <span>SELLIXA</span>
            <AnimatePresence>
              {phase === "main" && (
                <motion.span 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[0.2em] text-text-muted font-normal mt-[-0.2em] ml-2"
                >
                  STUDIO
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SITE CONTENT (Revealed after transition) */}
      <AnimatePresence>
        {phase === "main" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 z-40 flex flex-col text-text-primary overflow-y-auto"
          >
            {/* Dark background radial glow & grid */}
            <div className="absolute inset-0 bg-bg-primary z-[-2]"></div>
            <div 
              className="absolute inset-0 bg-grid z-[-1] opacity-20"
              style={{ animation: 'moveGrid 15s linear infinite' }}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.1)_0%,transparent_60%)] z-[-1]"></div>

            {/* Navbar Area */}
            <header className="w-full px-8 pt-8 pb-4 flex justify-between items-center">
              
              {/* Spacer for fixed logo */}
              <div className="w-[150px] flex flex-col justify-center" />
              
              <nav className="flex gap-8 text-sm font-medium text-text-muted">
                <a href="#" className="hover:text-text-primary transition-colors">How it works</a>
                <a href="#" className="hover:text-text-primary transition-colors">Split</a>
                <a href="#" className="hover:text-text-primary transition-colors">Creators</a>
                <a href="#" className="hover:text-text-primary transition-colors">FAQ</a>
                <a href="#" className="hover:text-text-primary transition-colors">Book a meet</a>
              </nav>

              <button className="bg-accent hover:bg-accent-hover text-black px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300">
                Apply
              </button>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
              
              <div className="mb-8 px-4 py-1.5 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md text-xs font-mono text-text-muted tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Onboarding creators — Q2 2026
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-normal leading-tight max-w-4xl tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                Monetize your <br/>
                <span className="font-heading italic text-accent pr-4">audience.</span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-text-muted max-w-2xl font-light">
                We build your <strong className="text-text-primary font-medium">courses, digital products & branded theme</strong> — end-to-end. You keep <strong className="text-accent font-medium">75%</strong>. We only earn when you do.
              </p>

              <div className="flex gap-6 mt-12">
                <button className="bg-accent hover:bg-accent-hover text-black px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(244,180,0,0.3)]">
                  Book a meet &rarr;
                </button>
                <button className="px-8 py-3.5 rounded-full font-semibold border border-glass-border hover:bg-white/5 transition-all duration-300">
                  See how it works
                </button>
              </div>
            </main>

            {/* Status Bar */}
            <footer className="w-full px-8 py-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-text-muted uppercase tracking-wider">
              <div className="flex gap-12">
                <span className="text-accent">01 · Intro</span>
                <span className="hover:text-text-primary cursor-pointer transition-colors">02 · Build</span>
                <span className="hover:text-text-primary cursor-pointer transition-colors">03 · Reviews</span>
                <span className="hover:text-text-primary cursor-pointer transition-colors">04 · Growth</span>
                <span className="hover:text-text-primary cursor-pointer transition-colors">05 · Launch</span>
              </div>
              <div className="flex gap-4">
                <span>Scroll ↔ Time</span>
                <span className="text-accent">0.01s</span>
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
