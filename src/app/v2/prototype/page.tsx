"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, X, User, Sparkles, Package, TrendingUp,
  DollarSign, Zap, Star, BarChart2, ChevronRight, ChevronLeft,
  CheckCircle, Bot, Wifi, Battery,
} from "lucide-react";

const steps = [
  {
    id: "signup", step: 1, icon: User,
    title: "Creator Signup",
    subtitle: "Onboard in 2 minutes",
    bullets: ["Connect IG / YT / Twitter", "Niche + audience size", "Identity verification", "Approved within 24h"],
    ai: "AI auto-fills your audience demographics from your public profile.",
    gets: ["Verified Badge", "Account Manager", "Dashboard Access"],
    phone: {
      title: "Join Sellixa V2",
      body: "form",
      fields: ["Full Name", "Social Handle", "Niche", "Follower Count"],
      cta: "Apply Free",
    },
  },
  {
    id: "dashboard", step: 2, icon: BarChart2,
    title: "Creator Dashboard",
    subtitle: "Your command centre",
    bullets: ["Live earnings tracker", "Products + campaigns", "Brand deal inbox", "AI weekly digest"],
    ai: "AI sends a Monday report — your best single action for the week.",
    gets: ["Earnings Graph", "Campaign Board", "AI Digest"],
    phone: {
      title: "Dashboard",
      body: "stats",
      stats: [{ label: "This Month", value: "₹38,400" }, { label: "Products", value: "2" }, { label: "Deals", value: "1" }],
      actions: ["New Product", "Brand Deals", "Analytics"],
    },
  },
  {
    id: "validation", step: 3, icon: Sparkles,
    title: "Idea Validation",
    subtitle: "AI finds your best product",
    bullets: ["Reads 90 days of comments", "3 ideas with demand scores", "Competitor pricing pulled", "Presale page in 10 min"],
    ai: "NLP model surfaces top 3 unmet needs from your audience. Each idea scored 0–100.",
    gets: ["Demand Report", "Presale Page", "Pricing Sheet"],
    phone: {
      title: "AI Ideas for You",
      body: "ideas",
      ideas: [
        { name: "IG Growth Masterclass", score: 91, price: "₹999" },
        { name: "Content Calendar Pack", score: 84, price: "₹499" },
        { name: "Brand Strategy PDF", score: 77, price: "₹299" },
      ],
    },
  },
  {
    id: "product", step: 4, icon: Package,
    title: "Product Launch",
    subtitle: "We build it — you approve",
    bullets: ["AI writes course outline", "Storefront on sellixa.io", "Razorpay integrated", "3-part email funnel"],
    ai: "AI drafts every word — outline, emails, sales page. You review once and approve.",
    gets: ["Live Storefront", "Email Funnel", "SEO Sales Page"],
    phone: {
      title: "Storefront Live ✓",
      body: "checks",
      checks: ["Sales page ready", "Checkout live", "Emails active", "Link copied"],
    },
  },
  {
    id: "brand", step: 5, icon: TrendingUp,
    title: "Brand Deals",
    subtitle: "Matched, negotiated, paid",
    bullets: ["AI matches you with brands", "Brief auto-drafted", "Content reviewed before post", "Payment in escrow"],
    ai: "Matching engine scores 200+ fit signals — niche, audience age, brand safety.",
    gets: ["₹15k–₹2L per deal", "Contract handled", "Brand Manager"],
    phone: {
      title: "Your Matches",
      body: "deals",
      deals: [
        { brand: "NutriGrow", fit: "98%", budget: "₹45k" },
        { brand: "DesignPro", fit: "91%", budget: "₹28k" },
        { brand: "CreditQ", fit: "85%", budget: "₹60k" },
      ],
    },
  },
  {
    id: "revenue", step: 6, icon: DollarSign,
    title: "Revenue Payout",
    subtitle: "Transparent every month",
    bullets: ["Products: 75% yours", "Brand deals: 85% yours", "Bank or UPI monthly", "Auto tax invoice"],
    ai: "AI forecasts next month and tells you the best time to launch again.",
    gets: ["Settlement Statement", "Tax Invoice", "Earnings Forecast"],
    phone: {
      title: "May Settlement",
      body: "revenue",
      rows: [
        { label: "Product Sales", amount: "₹24,750" },
        { label: "Brand Deal", amount: "₹38,250" },
        { label: "Sellixa Fee", amount: "−₹9,000" },
        { label: "Your Payout", amount: "₹63,000", highlight: true },
      ],
    },
  },
  {
    id: "growth", step: 7, icon: Zap,
    title: "AI Growth Engine",
    subtitle: "Scale on autopilot",
    bullets: ["Weekly pricing A/B test", "Upsell opportunities flagged", "30-day content calendar", "Retargeting ads managed"],
    ai: "Reinforcement learning optimises price + messaging. Every change is logged with its reason.",
    gets: ["Content Calendar", "Ad Campaigns", "Weekly Log"],
    phone: {
      title: "This Week's Actions",
      body: "growth",
      actions: [
        { action: "Price raised → ₹1,299", result: "+18% margin" },
        { action: "Email to 340 leads", result: "12 purchases" },
        { action: "6 posts at peak time", result: "+23% reach" },
      ],
    },
  },
  {
    id: "venture", step: 8, icon: Star,
    title: "Venture Path",
    subtitle: "Top performers only",
    bullets: ["Unlocked at ₹5L or 1k+ sales", "Co-create a consumer brand", "Operators handle fulfilment", "Equity agreed upfront"],
    ai: "AI models brand demand from your audience data before any capital is spent.",
    gets: ["Co-Founded Brand", "Operator Network", "Shared Equity"],
    phone: {
      title: "🎉 Venture Unlocked",
      body: "venture",
      milestones: ["₹5L+ revenue ✓", "1,000+ sales ✓", "3 brand deals ✓"],
      offer: "Co-create a brand with Sellixa. Equity agreed upfront.",
    },
  },
];

// ─── Phone mockup ─────────────────────────────────────────────────────────────

function PhoneMock({ phone }: { phone: any }) {
  return (
    <div className="relative mx-auto" style={{ width: 220 }}>
      {/* Phone shell */}
      <div className="relative bg-black rounded-[36px] shadow-2xl overflow-hidden border-4 border-black"
        style={{ height: 440 }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-1 z-10">
          <span className="text-[9px] text-white/50 font-mono">9:41</span>
          <div className="flex items-center gap-1">
            <Wifi size={9} className="text-white/50" />
            <Battery size={9} className="text-white/50" />
          </div>
        </div>

        {/* Screen */}
        <div className="absolute inset-0 bg-[#111] pt-7 flex flex-col overflow-hidden">
          {/* App header */}
          <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/5 flex-shrink-0">
            <span className="text-xs font-black text-[#ffff00]">SELLIXA</span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
              <User size={10} className="text-white/60" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 pt-3 pb-2 overflow-hidden">
            <div className="text-xs font-black text-white mb-3">{phone.title}</div>

            {/* FORM */}
            {phone.body === "form" && (
              <div className="space-y-2">
                {phone.fields.map((f: string) => (
                  <div key={f}>
                    <div className="text-[9px] text-white/40 mb-0.5">{f}</div>
                    <div className="h-7 rounded-lg bg-white/5 border border-white/10" />
                  </div>
                ))}
                <div className="mt-3 h-8 rounded-full bg-[#ffff00] flex items-center justify-center text-[10px] font-black text-black">
                  {phone.cta}
                </div>
              </div>
            )}

            {/* STATS */}
            {phone.body === "stats" && (
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  {phone.stats.map((s: any) => (
                    <div key={s.label} className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-sm font-black text-white">{s.value}</div>
                      <div className="text-[8px] text-white/40 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5 mt-2">
                  {phone.actions.map((a: string) => (
                    <div key={a} className="h-7 rounded-xl bg-white/5 border border-white/10 flex items-center px-3 text-[10px] text-white/50">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* IDEAS */}
            {phone.body === "ideas" && (
              <div className="space-y-1.5">
                {phone.ideas.map((idea: any, i: number) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold text-white leading-tight">{idea.name}</div>
                      <div className="text-[8px] text-white/40">Score: <span className="text-[#ffff00] font-black">{idea.score}</span></div>
                    </div>
                    <div className="text-[10px] font-black text-[#ffff00]">{idea.price}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CHECKS */}
            {phone.body === "checks" && (
              <div className="space-y-1.5">
                {phone.checks.map((c: string) => (
                  <div key={c} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle size={11} className="text-[#ffff00] flex-shrink-0" />
                    <span className="text-[10px] text-white/70">{c}</span>
                  </div>
                ))}
              </div>
            )}

            {/* DEALS */}
            {phone.body === "deals" && (
              <div className="space-y-1.5">
                {phone.deals.map((d: any, i: number) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold text-white">{d.brand}</div>
                      <div className="text-[8px] text-white/40">Fit: <span className="text-[#ffff00] font-black">{d.fit}</span></div>
                    </div>
                    <div className="text-[10px] font-black text-[#ffff00]">{d.budget}</div>
                  </div>
                ))}
              </div>
            )}

            {/* REVENUE */}
            {phone.body === "revenue" && (
              <div className="space-y-1.5">
                {phone.rows.map((r: any, i: number) => (
                  <div key={i} className={`flex justify-between items-center px-2.5 py-2 rounded-xl text-[10px] ${
                    r.highlight ? "bg-[#ffff00] text-black font-black" : "bg-white/5 border border-white/10"
                  }`}>
                    <span className={r.highlight ? "font-black" : "text-white/60"}>{r.label}</span>
                    <span className={`font-black ${r.highlight ? "text-black" : "text-white"}`}>{r.amount}</span>
                  </div>
                ))}
              </div>
            )}

            {/* GROWTH */}
            {phone.body === "growth" && (
              <div className="space-y-1.5">
                {phone.actions.map((a: any, i: number) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-white/60">{a.action}</div>
                    <div className="text-[9px] font-black text-[#ffff00] mt-0.5">{a.result}</div>
                  </div>
                ))}
              </div>
            )}

            {/* VENTURE */}
            {phone.body === "venture" && (
              <div className="space-y-1.5">
                {phone.milestones.map((m: string) => (
                  <div key={m} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle size={11} className="text-[#ffff00]" />
                    <span className="text-[10px] text-white/70">{m}</span>
                  </div>
                ))}
                <div className="mt-1 p-2.5 rounded-xl bg-[#ffff00]/10 border border-[#ffff00]/20 text-[10px] text-[#ffff00]">
                  {phone.offer}
                </div>
              </div>
            )}
          </div>

          {/* Home bar */}
          <div className="flex justify-center pb-2 flex-shrink-0">
            <div className="w-16 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step dots ────────────────────────────────────────────────────────────────

function StepDots({ current, total, goTo }: { current: number; total: number; goTo: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-0">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center">
          <button onClick={() => goTo(i)}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black border-2 transition-all ${
              i === current  ? "bg-black text-[#ffff00] border-black scale-110" :
              i < current    ? "bg-black text-white border-black"               :
                               "bg-transparent text-black/30 border-black/20"
            }`}>{i + 1}</button>
          {i < total - 1 && (
            <svg width="22" height="8">
              <line x1="2" y1="4" x2="20" y2="4"
                stroke={i < current ? "#111" : "#11111133"}
                strokeWidth="1.5"
                strokeDasharray={i < current ? "0" : "3 3"} />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Transition arrow ─────────────────────────────────────────────────────────

function TransitionArrow({ show, dir }: { show: boolean; dir: number }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      <svg width="260" height="32">
        <defs>
          <marker id="atip" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0,7 2.5,0 5" fill="#111" opacity="0.7" />
          </marker>
        </defs>
        <motion.line
          x1={dir > 0 ? 16 : 244} y1="16"
          x2={dir > 0 ? 244 : 16} y2="16"
          stroke="#111" strokeWidth="1.8" strokeDasharray="8 5"
          markerEnd="url(#atip)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.32 }}
        />
      </svg>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PrototypePage() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [trailing, setTrailing] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setDir(idx > current ? 1 : -1);
    setTrailing(true);
    setTimeout(() => { setCurrent(idx); setTrailing(false); }, 360);
  };

  const next = () => { if (current < steps.length - 1) goTo(current + 1); };
  const prev = () => { if (current > 0) goTo(current - 1); };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  });

  const step = steps[current];
  const Icon = step.icon;

  const slideVars = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const itemVars = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.3 } }),
  };

  return (
    <div className="h-screen w-screen bg-[#ffff00] text-black flex flex-col overflow-hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0">
        <button onClick={() => window.location.href = "/v2"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 transition text-xs font-bold">
          <ArrowLeft size={13} /> Back
        </button>
        <div className="text-center">
          <div className="text-sm font-black tracking-tight">Platform Walkthrough</div>
          <div className="text-[10px] opacity-40">Arrow keys or buttons</div>
        </div>
        <button onClick={() => window.location.href = "/"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 transition text-xs font-bold">
          <X size={13} /> Exit
        </button>
      </div>

      {/* Step dots */}
      <div className="flex-shrink-0 pb-2">
        <StepDots current={current} total={steps.length} goTo={goTo} />
      </div>

      {/* Slide */}
      <div className="flex-1 relative overflow-hidden px-5">
        <TransitionArrow show={trailing} dir={dir} />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVars}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-5 grid gap-6"
            style={{ gridTemplateColumns: "1fr 220px" }}
          >
            {/* LEFT */}
            <div className="flex flex-col justify-between overflow-hidden">
              <div>
                {/* Badge */}
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
                  className="inline-flex items-center gap-1.5 bg-black text-[#ffff00] px-3 py-1 rounded-full text-[10px] font-black mb-3">
                  <Icon size={11} /> STEP {step.step} / {steps.length}
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
                  className="text-4xl font-black tracking-tight leading-none mb-1">
                  {step.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}
                  className="text-sm opacity-50 mb-5">
                  {step.subtitle}
                </motion.p>

                {/* Bullets */}
                <div className="mb-4">
                  <div className="text-[9px] font-black uppercase tracking-widest opacity-35 mb-2">What happens</div>
                  <div className="space-y-1.5">
                    {step.bullets.map((b, i) => (
                      <motion.div key={i} custom={i} variants={itemVars} initial="hidden" animate="visible"
                        className="flex items-center gap-2 p-2 rounded-lg bg-black/5 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/30 flex-shrink-0" />
                        {b}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI */}
                <motion.div custom={5} variants={itemVars} initial="hidden" animate="visible">
                  <div className="text-[9px] font-black uppercase tracking-widest opacity-35 mb-1.5 flex items-center gap-1">
                    <Bot size={9} /> AI role
                  </div>
                  <div className="p-3 rounded-xl bg-black text-[#ffff00] text-sm leading-relaxed">
                    {step.ai}
                  </div>
                </motion.div>
              </div>

              {/* Gets */}
              <motion.div custom={6} variants={itemVars} initial="hidden" animate="visible" className="mt-4">
                <div className="text-[9px] font-black uppercase tracking-widest opacity-35 mb-2">Client gets</div>
                <div className="flex flex-wrap gap-2">
                  {step.gets.map((g, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-sm font-bold bg-black text-white">
                      {g}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Phone */}
            <div className="flex items-center justify-center">
              <PhoneMock phone={step.phone} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 pb-5 pt-2">
        <button onClick={prev} disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-black/10 hover:bg-black/20 disabled:opacity-20 transition-all">
          <ChevronLeft size={16} /> Previous
        </button>

        <span className="text-xs font-black opacity-50">{step.title}</span>

        <button onClick={next} disabled={current === steps.length - 1}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black bg-black text-white hover:bg-gray-900 disabled:opacity-20 transition-all shadow-lg">
          {current === steps.length - 1 ? "Flow Complete" : "Next"} <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
