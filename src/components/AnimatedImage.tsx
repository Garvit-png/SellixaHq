"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedImage({
  children,
  className = "",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={{
        hidden: { 
          clipPath: "inset(100% 0% 0% 0%)",
        },
        visible: { 
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
        }
      }}
    >
      <motion.div
        variants={{
          hidden: { scale: 1.08, y: 20 },
          visible: { 
            scale: 1, 
            y: 0,
            transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } 
          }
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
