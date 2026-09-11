"use client";

import { useState } from "react";
import { FadeUp, FadeIn } from "@/components/AnimateIn";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#050505] relative z-20 border-t border-white/5 px-4 md:px-12 lg:px-20 py-28 md:py-36">

      {/* Big full-width title */}
      <FadeUp delay={0.05}>
        <h2
          className="font-serif font-black whitespace-nowrap text-center leading-none tracking-[-0.02em] w-full"
          style={{
            fontSize: "clamp(2.4rem, 6.5vw, 7rem)",
            background: "linear-gradient(135deg, #ffff00 30%, #ffe033 60%, #fff7a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 32px rgba(255,255,0,0.18))",
          }}
        >
          Join the{" "}
          <em className="not-italic" style={{ fontStyle: "oblique 12deg" }}>Inner Circle.</em>
        </h2>
      </FadeUp>

      {/* Subtitle + form stacked below */}
      <FadeUp delay={0.18} className="mt-8 md:mt-10">
        <p className="text-white/40 text-sm md:text-base font-light max-w-md text-center">
          Exclusive breakdowns of how top creators scale past $100k/mo. No fluff, just strategy.
        </p>
      </FadeUp>

      <FadeIn delay={0.3} className="mt-6 md:mt-8 w-full max-w-xl">
        {submitted ? (
          <p className="text-[#ffff00] font-mono text-sm uppercase tracking-widest">
            You're in. Watch your inbox. ✓
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#ffff00]/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#ffff00] text-black font-bold rounded-full px-8 py-4 text-sm uppercase tracking-widest hover:bg-yellow-300 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </FadeIn>

    </section>
  );
}
