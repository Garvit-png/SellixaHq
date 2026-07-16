"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function AnimatedText({
  text,
  className = "",
  el: Wrapper = "p",
  once = true,
}: {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}) {
  const textArray = text.split(" ");
  const MotionWrapper = motion(Wrapper as any);

  return (
    <span className="inline-block">
      <span className="sr-only">{text}</span>
      <MotionWrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        transition={{ staggerChildren: 0.04 }}
        aria-hidden
        className={className}
      >
        {textArray.map((word, index) => (
          <span className="inline-block whitespace-nowrap" key={`${word}-${index}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1], // cinematic ease
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </MotionWrapper>
    </span>
  );
}
