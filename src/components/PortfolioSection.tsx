"use client";

import FlowingMenu from '@/components/ui/FlowingMenu';

const successStories = [
  { 
    link: 'https://www.instagram.com/ishadhankhar21/', 
    text: 'Isha Dhankhar — 240% Growth', 
    image: '/placeholder-isha.jpeg' // Insert Isha's photo here
  },
  { 
    link: '#', 
    text: 'Ashish Chhipa — 180% Revenue Boost', 
    image: '/placeholder-ashish.jpeg' // Insert Ashish's photo here
  },
  { 
    link: 'https://www.instagram.com/rohitfitpreneur/', 
    text: 'Rohit Sah — 275% Scale', 
    image: '/rohit_sah.jpeg' // ✅ Rohit's photo already exists
  },
  { 
    link: 'https://www.instagram.com/poonamchaudharyofficial/', 
    text: 'Poonam Chaudhary — 195% Growth', 
    image: '/placeholder-poonam.jpeg' // Insert Poonam's photo here
  },
  { 
    link: '#', 
    text: 'Kush Adhana — 310% Expansion', 
    image: '/placeholder-kush.jpeg' // Insert Kush's photo here
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full bg-[#050505] overflow-hidden">
      {/* Paint spill transition from yellow section above */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current">
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Minimal Header */}
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-light leading-none tracking-tight">
            Success <span className="text-[#ffff00] italic">stories</span>
          </h2>
        </div>

        {/* FlowingMenu */}
        <div className="w-full" style={{ height: '600px' }}>
          <FlowingMenu 
            items={successStories}
            speed={15}
            textColor="#ffffff"
            bgColor="#050505"
            marqueeBgColor="#ffff00"
            marqueeTextColor="#050505"
            borderColor="#ffff00"
          />
        </div>
      </div>
    </section>
  );
}
