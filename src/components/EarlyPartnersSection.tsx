import React from 'react';
import { Star } from 'lucide-react';

const partners = [
  {
    quote: (
      <>
        "I talked for four hours across three calls. Six weeks later I had a course & ebook doing <span className="text-[#D4AF37]">$11k/month</span>."
      </>
    ),
    name: "Arjun M.",
    role: "Options trader · 84k",
    image: "https://i.pravatar.cc/150?u=arjun",
    active: false,
  },
  {
    quote: (
      <>
        "They built the course, the materials, <span className="text-[#D4AF37]">and the whole brand theme</span> — all under my name."
      </>
    ),
    name: "Priya S.",
    role: "Physics teacher · 142k",
    image: "https://i.pravatar.cc/150?u=priya",
    active: true,
  },
  {
    quote: (
      <>
        "The theme & design alone would have cost me ₹5L. They took the risk, I took the <span className="text-[#D4AF37]">75%</span>."
      </>
    ),
    name: "Rohan K.",
    role: "DSA instructor · 67k",
    image: "https://i.pravatar.cc/150?u=rohan",
    active: false,
  }
];

const stats = [
  { value: "12+", label: "CREATORS ONBOARDED" },
  { value: "₹2.1Cr", label: "PAID TO CREATORS" },
  { value: "98%", label: "RELAUNCH RATE" },
  { value: "4.9", label: "AVG CREATOR RATING" }
];

export function EarlyPartnersSection() {
  return (
    <section id="early-partners" className="relative w-full min-h-screen flex flex-col justify-center py-16 bg-[#0B0B0B]">
      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-[#D4AF37] font-serif italic text-lg">VI</span>
          <div className="w-8 h-px bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase font-semibold">Early Partners</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-thin leading-[1.05] tracking-tight mb-12 max-w-4xl">
          <span className="text-white/90">Creators who finally </span>
          <span className="italic text-white/50">sold</span>
          <span className="text-white/90"> to their </span>
          <span className="italic text-[#D4AF37] font-light">own audience.</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className={`relative bg-gradient-to-b from-[#141414] to-[#0A0A0A] rounded-[24px] p-6 md:p-8 flex flex-col justify-between border transition-all duration-500 min-h-[260px] hover:-translate-y-2 cursor-pointer ${
                partner.active 
                  ? 'border-[#D4AF37]/40 shadow-[0_30px_60px_-15px_rgba(212,175,55,0.15)]' 
                  : 'border-white/[0.05] hover:border-[#D4AF37]/20 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.05)]'
              }`}
            >
              {partner.active && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/15 blur-[60px] rounded-full pointer-events-none"></div>
              )}
              
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white/80 font-serif text-base md:text-lg leading-[1.65] mb-8">
                  {partner.quote}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img src={partner.image} alt={partner.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="text-white/90 font-sans font-semibold text-sm mb-0.5">{partner.name}</h4>
                  <p className="text-[#555555] font-mono text-[9px] uppercase tracking-[0.1em]">{partner.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-[#080808] border border-white/[0.05] rounded-[24px] py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center pt-6 md:pt-0 md:px-4 first:pt-0 first:border-t-0">
                <span className="text-[#D4AF37] font-serif text-3xl md:text-4xl mb-2">{stat.value}</span>
                <span className="text-[#555555] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
