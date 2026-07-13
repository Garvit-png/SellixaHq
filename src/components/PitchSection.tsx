import React from "react";

export function PitchSection() {
  return (
    <section id="pitch" className="relative w-full min-h-screen bg-[#080808] flex flex-col justify-center px-6 md:px-16 lg:px-32 py-24 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start relative z-10">
        
        {/* Top Tagline */}
        <div className="flex items-center space-x-6 mb-12">
          <span className="text-[#D4AF37] font-serif italic text-3xl">I</span>
          <div className="w-px h-8 bg-white/20"></div>
          <span className="text-[#D4AF37] tracking-[0.2em] text-xs font-bold uppercase">— The Pitch</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-24 max-w-5xl font-thin">
          <span className="block text-white/90">You have the <span className="italic text-[#D4AF37] font-light">audience.</span></span>
          <span className="block text-white/90">You have the <span className="italic text-[#D4AF37] font-light">knowledge.</span></span>
          <span className="block text-[#666666] italic mt-2">You just don't sell them<br/>anything.</span>
        </h2>

        {/* Two Column Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-5xl">
          <p className="text-[#A3A3A3] text-lg md:text-xl leading-relaxed font-light">
            Most mid-size creators sit on a goldmine of attention — but never monetize it. Because a real product means a <span className="text-[#D4AF37]">course</span>, <span className="text-[#D4AF37]">digital materials</span>, a <span className="text-[#D4AF37]">branded storefront</span>, launch assets, funnels... a full studio's worth of work.
          </p>
          <p className="text-[#A3A3A3] text-lg md:text-xl leading-relaxed font-light">
            Sellixa <span className="text-[#D4AF37]">is</span> that studio. We design the product, the materials, <span className="text-[#D4AF37]">and</span> the theme — ship it under <span className="text-[#D4AF37]">your</span> name, and turn your audience into actual revenue.
          </p>
        </div>

      </div>
      
      {/* Scroll Spacer */}
      <div className="h-[25vh] md:h-[35vh] w-full"></div>

      {/* Principle Quote Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full pb-24">
        {/* Quote mark */}
        <span className="text-[#D4AF37] text-6xl md:text-7xl font-serif font-black leading-none opacity-80 mb-10">❞</span>
        
        {/* Quote Text */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-white/90 mb-12">
          “We design the product, the materials, and the theme.<br/>
          You keep your audience and <span className="text-[#D4AF37]">75% of every sale.</span>”
        </h3>

        {/* Divider */}
        <div className="flex items-center space-x-6">
          <div className="w-12 md:w-20 h-px bg-[#D4AF37]/30"></div>
          <span className="text-[#A3A3A3] text-[10px] md:text-xs font-mono uppercase tracking-[0.25em]">Sellixa Founding Principle</span>
          <div className="w-12 md:w-20 h-px bg-[#D4AF37]/30"></div>
        </div>
      </div>
    </section>
  );
}
