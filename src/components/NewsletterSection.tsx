"use client";

import { FadeUp, TypeWriter, FadeIn } from "@/components/AnimateIn";

export function NewsletterSection() {
  return (
    <section className="w-full flex justify-center py-24 bg-[#050505] relative z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center">

        <FadeUp delay={0.05} className="mb-6">
          <h2 className="text-3xl md:text-5xl text-[#ffff00] font-serif font-light leading-tight">
            <span>Join the </span>
            <TypeWriter text="Inner Circle." delay={0.3} speed={55} className="text-[#ffff00] italic font-bold" cursor={false} />
          </h2>
        </FadeUp>

        <FadeUp delay={0.25} className="mb-10">
          <p className="text-white/50 text-sm md:text-base font-light max-w-xl">
            Get exclusive breakdowns of how top creators are scaling past $100k/mo, sent straight to your inbox. No fluff, just strategy.
          </p>
        </FadeUp>

        <FadeIn delay={0.4}>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFFFFF]/50 transition-colors"
              required
            />
            <button type="submit" className="bg-[#FFFFFF] text-black font-semibold rounded-full px-8 py-4 hover:bg-[#E5E5E5] transition-colors">
              Subscribe
            </button>
          </form>
        </FadeIn>

      </div>
    </section>
  );
}
