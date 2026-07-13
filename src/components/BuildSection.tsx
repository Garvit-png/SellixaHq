"use client";

import { motion } from "framer-motion";
import { SegmentedControl } from "./SegmentedControl";
import { BoatRevealText } from "./BoatRevealText";
import WavyShader from "./ui/wavy-shader-animation";

export function BuildSection() {
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section 
      id="build" 
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-28 md:pt-40 pb-36 overflow-hidden bg-[#090909]"
    >
      {/* Wavy Shader Background */}
      <WavyShader speed={0.015} className="absolute inset-0 z-0 opacity-60" />
      
      {/* Golden glow from left */}
      <div className="absolute top-0 left-[-20%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(244,180,0,0.08)_0%,transparent_70%)] z-0 rounded-full blur-[100px]" />
      
      {/* Soft green glow from bottom right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(0,255,128,0.04)_0%,transparent_70%)] z-0 rounded-full blur-[120px]" />

      {/* Top Left Title - Boat Reveal Animation */}
      <div className="absolute top-8 left-6 md:top-12 md:left-16 z-30">
        <BoatRevealText />
      </div>

      <div className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-5xl">

        {/* Editorial Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-extralight tracking-tight mb-8 leading-tight">
          <motion.div 
            custom={0}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#F5F5F5]"
          >
            Your <span className="text-accent font-light">course.</span>
          </motion.div>
          <motion.div 
            custom={1}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#F5F5F5]"
          >
            Your <span className="text-accent font-light">materials.</span>
          </motion.div>
          <motion.div 
            custom={2}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#F5F5F5]"
          >
            Your <span className="text-accent font-light">theme.</span>
          </motion.div>
        </h2>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[#D1D1D1] text-lg sm:text-xl font-normal max-w-[600px] leading-relaxed mb-4"
        >
          We construct premium digital infrastructures for top-tier creators. Enter the next stage of your business evolution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SegmentedControl />
        </motion.div>

      </div>
    </section>
  );
}
