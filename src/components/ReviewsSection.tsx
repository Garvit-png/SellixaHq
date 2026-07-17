"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

// Unique reviews data
const testimonials = [
  { name: 'Danish Khaz', username: '@danish', body: 'Simple, practical, and genuinely helpful. One of the best digital resources I\'ve purchased.' },
  { name: 'Ankit Mishra', username: '@ankit', body: 'The eBook was easy to follow and gave me clear, actionable insights. Highly recommended!' },
  { name: 'Nupur', username: '@nupur', body: 'Loved how well-structured and practical the content was. Worth every penny.' },
  { name: 'Sourabh Pandharmise', username: '@sourabh', body: 'The concepts were explained in a simple way, making them easy to implement.' },
  { name: 'Vibha', username: '@vibha', body: 'A well-designed eBook with valuable knowledge. I really enjoyed reading it.' },
  { name: 'Nitin', username: '@nitin', body: 'Practical guidance with no unnecessary fluff. Exactly what I was looking for.' },
  { name: 'Sameer', username: '@sameer', body: 'Clear, informative, and packed with useful insights. Definitely a great investment.' },
  { name: 'Joynath Das', username: '@joynath', body: 'A practical guide that delivered exactly what it promised. Great value!' },
  { name: 'Samarth', username: '@samarth', body: 'Easy to understand, actionable, and genuinely useful. Highly recommended.' },
  { name: 'Naitik Kirar', username: '@naitik', body: 'One of the most well-structured digital guides I\'ve come across.' },
  { name: 'Raushan Kumar', username: '@raushan', body: 'The insights were clear and helped me approach things with more confidence.' },
  { name: 'Shah Farhan', username: '@farhan', body: 'Straight to the point with practical advice that actually makes sense.' },
  { name: 'Arvind Yogiji', username: '@arvind', body: 'Very informative and thoughtfully designed. A worthwhile purchase.' },
  { name: 'Mayank Chhetri', username: '@mayank', body: 'Excellent content with practical strategies that are easy to implement.' },
  { name: 'Arjun Rathour', username: '@arjun', body: 'Simple language, valuable lessons, and a great overall experience.' },
  { name: 'Johri Nidhi', username: '@nidhi', body: 'The content was engaging, practical, and exceeded my expectations.' },
  { name: 'Shaswat', username: '@shaswat', body: 'A well-crafted resource that provides real value from start to finish.' },
  { name: 'Vikash Kumar', username: '@vikash', body: 'Highly practical and easy to follow. Definitely worth reading.' },
  { name: 'Ankush Bittan', username: '@ankush', body: 'Loved the clarity and depth of the content. Highly recommended!' },
  { name: 'Shubham Kasyap', username: '@shubham', body: 'One of the best digital resources I\'ve purchased. Great experience overall.' },
  { name: 'Balram Verma', username: '@balram', body: 'Useful insights presented in a simple and actionable format.' },
  { name: 'Shital Verma', username: '@shital', body: 'An informative and well-organized guide that was worth every penny.' },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 bg-[#ffff00] border-[#ffff00] shrink-0 relative transition-all duration-300 hover:scale-[1.15] hover:z-50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer rounded-2xl !rounded-2xl overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-black flex items-center gap-1">
              {name}
              <span className="text-xs font-medium text-black/80">{country}</span>
            </figcaption>
            <p className="text-xs font-bold text-black/60">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm font-medium text-black/90">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-black text-white relative h-screen min-h-[900px] flex flex-col justify-center overflow-hidden">
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
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center shrink-0 mb-10"
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

        {/* 3D Marquee Container */}
        <div className="relative flex h-[700px] w-full max-w-[1200px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:400px] rounded-[2rem] bg-black/50">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform: 'translateX(-50px) translateY(0px) translateZ(0px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg) scale(1.1)',
            }}
          >
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s] hidden md:flex">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays for vertical marquee */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>

      </div>
    </section>
  );
}
