"use client";

import { motion } from "framer-motion";

export function FreeAuditSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="audit" className="w-full flex justify-center py-24 md:py-32 bg-[#FACC15] relative z-20 overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-6xl text-black font-serif font-bold leading-[1.1] mb-6">
          Not sure where to start?
        </h2>
        <p className="text-black/70 text-lg md:text-xl font-medium mb-12 max-w-2xl">
          Get a complimentary, deep-dive funnel audit. We'll analyze your current audience and show you exactly how much revenue you're leaving on the table.
        </p>

        <a 
          href="#schedule" 
          onClick={(e) => handleScroll(e, 'schedule')}
          className="bg-black text-white hover:bg-black/80 px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
        >
          Claim Your Free Audit
        </a>
      </div>
    </section>
  );
}
