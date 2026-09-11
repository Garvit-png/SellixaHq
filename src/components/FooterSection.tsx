"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

// ─── Crowd Canvas ─────────────────────────────────────────────────────────────
function CrowdCanvas({ src, rows = 15, cols = 7 }: { src: string; rows?: number; cols?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
    const randomIndex = (array: any[]) => (randomRange(0, array.length) | 0);
    const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
    const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

    const resetPeep = ({ stage, peep }: { stage: any; peep: any }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX: number, endX: number;
      if (direction === 1) { startX = -peep.width; endX = stage.width; peep.scaleX = 1; }
      else { startX = stage.width + peep.width; endX = 0; peep.scaleX = -1; }
      peep.x = startX; peep.y = startY; peep.anchorY = startY;
      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }: { peep: any; props: any }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10, yDuration = 0.25;
      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(peep, { duration: yDuration, repeat: xDuration / yDuration, yoyo: true, y: startY - 10 }, 0);
      return tl;
    };

    type Peep = {
      image: HTMLImageElement; rect: number[]; width: number; height: number;
      x: number; y: number; anchorY: number; scaleX: number; walk: any;
      setRect: (r: number[]) => void; render: (c: CanvasRenderingContext2D) => void;
    };

    const createPeep = ({ image, rect }: { image: HTMLImageElement; rect: number[] }): Peep => {
      const p: Peep = {
        image, rect: [], width: 0, height: 0, x: 0, y: 0, anchorY: 0, scaleX: 1, walk: null,
        setRect(r) { p.rect = r; p.width = r[2]; p.height = r[3]; },
        render(ctx) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.scale(p.scaleX, 1);
          ctx.drawImage(p.image, p.rect[0], p.rect[1], p.rect[2], p.rect[3], 0, 0, p.width, p.height);
          ctx.restore();
        },
      };
      p.setRect(rect);
      return p;
    };

    const img = document.createElement("img");
    const stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const createPeeps = () => {
      const { naturalWidth: w, naturalHeight: h } = img;
      const rw = w / rows, rh = h / cols;
      for (let i = 0; i < rows * cols; i++) {
        allPeeps.push(createPeep({ image: img, rect: [(i % rows) * rw, ((i / rows) | 0) * rh, rw, rh] }));
      }
    };

    const addPeepToCrowd = (): Peep => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = normalWalk({ peep, props: resetPeep({ peep, stage }) })
        .eventCallback("onComplete", () => { removePeepFromCrowd(peep); addPeepToCrowd(); });
      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => { removeItemFromArray(crowd, peep); availablePeeps.push(peep); };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((p) => p.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;
      crowd.forEach((p) => p.walk?.kill());
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      while (availablePeeps.length) addPeepToCrowd().walk.progress(Math.random());
    };

    img.onload = () => { createPeeps(); resize(); gsap.ticker.add(render); };
    img.src = src;

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(render);
      crowd.forEach((p) => p.walk?.kill());
    };
  }, [src, rows, cols]);

  return <canvas ref={canvasRef} className="absolute bottom-0 w-full h-full" />;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function FooterSection() {
  return (
    <footer className="w-full bg-[#050505] flex flex-col items-center justify-center z-20 relative overflow-hidden pt-4">

      {/* Top bar */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 md:px-8 pb-8 relative z-10">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center">
            <span className="text-black font-sans font-bold text-[6px] tracking-[0.15em] uppercase">Sellixa</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#ffff00] font-sans font-bold text-sm tracking-wide">Sellixa</span>
            <span className="text-[#ffff00]/70 font-mono text-[9px] uppercase tracking-[0.1em]">Creator commerce, handled.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[#ffff00]/60 font-mono text-[10px] uppercase tracking-[0.05em] text-center">
          © 2026 Sellixa. Built for creators who'd rather create.
        </div>

        {/* Socials & Legal */}
        <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">
          <div className="flex items-center space-x-6">
            <a href="mailto:sellixahq@gmail.com" className="flex items-center space-x-2 text-[#ffff00]/80 hover:text-[#ffff00] transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs tracking-widest uppercase">Gmail</span>
            </a>
            <a href="https://www.instagram.com/sellixa._hq" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#ffff00]/80 hover:text-[#ffff00] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="font-mono text-xs tracking-widest uppercase">Instagram</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-end">
            <a href="/privacy-policy" suppressHydrationWarning className="legal-shimmer font-mono text-[11px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <span className="text-[#ffff00]/30">•</span>
            <a href="/terms" suppressHydrationWarning className="legal-shimmer font-mono text-[11px] uppercase tracking-widest transition-colors">Terms &amp; Conditions</a>
            <span className="text-[#ffff00]/30">•</span>
            <a href="/refund-policy" suppressHydrationWarning className="legal-shimmer font-mono text-[11px] uppercase tracking-widest transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Bottom: Crowd Canvas full width */}
      <div className="relative w-full h-[28vh] overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[40vh]">
          <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
        </div>
        {/* SELLIXA watermark behind the crowd */}
        <h1 className="absolute inset-0 flex items-center justify-center text-[16vw] font-sans font-light text-[#ffff00]/10 whitespace-nowrap tracking-widest leading-none pointer-events-none select-none z-0">
          SELLIXA
        </h1>
      </div>

    </footer>
  );
}

