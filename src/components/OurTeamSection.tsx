"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeUp, TypeWriter } from "@/components/AnimateIn";

const team = [
  {
    name: "Shwetansh",
    role: "FOUNDER",
    image: "/shwe.jpeg",
    bio: "I don't sleep on ideas… I lose sleep because of them",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Soni",
    role: "SOCIAL MEDIA HEAD",
    image: "/soni.jpeg",
    bio: "Operations specialist ensuring seamless execution across all projects.",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Shivangi",
    role: "DESIGNER",
    image: "/shivangi88.jpeg",
    bio: "I spend more time aligning pixels than aligning my sleep schedule.",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Hridey",
    role: "CHIEF OF OPERATIONS",
    image: "/hridya2.png",
    bio: "Makes complex operations feel simple. If there's a faster way to do it, he's probably already built it.",
    imgClass: "scale-110",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Garvit",
    role: "TECH LEAD",
    image: "/garvit145.png",
    bio: "Life is not coming at you, It is coming from You. Be best",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Prabhas",
    role: "CO-FOUNDER",
    image: "/prabhas3.png",
    bio: "Has a solution ready before you finish explaining the problem",
    imgClass: "scale-110",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
  {
    name: "Ashwani",
    role: "OUTREACH HEAD",
    image: "/ashwini.jpeg",
    bio: "One meaningful connection can change a business forever.",
    imgClass: "scale-110",
    linkedin: "https://www.linkedin.com/company/sellixahq/"
  },
];

function TeamCard({ member, idx }: { member: typeof team[0]; idx: number }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped) {
      // First click: flip the card
      setFlipped(true);
    } else {
      // Second click (on back): open LinkedIn
      window.open(member.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full aspect-[3/4] [perspective:1000px] cursor-pointer"
      onMouseLeave={() => setFlipped(false)}
      onClick={handleClick}
    >
      {/* Hover lift — separate from flip */}
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -10 }}
      >

        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] overflow-hidden bg-[#050505] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover object-top ${member.name !== 'Garvit' ? 'filter grayscale-[0.3]' : ''} ${member.imgClass || ""}`}
            loading="lazy"
          />
          <div className="absolute top-0 right-0 h-[60%] w-12 bg-gradient-to-b from-black/90 to-transparent flex flex-col items-center pt-6 z-10">
            <span className="text-[#ffff00] font-mono text-[10px] uppercase tracking-[0.3em] font-bold" style={{ writingMode: 'vertical-rl' }}>
              {member.role}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
            <h4 className="text-white font-sans font-bold text-2xl md:text-3xl mb-1">{member.name}</h4>
          </div>
          {/* Tap hint */}
          <div className="absolute bottom-4 right-4 z-10 opacity-60">
            <span className="text-white/60 font-mono text-[9px] uppercase tracking-widest">tap to flip</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[20px] overflow-hidden bg-[#fafafa] border-2 border-black flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
          <div className="border-2 border-black rounded-[12px] px-5 py-2 bg-[#ffff00]/40 shadow-[4px_4px_0px_#000] transform -rotate-3 mb-4 mt-6">
            <h4 className="text-black font-sans font-bold text-2xl">{member.name}</h4>
          </div>
          <p className="text-black/70 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 transform rotate-2 font-bold">{member.role}</p>
          <svg width="60" height="12" viewBox="0 0 60 12" className="mb-6 opacity-60">
            <path d="M0,6 Q15,0 30,6 T60,6" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p className="text-black/90 font-sans text-[15px] leading-relaxed mb-8 transform -rotate-1 font-medium px-2">{member.bio}</p>
          <div className="mt-auto mb-2 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#0a66c2] border-2 border-[#0a66c2] flex items-center justify-center text-white shadow-[3px_5px_0px_#000]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="text-black/50 font-mono text-[9px] uppercase tracking-widest">tap to open</span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export function OurTeamSection() {
  return (
    <section id="our-team" className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#ffff00] overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[10vh] md:h-[15vh] text-[#050505] fill-current">
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10 mt-12 md:mt-24 flex flex-col items-center">

        <FadeUp delay={0.1} className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.05] tracking-tight">
            <span className="text-black">Meet the </span>
            <TypeWriter text="builders." delay={0.4} speed={60} className="italic text-black font-bold" cursor={false} />
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
