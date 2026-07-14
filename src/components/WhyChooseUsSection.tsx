"use client";

import { motion } from "framer-motion";

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
    <section id="why-us" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 md:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">VI</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            Why Choose Sellixa
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1] mb-20">
          The unfair advantage for<br />
          <span className="text-[#FACC15] italic">top creators.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col p-8 border-l border-[#FACC15]/20 hover:border-[#FACC15] transition-colors"
            >
              <h3 className="text-2xl text-white font-serif mb-4">{reason.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
