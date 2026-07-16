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
    <section id="audit" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      {/* Paint spill transition from the yellow OurTeamSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center mt-12 md:mt-24">
        
        <h2 className="text-4xl md:text-6xl text-[#ffff00] font-serif font-light leading-[1.1] mb-6">
          Not sure where to start?
        </h2>
        <p className="text-white/70 text-lg md:text-xl font-medium mb-12 max-w-2xl">
          Get a complimentary, deep-dive funnel audit. We'll analyze your current audience and show you exactly how much revenue you're leaving on the table.
        </p>

        <a 
          href="#schedule" 
          onClick={(e) => handleScroll(e, 'schedule')}
          className="bg-[#ffff00] text-black hover:bg-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
        >
          Claim Your Free Audit
        </a>
      </div>
    </section>
  );
}
