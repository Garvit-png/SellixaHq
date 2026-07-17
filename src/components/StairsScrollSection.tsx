"use client";

const steps = [
  {
    num: "01",
    title: "Offer Creation",
    desc: "We help you define irresistible digital products and pricing models tailored to your specific audience."
  },
  {
    num: "02",
    title: "Funnel Building",
    desc: "High-converting landing pages and sales funnels designed to turn followers into paying customers."
  },
  {
    num: "03",
    title: "Website Development",
    desc: "Custom, ultra-fast web platforms built with premium aesthetics that match your brand identity."
  },
  {
    num: "04",
    title: "Launch Strategy",
    desc: "End-to-end planning for your product launch, from teaser campaigns to opening the cart."
  },
  {
    num: "05",
    title: "Monetization Consulting",
    desc: "Ongoing support and strategic advice to maximize your customer lifetime value."
  }
];

export function StairsScrollSection() {
  return (
    <section 
      id="stairs-process" 
      className="w-full relative bg-[#ffff00] py-24 md:py-32 overflow-hidden"
    >
      {/* Paint spill transition from the black AboutSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#050505] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 mt-12 md:mt-24">
        
        {/* Top Title */}
        <div className="w-full flex justify-center mb-16 md:mb-24">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-black font-serif font-light leading-tight drop-shadow-md">
              Everything you need to <span className="font-bold italic">scale</span>
            </h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Top Row: Card 1 */}
          <div className="flex flex-col items-start text-left bg-black/5 p-8 rounded-2xl border border-black/10 transition-all duration-300 hover:bg-black/10 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <span className="text-black font-serif italic text-5xl md:text-6xl mb-4 font-black tracking-tighter opacity-90 drop-shadow-sm">
              {steps[0].num}
            </span>
            <h3 className="text-black font-serif text-2xl md:text-3xl mb-4 font-bold drop-shadow-sm">
              {steps[0].title}
            </h3>
            <p className="text-black/80 font-sans text-base md:text-lg font-medium leading-relaxed">
              {steps[0].desc}
            </p>
          </div>

          {/* Top Row: Video (col-span-1) */}
          <div className="flex flex-col relative w-full h-full min-h-[300px] md:min-h-full rounded-2xl border-4 border-black overflow-hidden shadow-xl bg-black/5">
            <video 
              src="/money.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              suppressHydrationWarning
            />
          </div>

          {/* Rest of the cards (Card 2, 3, 4, 5) */}
          {steps.slice(1).map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-start text-left bg-black/5 p-8 rounded-2xl border border-black/10 transition-all duration-300 hover:bg-black/10 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <span className="text-black font-serif italic text-5xl md:text-6xl mb-4 font-black tracking-tighter opacity-90 drop-shadow-sm">
                {step.num}
              </span>
              <h3 className="text-black font-serif text-2xl md:text-3xl mb-4 font-bold drop-shadow-sm">
                {step.title}
              </h3>
              <p className="text-black/80 font-sans text-base md:text-lg font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
