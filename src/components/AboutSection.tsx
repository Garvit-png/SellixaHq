"use client";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden relative overflow-hidden">

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

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-right opacity-80"
          style={{ backgroundImage: "url('/group.jpg')" }}
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 flex flex-col justify-center min-h-[60vh]">
        <div className="flex flex-col">
          
          {/* Mission & Vision Heading */}
          <div className="flex flex-col max-w-3xl mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light leading-[1.1] drop-shadow-2xl">
              We turn influence into<br />
              <span className="text-[#ffff00] italic font-bold">empires.</span>
            </h2>
          </div>
            
          {/* Sub Text Paragraph 1 */}
          <div className="drop-shadow-2xl max-w-2xl mb-6">
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
              Most creators are leaving money on the table. You spend years building an audience, but monetizing them is often a chaotic process of stitching together different software, hiring expensive freelancers, and dealing with support tickets.
            </p>
          </div>

          {/* Sub Text Paragraph 2 */}
          <div className="drop-shadow-2xl max-w-2xl mb-12">
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
              Our mission is to bridge the gap between content and commerce. We build, host, and scale your digital products, so you can focus entirely on what you do best: creating content and engaging with your community.
            </p>
          </div>
            
          {/* Footer text */}
          <div className="flex items-center gap-4">
            <span className="text-[#ffff00] font-mono text-xs tracking-[0.2em] uppercase drop-shadow-xl font-bold">Built by creators, for creators.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
