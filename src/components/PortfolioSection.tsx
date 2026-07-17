"use client";

import { AnimatedTestimonialGrid } from '@/components/ui/testimonial-2';

// --- SAMPLE DATA ---
const testimonials = [
  { imgSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300', alt: 'Trade Pro', handle: '@tradepro', growth: 120 },
  { imgSrc: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300', alt: 'Build SaaS', handle: '@buildsaas', growth: 340 },
  { imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300', alt: 'Fit Life', handle: '@fitlife', growth: 215 },
  { imgSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300', alt: 'UI God', handle: '@ui_god', growth: 180 },
  { imgSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', alt: 'Creator HQ', handle: '@creatorhq', growth: 420 },
  { imgSrc: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=300', alt: 'Edit Master', handle: '@editmaster', growth: 155 },
  { 
    imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', 
    alt: 'Dev Guru', 
    handle: '@DEVGURU',
    growth: 250
  },
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
