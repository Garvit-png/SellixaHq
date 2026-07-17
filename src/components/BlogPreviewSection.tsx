"use client";

import { motion } from "framer-motion";

export function BlogPreviewSection() {
  const posts = [
    {
      title: "How to Price Your First Digital Product",
      date: "Oct 12, 2026",
      category: "Strategy",
      readTime: "5 min read",
      image: "from-[#111] to-[#0A0A0A]" // Using gradient as placeholder
    },
    {
      title: "The 3 Pillars of a High-Converting Funnel",
      date: "Oct 05, 2026",
      category: "Growth",
      readTime: "7 min read",
      image: "from-[#1A1A1A] to-[#050505]"
    },
    {
      title: "Why Most Creator Businesses Fail in Year One",
      date: "Sep 28, 2026",
      category: "Insights",
      readTime: "4 min read",
      image: "from-[#0D0D0D] to-[#000]"
    }
  ];

  return (
    <section id="blog" className="w-full flex justify-center py-24 md:py-32 bg-[#ffff00] relative z-20 overflow-hidden">
      {/* Paint spill transition from the black FreeAuditSection */}
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

      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10 mt-12 md:mt-24">
        
        {/* Section Header */}
        <div className="w-full flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl text-black font-serif font-light leading-[1.1]">
            Insights from the <br />
            <span className="text-black italic font-bold">frontlines.</span>
          </h2>
          <button className="hidden md:block text-black/50 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1 text-sm font-mono uppercase tracking-widest">
            View All Posts
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${post.image} border border-black/5 mb-6 overflow-hidden relative`}>
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 text-[10px] font-mono text-white tracking-widest uppercase">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-black/60 text-xs font-mono tracking-widest uppercase mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-black/30"></span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl text-black font-serif group-hover:text-black/70 transition-colors leading-snug">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 text-black/50 hover:text-black transition-colors border-b border-black/20 pb-1 text-sm font-mono uppercase tracking-widest mx-auto">
          View All Posts
        </button>
      </div>
    </section>
  );
}
