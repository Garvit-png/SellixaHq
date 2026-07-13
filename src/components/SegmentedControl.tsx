"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Course", "Materials", "Theme", "Launch"];

export function SegmentedControl() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl max-w-fit mx-auto mt-12 z-20">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeTab === tab ? "text-black" : "text-text-muted hover:text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-accent rounded-full shadow-[0_0_20px_rgba(244,180,0,0.4)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
