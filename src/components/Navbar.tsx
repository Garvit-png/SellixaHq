"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border" : "py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-heading font-bold">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-black">
            <Sparkles size={14} />
          </div>
          Aura
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {["Features", "Ecosystem", "Testimonials", "FAQ"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton variant="secondary" className="px-5 py-2.5 text-sm">
            Log In
          </MagneticButton>
        </div>

        <button className="md:hidden text-text-primary" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 p-2" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            {["Features", "Ecosystem", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading text-text-primary hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <MagneticButton variant="primary" onClick={() => setMobileMenuOpen(false)}>
              Log In
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
