import React from 'react';
import { Search, PenSquare, BookOpen, Zap } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Audience Audit",
    desc: "We dig into your followers, DMs & comments to find exactly what they'd pay for.",
    icon: Search
  },
  {
    number: "02",
    title: "Build Course & Materials",
    desc: "Ghostwritten in your voice. Courses, ebooks, templates, workbooks — whatever your audience wants.",
    icon: PenSquare
  },
  {
    number: "03",
    title: "Design Your Theme",
    desc: "Logo, covers, course UI, storefront, emails — a full visual system under your name.",
    icon: BookOpen
  },
  {
    number: "04",
    title: "Launch & Monetize",
    desc: "Reel scripts, story sequences, email funnels — your audience converts into real revenue.",
    icon: Zap
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full min-h-screen flex flex-col justify-center py-24 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.85] mix-blend-screen"
        >
          <source src="/bggb.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability & blending with site */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-10">
          <span className="text-[#D4AF37] font-serif italic text-xl">V</span>
          <div className="w-12 h-px bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-semibold">How it works</span>
        </div>

        {/* Title and Description Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-20 w-full">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-thin leading-[1.05] tracking-tight">
            <span className="block text-white/90">We handle <span className="italic text-[#D4AF37] font-light">everything.</span></span>
            <span className="block text-white/90">You keep creating.</span>
          </h2>
          
          <div className="flex lg:justify-end w-full lg:w-auto lg:mt-4">
            <p className="text-[#A3A3A3] text-sm md:text-base font-light max-w-[22rem] leading-relaxed">
              Four steps from idea to income. No freelancer chasing. No upfront invoices. No creative debt.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-[#080808]/60 backdrop-blur-md border border-white/[0.05] rounded-[24px] p-8 flex flex-col items-start transition-all duration-500 hover:bg-[#0d0d0d]/80 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] group"
              >
                <div className="w-full flex justify-between items-start mb-12">
                  <span className="text-[#D4AF37] text-5xl font-serif font-light opacity-90">{step.number}</span>
                  <Icon className="text-[#D4AF37]/40 w-5 h-5 group-hover:text-[#D4AF37] transition-colors duration-300 mt-2" strokeWidth={1.5} />
                </div>
                <h3 className="text-white/90 font-medium text-[1.05rem] mb-3 tracking-wide">{step.title}</h3>
                <p className="text-[#888888] text-[0.85rem] leading-[1.6] font-light">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
