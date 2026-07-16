"use client";

import { motion } from "framer-motion";

export function PortfolioSection() {
  const projects = [
    { name: "Trading Academy", handle: "@tradepro", rev: "$450K+" },
    { name: "Fitness Masterclass", handle: "@fitlife", rev: "$200K+" },
    { name: "Design System", handle: "@ui_god", rev: "$120K+" },
    { name: "Creator Camp", handle: "@creatorhq", rev: "$350K+" },
    { name: "SaaS Launchpad", handle: "@buildsaas", rev: "$180K+" },
    { name: "Video Blueprint", handle: "@editmaster", rev: "$250K+" },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="portfolio" className="w-full flex flex-col py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      {/* Paint spill transition from the yellow WhyChooseUsSection */}
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

      <div className="w-full flex flex-col items-start px-4 md:px-12 lg:px-24 relative z-10 mt-12 md:mt-24">
        
        <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1] mb-16">
          Success stories we've<br />
          <span className="text-[#ffff00] italic font-bold">engineered.</span>
        </h2>
      </div>

      {/* Panorama / Infinite Marquee Effect */}
      <div className="relative w-full overflow-hidden flex flex-col pb-8">
        {/* Gradients on edges to fade out the marquee */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        <motion.div 
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedProjects.map((project, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] md:min-w-[400px] h-[500px] rounded-[32px] border border-[#ffff00] bg-[#0A0A0A] relative overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505] group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[#ffff00] font-mono text-[10px] tracking-widest uppercase">{project.handle}</span>
                  <span className="text-white/80 font-mono text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">{project.rev} Generated</span>
                </div>
                <h3 className="text-3xl text-white font-serif font-light">{project.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
