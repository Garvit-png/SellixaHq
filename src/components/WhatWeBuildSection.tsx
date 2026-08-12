"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Galaxy = dynamic(() => import("@/components/Galaxy"), { ssr: false });

export function WhatWeBuildSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="build"
      className="w-full min-h-screen relative bg-black z-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Paint spill transition from yellow to black */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none drop-shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,0 V30 C150,60 350,0 500,40 C650,80 850,20 1000,60 C1100,90 1150,40 1200,50 V0 Z" />
        </svg>
      </div>

      {/* Galaxy — z-0, behind everything */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent={false}
        />
      </div>

      {/* Content — z-10, above Galaxy */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full px-6 md:px-12 py-32">

        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } }
          }}
          className="flex flex-row justify-center text-[9vw] md:text-[6vw] text-[#ffff00] font-heading font-extrabold uppercase tracking-widest whitespace-nowrap text-center drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]"
        >
          {"WE DESIGN & SHIP".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: isMobile ? -20 : -100, skewX: isMobile ? 0 : -20, filter: isMobile ? "none" : "blur(10px)" },
                visible: {
                  opacity: 1, x: 0, skewX: 0,
                  filter: isMobile ? "none" : "blur(0px)",
                  transition: { type: "spring", damping: 12, stiffness: 150 }
                }
              }}
              className={char === " " ? "w-[3vw] md:w-[1.5vw]" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl [perspective:1000px]"
        >
          {["Your course.", "Your materials.", "Your theme."].map((label) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, rotateX: -90, transformOrigin: "top" },
                visible: { opacity: 1, rotateX: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
              }}
              className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-black/40 border-2 border-[#ffff00] backdrop-blur-md transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,0,0.3)]"
            >
              <h3 className="text-xl md:text-2xl font-sans font-light text-white">{label}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className={`max-w-2xl text-center text-sm md:text-base text-white/80 font-sans font-light leading-relaxed bg-black/40 ${isMobile ? "" : "backdrop-blur-xl"} px-8 py-5 rounded-2xl border-2 border-[#ffff00] shadow-[0_0_20px_rgba(255,255,0,0.3)]`}
        >
          We construct premium digital infrastructures for top-tier creators.{" "}
          <span className="text-white font-medium">Enter the next stage of your business evolution.</span>
        </motion.p>
      </div>
    </section>
  );
}
