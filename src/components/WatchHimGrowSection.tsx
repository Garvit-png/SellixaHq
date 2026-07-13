import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WatchHimGrowSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Use Framer Motion's native useScroll which is perfectly optimized for window scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // SCROLL-DRIVEN VALUES (100% tied to scroll, NO autoplay)
  
  // 1. Counters
  const revenueValue = useTransform(scrollYProgress, [0, 1], [0, 14500]);
  const percentageValue = useTransform(scrollYProgress, [0, 1], [0, 312]);
  
  const formattedRevenue = useTransform(revenueValue, (val) => `$${Math.floor(val).toLocaleString()}`);
  const formattedPercent = useTransform(percentageValue, (val) => `▲ +${Math.floor(val)}% this week`);
  
  // 2. Graph animations
  const graphOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);
  const dotScale = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  // 3. Environment animations (Replacing autoplay)
  const vortexRotation = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const coin1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, 0]);
  const coin2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -60, 0]);

  return (
    <section id="growth" ref={containerRef} className="relative w-full h-[300vh] bg-[#080808]">
      {/* Sticky Container - Pins to screen while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden text-[#F5F5F5] py-24">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Background Vortex (Scroll-driven rotation) */}
        <motion.div style={{ rotate: vortexRotation }} className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1500px] max-h-[1500px] z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(212,175,55,0.08),transparent,rgba(255,255,255,0.02),transparent)] rounded-full blur-[50px]" />
        </motion.div>

        {/* Floating Coins (Scroll-driven bounce) */}
        <motion.div style={{ y: coin1Y }} className="absolute left-[10%] top-[25%] w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] z-0">
          <span className="text-black font-serif font-bold text-xl">$</span>
        </motion.div>
        <motion.div style={{ y: coin2Y }} className="absolute right-[10%] top-[40%] w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] z-0">
          <span className="text-black font-serif font-bold text-lg">$</span>
        </motion.div>

        {/* Header */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-6xl mb-24">
          <div className="text-[#D4AF37] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] mb-6 flex items-center justify-center w-full relative">
            <span className="w-12 h-[1px] bg-[#D4AF37]/50 absolute left-1/2 -translate-x-[150px]" />
            YOUR FIRST LAUNCH
            <span className="w-12 h-[1px] bg-[#D4AF37]/50 absolute right-1/2 translate-x-[150px]" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight">
            Watch HIM <span className="italic text-[#D4AF37] font-medium">grow.</span>
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="relative z-20 flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24 w-full max-w-6xl px-4">
          
          {/* Left Card: Character/Video */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-[300px] h-[400px] rounded-[24px] border border-[#D4AF37]/30 bg-[#141414]/80 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.05)] flex items-center justify-center">
              {/* Video Container (Clips the video only) */}
              <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-[24px]">
                 <video 
                   className="absolute inset-0 w-full h-full object-cover scale-[2.5]"
                   src="/laptop.mp4"
                   autoPlay
                   loop
                   muted
                   playsInline
                 />
                 
                 {/* Inner glow */}
                 <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_50px_rgba(212,175,55,0.05)] pointer-events-none" />
              </div>

              {/* Time-based Random Badges (Max 2 at a time, slow loop) */}
              
              {/* Sale */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 0, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 top-[15%] -left-[60px] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Sale</div>
                  <div className="text-sm text-white font-mono font-medium">+$149.00</div>
                </div>
              </motion.div>

              {/* Review */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 8, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 top-[40%] -right-[70px] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Review</div>
                  <div className="text-sm text-white font-mono font-medium">5.0 / 5.0</div>
                </div>
              </motion.div>

              {/* Traffic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 4, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 bottom-[15%] -left-[50px] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Traffic</div>
                  <div className="text-sm text-white font-mono font-medium">+312% Surge</div>
                </div>
              </motion.div>

              {/* Followers */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 12, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 -top-[30px] right-[15%] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Followers</div>
                  <div className="text-sm text-white font-mono font-medium">+1,204</div>
                </div>
              </motion.div>

              {/* Revenue */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 2, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 -bottom-[35px] right-[20%] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Revenue</div>
                  <div className="text-sm text-white font-mono font-medium">+$8,420</div>
                </div>
              </motion.div>

              {/* Conversion */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 10, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 bottom-[25%] -right-[60px] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Conversion</div>
                  <div className="text-sm text-white font-mono font-medium">+4.2% Rate</div>
                </div>
              </motion.div>

              {/* Active */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.8, 1, 1, 0.8, 0.8], y: [10, 0, 0, -10, -10] }}
                transition={{ duration: 14, repeat: Infinity, delay: 6, times: [0, 0.035, 0.25, 0.285, 1], ease: "easeInOut" }}
                className="absolute z-20 -top-[25px] left-[15%] bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <div>
                  <div className="text-[9px] text-[#D4AF37]/70 uppercase font-bold tracking-wider">Active</div>
                  <div className="text-sm text-white font-mono font-medium">12,403 Users</div>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 text-center">
               <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono mb-3">RAHUL • DAY 42 • ₹3.2L EARNED</div>
               <div className="text-xl font-serif italic text-white/90 font-light">"First payout hit. Still smiling."</div>
            </div>
          </div>

          {/* Right Card: Dashboard Widget */}
          <div className="relative w-full max-w-[550px] h-[380px] rounded-[24px] border border-[#D4AF37]/20 bg-[#0F0F0F]/90 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-10 flex flex-col justify-start overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start z-10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">REVENUE • LIVE</span>
              </div>
              <div className="bg-[#D4AF37] text-[#080808] text-[11px] font-bold px-4 py-1.5 rounded-md tracking-wider">
                YOUR 75%
              </div>
            </div>

            {/* Revenue Amount (Scroll Driven) */}
            <div className="z-10">
               <motion.div className="text-6xl font-serif text-white tracking-tight mb-3">
                 {formattedRevenue}
               </motion.div>
               <motion.div className="text-[#4ADE80] text-xs font-mono font-bold tracking-wide">
                 {formattedPercent}
               </motion.div>
            </div>

            {/* Line Chart Animation (Scroll Driven) */}
            <div className="absolute bottom-0 left-0 w-full h-[180px] flex items-end px-10 pb-10">
               <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <motion.path 
                   d="M 0,90 Q 20,85 40,60 T 70,30 T 100,5" 
                   fill="none" 
                   stroke="#D4AF37" 
                   strokeWidth="2.5"
                   strokeLinecap="round"
                   style={{ pathLength: scrollYProgress }}
                 />
                 <motion.path 
                   d="M 0,90 Q 20,85 40,60 T 70,30 T 100,5 L 100,100 L 0,100 Z" 
                   fill="url(#chart-gradient)" 
                   style={{ opacity: graphOpacity }}
                 />
                 <defs>
                   <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="rgba(212,175,55,0.15)" />
                     <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                   </linearGradient>
                 </defs>
                 
                 {/* Glowing dot at the end (Scroll Driven Scale) */}
                 <motion.circle 
                   cx="100" 
                   cy="5" 
                   r="7" 
                   fill="rgba(212,175,55,0.25)"
                   style={{ scale: dotScale, opacity: dotScale }}
                 />
                 <motion.circle 
                   cx="100" 
                   cy="5" 
                   r="2.5" 
                   fill="#D4AF37"
                   style={{ scale: dotScale }}
                 />
                 <motion.circle 
                   cx="100" 
                   cy="5" 
                   r="1" 
                   fill="#FFFFFF"
                   style={{ scale: dotScale }}
                 />
               </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-5 left-10 right-10 flex justify-between text-[9px] text-white/30 font-mono tracking-widest z-10">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
