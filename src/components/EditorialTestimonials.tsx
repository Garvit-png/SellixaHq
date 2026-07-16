"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { 
    id: 1, 
    name: "Sarah Jenkins", 
    company: "DesignPro",
    role: "Creative Director", 
    category: "Brand Identity",
    layout: "portrait",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    quote: "The most seamless transition I've ever experienced. Moving my audience here was the best decision for my brand." 
  },
  { 
    id: 2, 
    name: "David Chen", 
    company: "Minimalist Studios",
    role: "Founder", 
    category: "Digital Product",
    layout: "landscape",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    quote: "Finally, a platform that feels as premium as the content I create. My community loves the new experience." 
  },
  { 
    id: 3, 
    name: "Elena Rodriguez", 
    company: "FitLife",
    role: "Head Coach", 
    category: "Course Launch",
    layout: "portrait",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    quote: "I was skeptical at first, but the revenue numbers don't lie. Incredible support and gorgeous design." 
  },
  { 
    id: 4, 
    name: "Marcus Webb", 
    company: "TechDaily",
    role: "Editor in Chief", 
    category: "Case Study",
    layout: "landscape",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    quote: "Setup took literally less than a day. It’s like they read my mind on what creators actually need." 
  },
  { 
    id: 5, 
    name: "Aisha Patel", 
    company: "Style&Co",
    role: "Founder", 
    category: "Creator Growth",
    layout: "portrait",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    quote: "Everything just works. My digital products are flying off the shelves because the checkout is so smooth." 
  },
  { 
    id: 6, 
    name: "Tom Hollander", 
    company: "CodeWorks",
    role: "Lead Engineer", 
    category: "Brand Identity",
    layout: "landscape",
    width: "w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop",
    quote: "The split is more than fair given how much heavy lifting they do. Best partner a creator could ask for." 
  }
];

// Inner Card Component to handle independent motion values
function TestimonialCard({
  testimonial,
  index,
  activeIndexFloat,
}: {
  testimonial: typeof testimonials[0];
  index: number;
  activeIndexFloat: MotionValue<number>;
}) {
  const transform = useTransform(activeIndexFloat, (current) => {
    const distance = index - current;
    
    // Spread them out horizontally
    const xOffset = distance * 55; // vw
    
    // Push them back in Z space
    const zOffset = -Math.abs(distance) * 400; // px
    
    // Rotate slightly towards the center
    const rotationY = distance * -45; // deg
    
    // Scale down cards further away
    const scale = Math.max(0.6, 1 - Math.abs(distance) * 0.15);

    return `translate3d(calc(-50% + ${xOffset}vw), -50%, ${zOffset}px) rotateY(${rotationY}deg) scale(${scale})`;
  });

  const opacity = useTransform(activeIndexFloat, (current) => {
    const distance = index - current;
    return Math.max(0, 1 - Math.abs(distance) * 0.55);
  });

  const filter = useTransform(activeIndexFloat, (current) => {
    const distance = index - current;
    const blurAmount = Math.min(10, Math.abs(distance) * 4);
    return `blur(${blurAmount}px)`;
  });

  const zIndex = useTransform(activeIndexFloat, (current) => {
    const distance = index - current;
    return Math.round(100 - Math.abs(distance) * 10);
  });

  return (
    <motion.div 
      className={`absolute top-1/2 left-1/2 ${testimonial.width} ${testimonial.layout === 'portrait' ? 'aspect-[4/5]' : 'aspect-square lg:aspect-[4/3]'} pointer-events-auto cursor-grab active:cursor-grabbing group origin-center will-change-transform`}
      style={{ transform, opacity, filter, zIndex }}
    >
      {/* Category Tag */}
      <div className="absolute -top-10 left-0 text-[10px] tracking-widest uppercase border border-black/10 px-3 py-1 rounded-full opacity-60 bg-white">
        {testimonial.category}
      </div>

      {/* Image Container with Overflow Hidden for Parallax/Zoom */}
      <div className="relative w-full h-full bg-[#f8f8f8] overflow-hidden">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
        
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
        
        {/* Text Content inside the image panel */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white flex flex-col justify-end h-full">
          
          {/* Quote */}
          <div className="overflow-hidden mb-6">
            <p className="text-lg md:text-2xl lg:text-3xl font-heading leading-snug font-medium transition-transform duration-700 ease-out origin-left group-hover:scale-[1.02]">
              "{testimonial.quote}"
            </p>
          </div>
          
          {/* Meta Info */}
          <div className="flex items-center gap-4 mt-auto">
            <div className="flex flex-col">
              <span className="font-semibold text-sm md:text-base tracking-wide">{testimonial.name}</span>
              <span className="text-xs md:text-sm text-white/60 font-light mt-0.5">
                {testimonial.role}, {testimonial.company}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function EditorialTestimonials() {
  return (
    <section className="relative w-full bg-white text-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Info */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-4 opacity-50">Client Stories</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading tracking-tight max-w-2xl leading-tight">
            Trusted by creators building premium digital brands.
          </h2>
          <p className="text-sm md:text-base opacity-60 mt-4 max-w-md font-sans">
            Every project represents measurable growth and a long-term partnership. We don't just build websites; we design digital empires.
          </p>
        </div>

        {/* Lightweight Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`relative w-full ${testimonial.layout === 'portrait' ? 'aspect-[4/5]' : 'aspect-square'} overflow-hidden rounded-xl shadow-lg group`}
            >
              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10 text-[10px] tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full text-white bg-black/40 backdrop-blur-sm">
                {testimonial.category}
              </div>

              {/* Image */}
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
                <p className="text-lg md:text-xl font-heading leading-snug font-medium mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col">
                  <span className="font-semibold tracking-wide">{testimonial.name}</span>
                  <span className="text-sm text-white/70 font-light mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
