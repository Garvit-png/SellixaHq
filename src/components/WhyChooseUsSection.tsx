"use client";

import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Done For You",
      description: "You provide the content and community. We handle the design, coding, hosting, and technical headaches."
    },
    {
      title: "Performance Based",
      description: "We only earn when you earn. Our 75/25 split ensures our goals are perfectly aligned with your success."
    },
    {
      title: "Premium Aesthetics",
      description: "Your brand is your biggest asset. We build platforms that look and feel like a luxury studio produced them."
    },
    {
      title: "Fast Execution",
      description: "Stop waiting months for freelancers. We deploy your fully functional platform in days, not quarters."
    }
  ];

  return (
    <section id="why-us" className="w-full flex justify-center py-24 md:py-32 bg-[#ffff00] relative z-20 overflow-hidden">
      {/* Flickering Dots Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#000000"
          maxOpacity={0.15}
          flickerChance={0.1}
        />
      </div>
      {/* Paint spill transition from the black HandScrollSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#000000] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center mt-12 md:mt-24">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-black font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            Why Choose Sellixa
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl text-black font-serif font-light leading-[1.1] mb-20 drop-shadow-sm">
          The unfair advantage for<br />
          <span className="text-black italic font-bold">top creators.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col p-8 border-l border-black/20 hover:border-black transition-all duration-300 hover:-translate-y-2 hover:bg-black/5 hover:shadow-xl cursor-pointer rounded-r-2xl"
            >
              <h3 className="text-2xl text-black font-serif mb-4 font-bold">{reason.title}</h3>
              <p className="text-black/80 font-medium text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
