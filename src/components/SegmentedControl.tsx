"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Course", "Materials", "Theme", "Launch"];

export function SegmentedControl() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl max-w-fit mx-auto mt-12 z-20 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      
      {/* Diagonal Shine Effect Sweeping Across the Button */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[60px] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0 pointer-events-none"
        animate={{ left: ["-20%", "120%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === tab 
              ? "text-[#F4B400] drop-shadow-[0_0_12px_rgba(244,180,0,0.8)]" 
              : "text-white/60 hover:text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-glow-bg"
              className="absolute inset-0 bg-[#F4B400]/10 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 tracking-wide">{tab}</span>
        </button>
      ))}
    </div>
  );
}
