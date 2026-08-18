"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface WhatsAppWidgetProps {
  phoneNumber?: string; // Format: 919876543210 (country code + number, no +)
  message?: string;
}

export function WhatsAppWidget({ 
  phoneNumber = "919876543210", // ADD YOUR WHATSAPP NUMBER HERE
  message = "Hi! I'm interested in learning more about Sellixa's services." 
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-1"
          aria-label="Open WhatsApp Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full rounded-full bg-white flex items-center justify-center"
              >
                <X className="w-5 h-5 text-[#25D366]" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full rounded-full bg-white flex items-center justify-center"
              >
                <Image src="/wp_logo_2.webp" alt="WhatsApp" width={34} height={34} className="rounded-sm" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-[#25D366]"></span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#050505] text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg pointer-events-none"
            >
              Chat with us
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-[#050505] border-b-[6px] border-b-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Image src="/wp_logo_2.webp" alt="WhatsApp" width={28} height={28} className="rounded-sm" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Sellixa Team</h3>
                <p className="text-white/80 text-xs">Typically replies within minutes</p>
              </div>
            </div>

            {/* Message */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <p className="text-gray-800 text-sm">
                  👋 Hi there! How can we help you today?
                </p>
              </div>
              <div className="text-xs text-gray-400 text-center">
                We&apos;ll respond as soon as possible
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-white border-t border-gray-100">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Image src="/wp_logo_2.webp" alt="WhatsApp" width={20} height={20} className="rounded-sm" />
                Start Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
