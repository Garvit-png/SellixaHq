"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";

export function TestimonialsColumn({
  testimonials,
  className = "",
  duration = 15,
}: {
  testimonials: { text: string; image: string; name: string; role: string }[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`relative flex flex-col gap-6 w-full max-w-sm shrink-0 overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          translateY: ["-50%", "0%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex flex-col gap-6">
          {[...new Array(2)].map((_, i) => (
            <Fragment key={i}>
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl bg-[#111111] backdrop-blur-sm border border-white/10 shadow-xl flex flex-col gap-4 text-left"
                >
                  <p className="text-white/90 font-medium text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover shadow-sm border border-white/20"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </span>
                      <span className="text-white/60 text-xs">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
