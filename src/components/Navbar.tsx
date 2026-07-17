"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navItems = [
  { label: "How it works", href: "#hand-process" },
  { label: "Split", href: "#deal" },
  { label: "Creators", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact us", href: "#audit" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    setScrolled(latest > 50);

    // Hide navbar links if scrolling down past 150px, show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (typeof window !== 'undefined') {
      // Find elements at the center of the navbar
      const elements = document.elementsFromPoint(window.innerWidth / 2, 30);
      
      let isYellow = false;
      let isBlack = false;
      
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.classList.contains('bg-[#ffff00]')) {
          isYellow = true;
          break;
        }
        if (el.classList.contains('bg-[#050505]') || el.classList.contains('bg-[#0B0B0B]') || el.classList.contains('bg-black')) {
          isBlack = true;
          break;
        }
      }
      
      if (isYellow) {
        setIsDarkBg(false); // Yellow background means we want black text
      } else if (isBlack) {
        setIsDarkBg(true);  // Black background means we want white text
      }
    }
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[padding] duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className={`max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between transition-colors duration-300 relative ${isDarkBg ? "text-white" : "text-black"}`}>
        {/* LOGO */}
        <div className="flex flex-col items-start cursor-default z-20">
          <span className="font-bold text-2xl tracking-tight leading-none">SELLIXA</span>
          <span className="text-[0.6rem] tracking-[0.3em] font-medium opacity-80 mt-1 uppercase">STUDIO</span>
        </div>

        {/* LINKS - These hide on scroll down */}
        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* APPLY BUTTON */}
        <div className="hidden md:block z-20">
          <MagneticButton variant="primary" className={`px-6 py-2 text-sm rounded-full font-medium transition-colors duration-300 ${isDarkBg ? "bg-white text-black hover:opacity-90" : "bg-black text-white hover:opacity-90"}`}>
            Apply
          </MagneticButton>
        </div>

        <button className="md:hidden z-20" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center text-white"
          >
            <button
              className="absolute top-10 right-6 md:right-12"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-8 text-2xl font-serif text-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#FFFFFF] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
