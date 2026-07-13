"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  onComplete?: () => void;
}

export function GooeyText({
  texts,
  morphTime = 1.2,
  cooldownTime = 0.5,
  className,
  textClassName,
  onComplete,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationFrameId: number;
    let stopped = false;

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const f = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(f, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    function animate() {
      if (stopped) return;
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = Math.min((newTime.getTime() - time.getTime()) / 1000, 0.1); // Cap dt to max 0.1s to prevent huge jumps/glitches
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;

          // If we just landed on the last text, stop after showing it
          if (textIndex === texts.length - 1) {
            // Show the last text cleanly
            if (text1Ref.current && text2Ref.current) {
              text2Ref.current.style.filter = "";
              text2Ref.current.style.opacity = "100%";
              text1Ref.current.style.opacity = "0%";
              text1Ref.current.style.filter = "";
            }
            stopped = true;
            cancelAnimationFrame(animationFrameId);
            if (onCompleteRef.current) onCompleteRef.current();
            return;
          }

          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    // Kick off
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      stopped = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -120"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block select-none text-center text-[clamp(4rem,10vw,9rem)] font-heading font-bold tracking-tight text-[#000000]",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block select-none text-center text-[clamp(4rem,10vw,9rem)] font-heading font-bold tracking-tight text-[#000000]",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
