"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { KineticText } from "@/components/ui/kinetic-text";

const TEXT = "WE DESIGN & SHIP";
const DURATION = 3; // seconds boat travels

function BoatSVG() {
  return (
    <svg viewBox="0 0 90 60" fill="none" className="w-12 h-9 md:w-16 md:h-12">
      {/* Hull */}
      <path d="M6 42 Q45 54 84 42 L76 50 Q45 62 14 50 Z" fill="#F4B400" opacity="0.95" />
      {/* Cabin block */}
      <rect x="28" y="35" width="22" height="8" rx="2" fill="#F4B400" opacity="0.45" />
      {/* Mast */}
      <line x1="42" y1="6" x2="42" y2="42" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" />
      {/* Main sail */}
      <path d="M44 9 L44 39 L72 34 Z" fill="#F4B400" opacity="0.65" />
      {/* Jib */}
      <path d="M40 13 L40 37 L16 31 Z" fill="#F4B400" opacity="0.35" />
      {/* Flag */}
      <path d="M42 6 L54 10 L42 14 Z" fill="#F4B400" opacity="0.9" />
    </svg>
  );
}

function WakeTrails() {
  return (
    <div className="absolute top-[55%] right-[calc(100%+4px)] flex flex-col gap-[3px] -translate-y-1/2">
      {[56, 40, 28].map((w, i) => (
        <motion.div
          key={i}
          className="h-[1px]"
          style={{
            width: w,
            background: `linear-gradient(to left, rgba(244,180,0,${0.5 - i * 0.12}), transparent)`,
            marginLeft: i * 4,
            transformOrigin: "right",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
        />
      ))}
    </div>
  );
}

export function BoatRevealText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setDone(true), (DURATION + 0.2) * 1000);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      {/* Glow aura */}
      <div className="absolute inset-0 blur-3xl bg-accent/8 pointer-events-none scale-110" />

      {/* Text layer */}
      <div className="relative">
        {/* Phase 1: wave-reveal of static text (clip expands left→right with boat) */}
        {!done && (
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0 round 0px)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0 round 0px)" } : {}}
            transition={{ duration: DURATION, ease: [0.25, 0.1, 0.25, 1] }}
            aria-hidden
          >
            <h2 className="text-accent text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-light tracking-[0.15em] whitespace-nowrap leading-none">
              {TEXT}
            </h2>
          </motion.div>
        )}

        {/* Phase 2: KineticText hover (appears after boat finishes) */}
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <KineticText
              text={TEXT}
              as="h2"
              className="text-accent text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-light tracking-[0.15em] whitespace-nowrap leading-none cursor-default"
            />
          </motion.div>
        )}
      </div>

      {/* Boat — travels full text width from left to right, then exits */}
      {isInView && !done && (
        <motion.div
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center"
          initial={{ left: "-64px" }}
          animate={{ left: "calc(100% + 12px)" }}
          transition={{ duration: DURATION, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            <BoatSVG />
            {/* Wake trails behind boat */}
            <WakeTrails />
            {/* Ripple waves ahead of boat */}
            <div className="absolute top-[58%] left-[calc(100%+2px)] -translate-y-1/2 flex flex-col gap-[3px]">
              {[20, 14].map((w, i) => (
                <motion.div
                  key={i}
                  className="h-[1px]"
                  style={{ width: w, background: `linear-gradient(to right, rgba(244,180,0,${0.3 - i * 0.1}), transparent)` }}
                  animate={{ opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Wavy underline (appears after boat passes) */}
      {isInView && (
        <motion.div
          className="absolute -bottom-2 left-0 w-full pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: DURATION * 0.85, duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          <svg viewBox="0 0 600 10" className="w-full h-[6px]" preserveAspectRatio="none">
            <path
              d="M0,5 Q37,1 75,5 Q112,9 150,5 Q187,1 225,5 Q262,9 300,5 Q337,1 375,5 Q412,9 450,5 Q487,1 525,5 Q562,9 600,5"
              stroke="#F4B400"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.45"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
