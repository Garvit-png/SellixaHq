"use client";

import { FadeUp, TypeWriter } from "@/components/AnimateIn";

export function FreeAuditSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audit" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current">
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center mt-12 md:mt-24">
        <FadeUp delay={0.1} className="mb-6">
          <h2 className="text-4xl md:text-6xl text-[#ffff00] font-serif font-light leading-[1.1]">
            <TypeWriter text="Not sure where to start?" delay={0.2} speed={40} cursor={false} />
          </h2>
        </FadeUp>
        <FadeUp delay={0.35} className="mb-12">
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl">
            Get a complimentary, deep-dive funnel audit. We'll analyze your current audience and show you exactly how much revenue you're leaving on the table.
          </p>
        </FadeUp>
        <FadeUp delay={0.5}>
          <a
            href="#schedule"
            onClick={(e) => handleScroll(e, 'schedule')}
            className="bg-[#ffff00] text-black hover:bg-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Claim Your Free Audit
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
