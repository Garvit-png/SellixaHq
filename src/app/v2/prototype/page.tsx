"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, X, User, Sparkles, Package, TrendingUp,
  DollarSign, Zap, Star, BarChart2, ChevronRight, ChevronLeft,
  CheckCircle, Bot,
} from "lucide-react";

// ─── Theme ────────────────────────────────────────────────────────────────────
// Only yellow (#ffff00) and black (#111) — matching main website

const steps = [
  {
    id: "signup",
    step: 1,
    icon: User,
    title: "Creator Signup",
    subtitle: "Onboard in 2 minutes",
    what: [
      "Connect Instagram, YouTube or Twitter",
      "Fill niche, audience size & content type",
      "Verify identity — Aadhaar or PAN",
      "Sellixa reviews & approves within 24h",
    ],
    ai: "AI auto-scans your public profile — fills audience demographics, engagement rate and niche tags without manual input.",
    gets: ["Verified Creator Badge", "Account manager assigned", "Full dashboard access"],
    screen: {
      type: "form",
      title: "Join Sellixa V2",
      fields: ["Full Name", "Social Handle", "Niche", "Follower Count"],
      cta: "Apply for Free",
    },
  },
  {
    id: "dashboard",
    step: 2,
    icon: BarChart2,
    title: "Creator Dashboard",
    subtitle: "Your command centre",
    what: [
      "Real-time earnings tracker",
      "Active products and campaign status",
      "Brand deal inbox and notifications",
      "AI weekly performance digest",
    ],
    ai: "AI sends a personalised Monday report — flags underperforming products and surfaces the single best action for the week.",
    gets: ["Live earnings graph", "Campaign status board", "AI weekly digest"],
    screen: {
      type: "dashboard",
      title: "Welcome back 👋",
      stats: [{ label: "This Month", value: "₹38,400" }, { label: "Products", value: "2 Live" }, { label: "Deals", value: "1 Active" }],
      actions: ["Launch New Product", "Browse Brand Deals", "View Analytics"],
    },
  },
  {
    id: "validation",
    step: 3,
    icon: Sparkles,
    title: "Idea Validation",
    subtitle: "AI finds your best product",
    what: [
      "AI reads 90 days of audience comments",
      "3 product ideas generated with demand scores",
      "Competitor pricing auto-researched",
      "Presale landing page live in 10 minutes",
    ],
    ai: "NLP model analyses thousands of comments and DMs to surface the top 3 unmet needs. Each idea gets a 0–100 demand score.",
    gets: ["Demand Score Report", "Presale landing page", "Competitor pricing sheet"],
    screen: {
      type: "ideas",
      title: "AI Product Ideas for You",
      ideas: [
        { name: "Instagram Growth Masterclass", score: 91, price: "₹999" },
        { name: "Content Calendar Pack", score: 84, price: "₹499" },
        { name: "Personal Brand PDF Guide", score: 77, price: "₹299" },
      ],
    },
  },
  {
    id: "product",
    step: 4,
    icon: Package,
    title: "Product Launch",
    subtitle: "We build it — you approve",
    what: [
      "Course or ebook built using AI templates",
      "Custom storefront on sellixa.io/yourname",
      "Razorpay checkout integrated",
      "3-part email funnel written by AI",
    ],
    ai: "AI writes the full course outline, every email in the funnel, and the sales page copy. You review once and click approve.",
    gets: ["Live storefront", "3-part email funnel", "SEO sales page", "Payment dashboard"],
    screen: {
      type: "launch",
      title: "Storefront is Live",
      product: "Instagram Growth Masterclass",
      checks: ["Sales page written ✓", "Razorpay checkout live ✓", "Email funnel active ✓", "sellixa.io/you/igm ✓"],
    },
  },
  {
    id: "brand",
    step: 5,
    icon: TrendingUp,
    title: "Brand Deals",
    subtitle: "Get matched, get paid",
    what: [
      "AI matches you with relevant brands",
      "Brief, deliverables and timeline auto-drafted",
      "Content reviewed before you post",
      "Payment held in Sellixa escrow",
    ],
    ai: "Matching engine scores 200+ fit signals — niche overlap, audience age, brand safety — to rank your best brand matches.",
    gets: ["₹15k–₹2L per deal", "Contract handled by us", "Brand manager assigned"],
    screen: {
      type: "brand",
      title: "Your Brand Matches",
      deals: [
        { brand: "NutriGrow", fit: "98%", budget: "₹45,000" },
        { brand: "DesignPro App", fit: "91%", budget: "₹28,000" },
        { brand: "CreditQ", fit: "85%", budget: "₹60,000" },
      ],
    },
  },
  {
    id: "revenue",
    step: 6,
    icon: DollarSign,
    title: "Revenue Payout",
    subtitle: "Transparent splits every month",
    what: [
      "Products: 75% yours / 25% Sellixa",
      "Brand deals: 85% yours / 15% Sellixa",
      "Monthly payout — bank or UPI",
      "Tax invoice auto-generated",
    ],
    ai: "AI forecasts next month's earnings, flags seasonal trends, and tells you the best time to launch your next product.",
    gets: ["Monthly statement", "Auto tax invoice", "GST filing help", "Earnings forecast"],
    screen: {
      type: "revenue",
      title: "May Settlement",
      rows: [
        { label: "Product Sales", amount: "₹24,750", sub: "75% yours" },
        { label: "Brand Deal", amount: "₹38,250", sub: "85% yours" },
        { label: "Sellixa Fee", amount: "−₹9,000", sub: "" },
        { label: "Your Payout", amount: "₹63,000", sub: "sent to bank ✓", highlight: true },
      ],
    },
  },
  {
    id: "growth",
    step: 7,
    icon: Zap,
    title: "AI Growth Engine",
    subtitle: "Scale on autopilot",
    what: [
      "AI A/B tests pricing every week",
      "Upsell opportunities surfaced automatically",
      "30-day content calendar generated",
      "Retargeting ads auto-managed",
    ],
    ai: "Reinforcement learning model optimises price, messaging and targeting continuously. Every change is logged with its reason.",
    gets: ["30-day content calendar", "Automated ad campaigns", "Weekly optimisation log"],
    screen: {
      type: "growth",
      title: "This Week's AI Actions",
      actions: [
        { action: "Price raised ₹999 → ₹1,299", result: "+18% margin" },
        { action: "Re-engagement email sent to 340 leads", result: "12 purchases" },
        { action: "6 posts scheduled at peak hours", result: "+23% reach" },
      ],
    },
  },
  {
    id: "venture",
    step: 8,
    icon: Star,
    title: "Venture Path",
    subtitle: "For top performers only",
    what: [
      "Unlocked at ₹5L revenue or 1k+ sales",
      "Sellixa co-creates a consumer brand with you",
      "Operators handle manufacturing and fulfilment",
      "Equity structure agreed before build starts",
    ],
    ai: "AI models consumer brand demand from your audience data before any capital is committed — only build what's already proven.",
    gets: ["Co-founded brand", "Operator network", "Shared equity", "Sellixa growth capital"],
    screen: {
      type: "venture",
      title: "🎉 Venture Mode Unlocked",
      milestones: ["₹5L+ total revenue ✓", "1,000+ product sales ✓", "3 brand deals ✓"],
      offer: "Sellixa co-creates a brand with you. Equity split agreed upfront.",
    },
  },
];

// ─── Mock Screen ──────────────────────────────────────────────────────────────

function MockScreen({ screen }: { screen: any }) {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden border-2 border-black/10 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-black flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="ml-3 flex-1 bg-white/10 rounded px-3 py-0.5 text-[10px] text-white/40 font-mono">
          sellixa.io/app
        </div>
      </div>

      {/* App nav */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-black border-b border-white/10 flex-shrink-0">
        <span className="text-sm font-black text-[#ffff00]">SELLIXA</span>
        <div className="flex items-center gap-4">
          {["Dashboard", "Products", "Deals", "Earnings"].map(l => (
            <span key={l} className="text-[10px] font-medium text-white/40">{l}</span>
          ))}
        </div>
        <div className="w-6 h-6 rounded-full bg-[#ffff00]/20 flex items-center justify-center">
          <User size={12} color="#ffff00" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#111] p-5 overflow-hidden">
        <div className="text-base font-black text-white mb-4">{screen.title}</div>

        {/* FORM */}
        {screen.type === "form" && (
          <div className="space-y-3 max-w-[240px]">
            {screen.fields.map((f: string) => (
              <div key={f}>
                <div className="text-[10px] font-bold text-white/40 mb-1">{f}</div>
                <div className="h-8 rounded-lg bg-white/5 border border-white/10" />
              </div>
            ))}
            <div className="mt-4 h-10 rounded-full bg-[#ffff00] flex items-center justify-center text-xs font-black text-black">
              {screen.cta}
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {screen.type === "dashboard" && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {screen.stats.map((s: any) => (
                <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg font-black text-white">{s.value}</div>
                  <div className="text-[10px] text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-2">
              {screen.actions.map((a: string) => (
                <div key={a} className="h-9 rounded-xl bg-white/5 border border-white/10 flex items-center px-3 text-xs text-white/60">
                  {a}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IDEAS */}
        {screen.type === "ideas" && (
          <div className="space-y-2">
            {screen.ideas.map((idea: any, i: number) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{idea.name}</div>
                  <div className="text-[10px] text-white/40 mt-0.5">Demand: <span className="font-black text-[#ffff00]">{idea.score}/100</span></div>
                </div>
                <div className="text-sm font-black text-[#ffff00]">{idea.price}</div>
              </div>
            ))}
          </div>
        )}

        {/* LAUNCH */}
        {screen.type === "launch" && (
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-[#ffff00]/10 border border-[#ffff00]/20">
              <div className="text-xs font-black text-[#ffff00]">{screen.product}</div>
            </div>
            {screen.checks.map((c: string) => (
              <div key={c} className="flex items-center gap-2 text-xs text-white/70 bg-white/5 rounded-lg p-2 border border-white/10">
                <CheckCircle size={11} className="text-[#ffff00] flex-shrink-0" /> {c}
              </div>
            ))}
          </div>
        )}

        {/* BRAND */}
        {screen.type === "brand" && (
          <div className="space-y-2">
            {screen.deals.map((d: any, i: number) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{d.brand}</div>
                  <div className="text-[10px] text-white/40">Fit: <span className="font-black text-[#ffff00]">{d.fit}</span></div>
                </div>
                <div className="text-sm font-black text-[#ffff00]">{d.budget}</div>
              </div>
            ))}
          </div>
        )}

        {/* REVENUE */}
        {screen.type === "revenue" && (
          <div className="space-y-2">
            {screen.rows.map((r: any, i: number) => (
              <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs ${
                r.highlight ? "bg-[#ffff00] text-black font-black" : "bg-white/5 border border-white/10"
              }`}>
                <span className={r.highlight ? "font-black" : "text-white/70"}>{r.label}</span>
                <div className="text-right">
                  <div className={`font-bold ${r.highlight ? "text-black" : "text-white"}`}>{r.amount}</div>
                  {r.sub && <div className={`text-[9px] ${r.highlight ? "text-black/60" : "text-white/40"}`}>{r.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GROWTH */}
        {screen.type === "growth" && (
          <div className="space-y-2">
            {screen.actions.map((a: any, i: number) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/70">{a.action}</div>
                <div className="text-[11px] font-black text-[#ffff00] mt-1">{a.result}</div>
              </div>
            ))}
          </div>
        )}

        {/* VENTURE */}
        {screen.type === "venture" && (
          <div className="space-y-2">
            {screen.milestones.map((m: string) => (
              <div key={m} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
                <CheckCircle size={13} className="text-[#ffff00]" /> {m}
              </div>
            ))}
            <div className="mt-2 p-3 rounded-xl bg-[#ffff00]/10 border border-[#ffff00]/20 text-xs text-[#ffff00]">
              {screen.offer}
            </div>
          </div>
        )}
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
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all duration-300 ${
              i === current  ? "bg-black text-[#ffff00] border-black scale-110" :
              i < current    ? "bg-black text-white border-black"               :
                               "bg-transparent text-black/30 border-black/20"
            }`}
          >{i + 1}</button>
          {i < total - 1 && (
            <svg width="28" height="10" className="flex-shrink-0">
              <line x1="2" y1="5" x2="26" y2="5"
                stroke={i < current ? "#111" : "#11111133"}
                strokeWidth="1.5"
                strokeDasharray={i < current ? "0" : "4 3"}
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Dotted arrow overlay during transition ───────────────────────────────────

function TransitionArrow({ show, dir }: { show: boolean; dir: number }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      <svg width="300" height="40">
        <defs>
          <marker id="tip" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill="#111" opacity="0.8" />
          </marker>
        </defs>
        <motion.line
          x1={dir > 0 ? 20 : 280} y1="20"
          x2={dir > 0 ? 280 : 20} y2="20"
          stroke="#111" strokeWidth="2" strokeDasharray="10 6"
          markerEnd="url(#tip)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.35 }}
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
    setTimeout(() => { setCurrent(idx); setTrailing(false); }, 380);
  };

  const next = () => { if (current < steps.length - 1) goTo(current + 1); };
  const prev = () => { if (current > 0) goTo(current - 1); };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  });

  const step = steps[current];
  const Icon = step.icon;

  const slideVars = {
    enter:  (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const itemVars = {
    hidden:  { opacity: 0, y: 10 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.3 } }),
  };

  return (
    <div className="h-screen w-screen bg-[#ffff00] text-black flex flex-col overflow-hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <button onClick={() => window.location.href = "/v2"}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 transition text-sm font-bold">
          <ArrowLeft size={14} /> Back to PPT
        </button>
        <div className="text-center">
          <div className="text-base font-black tracking-tight">Sellixa V2 — Platform Walkthrough</div>
          <div className="text-[11px] opacity-40">Arrow keys or buttons to navigate</div>
        </div>
        <button onClick={() => window.location.href = "/"}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 transition text-sm font-bold">
          <X size={14} /> Exit
        </button>
      </div>

      {/* Step dots */}
      <div className="flex-shrink-0 pb-3">
        <StepDots current={current} total={steps.length} goTo={goTo} />
      </div>

      {/* Slide */}
      <div className="flex-1 relative overflow-hidden px-6">
        <TransitionArrow show={trailing} dir={dir} />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVars}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-6 grid grid-cols-2 gap-8"
          >
            {/* LEFT — Info */}
            <div className="flex flex-col justify-between overflow-hidden">
              <div>
                {/* Step badge */}
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-black text-[#ffff00] px-3 py-1 rounded-full text-[11px] font-black mb-4">
                  <Icon size={12} /> STEP {step.step} / {steps.length}
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                  className="text-4xl font-black tracking-tight leading-none mb-1">
                  {step.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                  className="text-sm opacity-50 mb-5">
                  {step.subtitle}
                </motion.p>

                {/* What happens */}
                <div className="mb-4">
                  <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">What happens</div>
                  <div className="space-y-1.5">
                    {step.what.map((w, i) => (
                      <motion.div key={i} custom={i} variants={itemVars} initial="hidden" animate="visible"
                        className="flex items-start gap-2 p-2 rounded-lg bg-black/5 text-xs">
                        <CheckCircle size={12} className="mt-0.5 flex-shrink-0 opacity-40" />
                        {w}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI */}
                <motion.div custom={5} variants={itemVars} initial="hidden" animate="visible">
                  <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2 flex items-center gap-1">
                    <Bot size={10} /> AI role
                  </div>
                  <div className="p-3 rounded-xl bg-black text-[#ffff00] text-xs leading-relaxed">
                    {step.ai}
                  </div>
                </motion.div>
              </div>

              {/* Client gets */}
              <motion.div custom={6} variants={itemVars} initial="hidden" animate="visible" className="mt-4">
                <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Client gets</div>
                <div className="flex flex-wrap gap-2">
                  {step.gets.map((g, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold bg-black text-white border border-black/20">
                      {g}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Mock screen */}
            <div className="relative h-full">
              <MockScreen screen={step.screen} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="flex-shrink-0 flex items-center justify-between px-8 pb-5 pt-2">
        <button onClick={prev} disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-black/10 hover:bg-black/20 disabled:opacity-20 transition-all">
          <ChevronLeft size={16} /> Previous
        </button>

        <span className="text-sm font-black opacity-60">{step.title}</span>

        <button onClick={next} disabled={current === steps.length - 1}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black bg-black text-white hover:bg-gray-900 disabled:opacity-20 transition-all shadow-lg">
          {current === steps.length - 1 ? "Full Flow Complete" : "Next"} <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
