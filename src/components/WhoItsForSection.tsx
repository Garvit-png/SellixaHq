import React from 'react';
import { ArrowUpRight, Music, Command, Circle } from 'lucide-react';

const personas = [
  {
    title: "Traders",
    desc: "Course on risk framework + indicator pack + branded storefront — sold to your followers.",
    avgLaunch: "$48K",
    icon: ArrowUpRight,
    image: "https://i.pravatar.cc/150?u=trader",
    active: true,
  },
  {
    title: "Teachers",
    desc: "Exam-prep course, study workbooks, notes bundles — themed for your students.",
    avgLaunch: "$22K",
    icon: Music,
    image: "https://i.pravatar.cc/150?u=teacher",
    active: false,
  },
  {
    title: "Coding Instructors",
    desc: "DSA cohort course, system design ebook, interview kit — all branded as yours.",
    avgLaunch: "$61K",
    icon: Command,
    image: "https://i.pravatar.cc/150?u=coder",
    active: false,
  },
  {
    title: "Fitness Coaches",
    desc: "Nutrition PDFs, workout mini-courses, transformation plans — styled, priced, launched.",
    avgLaunch: "$37K",
    icon: Circle,
    image: "https://i.pravatar.cc/150?u=fitness",
    active: false,
  }
];

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="relative w-full min-h-screen flex flex-col justify-center py-32 overflow-hidden bg-[#050505]">
      {/* Paint spill transition from the yellow TheDealSection */}
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

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10 mt-12 md:mt-24">
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-10">
          <span className="text-[#ffff00] font-serif italic text-xl">IX</span>
          <div className="w-12 h-px bg-[#ffff00]/40"></div>
          <span className="text-[#ffff00] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-bold">Who it's for</span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-light leading-[1.05] tracking-tight mb-20 max-w-4xl">
          <span className="text-white">Built for creators with </span>
          <span className="italic text-[#ffff00] font-bold">50k-2M</span>
          <span className="block text-white">followers.</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-[#0A0A0A] rounded-[24px] p-8 flex flex-col justify-between transition-all duration-500 border border-[#ffff00] group min-h-[380px] hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-10 border-2 border-[#ffff00] relative">
                    <img src={persona.image} alt={persona.title} className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                  
                  <Icon className="text-[#ffff00] w-5 h-5 mb-5" strokeWidth={2} />
                  
                  <h3 className="text-white font-serif text-[1.35rem] mb-3">{persona.title}</h3>
                  <p className="text-[#888888] text-[0.85rem] leading-[1.7] font-light mb-8">
                    {persona.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-dashed border-white/10 flex justify-between items-center w-full">
                  <span className="text-[#555555] text-[10px] font-mono tracking-[0.2em] uppercase">Avg Launch</span>
                  <span className="text-[#ffff00] text-[13px] font-mono font-bold">{persona.avgLaunch}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
