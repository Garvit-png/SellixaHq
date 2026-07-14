"use client";

import { motion } from "framer-motion";

export function PortfolioSection() {
  const projects = [
    { name: "Trading Academy", handle: "@tradepro", rev: "$450K+" },
    { name: "Fitness Masterclass", handle: "@fitlife", rev: "$200K+" },
    { name: "Design System", handle: "@ui_god", rev: "$120K+" },
  ];

  return (
    <section id="portfolio" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10">
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">VII</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            Portfolio
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1] mb-16">
          Success stories we've<br />
          <span className="text-[#FACC15] italic">engineered.</span>
        </h2>

        <div className="flex w-full overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="min-w-[85vw] md:min-w-[400px] h-[500px] rounded-[32px] border border-white/5 bg-[#0A0A0A] relative overflow-hidden group snap-center"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505] group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[#FACC15] font-mono text-[10px] tracking-widest uppercase">{project.handle}</span>
                  <span className="text-white/80 font-mono text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">{project.rev} Generated</span>
                </div>
                <h3 className="text-3xl text-white font-serif font-light">{project.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
