"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ShowcasePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const parallaxFgRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Hero Animation (Reveal on Load)
    const heroTl = gsap.timeline();
    heroTl.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2,
    });
    
    heroTl.from(".hero-shape", {
      scale: 0.8,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
      ease: "power3.out",
    }, "-=1");

    // 2. Horizontal Scroll Section (Pinned)
    const horizontalScrollAmount = horizontalContentRef.current?.scrollWidth! - window.innerWidth;
    
    gsap.to(horizontalContentRef.current, {
      x: -horizontalScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${horizontalScrollAmount}`, // Scroll distance equals content width
        invalidateOnRefresh: true,
      }
    });

    // 3. Parallax Section
    gsap.to(parallaxBgRef.current, {
      yPercent: 30, // Moves slower
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(parallaxFgRef.current, {
      yPercent: -20, // Moves faster in opposite direction
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-serif italic text-white tracking-widest">SELLIXA<span className="text-[#D4AF37]">.</span></div>
          <div className="flex gap-8 text-xs tracking-widest uppercase font-mono text-white/70">
            <a href="#hero" className="hover:text-white transition-colors cursor-pointer">Start</a>
            <a href="#horizontal" className="hover:text-white transition-colors cursor-pointer">Explore</a>
            <a href="#parallax" className="hover:text-white transition-colors cursor-pointer">Depth</a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Reveal Section */}
      <section id="hero" ref={heroRef} className="relative w-full h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] z-0"></div>
        
        <div className="z-10 text-center max-w-5xl">
          <div className="overflow-hidden mb-4">
            <p className="hero-text text-[#D4AF37] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">Scroll-Based Motion Design</p>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-text text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.9] tracking-tighter">
              Motion <span className="italic text-white/50">in</span> Flow.
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero-text text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto">
              A premium showcase exploring the intersection of smooth inertial scrolling and high-fidelity GSAP animations.
            </p>
          </div>
        </div>

        {/* Abstract Shape */}
        <div className="hero-shape absolute bottom-[10%] w-[300px] h-[300px] border border-white/10 rounded-[40px] rotate-12 backdrop-blur-3xl bg-white/[0.01] flex items-center justify-center -z-10 overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.1)]">
           <div className="w-full h-full bg-gradient-to-tr from-transparent via-[#D4AF37]/10 to-transparent"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          <span className="text-[9px] font-mono tracking-widest uppercase">Scroll</span>
        </div>
      </section>


      {/* 2. Pinned Horizontal Section */}
      <section id="horizontal" ref={horizontalSectionRef} className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden flex items-center">
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[20vw] font-serif font-bold text-white/[0.02] pointer-events-none z-0">
          HORIZONTAL
        </div>

        <div ref={horizontalContentRef} className="flex gap-12 px-[10vw] h-[60vh] z-10 w-max">
          
          {/* Card 1 */}
          <div className="w-[80vw] md:w-[600px] h-full rounded-3xl bg-[#111111] border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[#D4AF37] font-mono text-[10px] tracking-widest uppercase mb-4">01 / Concept</div>
              <h3 className="text-4xl md:text-5xl font-serif font-light mb-4">Space & Time</h3>
              <p className="text-white/50 font-light text-sm md:text-base max-w-sm">Pinning a section forces the user to pause their vertical momentum and explore laterally, creating a distinct narrative beat.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[80vw] md:w-[600px] h-full rounded-3xl bg-[#111111] border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[#D4AF37] font-mono text-[10px] tracking-widest uppercase mb-4">02 / Rhythm</div>
              <h3 className="text-4xl md:text-5xl font-serif font-light mb-4">Scrubbed Motion</h3>
              <p className="text-white/50 font-light text-sm md:text-base max-w-sm">Linking the translation perfectly to the scroll position removes automated easing, putting the user in direct physical control of the animation.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[80vw] md:w-[600px] h-full rounded-3xl bg-[#111111] border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[#D4AF37] font-mono text-[10px] tracking-widest uppercase mb-4">03 / Friction</div>
              <h3 className="text-4xl md:text-5xl font-serif font-light mb-4">Inertia</h3>
              <p className="text-white/50 font-light text-sm md:text-base max-w-sm">Combined with Lenis, the scrubbed timeline gains weight and momentum, making the digital interface feel physically grounded.</p>
            </div>
          </div>

           {/* Card 4 (End of horizontal section) */}
           <div className="w-[30vw] md:w-[400px] h-full flex flex-col items-center justify-center relative">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
             </div>
             <p className="font-mono text-xs text-white/40 uppercase tracking-widest">Continue Scrolling</p>
          </div>

        </div>
      </section>

      {/* Spacer to give breathing room before parallax */}
      <div className="h-[30vh] w-full bg-[#050505]"></div>

      {/* 3. Parallax Section */}
      <section id="parallax" ref={parallaxRef} className="relative w-full h-[150vh] overflow-hidden bg-[#000]">
        
        {/* Background Layer (Moves slower) */}
        <div 
          ref={parallaxBgRef} 
          className="absolute inset-0 w-full h-[130%] -top-[15%] bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 will-change-transform"
        ></div>

        {/* Foreground Content (Moves faster) */}
        <div ref={parallaxFgRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 will-change-transform mt-32">
          <div className="w-24 h-24 rounded-full bg-[#D4AF37] blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 max-w-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-12 md:p-24 rounded-3xl shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-serif font-light mb-6">
              Create <span className="italic text-[#D4AF37]">Depth.</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed">
              By decoupling the scroll speed of the background and foreground, we trick the brain into perceiving a three-dimensional space on a flat screen. 
            </p>
            <div className="mt-12 flex justify-center">
               <button className="px-8 py-4 bg-white text-black font-sans font-medium text-sm tracking-wide rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">
                 Explore Services
               </button>
            </div>
          </div>
        </div>

      </section>

      {/* Footer minimal */}
      <footer className="w-full py-12 bg-[#050505] border-t border-white/5 flex justify-center items-center">
         <p className="text-white/30 font-mono text-xs tracking-widest uppercase">Built with GSAP + Lenis</p>
      </footer>

    </div>
  );
}
