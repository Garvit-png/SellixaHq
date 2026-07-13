"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Minimal sailboat SVG
function BoatSVG() {
  return (
    <svg viewBox="0 0 80 50" fill="none" className="w-10 h-6 md:w-14 md:h-8">
      {/* Hull */}
      <path d="M10 35 L70 35 L60 45 L20 45 Z" fill="#F4B400" opacity="0.9" />
      {/* Mast */}
      <line x1="40" y1="8" x2="40" y2="35" stroke="#F4B400" strokeWidth="1.5" />
      {/* Sail */}
      <path d="M42 10 L42 32 L62 30 Z" fill="#F4B400" opacity="0.5" />
      <path d="M38 12 L38 32 L22 28 Z" fill="#F4B400" opacity="0.3" />
    </svg>
  );
}

// Animated wave line
function WaveLine({ delay, opacity, y }: { delay: number; opacity: number; y: number }) {
  return (
    <motion.div
      className="absolute left-0 w-full pointer-events-none"
      style={{ bottom: y }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ delay: delay + 0.5, duration: 1 }}
    >
      <svg viewBox="0 0 1200 30" className="w-full h-3 md:h-4" preserveAspectRatio="none">
        <motion.path
          d="M0,15 Q150,0 300,15 Q450,30 600,15 Q750,0 900,15 Q1050,30 1200,15"
          stroke="#F4B400"
          strokeWidth="1"
          fill="none"
          strokeOpacity={opacity}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay, duration: 2, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}

export function BoatRevealText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const text = "WE DESIGN & SHIP";

  return (
    <div ref={ref} className="relative w-fit">
      {/* Wave lines behind text */}
      {isInView && (
        <>
          <WaveLine delay={0.3} opacity={0.15} y={-4} />
          <WaveLine delay={0.6} opacity={0.08} y={-10} />
        </>
      )}

      {/* The boat sailing left to right */}
      {isInView && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "calc(100% + 40px)", opacity: [0, 1, 1, 0] }}
          transition={{
            x: { duration: 2.5, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 2.5, times: [0, 0.1, 0.85, 1] },
          }}
        >
          <BoatSVG />
          {/* Wake trail */}
          <motion.div
            className="absolute top-1/2 right-full w-16 h-[1px] bg-gradient-to-l from-accent/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: "right" }}
          />
        </motion.div>
      )}

      {/* Text revealed with wave clip-path */}
      <motion.h2
        className="text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light tracking-[0.15em] whitespace-nowrap relative z-20"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        {/* Glow behind text */}
        <span className="absolute inset-0 blur-xl bg-accent/10 rounded-full" />
        <span className="relative">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: 0.3 + i * 0.04,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h2>

      {/* Subtle ripple under text after boat passes */}
      {isInView && (
        <motion.div
          className="absolute -bottom-2 left-0 w-full h-[1px]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-accent/40 via-accent/20 to-transparent" />
        </motion.div>
      )}
    </div>
  );
}
