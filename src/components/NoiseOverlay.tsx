"use client";

import React from "react";
import { useMobile } from "@/hooks/use-mobile";

export function NoiseOverlay() {
  const isMobile = useMobile();

  // Skip on mobile — mix-blend-overlay forces full compositing layer on every repaint
  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
