"use client";

import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do I really pay nothing upfront?",
    answer: "Yes, absolutely nothing. We cover all production, design, and tech setup costs. We only make money when you make sales, taking a 25% commission on actual revenue."
  },
  {
    question: "Who owns the product & the theme?",
    answer: "You do. You own your brand, the custom theme, your domain, and all the digital products we create together."
  },
  {
    question: "What exactly do you design?",
    answer: "Everything. From the high-converting landing page and checkout flow, to the actual course materials, workbooks, ebooks, and promotional assets."
  },
  {
    question: "How long does production take?",
    answer: "Typically 2 to 4 weeks depending on the complexity of your digital product. We move fast so you can start monetizing your audience quickly."
  },
  {
    question: "What's my role in this?",
    answer: "You provide the core knowledge and film the raw content (if it's a video course). We handle all the heavy lifting, editing, packaging, and tech."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#050505] overflow-hidden">
      {/* Paint spill transition from the yellow EarlyPartnersSection */}
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

      <div className="max-w-3xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center mt-12 md:mt-24">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.05] tracking-tight mb-16 self-start md:self-center text-center">
          <span className="text-white">Honest </span>
          <span className="italic text-[#ffff00] font-bold">answers.</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="w-full space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`w-full rounded-[16px] border overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-[#ffff00] border-[#ffff00] shadow-[0_0_30px_rgba(255,255,0,0.2)]' : 'bg-[#ffff00] border-[#ffff00] hover:shadow-[0_0_20px_rgba(255,255,0,0.15)]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className="text-black font-sans font-bold text-[15px] md:text-[16px]">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-black" strokeWidth={2} />
                    ) : (
                      <Plus className="w-5 h-5 text-black" strokeWidth={2} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-black/80 font-sans font-medium text-[14px] md:text-[15px] leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Star Divider */}
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffff00]/50 to-transparent"></div>
          <div className="relative w-8 h-8 rounded-full border border-[#ffff00] bg-[#050505] flex items-center justify-center z-10">
            <Star className="w-3.5 h-3.5 text-[#ffff00] fill-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
