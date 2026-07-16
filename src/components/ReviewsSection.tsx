"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-black text-white relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Black & Yellow Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 animate-[moveGrid_5s_linear_infinite]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffff00 1px, transparent 1px), linear-gradient(to bottom, #ffff00 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content Container */}
      <div className="container z-10 mx-auto px-4 relative flex flex-col items-center justify-center h-full pt-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center shrink-0 mb-6"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.9 },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { type: "spring", damping: 15, stiffness: 100 } }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-thin tracking-tight mt-2 text-[#ffff00] drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]"
          >
            What our <span className="italic font-extralight">users say</span>
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-center mt-4 text-white/60 text-sm md:text-base max-w-sm"
          >
            See what our customers have to say about us and our proven processes.
          </motion.p>
        </motion.div>

        <div className="flex justify-center gap-6 w-full [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] flex-grow overflow-hidden max-h-[70vh]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

      </div>
    </section>
  );
}
