import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const partners = [
  {
    quote: (
      <>
        "I talked for a few hours across multiple calls. Weeks later I had a course & ebook generating <span className="text-black font-bold">amazing monthly revenue</span>."
      </>
    ),
    name: "Kush Adhana",
    role: "Fitness and grooming",
    image: "/kush_adhana.jpeg",
    active: false,
  },
  {
    quote: (
      <>
        "They built the course, the materials, <span className="text-black font-bold">and the whole brand theme</span> — all under my name."
      </>
    ),
    name: "Rohit Sha",
    role: "Personal development",
    image: "/rohit_sah.jpeg",
    active: true,
  },
  {
    quote: (
      <>
        "The theme & design alone would have cost me a fortune. They took the risk, I took the <span className="text-black font-bold">majority of the profit</span>."
      </>
    ),
    name: "Isha",
    role: "Fitness and beauty",
    image: "/client_isha.png",
    active: false,
  },
  {
    quote: (
      <>
        "My audience engagement doubled in a month. They didn't just build a product, they built a <span className="text-black font-bold">community</span>."
      </>
    ),
    name: "Ashwini",
    role: "Dating coach",
    image: "/ashwini.jpeg",
    active: false,
  },
  {
    quote: (
      <>
        "I used to spend hours a week on operations. Now I spend none. <span className="text-black font-bold">It runs itself</span>."
      </>
    ),
    name: "Arjun M.",
    role: "Options trader",
    image: "https://i.pravatar.cc/150?u=arjun",
    active: false,
  },
  {
    quote: (
      <>
        "They completely understood my vibe. My students loved the new platform and sales <span className="text-black font-bold">multiplied</span>."
      </>
    ),
    name: "Priya S.",
    role: "Physics teacher",
    image: "https://i.pravatar.cc/150?u=priya",
    active: true,
  }
];

const stats = [
  { value: "25+", label: "TRUSTED CREATORS" },
  { value: "₹75L", label: "REVENUE GENERATED" },
  { value: "93%", label: "RELAUNCH RATE" },
  { value: "4.7", label: "AVG CREATOR RATING" }
];

export function EarlyPartnersSection() {
  return (
    <section id="early-partners" className="relative w-full min-h-screen flex flex-col justify-center py-16 bg-[#ffff00] overflow-hidden">
      {/* Paint spill transition from the black WhoItsForSection */}
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

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10 mt-12 md:mt-24">
        
        {/* Section Header */}
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-black font-serif italic text-lg">X</span>
          <div className="w-8 h-px bg-black/40"></div>
          <span className="text-black text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase font-bold">Early Partners</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.05] tracking-tight mb-12 max-w-4xl">
          <span className="text-black">Creators who finally </span>
          <span className="italic text-black/50">sold</span>
          <span className="text-black"> to their </span>
          <span className="italic text-black font-bold">own audience.</span>
        </h2>

        {/* Auto-sliding marquee */}
        <div className="relative w-full overflow-hidden mb-10 group">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ffff00] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ffff00] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-5 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...partners, ...partners].map((partner, idx) => (
              <div 
                key={idx} 
                className="relative bg-black/5 rounded-[24px] p-6 md:p-8 flex flex-col justify-between border transition-all duration-500 w-[350px] shrink-0 hover:-translate-y-2 cursor-pointer border-black/10 hover:border-black/30 hover:shadow-lg"
              >
                <div>
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-black fill-black" />
                    ))}
                  </div>
                  <p className="text-black/80 font-serif text-base md:text-lg leading-[1.65] mb-8">
                    {partner.quote}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img src={partner.image} alt={partner.name} className="w-10 h-10 rounded-full object-cover border border-black/10" />
                  <div>
                    <h4 className="text-black font-sans font-bold text-sm mb-0.5">{partner.name}</h4>
                    <p className="text-black/60 font-mono text-[9px] uppercase tracking-[0.1em]">{partner.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-black/5 border border-black/10 rounded-[24px] py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center pt-6 md:pt-0 md:px-4 first:pt-0 first:border-t-0">
                <span className="text-black font-serif text-3xl md:text-4xl mb-2 font-bold">{stat.value}</span>
                <span className="text-black/60 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
