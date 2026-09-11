"use client";

import dynamic from "next/dynamic";
import { FadeUp, TypeWriter } from "@/components/AnimateIn";
import type { BookCfg } from "@/components/ui/books-showcase";

// BooksShowcase uses Three.js — keep it out of the SSR bundle
const BooksShowcase = dynamic(
  () => import("@/components/ui/books-showcase").then((m) => ({ default: m.BooksShowcase })),
  { ssr: false, loading: () => <div className="h-full w-full" /> }
);

const BLOG_BOOKS: BookCfg[] = [
  {
    id: "pricing",
    title: "How to Price Your First Digital Product",
    author: "Sellixa Studio",
    year: "2026",
    stars: 5,
    desc: "And Why Most Creators Get It Wrong. A sharp, practical breakdown of pricing psychology, perceived value, and the exact frameworks top digital creators use to price their first offer.",
    images: { front: "/blog_pricing_cover.png" },
    spineBg: "#ffff00",
    spineInk: "#000000",
    spineFont: "700 34px Georgia",
    backBg: "#111111",
    backInk: "255,255,240",
    edge: "#f5f0dc",
    ctaHref: "/How to Price Your First Digital Product (And Why Most Creators Get It Wrong).pdf",
    ctaLabel: "Read PDF ↗",
    chapters: [
      "Why Pricing is a Story",
      "The Anchor Effect",
      "Perceived vs Real Value",
      "Tiered Offer Structures",
      "Launch Pricing vs Evergreen",
      "What the Data Says",
    ],
  },
  {
    id: "funnels",
    title: "The 3 Funnels Behind Every High-Converting Launch",
    author: "Sellixa Studio",
    year: "2026",
    stars: 5,
    desc: "Every successful digital product launch runs on one of three funnel architectures. This guide maps each one, explains when to use it, and shows you exactly how to build it for your audience.",
    images: { front: "/blog_funnel_cover.png" },
    spineBg: "#0a0a0a",
    spineInk: "#ffff00",
    spineFont: "700 30px Georgia",
    backBg: "#0a0a0a",
    backInk: "255,255,0",
    edge: "#2a2a2a",
    ctaHref: "/The 3 Funnels Behind Every High-Converting Digital Product Launch.pdf",
    ctaLabel: "Read PDF ↗",
    chapters: [
      "The Tripwire Funnel",
      "The Webinar Funnel",
      "The Launch Funnel",
      "Audience Segmentation",
      "Email Sequences That Convert",
      "Post-Launch Optimization",
    ],
  },
  {
    id: "failure",
    title: "Why Most Businessmen Fail in Their First Year",
    author: "Sellixa Studio",
    year: "2026",
    stars: 4,
    desc: "It's Rarely the Product. An honest look at the operational, psychological, and strategic mistakes that sink first-year businesses — and the patterns that separate founders who survive from those who don't.",
    images: { front: "/blog_failure_cover.png" },
    spineBg: "#1a0a0a",
    spineInk: "#ff6b6b",
    spineFont: "700 30px Georgia",
    backBg: "#1a0a0a",
    backInk: "255,107,107",
    edge: "#3a1a1a",
    ctaHref: "/Why Most Businessmen Fail in Their First Year (It's Rarely the Product).pdf",
    ctaLabel: "Read PDF ↗",
    chapters: [
      "The Ego Trap",
      "Cash Flow vs Profit",
      "Hiring Too Fast",
      "Marketing Neglect",
      "The Pivot Dilemma",
      "Founder Mental Health",
    ],
  },
];

// PDF paths are embedded directly on each BookCfg via ctaHref
export function BlogPreviewSection() {
  return (
    <section
      id="blog"
      className="w-full flex flex-col items-center bg-[#ffff00] relative z-20 overflow-hidden"
    >
      {/* Paint-spill transition from the black FreeAuditSection */}
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

      {/* Section header */}
      <div className="max-w-6xl w-full flex flex-col items-start px-4 md:px-8 relative z-10 mt-20 md:mt-28 pb-4">
        <FadeUp delay={0.05}>
          <h2 className="text-3xl md:text-4xl text-black font-serif font-semibold leading-[1.2]">
            Insights from the{" "}
            <TypeWriter
              text="frontlines."
              delay={0.3}
              speed={55}
              className="text-black italic font-bold"
              cursor={false}
            />
          </h2>
        </FadeUp>
      </div>

      {/* 3-D book showcase */}
      <div className="w-full relative z-10" style={{ height: "clamp(520px, 70vh, 780px)" }}>
        <BooksShowcase
          books={BLOG_BOOKS}
          heroTitle=""
          navTitle=""
          showNav={false}
          showCarousel={false}
          showDetailPanel={true}
          themeColors={{
            bgLight: "#ffff00",
            bgDark: "#ffff00",
            foregroundLight: "#000000",
            foregroundDark: "#000000",
            navy: "#ffff00",    // keeps background yellow even in detail state
            cream: "#000000",   // close button, primary CTA text
            pink: "#000000",    // detail panel title
            lav: "#111111",     // detail panel body text
            peri: "#111111",    // year / muted elements
          }}
          className="h-full min-h-0"
        />
      </div>

      <div className="pb-16" />
    </section>
  );
}
