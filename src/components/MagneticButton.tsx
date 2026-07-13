"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className,
  strength = 20,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    // @ts-ignore: Next.js 15 / React 19 Framer Motion type conflict
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(
        clsx(
          "relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium transition-colors overflow-hidden group",
          variant === "primary"
            ? "bg-gradient-to-br from-accent to-[#ffc422] text-black shadow-[0_10px_30px_rgba(244,180,0,0.2)] hover:shadow-[0_15px_40px_rgba(244,180,0,0.4)]"
            : "border border-glass-border text-text-primary hover:bg-white/5",
          className
        )
      )}
      {...(props as any)}
    >
      {variant === "primary" && (
        <motion.div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)] scale-0 group-hover:scale-150 transition-transform duration-500 ease-out z-0" />
      )}
      <motion.span
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
