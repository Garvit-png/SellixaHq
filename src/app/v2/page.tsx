"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, X, Home,
  TrendingUp, Target, Users, DollarSign,
  Calendar, Layers, Award, Rocket, ShoppingBag, Package,
} from "lucide-react";

const slides = [
  {
    id: 1,
    icon: Rocket,
    title: "Sellixa V2",
    subtitle: "Talent-to-Venture Strategy",
    description: "Narrow start, validated growth — transforming creators into businesses.",
    date: "28 October 2026",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "The Verdict",
    subtitle: "Narrow first, then validate",
    description: "Don't build a marketplace yet. Start as a managed creator-business studio.",
    verdict: [
      { point: "15% of creators are now registered businesses", source: "Kofluence, 2026" },
      { point: "Market size figures span ₹3,500 Cr to ₹2.1 lakh Cr — definitions differ wildly", source: "EY / BCG / Kofluence" },
      { point: "Discovery & matching software is crowded and funded", source: "Qoruz, Kofluence" },
      { point: "The gap: helping creators actually build and run businesses", source: "Research finding" },
      { point: "Investor-introduction layer has highest risk, least early value — defer it", source: "Recommendation" },
    ],
  },
  {
    id: 3,
    icon: Users,
    title: "Who We Serve",
    subtitle: "Segments in priority order",
    description: "Start with nano/micro. Earn trust. Scale up tiers.",
    segments: [
      { type: "Nano / Micro Creators", range: "10k–500k followers", why: "Best first segment — many, reachable, need products", priority: "1st" },
      { type: "Small D2C / MSMEs", range: "Real budgets for creator work", why: "First paying brand segment", priority: "2nd" },
      { type: "Mid-sized Creators", range: "500k–2M followers", why: "Reachable once case studies exist", priority: "3rd" },
      { type: "Large Creators / Athletes", range: "2M+ audiences", why: "Through managers — later stage", priority: "Later" },
    ],
  },
  {
    id: 4,
    icon: Layers,
    title: "Five Business Lines",
    subtitle: "One at a time — stage gated",
    description: "Studio goes first. Everything else waits for proof.",
    lines: [
      { name: "Studio", desc: "Digital products, storefronts, funnels, memberships, merch", when: "Start now" },
      { name: "Talent", desc: "Brand deals for the same creators Studio already serves", when: "Add second" },
      { name: "Ventures", desc: "Operator-backed consumer brands with validated demand", when: "Pilot only, later" },
      { name: "Merch", desc: "No-inventory drops — presale, produce-to-order, ship", when: "Month 2+" },
      { name: "Capital Network", desc: "Investor introductions — needs SEBI counsel first", when: "Deferred" },
    ],
  },
  {
    id: 5,
    icon: ShoppingBag,
    title: "How Merch Works",
    subtitle: "No inventory risk",
    description: "Stage 1 is zero stock. Only scale to private-label after repeat buyers proven.",
    merch: [
      { stage: "Stage 1 — No Inventory", detail: "Print-on-demand or presale batches. Sellixa builds the store, runs fulfilment. Profit split per drop." },
      { stage: "Stage 2 — Private Label", detail: "Only after Stage 1 shows repeat buyers. Bring vetted manufacturer. Separate entity, clear ownership & IP." },
      { warning: "Watch-outs", items: ["Unsold stock turns service biz into cash-hungry one", "Sizing & print quality drive returns", "Trademark + likeness licences must be in writing", "No health or performance claims"] },
    ],
  },
  {
    id: 6,
    icon: Target,
    title: "Competitors",
    subtitle: "Discovery is crowded — execution is not",
    description: "No one combines talent + brands + operators + capital. That's the whitespace.",
    competitors: [
      { name: "Kofluence", model: "SaaS platform + reports", revenue: "Series B ₹103 Cr", gap: "Discovery only" },
      { name: "Qoruz", model: "Influencer discovery software", revenue: "Funded", gap: "Software, no execution" },
      { name: "Monk-E", model: "Talent management + content", revenue: "₹97.8 Cr FY24", gap: "Slow growth (2.2%)" },
      { name: "House of X", model: "Creator-led D2C brands", revenue: "₹6.5 Cr FY25", gap: "Creator-dependent" },
    ],
    advantages: [
      "Managed studio for sub-mid creators (ignored by big platforms)",
      "Bundled product launch + brand deals together",
      "Vernacular & Tier 2–4 creators — fastest growing segment",
      "Vetted operator network no competitor has built",
    ],
  },
  {
    id: 7,
    icon: Calendar,
    title: "Expansion Road Map",
    subtitle: "Gate-driven — each stage earns the next",
    description: "Move only when the previous stage produces paid, repeat, profitable deals.",
    roadmap: [
      { stage: "Stage 1", focus: "Studio + Brand Deals in one niche", gate: "Paid deals with healthy margin + some repeat" },
      { stage: "Stage 2", focus: "No-inventory merch drops", gate: "3 drops with positive profit after returns" },
      { stage: "Stage 3", focus: "Private-label brand with an operator", gate: "One validated product with repeat purchase" },
      { stage: "Stage 4", focus: "Software layer + self-serve marketplace", gate: "Most deals close without heavy team involvement" },
      { stage: "Stage 5", focus: "Investor features", gate: "Only after legal advice and proper structure" },
    ],
  },
  {
    id: 8,
    icon: Award,
    title: "Legal & Compliance",
    subtitle: "Know what to avoid right now",
    description: "Build this in from day one — not after a problem.",
    legal: [
      { topic: "SEBI", risk: "Investment advice needs registration. Fees tied to investment outcomes may be intermediation.", action: "No investor features in V1. Counsel first." },
      { topic: "DPDP", risk: "Data protection rules apply from May 2027. Children's data needs verifiable parental consent.", action: "Build consent + minimal data collection now." },
      { topic: "Minors", risk: "Contracts normally run through guardians. Age bars some sponsor categories.", action: "Guardian-consent workflow. Avoid minors early." },
      { topic: "Contracts", risk: "IP, likeness, GST, TDS — each needs a lawyer or CA review.", action: "Template contracts done before first deal." },
    ],
    avoid: ["Investor matchmaking with success fees", "Any investment commentary", "Equity for undefined services", "Holding client money", "Health or finance claims"],
  },
  {
    id: 9,
    icon: Target,
    title: "Risks & Mitigations",
    subtitle: "Five things that could kill this",
    risks: [
      { risk: "Creators bypass Sellixa after intro", mitigation: "Bundle services. Keep contracts, payments + reporting on-platform." },
      { risk: "Margins collapse into agency work", mitigation: "Fixed-scope packages. Refuse below-margin deals." },
      { risk: "Regulatory breach (SEBI)", mitigation: "No investor features in V1. Counsel reviews all contracts." },
      { risk: "Fame-driven products don't repeat", mitigation: "Presale validation before build. Evergreen categories only." },
      { risk: "Cash runs out", mitigation: "Stage gates. Monthly burn review. Raise only after ₹5L/month run-rate." },
    ],
  },
  {
    id: 10,
    icon: Rocket,
    title: "First 10 Actions",
    subtitle: "This week → first paid deal",
    actions: [
      "Pick one niche. Write one productised package with a price card.",
      "List 50 target creators and 50 target brands by name.",
      "Run 30 creator interviews.",
      "Have counsel draft creator, brand and referral templates.",
      "Sell the first 3 pre-paid launches.",
      "Set up CRM and payment tracking.",
      "Vet 5 fulfilment and manufacturing partners.",
      "Close the first brand pilot with a real budget.",
      "Capture 2 case studies with real metrics.",
      "Review results against stage gates. Decide what's next.",
    ],
  },
  {
    id: 11,
    icon: DollarSign,
    title: "Key Assumptions to Test",
    subtitle: "These must be true for Sellixa to work",
    assumptions: [
      "Creators will pay or share revenue for a managed launch.",
      "Small brands will fund micro-creator work with real budgets.",
      "Fees survive creators and brands going direct after intro.",
      "Customers come back for a second deal or drop.",
      "Sellixa can deliver at healthy margin without becoming a labour-heavy agency.",
      "Managers of larger creators will take a pilot based on smaller-creator proof.",
    ],
  },
  {
    id: 12,
    icon: Layers,
    title: "Platform Prototype",
    subtitle: "See how the platform works",
    description: "Full interactive walkthrough — creator signup to first rupee earned.",
    prototype: true,
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function V2Page() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (idx: number) => { setDir(idx > current ? 1 : -1); setCurrent(idx); };
  const prev = () => { if (current > 0) go(current - 1); };
  const next = () => { if (current < slides.length - 1) go(current + 1); };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") window.location.href = "/";
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  });

  const slide = slides[current];
  const Icon = slide.icon;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 600 : -600, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 600 : -600, opacity: 0 }),
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.35 } }),
  };

  return (
    <div className="h-screen w-screen bg-[#ffff00] text-black flex flex-col overflow-hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <button onClick={() => window.location.href = "/"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 transition text-sm font-medium">
          <Home size={15} /> Home
        </button>
        <span className="text-xs font-medium opacity-50">{current + 1} / {slides.length}</span>
        <button onClick={() => window.location.href = "/"}
          className="p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition">
          <X size={18} />
        </button>
      </div>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex flex-col px-10 md:px-20 py-2"
          >
            {/* Header */}
            <div className="text-center mb-5 flex-shrink-0">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.12, type: "spring" }}
                className="inline-block mb-2">
                <Icon size={38} strokeWidth={1.5} />
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
                className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                {slide.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}
                className="text-sm md:text-base font-semibold opacity-60 mt-0.5">
                {slide.subtitle}
              </motion.p>
              {slide.description && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-xs opacity-50 mt-1 max-w-xl mx-auto">
                  {slide.description}
                </motion.p>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col justify-center max-w-5xl mx-auto w-full">

              {/* Slide 1 */}
              {slide.date && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="text-center text-xs opacity-30 mt-6">
                  Research date: {slide.date}
                </motion.p>
              )}

              {/* Verdict */}
              {slide.verdict && (
                <div className="space-y-2">
                  {slide.verdict.map((v, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start justify-between gap-4 p-3 rounded-xl bg-black/5 border-l-4 border-black">
                      <span className="text-sm">{v.point}</span>
                      <span className="text-[10px] opacity-40 whitespace-nowrap flex-shrink-0">{v.source}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Segments */}
              {slide.segments && (
                <div className="grid grid-cols-2 gap-3">
                  {slide.segments.map((s, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-3 rounded-xl bg-black/5 border border-black/10 flex justify-between items-start">
                      <div>
                        <div className="text-sm font-black">{s.type}</div>
                        <div className="text-xs opacity-50 mt-0.5">{s.range}</div>
                        <div className="text-xs mt-1">{s.why}</div>
                      </div>
                      <span className="text-xs font-black bg-black text-[#ffff00] px-2 py-1 rounded-full ml-3 flex-shrink-0">
                        {s.priority}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Business lines */}
              {slide.lines && (
                <div className="space-y-2">
                  {slide.lines.map((l, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-center justify-between p-3 rounded-xl bg-black/5 border border-black/10">
                      <div className="flex-1">
                        <span className="text-sm font-black mr-2">{l.name}</span>
                        <span className="text-xs opacity-60">{l.desc}</span>
                      </div>
                      <span className={`text-xs font-black px-3 py-1 rounded-full flex-shrink-0 ml-4 ${
                        l.when === "Start now" ? "bg-black text-[#ffff00]" : "bg-black/10 text-black"
                      }`}>{l.when}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Merch */}
              {slide.merch && (
                <div className="space-y-3">
                  {slide.merch.map((m: any, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="p-3 rounded-xl bg-black/5 border border-black/10">
                      {m.stage && (
                        <>
                          <div className="text-sm font-black mb-1">{m.stage}</div>
                          <div className="text-xs opacity-70">{m.detail}</div>
                        </>
                      )}
                      {m.warning && (
                        <>
                          <div className="text-sm font-black mb-2">{m.warning}</div>
                          <div className="grid grid-cols-2 gap-1">
                            {m.items.map((it: string, j: number) => (
                              <div key={j} className="text-xs opacity-70 flex items-start gap-1">
                                <span className="opacity-40">•</span> {it}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Competitors */}
              {slide.competitors && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Players</div>
                    {slide.competitors.map((c, i) => (
                      <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                        className="p-2.5 rounded-lg bg-black/5 border border-black/10">
                        <div className="flex justify-between">
                          <span className="text-sm font-black">{c.name}</span>
                          <span className="text-[10px] opacity-40">{c.revenue}</span>
                        </div>
                        <div className="text-xs opacity-50">{c.model}</div>
                        <div className="text-xs font-bold mt-0.5">Gap: {c.gap}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Our Edge</div>
                    {slide.advantages.map((a, i) => (
                      <motion.div key={i} custom={i + 4} variants={item} initial="hidden" animate="visible"
                        className="p-2.5 rounded-lg bg-black text-[#ffff00] text-xs font-medium">
                        ✓ {a}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Road map */}
              {slide.roadmap && (
                <div className="space-y-2">
                  {slide.roadmap.map((r, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start gap-3 p-3 rounded-xl bg-black/5 border border-black/10">
                      <span className="text-xs font-black bg-black text-[#ffff00] px-2 py-1 rounded-full flex-shrink-0">{r.stage}</span>
                      <div className="flex-1">
                        <div className="text-sm font-black">{r.focus}</div>
                        <div className="text-xs opacity-60 mt-0.5">Gate: {r.gate}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Legal */}
              {slide.legal && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    {slide.legal.map((l, i) => (
                      <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                        className="p-2.5 rounded-xl bg-black/5 border-l-4 border-black">
                        <div className="text-sm font-black mb-0.5">{l.topic}</div>
                        <div className="text-xs opacity-60 mb-1">{l.risk}</div>
                        <div className="text-xs font-bold">{l.action}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Avoid entirely in V1</div>
                    <div className="space-y-1.5">
                      {slide.avoid.map((a, i) => (
                        <motion.div key={i} custom={i + 4} variants={item} initial="hidden" animate="visible"
                          className="text-xs p-2 rounded-lg bg-black text-white flex items-start gap-1.5">
                          <span className="opacity-50 flex-shrink-0">✕</span> {a}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Risks */}
              {slide.risks && (
                <div className="space-y-2">
                  {slide.risks.map((r, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start gap-3 p-3 rounded-xl bg-black/5 border-l-4 border-black">
                      <div className="flex-1">
                        <div className="text-sm font-black">{r.risk}</div>
                        <div className="text-xs opacity-70 mt-0.5">{r.mitigation}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* First 10 actions */}
              {slide.actions && (
                <div className="grid grid-cols-2 gap-2">
                  {slide.actions.map((a, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-black/5 border border-black/10">
                      <span className="text-xs font-black bg-black text-[#ffff00] w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-xs">{a}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Assumptions */}
              {slide.assumptions && (
                <div className="space-y-2">
                  {slide.assumptions.map((a, i) => (
                    <motion.div key={i} custom={i} variants={item} initial="hidden" animate="visible"
                      className="flex items-start gap-3 p-3 rounded-xl bg-black/5 border border-black/10">
                      <span className="text-xs font-black bg-black text-[#ffff00] w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-sm">{a}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Prototype CTA */}
              {slide.prototype && (
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-sm opacity-60 max-w-md text-center">
                    8-step interactive walkthrough — creator signup to first rupee, with AI at every step.
                  </p>
                  <button
                    onClick={() => window.location.href = "/v2/prototype"}
                    className="px-10 py-4 bg-black text-[#ffff00] text-lg font-black rounded-full hover:scale-105 transition-transform shadow-xl flex items-center gap-3"
                  >
                    Open Platform Prototype →
                  </button>
                  <p className="text-[10px] opacity-30">Sample data is fictional. Prototype only.</p>
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <button onClick={prev} disabled={current === 0}
          className="p-3 rounded-full bg-black text-white disabled:opacity-20 hover:scale-110 transition-all">
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        <div className="flex gap-1.5 justify-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-black" : "w-2 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>

        <button onClick={next} disabled={current === slides.length - 1}
          className="p-3 rounded-full bg-black text-white disabled:opacity-20 hover:scale-110 transition-all">
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
