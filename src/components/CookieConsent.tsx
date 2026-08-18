"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl px-5 py-4 flex flex-col gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-[15px] leading-snug mb-1">
                  Cookies on sellixa.com
                </p>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  We use cookies to understand how visitors use our site.{' '}
                  <Link href="/privacy-policy" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">
                    Privacy policy
                  </Link>
                </p>
              </div>

              {/* Dismiss X */}
              <button
                onClick={handleDecline}
                className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Dismiss"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Action row */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 bg-[#ffff00] text-black text-[13px] font-bold rounded-xl hover:bg-[#ffff00]/90 active:scale-[0.98] transition-all duration-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 py-2.5 bg-white/[0.06] border border-white/10 text-white/70 text-[13px] font-medium rounded-xl hover:bg-white/10 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
