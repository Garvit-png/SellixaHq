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
    <section id="who-its-for" className="relative w-full min-h-screen flex flex-col justify-center py-32 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.8] mix-blend-screen"
        >
          <source src="/coints.mp4" type="video/mp4" />
        </video>
        {/* Dark overlays to blend video and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-10">
          <span className="text-[#D4AF37] font-serif italic text-xl">IX</span>
          <div className="w-12 h-px bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-semibold">Who it's for</span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-thin leading-[1.05] tracking-tight mb-20 max-w-4xl">
          <span className="text-white/90">Built for creators with </span>
          <span className="italic text-[#D4AF37] font-light">10k-500k</span>
          <span className="block text-white/90">followers.</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div 
                key={idx} 
                className={`relative bg-[#0d0d0d]/60 backdrop-blur-2xl rounded-[24px] p-8 flex flex-col justify-between transition-all duration-500 border group min-h-[380px] hover:-translate-y-2 cursor-pointer ${
                  persona.active 
                    ? 'border-[#D4AF37]/20 shadow-[0_40px_80px_-20px_rgba(212,175,55,0.15)]' 
                    : 'border-white/[0.05] hover:border-white/20'
                }`}
              >
                {/* Active glow and corner effect */}
                {persona.active && (
                  <>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-bl-[24px]"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-[50%] bg-gradient-to-t from-[#D4AF37] to-transparent rounded-bl-[24px]"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D4AF37]/20 hidden md:block blur-[60px] rounded-full pointer-events-none"></div>
                  </>
                )}

                <div>
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-10 border-2 border-transparent relative">
                    <img src={persona.image} alt={persona.title} className="w-full h-full object-cover rounded-full relative z-10" />
                    {persona.active && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"></div>
                    )}
                  </div>
                  
                  <Icon className="text-white/60 w-5 h-5 mb-5 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                  
                  <h3 className="text-white/90 font-serif text-[1.35rem] mb-3">{persona.title}</h3>
                  <p className="text-[#888888] text-[0.85rem] leading-[1.7] font-light mb-8">
                    {persona.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-dashed border-white/10 flex justify-between items-center w-full">
                  <span className="text-[#555555] text-[10px] font-mono tracking-[0.2em] uppercase">Avg Launch</span>
                  <span className="text-[#D4AF37] text-[13px] font-mono font-medium">{persona.avgLaunch}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
