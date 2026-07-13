import { motion } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { cn } from "@/lib/utils";
import { SegmentedControl } from "./SegmentedControl";
import { BoatRevealText } from "./BoatRevealText";

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
      className="relative flex min-h-screen w-full shrink-0 flex-col items-center justify-center overflow-hidden bg-[#090909]"
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:top-12 z-40 pointer-events-none">
        <BoatRevealText />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <GLSLHills />
      </div>
      <div className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-5xl pointer-events-none mt-20">
        {/* Editorial Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-extralight tracking-tight mb-8 leading-tight">
          <motion.div custom={0} variants={lineVariants} initial="hidden" animate="visible" className="text-[#F5F5F5]">
            Your <span className="text-accent font-heading italic tracking-normal">course.</span>
          </motion.div>
          <motion.div custom={1} variants={lineVariants} initial="hidden" animate="visible" className="text-[#F5F5F5]">
            Your <span className="text-accent font-heading italic tracking-normal">materials.</span>
          </motion.div>
          <motion.div custom={2} variants={lineVariants} initial="hidden" animate="visible" className="text-[#F5F5F5]">
            Your <span className="text-accent font-heading italic tracking-normal">theme.</span>
          </motion.div>
        </h2>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
          className="text-[#D1D1D1] text-lg sm:text-xl font-normal max-w-[600px] mx-auto leading-relaxed mb-12"
        >
          We construct premium digital infrastructures for top-tier creators. Enter the next stage of your business evolution.
        </motion.p>
        
        <motion.div className="pointer-events-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
          <SegmentedControl />
        </motion.div>
      </div> 
    </section>
  )
}
