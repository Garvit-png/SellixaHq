"use client";



import { BackgroundPaths } from "@/components/ui/animated-infinity-background";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audience Audit",
    desc: "We dig into your followers, DMs & comments to find exactly what they'd pay for."
  },
  {
    num: "02",
    title: "Build Course & Materials",
    desc: "Ghostwritten in your voice. Courses, ebooks, templates, workbooks — whatever your audience wants."
  },
  {
    num: "03",
    title: "Design Your Theme",
    desc: "Logo, covers, course UI, storefront, emails — a full visual system under your name."
  },
  {
    num: "04",
    title: "Launch & Monetize",
    desc: "Reel scripts, story sequences, email funnels — your audience converts into real revenue."
  },
  {
    num: "05",
    title: "Monetization Consulting",
    desc: "Ongoing support and strategic advice to maximize your customer lifetime value."
  }
];

export function HandScrollSection() {
  return (
    <section id="hand-process" className="w-full relative bg-black">
      {/* Paint spill transition from the yellow StairsScrollSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>
      {/* Flowing Black Waves (Spread, Left to Right) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <motion.svg
          className="absolute h-full w-[200vw] top-0 left-0"
          preserveAspectRatio="none"
          viewBox="0 0 2000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Wave 1: Large smooth wave */}
          <path
            d="M 0,300 C 250,600 750,0 1000,300 C 1250,600 1750,0 2000,300"
            stroke="#ffff00"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="1"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(255, 255, 0, 0.2))" }}
          />
          {/* Wave 2: Faster, tighter wave */}
          <path
            d="M 0,500 C 125,700 375,300 500,500 C 625,700 875,300 1000,500 C 1125,700 1375,300 1500,500 C 1625,700 1875,300 2000,500"
            stroke="#ffff00"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(255, 255, 0, 0.15))" }}
          />
          {/* Wave 3: Lower inverted wave */}
          <path
            d="M 0,700 C 250,450 750,950 1000,700 C 1250,450 1750,950 2000,700"
            stroke="#ffff00"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
            style={{ filter: "drop-shadow(0px 0px 6px rgba(255, 255, 0, 0.1))" }}
          />
        </motion.svg>
      </div>

      <div className="relative z-10 w-full">
        <BackgroundPaths 
          title="We handle everything." 
          subtitle="You keep creating."
          titleBackground={true}
          backgroundStyle="gradient"
        >
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center px-4 pb-24 mt-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-start text-left p-5 md:p-6 rounded-2xl bg-[#ffff00] border-2 border-black/10 shadow-xl backdrop-blur-sm w-full"
            >
              {/* Step Number */}
              <span className="text-black font-serif italic text-4xl md:text-5xl mb-2 font-black tracking-tighter drop-shadow-sm">
                {step.num}
              </span>
              
              {/* Step Title */}
              <h3 className="text-black font-serif text-xl md:text-2xl mb-2 font-bold drop-shadow-sm">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-black/80 font-sans text-sm md:text-base font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </BackgroundPaths>
      </div>
    </section>
  );
}
