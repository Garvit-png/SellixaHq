"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform, animate } from "framer-motion";

export default function CustomCursor() {
  // Outer ring — spring-lagged position
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Inner dot — instant position, no spring
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Hover state as a motion value (0 = default, 1 = hovered)
  // Using a motion value instead of React state eliminates re-renders entirely
  const hoverProgress = useMotionValue(0);

  const ringScale    = useTransform(hoverProgress, [0, 1], [1, 1.5]);
  const ringBg       = useTransform(hoverProgress, [0, 1], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const ringBorder   = useTransform(hoverProgress, [0, 1], [1, 0]);
  const dotScale     = useTransform(hoverProgress, [0, 1], [1, 0]);
  const dotOpacity   = useTransform(hoverProgress, [0, 1], [1, 0]);

  const isHoveredRef = useRef(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovered =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("button") ||
        !!target.closest("a");

      if (hovered === isHoveredRef.current) return; // no-op if unchanged
      isHoveredRef.current = hovered;

      animate(hoverProgress, hovered ? 1 : 0, { duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, hoverProgress]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          backgroundColor: ringBg,
          borderWidth: ringBorder,
          borderStyle: "solid",
          borderColor: "rgba(0,0,0,0.3)",
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          scale: dotScale,
          opacity: dotOpacity,
        }}
      />
    </>
  );
}
