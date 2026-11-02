"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, X, Home,
  TrendingUp, Target, Users, DollarSign,
  Calendar, Layers, Award, Rocket, CheckCircle, ArrowRight, User, Upload, Sparkles
} from "lucide-react";

// ─── Slide data ──────────────────────────────────────────────────────────────

const slides = [
  {
    id: 1,
    title: "Sellixa V2",
    subtitle: "Talent-to-Venture Strategy",
    description: "Evidence-based strategy report — transforming creators into business ventures",
    icon: Rocket,
    date: "Research Date: 28 October 2026",
  },
  {
    id: 2,
    title: "Executive Summary",
    subtitle: "The Opportunity",
    description: "Indian creator economy is growing, but the real opportunity is focused.",
    icon: TrendingUp,
    keyPoints: [
      { label: "Market Size",     value: "₹3,000–3,500 Cr", sublabel: "Influencer marketing (2025)" },
      { label: "Growth Rate",     value: "~22% YoY",         sublabel: "Per Kofluence report"        },
      { label: "Active Creators", value: "4M+",              sublabel: "But only 0.2% monetise well" },
    ],
  },
  {
    id: 3,
    title: "The Problem",
    subtitle: "Current Market Gaps",
    description: "Most creators struggle to monetise beyond brand deals.",
    icon: Target,
    problems: [
      { issue: "No Product Launch Support", impact: "Creators can't build digital products alone"       },
      { issue: "Limited Brand Access",      impact: "Small creators ignored by big platforms"           },
      { issue: "Missing Operators",         impact: "No manufacturing/fulfilment network for products"  },
      { issue: "Capital Inaccessible",      impact: "Funding locked for sub-mid tier creators"          },
    ],
  },
  {
    id: 4,
    title: "Our Solution",
    subtitle: "Three Core Service Lines",
    description: "A managed creator-business studio with three revenue streams.",
    icon: Layers,
    services: [
      {
        name: "Studio Launch",
        desc: "Turn audience into digital products",
        margin: "55–70% margin",
        features: ["Product validation", "Storefront setup", "Funnel creation", "Revenue share"],
      },
      {
        name: "Brand Deals",
        desc: "Connect creators with MSMEs & D2C brands",
        margin: "15–20% fee",
        features: ["Creator matching", "Campaign management", "Reporting", "Payment handling"],
      },
      {
        name: "Ventures",
        desc: "Build consumer brands with validated demand",
        margin: "Equity stake",
        features: ["Operator network", "Manufacturing", "Retail strategy", "Brand building"],
      },
    ],
  },
  {
    id: 5,
    title: "Target Customers",
    subtitle: "Who We Serve",
    description: "Focusing on underserved segments with real commercial intent.",
    icon: Users,
    segments: [
      { type: "Nano/Micro Creators", range: "10k–500k followers",       why: "Many, reachable, need products",              priority: "HIGH"   },
      { type: "MSMEs/D2C Brands",    range: "₹50k–5L budgets",          why: "Real budgets for micro-creator collabs",      priority: "HIGH"   },
      { type: "Verified Operators",  range: "Manufacturing & fulfilment",why: "Partner network for product execution",       priority: "MEDIUM" },
      { type: "Mid/Large Creators",  range: "500k+ followers",           why: "Have agencies — later stage opportunity",     priority: "LOW"    },
    ],
  },
  {
    id: 6,
    title: "Revenue Model",
    subtitle: "Year 1 Base Case Projections",
    description: "Conservative estimates based on 100 active creators by month 12.",
    icon: DollarSign,
    revenue: [
      { source: "Brand Deal Fees",        desc: "90 deals @ ₹80k avg, 15% fee",  amount: "₹10.8L"  },
      { source: "Studio Setup Fees",      desc: "25 launches @ ₹35k each",        amount: "₹8.75L"  },
      { source: "Product Revenue Share",  desc: "₹60L GMV @ 25% share",           amount: "₹15L"    },
      { source: "Venture Build Fees",     desc: "1 pilot project",                 amount: "₹6L"     },
      { source: "Total Revenue",          desc: "",                                amount: "₹40.6L", highlight: true },
    ],
    costs: [
      { item: "Delivery Cost (~35%)",        amount: "₹14.2L" },
      { item: "Fixed Opex (Team + Tools)",   amount: "₹48L"   },
      { item: "Year 1 Operating Loss",       amount: "−₹22L",  highlight: true },
    ],
  },
  {
    id: 7,
    title: "90-Day Launch Plan",
    subtitle: "Experimental Validation Roadmap",
    description: "Prove the model before scaling. Clear gate at each phase.",
    icon: Calendar,
    phases: [
      {
        phase: "Days 1–30",  title: "Interview & Sell",
        goal: "Understand creator needs and secure first commitments",
        activities: ["30 creator interviews", "15 brand calls", "Legal templates done"],
        target: "3 pre-paid commitments", gate: "≥3 paying?",
      },
      {
        phase: "Days 31–60", title: "Deliver & Learn",
        goal: "Execute first projects and build case studies",
        activities: ["5 product launches", "3 brand campaigns", "10 operator partners"],
        target: "₹1.5L+ booked", gate: "≥50% margin?",
      },
      {
        phase: "Days 61–90", title: "Prove Repeat",
        goal: "Validate repeat business and refine pricing",
        activities: ["8 paid deals total", "2 case studies", "Pricing refined"],
        target: "25% repeat rate", gate: "Continue or pivot?",
      },
    ],
  },
  {
    id: 8,
    title: "Strategic Approach",
    subtitle: "Stage-Gate Model",
    description: "Start narrow, prove repeat revenue, then expand.",
    icon: Award,
    stages: [
      { stage: "Stage 1 (Now)",        focus: "Studio Launch",  why: "Fastest revenue, aligns incentives",            status: "ACTIVE",  color: "bg-black"  },
      { stage: "Stage 2 (Month 2+)",   focus: "Brand Deals",    why: "Monetise same creator relationships",           status: "READY",   color: "bg-black"   },
      { stage: "Stage 3 (Post-repeat)",focus: "Ventures",       why: "Only after validated demand + operator network",status: "FUTURE",  color: "bg-black" },
      { stage: "Deferred",             focus: "Capital Network",why: "Regulated, slow, heavy ops — defer entirely",   status: "ON HOLD", color: "bg-black/40"   },
    ],
  },
  {
    id: 9,
    title: "Competitive Landscape",
    subtitle: "How We're Different",
    description: "Discovery tools are crowded. Execution support for sub-mid creators is wide open.",
    icon: TrendingUp,
    competitors: [
      { name: "Kofluence",   model: "SaaS platform",   revenue: "Series B ₹103 Cr", gap: "Discovery only, no execution"        },
      { name: "Monk-E",      model: "Talent agency",    revenue: "₹97.8 Cr FY24",   gap: "Slow growth (2.2%), service-heavy"   },
      { name: "House of X",  model: "Creator D2C",      revenue: "₹6.5 Cr FY25",    gap: "Closest comparable, creator-dependent"},
    ],
    advantages: [
      "Focus on sub-mid creators (ignored by big platforms)",
      "Bundled product + brand deals — not just one",
      "Vetted operator network — no one else has this",
      "Vernacular + Tier 2–4 creators (growth segment)",
    ],
  },
  {
    id: 10,
    title: "12-Month Targets",
    subtitle: "What Good Looks Like",
    description: "Clear targets for Year 1. Break-even by Year 2.",
    icon: Award,
    targets: [
      { metric: "100 Active Creators",       sublabel: "End of Month 12"           },
      { metric: "25 Paying Brands",          sublabel: "Recurring relationship"     },
      { metric: "₹40.6L Earned Revenue",     sublabel: "Base case projection"       },
      { metric: "1 Venture Pilot",           sublabel: "Validated demand test"      },
      { metric: "≥50% Contribution Margin",  sublabel: "Unit economics proven"      },
      { metric: "≥25% Repeat Rate",          sublabel: "Product-market fit signal"  },
    ],
  },
  {
    id: 11,
    title: "Risks & Mitigations",
    subtitle: "What Could Go Wrong",
    description: "Five key risks and how we handle each one.",
    icon: Target,
    risks: [
      { risk: "Creator Bypass",           impact: "HIGH",   mitigation: "Revenue-share + bundled services, not one-off introductions" },
      { risk: "Agency-like Margins",      impact: "HIGH",   mitigation: "Productised packages, refuse deals below margin floor"       },
      { risk: "Regulatory (SEBI)",        impact: "SEVERE", mitigation: "No investor features in V1, counsel-reviewed contracts"      },
      { risk: "Fame Products Don't Repeat",impact: "MEDIUM",mitigation: "Presale validation before build, evergreen categories"       },
      { risk: "Cash Runs Out",            impact: "SEVERE", mitigation: "₹30L+ runway, monthly burn tracking, 90-day gates"          },
    ],
  },
  {
    id: 12,
    title: "Why Now?",
    subtitle: "Market Timing",
    description: "Three converging trends make this the right moment.",
    icon: TrendingUp,
    trends: [
      { trend: "Creators Going Pro",  stat: "15% now registered businesses", impact: "Can sign contracts and take revenue share"      },
      { trend: "Vernacular Explosion",stat: "Tier 2–4 now centre of gravity", impact: "Large platforms ignore this segment"           },
      { trend: "Platform Fatigue",    stat: "<0.2% monetise beyond deals",    impact: "Creators want products but can't build alone"  },
    ],
  },
  {
    id: 13,
    title: "The Ask",
    subtitle: "What We Need",
    description: "To execute the 90-day validation plan.",
    icon: Rocket,
    needs: [
      { item: "Capital",          amount: "₹30–40L",  use: "12-month runway for experiment + scale"          },
      { item: "Team",             amount: "3 people", use: "Founder (sales) + Ops lead + Designer"           },
      { item: "Legal / CA",       amount: "₹50k–1L",  use: "Contract templates, tax structure, compliance"   },
      { item: "Time Commitment",  amount: "90 days",  use: "Full focus on first 8–10 paid deals"             },
    ],
    conditions: [
      "Continue if: ≥8 paid deals, ≥50% margin, ≥25% repeat",
      "Pivot if: Brand deals fail but products sell (pure Studio)",
      "Raise if: ₹5L+ monthly run-rate + repeat customers",
      "Abandon if: ≤3 paid deals in 90 days",
    ],
  },
  {
    id: 14,
    title: "Join the Revolution",
    subtitle: "Sellixa V2 Launch",
    description: "Building the future of creator-led businesses in India.",
    icon: Rocket,
    cta: true,
    stats: [
      { label: "Target Launch",   value: "Q1 2027"    },
      { label: "First Cohort",    value: "25 Creators" },
      { label: "Partner Brands",  value: "8–10 MSMEs"  },
    ],
  },
  {
    id: 15,
    title: "Platform Prototype",
    subtitle: "How Sellixa V2 Works",
    description: "Interactive walkthrough — creator signup to first rupee earned.",
    icon: Layers,
    prototype: true,
  },
];

// ─── Prototype sub-component ─────────────────────────────────────────────────

const protoSteps = [
  { id: 1, icon: User,      title: "Creator Signup",       desc: "Join in 2 minutes",               details: ["Profile + social handles", "Audience & niche verification", "Connect IG / YT / Twitter", "Instant approval for 10k+ followers"] },
  { id: 2, icon: Sparkles,  title: "Idea Validation",      desc: "Pick the right product",          details: ["AI audience analysis", "Product recommendation by niche", "Competitor research + pricing", "Pre-sale landing page"] },
  { id: 3, icon: Upload,    title: "Product Launch",        desc: "We build everything",             details: ["Course / ebook templates", "Custom storefront setup", "Razorpay payment gateway", "Email funnel + automation"] },
  { id: 4, icon: TrendingUp,title: "Brand Partnerships",   desc: "Get matched with brands",         details: ["Auto-matched with relevant brands", "Negotiated rates + contracts", "Campaign brief + approval", "Payment via Sellixa escrow"] },
  { id: 5, icon: DollarSign,title: "Revenue & Growth",     desc: "Track earnings, scale up",        details: ["Real-time analytics dashboard", "Monthly payouts (product + deals)", "Performance insights", "Venture path for top performers"] },
];

function PrototypeView() {
  const [active, setActive] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="w-full">
      {!showDemo ? (
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            {protoSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="p-3 rounded-xl bg-black/5 border border-black/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                    <Icon size={20} />
                  </div>
                  <div className="text-xs font-bold">{s.title}</div>
                  <div className="text-[10px] opacity-60">{s.desc}</div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowDemo(true)}
              className="px-8 py-3 bg-black text-white rounded-full font-black text-sm hover:scale-105 transition-transform"
            >
              View Interactive Demo →
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Step bar */}
          <div className="flex items-center justify-between">
            {protoSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="flex items-center flex-1">
                  <button onClick={() => setActive(i)} className={`flex flex-col items-center transition-all ${i <= active ? "opacity-100" : "opacity-40"}`}>
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                      i === active ? "bg-black text-white scale-110" :
                      i < active   ? "bg-green-500 text-white"       :
                                     "bg-black/10"
                    }`}>
                      {i < active ? <CheckCircle size={22} /> : <Icon size={20} />}
                    </div>
                    <div className="text-[9px] mt-1 font-medium hidden md:block">{s.title}</div>
                  </button>
                  {i < protoSteps.length - 1 && (
                    <div className={`flex-1 h-1 mx-1 rounded-full ${i < active ? "bg-green-500" : "bg-black/10"}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Active step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded-xl bg-black/5 border border-black/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black text-white flex-shrink-0">
                  {(() => { const Icon = protoSteps[active].icon; return <Icon size={28} />; })()}
                </div>
                <div className="flex-1">
                  <div className="text-xl font-black mb-1">{protoSteps[active].title}</div>
                  <div className="text-sm opacity-70 mb-3">{protoSteps[active].desc}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {protoSteps[active].details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs bg-white/60 rounded px-2 py-1">
                        <CheckCircle size={12} className="text-green-600 flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-black/10 disabled:opacity-30">← Prev</button>
                <span className="text-xs opacity-50">{active + 1} / {protoSteps.length}</span>
                {active < protoSteps.length - 1
                  ? <button onClick={() => setActive(active + 1)} className="px-4 py-1.5 rounded-full text-xs font-bold bg-black text-white flex items-center gap-1">Next <ArrowRight size={12} /></button>
                  : <button onClick={() => window.location.href = "/join"} className="px-4 py-1.5 rounded-full text-xs font-black bg-green-500 text-white">Get Started →</button>
                }
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => setShowDemo(false)} className="text-xs opacity-50 hover:opacity-100 block mx-auto">
            ← Back to overview
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function V2Page() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (idx: number) => { setDir(idx > current ? 1 : -1); setCurrent(idx); };
  const prev = () => { if (current > 0)               go(current - 1); };
  const next = () => { if (current < slides.length - 1) go(current + 1); };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "Escape")     window.location.href = "/";
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  });

  const slide = slides[current];
  const Icon  = slide.icon;

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 800 : -800, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d < 0 ? 800 : -800, opacity: 0 }),
  };

  const item = {
    hidden:  { opacity: 0, y: 16 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
  };

  return (
    <div className="h-screen w-screen bg-[#ffff00] text-black flex flex-col overflow-hidden">

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <button onClick={() => window.location.href = "/"} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 transition text-sm font-medium">
          <Home size={16} /> Home
        </button>
        <span className="text-sm font-medium opacity-60">{current + 1} / {slides.length}</span>
        <button onClick={() => window.location.href = "/"} className="p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition">
          <X size={20} />
        </button>
      </div>

      {/* ── Slide area ── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col px-8 md:px-16 py-2"
          >
            {/* Header */}
            <div className="text-center mb-4 flex-shrink-0">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring" }} className="inline-block mb-2">
                <Icon size={40} strokeWidth={1.5} />
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                {slide.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
                className="text-base md:text-lg font-semibold opacity-70 mt-0.5">
                {slide.subtitle}
              </motion.p>
              {slide.description && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }}
                  className="text-xs md:text-sm opacity-60 mt-1 max-w-2xl mx-auto">
                  {slide.description}
                </motion.p>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col justify-center max-w-5xl mx-auto w-full">

              {/* Slide 1 — title only */}
              {slide.date && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="text-center text-xs opacity-40 mt-4">
                  {slide.date}
                </motion.p>
              )}

              {/* Slide 2 — key points */}
              {slide.keyPoints && (
                <div className="grid grid-cols-3 gap-4">
                  {slide.keyPoints.map((p, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-5 rounded-2xl bg-black/5 border border-black/10 text-center">
                      <div className="text-3xl font-black">{p.value}</div>
                      <div className="text-sm font-bold mt-1">{p.label}</div>
                      <div className="text-xs opacity-60 mt-0.5">{p.sublabel}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 3 — problems */}
              {slide.problems && (
                <div className="space-y-3">
                  {slide.problems.map((p, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start gap-3 p-3 rounded-xl bg-black/5 border-l-4 border-red-500">
                      <div className="flex-1">
                        <div className="text-sm font-bold">{p.issue}</div>
                        <div className="text-xs opacity-70">→ {p.impact}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 4 — services */}
              {slide.services && (
                <div className="grid grid-cols-3 gap-4">
                  {slide.services.map((s, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-4 rounded-2xl bg-black text-white">
                      <div className="text-base font-black mb-1">{s.name}</div>
                      <div className="text-xs opacity-70 mb-2">{s.desc}</div>
                      <div className="text-sm font-bold text-green-400 mb-2">{s.margin}</div>
                      <ul className="space-y-1">
                        {s.features.map((f, j) => (
                          <li key={j} className="text-xs flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white inline-block" />{f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 5 — segments */}
              {slide.segments && (
                <div className="grid grid-cols-2 gap-3">
                  {slide.segments.map((s, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className={`p-3 rounded-xl border-2 flex items-center justify-between ${
                        s.priority === "HIGH"   ? "border-green-500 bg-green-500/10"   :
                        s.priority === "MEDIUM" ? "border-yellow-500 bg-yellow-500/10" :
                        "border-gray-400 bg-gray-400/10"
                      }`}>
                      <div>
                        <div className="text-sm font-bold">{s.type}</div>
                        <div className="text-xs opacity-60">{s.range}</div>
                        <div className="text-xs mt-0.5">{s.why}</div>
                      </div>
                      <span className={`text-xs font-black px-2 py-1 rounded-full text-white ml-2 ${
                        s.priority === "HIGH"   ? "bg-green-500"  :
                        s.priority === "MEDIUM" ? "bg-yellow-500" : "bg-gray-500"
                      }`}>{s.priority}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 6 — revenue */}
              {slide.revenue && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold opacity-60 uppercase tracking-wide mb-1">Revenue</div>
                    {slide.revenue.map((r, i) => (
                      <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                        className={`flex justify-between items-center px-3 py-2 rounded-lg text-sm ${
                          r.highlight ? "bg-green-500 text-white font-black" : "bg-black/5"
                        }`}>
                        <div>
                          <div className="font-semibold">{r.source}</div>
                          {r.desc && <div className="text-xs opacity-60">{r.desc}</div>}
                        </div>
                        <div className="font-bold ml-2">{r.amount}</div>
                      </motion.div>
                    ))}
                  </div>
                  {slide.costs && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold opacity-60 uppercase tracking-wide mb-1">Costs</div>
                      {slide.costs.map((c, i) => (
                        <motion.div key={i} custom={i + 5} variants={item} initial="hidden" animate="visible"
                          className={`flex justify-between items-center px-3 py-2 rounded-lg text-sm ${
                            c.highlight ? "bg-red-500 text-white font-black" : "bg-black/5"
                          }`}>
                          <div>{c.item}</div>
                          <div className="font-bold ml-2">{c.amount}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Slide 7 — phases */}
              {slide.phases && (
                <div className="space-y-3">
                  {slide.phases.map((p, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-3 rounded-xl bg-black/5 border-l-4 border-black">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-xs opacity-50">{p.phase} — </span>
                          <span className="text-sm font-bold">{p.title}</span>
                        </div>
                        <span className="text-xs bg-black text-[#ffff00] px-2 py-0.5 rounded-full">{p.gate}</span>
                      </div>
                      <div className="text-xs opacity-70 mb-1.5">{p.goal}</div>
                      <div className="flex gap-2 flex-wrap mb-1">
                        {p.activities.map((a, j) => (
                          <span key={j} className="text-[10px] bg-white/50 px-2 py-0.5 rounded">• {a}</span>
                        ))}
                      </div>
                      <div className="text-xs font-bold opacity-60">Target: {p.target}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 8 — stages */}
              {slide.stages && (
                <div className="grid grid-cols-2 gap-3">
                  {slide.stages.map((s, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className={`p-4 rounded-xl border-l-4 bg-black/5 ${s.color.replace("bg-", "border-")}`}>
                      <div className="text-xs opacity-50 mb-0.5">{s.stage}</div>
                      <div className="text-base font-black mb-1">{s.focus}</div>
                      <div className="text-xs opacity-70 mb-2">{s.why}</div>
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full text-white ${s.color}`}>{s.status}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 9 — competitors */}
              {slide.competitors && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold opacity-60 uppercase tracking-wide mb-2">Current Players</div>
                    <div className="space-y-2">
                      {slide.competitors.map((c, i) => (
                        <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                          className="p-3 rounded-lg bg-black/5 border border-black/10">
                          <div className="flex justify-between items-start">
                            <div className="text-sm font-bold">{c.name}</div>
                            <div className="text-[10px] opacity-50">{c.revenue}</div>
                          </div>
                          <div className="text-xs opacity-60">{c.model}</div>
                          <div className="text-xs text-red-600 font-medium mt-0.5">Gap: {c.gap}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold opacity-60 uppercase tracking-wide mb-2">Our Advantages</div>
                    <div className="space-y-2">
                      {slide.advantages.map((a, i) => (
                        <motion.div key={i} custom={i + 4} variants={item} initial="hidden" animate="visible"
                          className="p-2.5 rounded-lg bg-green-50 border-l-4 border-green-500 text-xs">
                          ✓ {a}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 10 — targets */}
              {slide.targets && (
                <div className="grid grid-cols-3 gap-3">
                  {slide.targets.map((t, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-4 rounded-xl bg-black/5 border border-black/10">
                      <div className="text-lg font-black">{t.metric}</div>
                      <div className="text-xs opacity-60 mt-0.5">{t.sublabel}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 11 — risks */}
              {slide.risks && (
                <div className="space-y-2">
                  {slide.risks.map((r, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className={`flex items-start gap-3 p-3 rounded-xl border-l-4 ${
                        r.impact === "SEVERE" ? "border-red-600 bg-red-50"    :
                        r.impact === "HIGH"   ? "border-orange-500 bg-orange-50" :
                        "border-yellow-500 bg-yellow-50"
                      }`}>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white flex-shrink-0 mt-0.5 ${
                        r.impact === "SEVERE" ? "bg-red-600" : r.impact === "HIGH" ? "bg-orange-500" : "bg-yellow-500"
                      }`}>{r.impact}</span>
                      <div>
                        <div className="text-sm font-bold">{r.risk}</div>
                        <div className="text-xs opacity-75">{r.mitigation}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 12 — trends */}
              {slide.trends && (
                <div className="grid grid-cols-3 gap-4">
                  {slide.trends.map((t, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-5 rounded-2xl bg-black/5 border border-black/10">
                      <div className="text-sm font-bold mb-2">{t.trend}</div>
                      <div className="text-2xl font-black text-green-700 mb-2">{t.stat}</div>
                      <div className="text-xs opacity-70">{t.impact}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Slide 13 — needs */}
              {slide.needs && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    {slide.needs.map((n, i) => (
                      <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                        className="p-3 rounded-xl bg-black/5 border border-black/10">
                        <div className="text-xs opacity-50">{n.item}</div>
                        <div className="text-xl font-black mt-0.5">{n.amount}</div>
                        <div className="text-xs mt-0.5">{n.use}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold opacity-60 uppercase tracking-wide mb-1">Decision Gates</div>
                    {slide.conditions.map((c, i) => (
                      <motion.div key={i} custom={i + 4} variants={item} initial="hidden" animate="visible"
                        className="p-2 rounded-lg bg-black/5 text-xs border border-black/10">
                        • {c}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 14 — CTA */}
              {slide.cta && (
                <div className="flex flex-col items-center gap-5">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {slide.stats!.map((s, i) => (
                      <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                        className="p-5 rounded-2xl bg-black/5 border border-black/10 text-center">
                        <div className="text-2xl font-black">{s.value}</div>
                        <div className="text-xs opacity-60 mt-0.5">{s.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}
                    onClick={() => window.location.href = "/join"}
                    className="px-10 py-4 bg-black text-[#ffff00] text-lg font-black rounded-full hover:scale-105 transition-transform shadow-xl"
                  >
                    Apply to Join Sellixa V2 →
                  </motion.button>
                </div>
              )}

              {/* Slide 15 — prototype */}
              {slide.prototype && (
                <div className="flex flex-col items-center justify-center gap-6">
                  <p className="text-sm opacity-70 max-w-lg text-center">
                    See the complete platform flow — from creator signup to first rupee earned, with AI at every step.
                  </p>
                  <button
                    onClick={() => window.location.href = "/v2/prototype"}
                    className="px-10 py-4 bg-black text-white text-lg font-black rounded-full hover:scale-105 transition-transform shadow-xl flex items-center gap-3"
                  >
                    View Full Platform Prototype →
                  </button>
                  <p className="text-xs opacity-40">Opens in a new page with full interactive flow</p>
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom nav ── */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <button onClick={prev} disabled={current === 0}
          className="p-3 rounded-full bg-black text-white disabled:opacity-30 hover:scale-110 transition-all">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <div className="flex gap-1.5 flex-wrap justify-center max-w-sm">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-black" : "w-2 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>

        <button onClick={next} disabled={current === slides.length - 1}
          className="p-3 rounded-full bg-black text-white disabled:opacity-30 hover:scale-110 transition-all">
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>

    </div>
  );
}
