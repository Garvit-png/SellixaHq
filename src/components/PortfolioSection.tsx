"use client";

import { AnimatedTestimonialGrid } from '@/components/ui/testimonial-2';

// --- SAMPLE DATA ---
const testimonials = [
  { imgSrc: '/ashish chhipa.jpeg', alt: 'Ashish Chhipa', handle: '@ashish', growth: 180 },
  { imgSrc: '/Isha dhankhar.jpeg', alt: 'Isha Dhankhar', handle: '@ishadhankhar21', link: 'https://www.instagram.com/ishadhankhar21/', growth: 240, objectPosition: 'top' },
  { imgSrc: '/kush_adhana.jpeg', alt: 'Kush Adhana', handle: '@kush', growth: 310 },
  { imgSrc: '/poonam chaudhary asttrologer.jpeg', alt: 'Poonam Chaudhary', handle: '@poonamchaudharyofficial', link: 'https://www.instagram.com/poonamchaudharyofficial/', growth: 195 },
  { imgSrc: '/rohit_sah.jpeg', alt: 'Rohit Sah', handle: '@rohitfitpreneur', link: 'https://www.instagram.com/rohitfitpreneur/', growth: 275 },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full bg-[#050505] overflow-hidden">
      {/* Paint spill transition from the yellow WhyChooseUsSection */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      <div className="pt-24 md:pt-32">
        <AnimatedTestimonialGrid
          testimonials={testimonials}
          badgeText="Success Stories"
          title={
            <>
              Success stories we've
              <br />
              <span className="text-[#ffff00] italic font-bold">engineered.</span>
            </>
          }
          description="Learn why top creators and professionals trust our infrastructure to scale their customer journeys."
          ctaText="Read Success Stories"
          ctaHref="#"
        />
      </div>
    </section>
  );
}
