"use client";

import React from 'react';

const team = [
  {
    name: "Shwetansh",
    role: "FOUNDER",
    image: "/shwetansh4.png",
    bio: "I don’t sleep on ideas… I lose sleep because of them 😭🚀"
  },
  {
    name: "Prabhas",
    role: "CO-FOUNDER",
    image: "/prabhas3.png",
    bio: "Has a solution ready before you finish explaining the problem",
    imgClass: "scale-110"
  },
  {
    name: "Hriday",
    role: "CHIEF OF OPERATIONS",
    image: "/hridya2.png",
    bio: "Makes complex operations feel simple. If there’s a faster way to do it, he’s probably already built it.",
    imgClass: "scale-110"
  },
  {
    name: "Garvit",
    role: "TECH LEAD",
    image: "/garvit4.png",
    bio: "More interested in shipping meaningful products than collecting buzzwords. Building software that users remember and developers enjoy maintaining."
  },
  {
    name: "Drishti",
    role: "DESIGN",
    image: "/Drishti.jpeg",
    bio: "I treat every client call like the start of a great story"
  },
  {
    name: "Shivangi",
    role: "DESIGN",
    image: "/shivangi.jpeg",
    bio: "I spend more time aligning pixels than aligning my sleep schedule."
  },
  {
    name: "Soni",
    role: "OPERATIONS",
    image: "/soni.jpeg",
    bio: "Operations specialist ensuring seamless execution across all projects."
  },
  {
    name: "Ashwini",
    role: "OUTREACH HEAD",
    image: "/ashwini.jpeg",
    bio: "Operations specialist ensuring seamless execution across all projects.",
    imgClass: "scale-110"
  },
  {
    name: "Supriya",
    role: "OPERATIONS",
    image: "/supriya.jpeg",
    bio: "Dedicated team player driving operational excellence across projects."
  }
];

export function OurTeamSection() {
  return (
    <section id="our-team" className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#ffff00] overflow-hidden">
      {/* Paint spill transition from the black FAQSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#050505] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-6 md:px-12 relative z-10 mt-12 md:mt-24 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.05] tracking-tight mb-16 text-center">
          <span className="text-black">Meet the </span>
          <span className="italic text-black font-bold">builders.</span>
        </h2>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="group relative w-full aspect-[3/4] [perspective:1000px] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Card Inner Container - handles the flip */}
              <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] overflow-hidden bg-[#050505] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
                  {/* Background Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`absolute inset-0 w-full h-full object-cover object-top filter grayscale-[0.3] ${member.imgClass || ""}`}
                  />
                  
                  {/* Vertical Strip for Role */}
                  <div className="absolute top-0 right-0 h-[60%] w-12 bg-gradient-to-b from-black/90 to-transparent flex flex-col items-center pt-6 z-10">
                    <span 
                      className="text-[#ffff00] font-mono text-[10px] uppercase tracking-[0.3em] font-bold"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* Bottom Gradient Overlay for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0"></div>

                  {/* Name at Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                    <h4 className="text-white font-sans font-bold text-2xl md:text-3xl mb-1">{member.name}</h4>
                  </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[20px] overflow-hidden bg-[#fafafa] border-2 border-black flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
                  
                  {/* Name with Doodle Border */}
                  <div className="border-2 border-black rounded-[12px] px-5 py-2 bg-[#ffff00]/40 shadow-[4px_4px_0px_#000] transform -rotate-3 mb-4 mt-6">
                    <h4 className="text-black font-sans font-bold text-2xl">{member.name}</h4>
                  </div>
                  
                  <p className="text-black/70 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 transform rotate-2 font-bold">{member.role}</p>
                  
                  {/* Playful Squiggle Divider */}
                  <svg width="60" height="12" viewBox="0 0 60 12" className="mb-6 opacity-60">
                    <path d="M0,6 Q15,0 30,6 T60,6" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  
                  <p className="text-black/90 font-sans text-[15px] leading-relaxed mb-8 transform -rotate-1 font-medium px-2">
                    {member.bio}
                  </p>

                  {/* Socials on the Back (Doodle Style) */}
                  <div className="flex space-x-4 mt-auto mb-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#0a66c2] border-2 border-[#0a66c2] flex items-center justify-center text-white cursor-pointer hover:-translate-y-2 hover:scale-110 hover:shadow-[3px_5px_0px_#000] transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
