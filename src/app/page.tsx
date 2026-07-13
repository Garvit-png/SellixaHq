"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyText } from "@/components/GooeyText";
import { GlowyWaves } from "@/components/GlowyWaves";
import { BuildSection } from "@/components/BuildSection";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [phase, setPhase] = useState<"morphing" | "paused" | "transition" | "main">("morphing");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        <div className="fixed z-40 w-full h-full flex items-center justify-center pointer-events-none">
          <GooeyText 
            texts={["MONETIZE", "YOUR", "AUDIENCE", "SELLIXA"]} 
            morphTime={0.8}
            cooldownTime={0.3}
            className="w-full h-full flex items-center justify-center"
            onComplete={handleComplete}
          />
        </div>
      )}

      {/* SELLIXA Moving Logo — Single fixed element, scroll-aware */}
      <AnimatePresence>
        {(phase === "paused" || phase === "transition" || phase === "main") && (
          <motion.div
            initial={false}
            animate={{
              top: phase === "paused" ? "50%" : (isMobile ? "24px" : "32px"),
              left: phase === "paused" ? "50%" : (isMobile ? "20px" : "32px"),
              x: phase === "paused" ? "-50%" : "0%",
              y: phase === "paused" ? "-50%" : scrolled ? "-120%" : "0%",
              scale: phase === "paused" ? 1 : (isMobile ? 0.35 : 0.2),
              color: phase === "paused" ? "#000000" : "#FFFFFF",
              opacity: scrolled && phase === "main" ? 0 : 1,
            }}
            transition={{ duration: phase === "main" ? 0.4 : 1.4, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="fixed z-50 text-[clamp(4rem,10vw,9rem)] font-heading font-bold tracking-tight select-none origin-top-left flex flex-col pointer-events-none"
          >
            <span>SELLIXA</span>
            {(phase === "transition" || phase === "main") && (
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[0.2em] text-text-muted font-normal mt-[-0.2em] ml-2"
              >
                STUDIO
              </motion.span>
            )}
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
            className="absolute inset-0 z-40 flex flex-col text-text-primary overflow-y-auto scroll-smooth"
            ref={scrollRef}
            onScroll={(e) => {
              const st = (e.target as HTMLDivElement).scrollTop;
              setScrolled(st > 60);
            }}
          >
            {/* HERO SECTION (100vh) */}
            <div id="intro" className="relative min-h-screen flex flex-col w-full">
              {/* Dark background with glowy waves */}
              <div className="absolute inset-0 bg-bg-primary z-[-2]"></div>
              <GlowyWaves />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.06)_0%,transparent_60%)] z-[-1]"></div>

            {/* Navbar Area */}
            <header className="w-full px-4 md:px-8 pt-6 md:pt-8 pb-4 flex justify-between items-center relative z-50">
               
               {/* Spacer for fixed logo */}
               <div className="w-[100px] md:w-[150px]" />
              
              <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-text-muted relative z-50">
                <a href="#" className="cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:px-5 hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]">How it works</a>
                <a href="#" className="cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:px-5 hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]">Split</a>
                <a href="#" className="cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:px-5 hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]">Creators</a>
                <a href="#" className="cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:px-5 hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]">FAQ</a>
                <a href="#" className="cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:px-5 hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]">Book a meet</a>
              </nav>

              <button className="cursor-pointer relative z-50 bg-accent hover:bg-accent-hover hover:scale-105 text-black px-5 md:px-6 py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-300">
                Apply
              </button>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
              
              <div className="mb-6 md:mb-8 px-4 py-1.5 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md text-[10px] md:text-xs font-mono text-text-muted tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Onboarding creators — Q2 2026
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-heading font-light leading-[1.05] max-w-4xl tracking-tight text-text-primary">
                Monetize your <span className="text-accent italic font-light tracking-tight">audience.</span>
              </h1>

              <p className="mt-10 md:mt-12 text-base sm:text-lg md:text-xl text-text-muted max-w-2xl font-light">
                We build your <strong className="text-text-primary font-medium">courses, digital products & branded theme</strong> — end-to-end. You keep <strong className="text-accent font-medium">75%</strong>. We only earn when you do.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12 md:mt-16 w-full">
                <button className="cursor-pointer bg-accent hover:bg-accent-hover hover:scale-105 text-black px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(244,180,0,0.3)] hover:shadow-[0_0_40px_rgba(244,180,0,0.5)]">
                  Book a meet {"→"}
                </button>
                <button className="cursor-pointer px-8 py-3.5 rounded-full font-semibold border border-glass-border hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  See how it works
                </button>
              </div>
            </main>
            </div>

            {/* BUILD SECTION (100vh) */}
            <BuildSection />

          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Gold Navigation Strip (Sticky - Outside of Transformed Container for True Sticky Behavior) */}
      <AnimatePresence>
        {phase === "main" && (
          <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              boxShadow: ["0px -1px 5px rgba(244,180,0,0)", "0px -2px 15px rgba(244,180,0,0.15)", "0px -1px 5px rgba(244,180,0,0)"]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.5 },
              y: { duration: 0.8, delay: 0.5 },
              boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="fixed bottom-0 left-0 z-50 w-full border-t border-accent/20 bg-accent/5 backdrop-blur-md py-2 overflow-hidden"
          >
            {/* Sweeping shine effect */}
            <motion.div 
              className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-accent/20 to-transparent -skew-x-12 z-0"
              animate={{ left: ["-50%", "150%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            
            <nav className="relative z-10 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest">
              {/* Active Section */}
              <a href="#intro" className="relative text-white transition-all cursor-pointer">
                01 · Intro
                <span className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-accent shadow-[0_0_8px_rgba(244,180,0,1)]"></span>
              </a>
              
              {/* Inactive Sections */}
              <a href="#build" className="text-accent/50 hover:text-white hover:scale-110 transition-all cursor-pointer">02 · Build</a>
              <a href="#reviews" className="text-accent/50 hover:text-white hover:scale-110 transition-all cursor-pointer">03 · Reviews</a>
              <a href="#growth" className="text-accent/50 hover:text-white hover:scale-110 transition-all cursor-pointer">04 · Growth</a>
              <a href="#launch" className="text-accent/50 hover:text-white hover:scale-110 transition-all cursor-pointer">05 · Launch</a>
            </nav>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
