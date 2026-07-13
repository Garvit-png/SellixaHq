import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Sarah Jenkins", handle: "@sarahcreates", role: "Creator at DesignPro", followers: "1.2M", text: "The most seamless transition I've ever experienced. Moving my audience here was the best decision for my brand." },
  { id: 2, name: "David Chen", handle: "@chen_design", role: "Founder of Minimalist", followers: "850K", text: "Finally, a platform that feels as premium as the content I create. My community loves the new experience." },
  { id: 3, name: "Elena Rodriguez", handle: "@elena_fitness", role: "Fitness Coach", followers: "2.4M", text: "I was skeptical at first, but the revenue numbers don't lie. Incredible support and gorgeous design." },
  { id: 4, name: "Marcus Webb", handle: "@marcus_tech", role: "Tech Reviewer", followers: "500K", text: "Setup took literally less than a day. It’s like they read my mind on what creators actually need." },
  { id: 5, name: "Aisha Patel", handle: "@aisha_style", role: "Fashion Blogger", followers: "3.1M", text: "Everything just works. My digital products are flying off the shelves because the checkout is so smooth." },
  { id: 6, name: "Tom Hollander", handle: "@tom_codes", role: "Software Engineer", followers: "120K", text: "The split is more than fair given how much heavy lifting they do. Best partner a creator could ask for." },
  { id: 7, name: "Chloe Smith", handle: "@chloebakes", role: "Pastry Chef", followers: "900K", text: "Beautiful, minimal, and insanely fast. It matched my aesthetic perfectly without me writing a line of code." },
  { id: 8, name: "Ryan Garcia", handle: "@ryans_lens", role: "Photographer", followers: "1.8M", text: "I used to juggle 5 different tools to run my business. Now it's all here, and it looks 10x better." },
];

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500); // 3.5s delay
    return () => clearInterval(timer);
  }, []);

  const getRelativeIndex = (index: number) => {
    const diff = index - activeIndex;
    const len = testimonials.length;
    // Handle wrap around smoothly
    if (diff > Math.floor(len / 2)) return diff - len;
    if (diff < -Math.floor(len / 2)) return diff + len;
    return diff;
  };

  return (
    <section 
      id="reviews"
      className="relative flex min-h-screen w-full shrink-0 flex-col items-center justify-start overflow-hidden bg-[#080808] text-[#F5F5F5] pt-24 pb-32"
    >
      {/* Subtle Dark Gray Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Flowing Bright Yellow Waves (Spread, Left to Right) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70 overflow-hidden">
        <motion.svg
          className="absolute h-full w-[200vw] top-0 left-0"
          preserveAspectRatio="none"
          viewBox="0 0 2000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Wave 1: Large smooth wave */}
          <path
            d="M 0,300 C 250,600 750,0 1000,300 C 1250,600 1750,0 2000,300"
            stroke="#FFD700"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="1"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 0.8))" }}
          />
          {/* Wave 2: Faster, tighter wave */}
          <path
            d="M 0,500 C 125,700 375,300 500,500 C 625,700 875,300 1000,500 C 1125,700 1375,300 1500,500 C 1625,700 1875,300 2000,500"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(255, 215, 0, 0.6))" }}
          />
          {/* Wave 3: Lower inverted wave */}
          <path
            d="M 0,700 C 250,450 750,950 1000,700 C 1250,450 1750,950 2000,700"
            stroke="#FFD700"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
            style={{ filter: "drop-shadow(0px 0px 6px rgba(255, 215, 0, 0.5))" }}
          />
        </motion.svg>
      </div>

      {/* Volumetric Lighting Leaks */}
      <div className="absolute top-0 -left-[10%] w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] z-0 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-[10%] w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] z-0 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-6xl mt-8 mb-16 pointer-events-none">
        {/* Tiny Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#D4AF37] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        >
          — Stagger Testimonials
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.2]"
        >
          They had the audience. <br/>
          Now they have <span className="italic text-[#D4AF37] font-medium drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">income.</span>
        </motion.h2>
      </div>

      {/* Staggered Carousel Container */}
      <div className="relative z-20 w-full max-w-[1200px] h-[450px] mx-auto flex items-center justify-center perspective-[1200px]">
        {testimonials.map((item, index) => {
          const relativeIndex = getRelativeIndex(index);
          const isActive = relativeIndex === 0;
          const isVisible = Math.abs(relativeIndex) <= 3;

          if (!isVisible) return null;

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                x: relativeIndex * 240,
                y: Math.abs(relativeIndex) * 20,
                scale: isActive ? 1 : 1 - Math.abs(relativeIndex) * 0.15,
                rotateZ: relativeIndex * 6,
                zIndex: 50 - Math.abs(relativeIndex),
                opacity: isVisible && Math.abs(relativeIndex) <= 2 ? 1 : 0, // Keep physically opaque so lines don't bleed through
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1] // Extremely smooth easeOutExpo curve for realistic sliding
              }}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[340px] md:w-[380px] p-8 cursor-pointer overflow-hidden ${
                isActive 
                  ? "bg-[#EAEAEA] text-[#080808] shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_30px_rgba(212,175,55,0.2)]" 
                  : "bg-[#141414] text-[#D1D1D1] border border-white/5 shadow-2xl"
              }`}
              style={{
                clipPath: isActive 
                  ? "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" 
                  : "none",
                borderRadius: isActive ? "0px" : "12px",
              }}
            >
              {/* Dimming overlay to fade inactive cards without making them transparent to the background */}
              {!isActive && (
                <div 
                  className="absolute inset-0 bg-[#080808] pointer-events-none z-50 transition-opacity duration-500"
                  style={{ opacity: 0.3 + (Math.abs(relativeIndex) * 0.2) }}
                />
              )}

              {/* Dog-ear fold illusion for active card */}
              {isActive && (
                <div 
                  className="absolute top-0 right-0 w-[50px] h-[50px] bg-[#D4AF37] z-50 shadow-[-5px_5px_15px_rgba(0,0,0,0.2)]"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                  }}
                />
              )}

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-full overflow-hidden ${isActive ? 'ring-2 ring-black/10' : 'bg-white/10'}`}>
                  {/* Avatar Placeholder */}
                  <div className={`w-full h-full ${isActive ? 'bg-black/10' : 'bg-white/5'}`} />
                </div>
                <div>
                  <h4 className={`text-base font-semibold ${isActive ? 'text-[#080808]' : 'text-white'}`}>
                    {item.name}
                  </h4>
                  <p className={`text-xs ${isActive ? 'text-black/60' : 'text-white/40'}`}>
                    {item.role}
                  </p>
                </div>
              </div>

              <p className={`text-[17px] leading-relaxed font-medium relative z-10 ${isActive ? 'text-[#333]' : 'text-[#A1A1A1]'}`}>
                "{item.text}"
              </p>

              <div className={`mt-10 pt-6 border-t ${isActive ? 'border-black/10' : 'border-white/5'} flex justify-between items-center relative z-10`}>
                <span className={`text-xs font-semibold ${isActive ? 'text-black/40' : 'text-white/30'}`}>
                  {item.handle}
                </span>
                <span className={`text-sm font-bold ${isActive ? 'text-[#D4AF37]' : 'text-[#D4AF37]/70'}`}>
                  {item.followers}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Elegant Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(8,8,8,1)] z-10" />
    </section>
  );
}
