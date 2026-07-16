"use client";

import React, { useState, useEffect } from "react";

const CURRENCY_CHARS = "$€£¥₹₿¢¤฿₽₩₪₫₭₮₱₲₴₵₸₺₽₾";

interface CurrencyScrambleProps {
  text: string;
  className?: string;
}

export function CurrencyScramble({ text, className }: CurrencyScrambleProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    let intervalId: NodeJS.Timeout;

    // Initialize with completely random currency characters
    setDisplayText(
      text
        .split("")
        .map((char) =>
          char === " " ? " " : CURRENCY_CHARS[Math.floor(Math.random() * CURRENCY_CHARS.length)]
        )
        .join("")
    );

    // Short delay before scrambling starts to resolve
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CURRENCY_CHARS[Math.floor(Math.random() * CURRENCY_CHARS.length)];
            })
            .join("");
        });

        iteration += 1 / 2; // Controls reveal speed (smaller = slower)

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 30); // Scramble speed (smaller = faster random changes)
    }, 400);

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalId);
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
