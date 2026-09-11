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
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[#050505] relative z-20 border-t border-white/5 px-4 md:px-12 lg:px-20 pt-32">

      {/* Big full-width title */}
      <FadeUp delay={0.05}>
        <h2 className="text-[#ffff00] font-serif font-extrabold leading-[0.95] tracking-tight w-full text-center text-[10vw] md:text-[7vw] lg:text-[6.5vw]">
          Join the <em>Inner Circle.</em>
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
