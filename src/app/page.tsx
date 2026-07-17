"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { HeroWebGL } from "@/components/HeroWebGL";
import { HeroBottomButtons } from "@/components/HeroBottomButtons";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WatchHimGrowSection } from "@/components/WatchHimGrowSection";
import { PitchSection } from "@/components/PitchSection";
import { TheDealSection } from "@/components/TheDealSection";
import { WhoItsForSection } from "@/components/WhoItsForSection";
import { EarlyPartnersSection } from "@/components/EarlyPartnersSection";
import { FAQSection } from "@/components/FAQSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { CalendlySection } from "@/components/CalendlySection";
import { FooterSection } from "@/components/FooterSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { AboutSection } from "@/components/AboutSection";
import { StairsScrollSection } from "@/components/StairsScrollSection";
import { HandScrollSection } from "@/components/HandScrollSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { FreeAuditSection } from "@/components/FreeAuditSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function Home() {
  useEffect(() => {
    // Only keeping essential window logic if necessary, though scroll-based active state was unused by layout.
    // Removed IntersectionObserver as the active section state wasn't consumed.
  }, []);

  return (
    <main 
      className="relative min-h-screen w-full overflow-x-clip bg-[#ffff00] flex flex-col items-center justify-center"
    >
      <Navbar />
      <div 
        id="main-scroll-container"
        className="relative z-40 w-full flex flex-col text-text-primary"
      >
        {/* HERO SECTION (100svh) */}
        <div id="intro" className="relative h-[100svh] w-full bg-[#ffff00] z-0 overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full"
          >
            <HeroWebGL />
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <div className="pointer-events-auto h-full w-full">
                <HeroBottomButtons />
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE BUILD FOR YOU SECTION (WE DESIGN & SHIP) */}
        <WhatWeBuildSection />

        {/* STAGGERED REVIEWS SECTION (RESTORED) */}
        <ReviewsSection />

        {/* BUILD SECTION (REMOVED AS PER USER REQUEST) */}

        {/* WATCH HIM GROW SECTION (100vh) */}
        <WatchHimGrowSection />

        {/* THE PITCH SECTION */}
        <PitchSection />

        {/* SECTIONS WITH ROUGH NOISE BACKGROUND */}
        <div className="relative w-full">
          {/* Global Noise Overlay Removed for Performance */}

          {/* MARQUEE SECTION */}
          <MarqueeSection />

          {/* ABOUT SECTION */}
          <AboutSection />

          <StairsScrollSection />
          <HandScrollSection />
          
          {/* WHY CHOOSE US SECTION */}
          <WhyChooseUsSection />

          {/* PORTFOLIO SECTION */}
          <PortfolioSection />



          {/* THE DEAL SECTION */}
          <TheDealSection />

          {/* WHO IT'S FOR SECTION */}
          <WhoItsForSection />

          {/* EARLY PARTNERS SECTION */}
          <EarlyPartnersSection />

          {/* FAQ SECTION */}
          <FAQSection />

          {/* OUR TEAM SECTION */}
          <OurTeamSection />

          {/* FREE FUNNEL AUDIT */}
          <FreeAuditSection />

          {/* BLOG / RESOURCES */}
          <BlogPreviewSection />
        </div>

        {/* FINAL CTA SECTION */}
        <FinalCtaSection />

        {/* CALENDLY SCHEDULE SECTION */}
        <CalendlySection />
        
        {/* NEWSLETTER SECTION */}
        <NewsletterSection />

        {/* NEW FOOTER SECTION */}
        <FooterSection />
      </div>

      
    </main>
  );
}
