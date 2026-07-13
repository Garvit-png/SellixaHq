"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BarChart3, Wallet, Star, HelpCircle, Package, TrendingUp } from "lucide-react";

interface FloatingIconProps {
  icon: React.ReactNode;
  top: string;
  left: string;
  delay: number;
}

function FloatingIcon({ icon, top, left, delay }: FloatingIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className="absolute z-30 p-4"
      style={{ top, left }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      >
        <motion.div
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-accent/40 text-accent/80 shadow-[0_0_15px_rgba(244,180,0,0.15)] hover:shadow-[0_0_25px_rgba(244,180,0,0.4)] hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {icon}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div className="relative w-full h-full max-w-7xl mx-auto pointer-events-auto">
        <FloatingIcon icon={<BarChart3 size={24} strokeWidth={1.5} />} top="20%" left="15%" delay={0} />
        <FloatingIcon icon={<Wallet size={24} strokeWidth={1.5} />} top="65%" left="10%" delay={1.2} />
        <FloatingIcon icon={<Star size={24} strokeWidth={1.5} />} top="15%" left="80%" delay={0.5} />
        <FloatingIcon icon={<HelpCircle size={24} strokeWidth={1.5} />} top="75%" left="85%" delay={2.1} />
        <FloatingIcon icon={<Package size={24} strokeWidth={1.5} />} top="45%" left="5%" delay={0.8} />
        <FloatingIcon icon={<TrendingUp size={24} strokeWidth={1.5} />} top="40%" left="90%" delay={1.7} />
      </div>
    </div>
  );
}
