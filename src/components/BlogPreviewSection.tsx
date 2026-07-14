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
    <section id="blog" className="w-full flex justify-center py-24 md:py-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#FACC15] font-serif italic text-xl md:text-2xl">XII</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#FACC15]/50"></div>
          <span className="text-[#FACC15] font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            Creator Resources
          </span>
        </div>

        <div className="w-full flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-serif font-light leading-[1.1]">
            Insights from the <br />
            <span className="text-[#FACC15] italic">frontlines.</span>
          </h2>
          <button className="hidden md:block text-white/50 hover:text-[#FACC15] transition-colors border-b border-transparent hover:border-[#FACC15] pb-1 text-sm font-mono uppercase tracking-widest">
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
              className="group cursor-pointer flex flex-col"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${post.image} border border-white/5 mb-6 overflow-hidden relative`}>
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white tracking-widest uppercase">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/40 text-xs font-mono tracking-widest uppercase mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl text-white font-serif group-hover:text-[#FACC15] transition-colors leading-snug">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 text-white/50 hover:text-[#FACC15] transition-colors border-b border-white/20 pb-1 text-sm font-mono uppercase tracking-widest mx-auto">
          View All Posts
        </button>
      </div>
    </section>
  );
}
