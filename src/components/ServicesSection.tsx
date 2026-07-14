"use client";

import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      title: "Offer Creation",
      description: "We help you define irresistible digital products and pricing models tailored to your specific audience.",
      delay: 0
    },
    {
      title: "Funnel Building",
      description: "High-converting landing pages and sales funnels designed to turn followers into paying customers.",
      delay: 0.1
    },
    {
      title: "Website Development",
      description: "Custom, ultra-fast web platforms built with premium aesthetics that match your brand identity.",
      delay: 0.2
    },
    {
      title: "Launch Strategy",
      description: "End-to-end planning for your product launch, from teaser campaigns to opening the cart.",
      delay: 0.3
    },
    {
      title: "Monetization Consulting",
      description: "Ongoing support and strategic advice to maximize your customer lifetime value.",
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">III</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1] mb-16">
          Everything you need to<br />
          <span className="text-[#FACC15] italic">scale.</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-[24px] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md group hover:border-[#FACC15]/20 hover:bg-[#0A0A0A]/80 transition-all duration-300 ${idx === 0 || idx === 1 ? 'md:col-span-1' : ''} ${idx === 2 ? 'md:col-span-1' : ''} ${idx === 3 || idx === 4 ? 'md:col-span-1' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FACC15]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-[#FACC15] font-mono text-sm">0{idx + 1}</span>
              </div>
              <h3 className="text-2xl text-white font-serif mb-4">{service.title}</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
