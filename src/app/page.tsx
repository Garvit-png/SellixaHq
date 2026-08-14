"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { HeroWebGL } from "@/components/HeroWebGL";
import { HeroBottomButtons } from "@/components/HeroBottomButtons";

// ─── Eager (above fold) ───────────────────────────────────────────────────────
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { ReviewsSection } from "@/components/ReviewsSection";
// ─── Lazy (below fold) ────────────────────────────────────────────────────────
const WatchHimGrowSection   = dynamic(() => import("@/components/WatchHimGrowSection").then(m => ({ default: m.WatchHimGrowSection })), { ssr: false });
const PitchSection          = dynamic(() => import("@/components/PitchSection").then(m => ({ default: m.PitchSection })), { ssr: false });
const MarqueeSection        = dynamic(() => import("@/components/MarqueeSection").then(m => ({ default: m.MarqueeSection })));
const AboutSection          = dynamic(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const StairsScrollSection   = dynamic(() => import("@/components/StairsScrollSection").then(m => ({ default: m.StairsScrollSection })));
const HandScrollSection     = dynamic(() => import("@/components/HandScrollSection").then(m => ({ default: m.HandScrollSection })));
const WhyChooseUsSection    = dynamic(() => import("@/components/WhyChooseUsSection").then(m => ({ default: m.WhyChooseUsSection })));
const PortfolioSection      = dynamic(() => import("@/components/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const TheDealSection        = dynamic(() => import("@/components/TheDealSection").then(m => ({ default: m.TheDealSection })));
const WhoItsForSection      = dynamic(() => import("@/components/WhoItsForSection").then(m => ({ default: m.WhoItsForSection })));
const EarlyPartnersSection  = dynamic(() => import("@/components/EarlyPartnersSection").then(m => ({ default: m.EarlyPartnersSection })));
const FAQSection            = dynamic(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const OurTeamSection        = dynamic(() => import("@/components/OurTeamSection").then(m => ({ default: m.OurTeamSection })));
const FreeAuditSection      = dynamic(() => import("@/components/FreeAuditSection").then(m => ({ default: m.FreeAuditSection })));
const BlogPreviewSection    = dynamic(() => import("@/components/BlogPreviewSection").then(m => ({ default: m.BlogPreviewSection })));
const FinalCtaSection       = dynamic(() => import("@/components/FinalCtaSection").then(m => ({ default: m.FinalCtaSection })));
const CalendlySection       = dynamic(() => import("@/components/CalendlySection").then(m => ({ default: m.CalendlySection })), { ssr: false });
const NewsletterSection     = dynamic(() => import("@/components/NewsletterSection").then(m => ({ default: m.NewsletterSection })));
const FooterSection         = dynamic(() => import("@/components/FooterSection").then(m => ({ default: m.FooterSection })));

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#ffff00] flex flex-col items-center justify-center">
      <Navbar />
      <div id="main-scroll-container" className="relative z-40 w-full flex flex-col text-text-primary">

        {/* HERO SECTION */}
        <div id="intro" className="relative h-[100svh] w-full bg-[#ffff00] z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <HeroWebGL />
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <div className="pointer-events-auto h-full w-full">
                <HeroBottomButtons />
              </div>
            </div>
          </div>
        </div>

        <WhatWeBuildSection />
        <ReviewsSection />
        <WatchHimGrowSection />
        <PitchSection />

        <div className="relative w-full">
          <MarqueeSection />
          <AboutSection />
          <StairsScrollSection />
          <HandScrollSection />
          <WhyChooseUsSection />
          <PortfolioSection />
          <TheDealSection />
          <WhoItsForSection />
          <EarlyPartnersSection />
          <FAQSection />
          <OurTeamSection />
          <FreeAuditSection />
          <BlogPreviewSection />
        </div>

        <FinalCtaSection />
        <CalendlySection />
        <NewsletterSection />
        <FooterSection />
      </div>
    </main>
  );
}
