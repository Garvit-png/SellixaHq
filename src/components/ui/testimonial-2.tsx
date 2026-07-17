import * as React from 'react';
import { motion, animate, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- TYPE DEFINITIONS ---
interface Testimonial {
  imgSrc: string;
  alt: string;
  handle?: string;
  growth?: number;
  objectPosition?: string; // custom crop position e.g. 'top', 'center', '50% 20%'
  link?: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

// --- PRE-DEFINED POSITIONS FOR THE IMAGES ---
const imagePositions = [
  // 1. Top-Left (@tradepro)
  { top: '5%', left: '15%', containerClass: 'hidden md:flex flex-col items-start', sizeClass: 'w-[72px] h-[72px]', hoverSizeClass: 'group-hover:!w-[130px] group-hover:!h-[130px]' },
  // 2. Top-Middle (@buildsaas)
  { top: '-2%', left: '55%', containerClass: 'hidden md:flex flex-col items-start', sizeClass: 'w-[64px] h-[64px]', hoverSizeClass: 'group-hover:!w-[120px] group-hover:!h-[120px]' },
  // 3. Top-Right (@fitlife)
  { top: '10%', left: '80%', containerClass: 'hidden md:flex flex-col items-start', sizeClass: 'w-[64px] h-[64px]', hoverSizeClass: 'group-hover:!w-[120px] group-hover:!h-[120px]' },
  // 4. Center-Left (@ui_god)
  { top: '40%', left: '10%', containerClass: 'hidden lg:flex flex-col items-start', sizeClass: 'w-[72px] h-[72px]', hoverSizeClass: 'group-hover:!w-[130px] group-hover:!h-[130px]' },
  // 5. Center-Right (@creatorhq)
  { top: '45%', left: '85%', containerClass: 'hidden lg:flex flex-col items-start', sizeClass: 'w-[72px] h-[72px]', hoverSizeClass: 'group-hover:!w-[130px] group-hover:!h-[130px]' },
  // 6. Bottom-Right (@editmaster)
  { bottom: '20%', left: '70%', containerClass: 'hidden md:flex flex-col items-start', sizeClass: 'w-[56px] h-[56px]', hoverSizeClass: 'group-hover:!w-[110px] group-hover:!h-[110px]' },
  // 7. Bottom-Left (@DEVGURU)
  { bottom: '15%', left: '22%', containerClass: 'hidden md:flex flex-col items-start', sizeClass: 'w-[72px] h-[72px]', hoverSizeClass: 'group-hover:!w-[130px] group-hover:!h-[130px]' },
  
  // Mobile Fallback Positions
  { top: '10%', left: '5%', containerClass: 'flex md:hidden flex-col items-start', sizeClass: 'w-[56px] h-[56px]', hoverSizeClass: 'group-hover:!w-[100px] group-hover:!h-[100px]' },
  { top: '5%', left: '80%', containerClass: 'flex md:hidden flex-col items-start', sizeClass: 'w-[64px] h-[64px]', hoverSizeClass: 'group-hover:!w-[110px] group-hover:!h-[110px]' },
  { bottom: '5%', left: '10%', containerClass: 'flex md:hidden flex-col items-start', sizeClass: 'w-[64px] h-[64px]', hoverSizeClass: 'group-hover:!w-[110px] group-hover:!h-[110px]' },
  { bottom: '10%', left: '80%', containerClass: 'flex md:hidden flex-col items-start', sizeClass: 'w-[56px] h-[56px]', hoverSizeClass: 'group-hover:!w-[100px] group-hover:!h-[100px]' },
];

// --- COUNTER COMPONENT ---
function Counter({ value }: { value: number }) {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  
  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(v) {
        node.textContent = v.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [value]);
  
  return <span ref={nodeRef}>{value}</span>;
}

// --- ANIMATION LOGIC ---
const imageVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 260, 
      damping: 20,
    } 
  },
};

const floatingAnimation = () => ({
  y: [0, Math.random() * -15 - 5, 0],
  transition: {
    duration: Math.random() * 4 + 5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
});

// --- COMPONENT ---
export const AnimatedTestimonialGrid = ({
  testimonials,
  badgeText = 'Success Stories',
  title,
  description,
  ctaText,
  ctaHref,
  className,
}: AnimatedTestimonialGridProps) => {

  return (
    <section
      className={cn(
        'relative w-full max-w-7xl mx-auto py-32 sm:py-48 px-4',
        className
      )}
    >
      {/* Absolutely Positioned Images */}
      {testimonials.slice(0, imagePositions.length).map((testimonial, index) => {
        const pos = imagePositions[index];
        
        return (
        <motion.div
          key={index}
          className={cn('absolute z-20', pos.containerClass)}
          style={{ 
            top: pos.top, 
            left: pos.left,
            bottom: pos.bottom,
          }}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.15, zIndex: 50 }}
          custom={index}
        >
          <motion.div animate={floatingAnimation()} className="relative flex flex-col items-start">
            {/* The Expandable Card */}
            <a 
              href={testimonial.link || "#"}
              target={testimonial.link ? "_blank" : undefined}
              rel={testimonial.link ? "noopener noreferrer" : undefined}
              className="peer group cursor-pointer relative flex items-center bg-transparent hover:bg-[#0a0a0a]/90 hover:backdrop-blur-xl border border-transparent hover:border-[#ffff00]/40 rounded-[24px] p-0 hover:p-1.5 shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-max max-w-max flex-row no-underline"
            >
              
              {/* Photo */}
              <div className={cn(
                "relative rounded-[24px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0 border border-white/5 group-hover:border-transparent group-hover:!rounded-[16px]",
                pos.sizeClass,
                pos.hoverSizeClass
              )}>
                <img src={testimonial.imgSrc} alt={testimonial.alt} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: testimonial.objectPosition ?? 'center' }} />
                

              </div>

              {/* Stats - Initially hidden, expands on hover */}
              {testimonial.growth !== undefined && (
                <div className="flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 whitespace-nowrap group-hover:px-3 text-left">
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider mb-0.5">{testimonial.handle}</span>
                  <div className="flex items-center text-[#00ff00] text-[12px] font-bold mt-0.5 tracking-wider justify-start">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +{testimonial.growth}% Growth
                  </div>
                  {testimonial.link && (
                    <div className="mt-2 text-[10px] font-bold text-[#ffff00] flex items-center gap-1 uppercase tracking-wider">
                      View Instagram <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              )}
            </a>

            {/* Display Handle below (disappears on hover) */}
            <div className="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-100 transform translate-y-0 peer-hover:opacity-0 peer-hover:-translate-y-2 w-full pointer-events-none mt-3 text-left">
              {testimonial.handle && (
                <span className="text-white/50 text-xs font-mono tracking-wide">{testimonial.handle}</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )})}

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-0">
        {badgeText && (
          <div className="mb-6 inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/90 border border-white/10 backdrop-blur-sm">
            {badgeText}
          </div>
        )}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 max-w-4xl font-serif leading-[1.1]">
          {title}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-white/60 mb-10 font-sans font-medium leading-relaxed">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-[#ffff00] px-8 py-4 text-sm font-bold text-black shadow-sm transition-transform hover:scale-105"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
