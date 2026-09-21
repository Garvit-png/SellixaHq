"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  fullName: string; email: string; phone: string; college: string; year: string;
  instagram: string; linkedin: string; role: string; skills: string[];
  priorExperience: string; experienceDetails: string; portfolio: string;
  roleAnswer: string; hoursPerWeek: string; startDate: string; remoteOk: string;
  whySellixa: string; skillToDevelop: string; whySelectYou: string; ownershipOk: string;
};

const EMPTY: FormData = {
  fullName: "", email: "", phone: "", college: "", year: "",
  instagram: "", linkedin: "", role: "", skills: [],
  priorExperience: "", experienceDetails: "", portfolio: "",
  roleAnswer: "", hoursPerWeek: "", startDate: "", remoteOk: "",
  whySellixa: "", skillToDevelop: "", whySelectYou: "", ownershipOk: "",
};

const STEPS = ["Basic Info", "Role & Skills", "Availability"] as const;

// Photo config per step — slightly different tilt + tape angle per photo for a natural look
const STEP_PHOTOS = [
  { src: "/groupPhoto1.png", rotate: -3, tape: 12,  alt: "Sellixa team 1" },
  { src: "/groupPhoto2.png", rotate:  4, tape: -8,  alt: "Sellixa team 2" },
  { src: "/groupPhoto3.png", rotate: -2, tape:  6,  alt: "Sellixa team 3" },
];

/** Tape strip — a semi-transparent sticky-tape piece at the top-center of the photo */
function TapeStrip({ angle }: { angle: number }) {
  return (
    <div
      className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
      style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
    >
      {/* Tape body */}
      <div
        className="w-16 h-7 rounded-sm"
        style={{
          background: "rgba(255,255,220,0.55)",
          backdropFilter: "blur(2px)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,200,0.4)",
        }}
      />
      {/* Subtle tape grain lines */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)",
        }}
      />
    </div>
  );
}

/** Photo polaroid card shown beside each form step */
function StepPhoto({ step }: { step: number }) {
  const { src, rotate, tape, alt } = STEP_PHOTOS[step];
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 24, rotate: rotate - 4 }}
      animate={{ opacity: 1, y: 0, rotate }}
      exit={{ opacity: 0, y: -16, rotate: rotate + 4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative select-none"
      style={{ filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.22))" }}
    >
      <TapeStrip angle={tape} />
      {/* Polaroid frame */}
      <div className="bg-white p-2.5 pb-8 rounded-sm"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(0,0,0,0.06)" }}>
        <div className="relative w-72 h-56 md:w-96 md:h-72 overflow-hidden rounded-[2px] bg-black/5">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 288px, 384px"
            priority={step === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-black font-mono text-[10px] tracking-[0.18em] uppercase mb-2 font-bold">
      {children}
    </label>
  );
}

function Input({ value, onChange, placeholder, type = "text" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-black/5 border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 font-sans text-sm focus:outline-none focus:border-black focus:bg-white transition-all duration-200" />
  );
}

function Textarea({ value, onChange, placeholder, rows = 4 }: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <textarea value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} rows={rows}
      className="w-full bg-black/5 border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 font-sans text-sm focus:outline-none focus:border-black focus:bg-white transition-all duration-200 resize-none" />
  );
}

function RadioGroup({ options, value, onChange }: {
  options: string[]; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button key={opt} type="button" onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full border text-xs font-mono font-bold tracking-wide transition-all duration-200 ${
            value === opt ? "bg-black text-[#ffff00] border-black" : "bg-black/5 text-black/60 border-black/15 hover:border-black/40 hover:text-black"
          }`}>{opt}</button>
      ))}
    </div>
  );
}

function CheckboxGroup({ options, value, onChange }: {
  options: string[]; value: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button key={opt} type="button" onClick={() => toggle(opt)}
          className={`px-4 py-2 rounded-full border text-xs font-mono font-bold tracking-wide transition-all duration-200 ${
            value.includes(opt) ? "bg-black text-[#ffff00] border-black" : "bg-black/5 text-black/60 border-black/15 hover:border-black/40 hover:text-black"
          }`}>{opt}</button>
      ))}
    </div>
  );
}

function roleQuestion(role: string): string {
  switch (role) {
    case "Marketing":           return "What is one content idea you would create for Sellixa?";
    case "Video Editing":       return "Which editing tools do you use? Share your best work.";
    case "Outreach":            return "Write a short DM you would send to a creator with 50K followers.";
    case "Sales":               return 'A creator says "I\'m not interested." How would you respond?';
    case "Client Coordination": return "How would you handle a client who isn't responding?";
    default:                    return "Tell us something relevant to your chosen role.";
  }
}

export default function JoinForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormData>(key: K) =>
    (val: FormData[K]) => setForm((f) => ({ ...f, [key]: val }));

  const goNext = () => { setDirection(1);  setStep((s) => s + 1); };
  const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/join-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": form.fullName, "Email": form.email, "Phone": form.phone,
          "College": form.college, "Year": form.year, "Instagram": form.instagram,
          "LinkedIn": form.linkedin, "Role": form.role,
          "Skills": form.skills.join(", "),
          "Prior Experience": form.priorExperience,
          "Experience Details": form.experienceDetails,
          "Portfolio": form.portfolio,
          "Role Question Answer": form.roleAnswer,
          "Hours Per Week": form.hoursPerWeek,
          "Start Date": form.startDate,
          "Remote OK": form.remoteOk,
          "Why Sellixa": form.whySellixa,
          "Skill to Develop": form.skillToDevelop,
          "Why Select You": form.whySelectYou,
          "Ownership OK": form.ownershipOk,
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const variants = {
    enter:  (d: number) => ({ x: d * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d * -60, opacity: 0 }),
  };

  if (submitted) return <SuccessScreen name={form.fullName} />;

  return (
    <main className="min-h-screen bg-[#ffff00] flex flex-col">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="flex items-center gap-2 text-black/50 hover:text-black transition-colors font-mono text-xs tracking-widest uppercase font-bold">
          <ArrowLeft size={14} /><span>Sellixa</span>
        </Link>
        <span className="font-black text-black tracking-tighter text-xl">SELLIXA</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-black/40">{step + 1} / {STEPS.length}</span>
      </div>

      <div className="w-full h-0.5 bg-black/10">
        <motion.div className="h-full bg-black"
          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 md:py-16">
        {/* Two-column layout on desktop: form left, photo right */}
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ── Form column ── */}
          <div className="w-full lg:flex-1 min-w-0">
            <motion.div key={`label-${step}`} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8 flex-wrap">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${
                    i < step ? "bg-black text-[#ffff00]" : i === step ? "bg-black text-[#ffff00] ring-4 ring-black/20" : "bg-black/10 text-black/40"
                  }`}>{i < step ? "✓" : i + 1}</div>
                  <span className={`font-mono text-[10px] tracking-widest uppercase font-bold transition-colors duration-300 ${i === step ? "text-black" : "text-black/30"}`}>{s}</span>
                  {i < STEPS.length - 1 && <div className="w-6 h-px bg-black/20 mx-1" />}
                </div>
              ))}
            </motion.div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={step} custom={direction} variants={variants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                  {step === 0 && <StepBasic form={form} set={set} />}
                  {step === 1 && <StepRole  form={form} set={set} />}
                  {step === 2 && <StepAvailability form={form} set={set} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {error && <p className="mt-4 text-red-600 font-mono text-xs font-bold tracking-wide">{error}</p>}

            <div className="flex items-center justify-between mt-10">
              {step > 0 ? (
                <button onClick={goBack} className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-bold text-black/50 hover:text-black transition-colors">
                  <ArrowLeft size={14} /><span>Back</span>
                </button>
              ) : <div />}

              {step < STEPS.length - 1 ? (
                <button onClick={goNext} className="flex items-center gap-2 bg-black text-[#ffff00] px-8 py-3 rounded-full font-mono text-xs tracking-widest uppercase font-black hover:bg-black/80 transition-all duration-200 hover:scale-105 active:scale-95">
                  <span>Next</span><ArrowRight size={14} />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={submitting}
                  className="flex items-center gap-2 bg-black text-[#ffff00] px-8 py-3 rounded-full font-mono text-xs tracking-widest uppercase font-black hover:bg-black/80 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting
                    ? <><Loader2 size={14} className="animate-spin" /><span>Submitting…</span></>
                    : <><span>Submit Application</span><ArrowRight size={14} /></>}
                </button>
              )}
            </div>
          </div>

          {/* ── Photo column (desktop only — hidden on mobile) ── */}
          <div className="hidden lg:flex lg:w-80 xl:w-96 shrink-0 items-start justify-center pt-20">
            <AnimatePresence mode="wait">
              <StepPhoto step={step} />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  );
}

function StepBasic({ form, set }: { form: FormData; set: <K extends keyof FormData>(k: K) => (v: FormData[K]) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-none mb-1">Who are you?</h2>
        <p className="text-black/50 font-mono text-xs tracking-widest uppercase">Basic Information</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><Label>Full Name *</Label><Input value={form.fullName} onChange={set("fullName")} placeholder="Aryan Sharma" /></div>
        <div><Label>Email Address *</Label><Input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" /></div>
        <div><Label>WhatsApp / Phone *</Label><Input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" /></div>
        <div><Label>College / University *</Label><Input value={form.college} onChange={set("college")} placeholder="Delhi University" /></div>
      </div>
      <div>
        <Label>Current Year *</Label>
        <RadioGroup options={["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate"]} value={form.year} onChange={set("year") as (v: string) => void} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><Label>Instagram Profile *</Label><Input value={form.instagram} onChange={set("instagram")} placeholder="@yourhandle" /></div>
        <div><Label>LinkedIn (optional)</Label><Input value={form.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/yourname" /></div>
      </div>
    </div>
  );
}

function StepRole({ form, set }: { form: FormData; set: <K extends keyof FormData>(k: K) => (v: FormData[K]) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-none mb-1">What can you do?</h2>
        <p className="text-black/50 font-mono text-xs tracking-widest uppercase">Role & Skills</p>
      </div>
      <div>
        <Label>Which role are you applying for? *</Label>
        <RadioGroup options={["Marketing", "Video Editing", "Outreach", "Sales", "Client Coordination"]} value={form.role} onChange={set("role") as (v: string) => void} />
      </div>
      <div>
        <Label>Skills (select all that apply)</Label>
        <CheckboxGroup
          options={["Social Media / Marketing", "Content Creation", "Video Editing", "Sales", "Communication", "Lead Generation / Outreach", "Client Management", "Research", "Canva / Design", "Other"]}
          value={form.skills} onChange={set("skills") as (v: string[]) => void} />
      </div>
      <div>
        <Label>Prior experience with startup / club / org? *</Label>
        <RadioGroup options={["Yes", "No"]} value={form.priorExperience} onChange={set("priorExperience") as (v: string) => void} />
      </div>
      <div>
        <Label>Briefly tell us about your experience</Label>
        <Textarea value={form.experienceDetails} onChange={set("experienceDetails")} placeholder="Relevant work, projects, or clubs…" />
      </div>
      <div>
        <Label>Portfolio / Previous Work</Label>
        <Input value={form.portfolio} onChange={set("portfolio")} placeholder="Instagram / Drive / YouTube / Behance link…" />
      </div>
      {form.role && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-black rounded-2xl p-5">
          <Label><span className="text-[#ffff00]">★ Role Question — {form.role}</span></Label>
          <p className="text-white/60 font-sans text-xs mb-3">{roleQuestion(form.role)}</p>
          <Textarea value={form.roleAnswer} onChange={set("roleAnswer")} placeholder="Your answer…" rows={5} />
        </motion.div>
      )}
    </div>
  );
}

function StepAvailability({ form, set }: { form: FormData; set: <K extends keyof FormData>(k: K) => (v: FormData[K]) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-none mb-1">Are you ready?</h2>
        <p className="text-black/50 font-mono text-xs tracking-widest uppercase">Availability & Motivation</p>
      </div>
      <div>
        <Label>Hours per week *</Label>
        <RadioGroup options={["3–5 Hours", "5–8 Hours", "8–12 Hours", "12+ Hours"]} value={form.hoursPerWeek} onChange={set("hoursPerWeek") as (v: string) => void} />
      </div>
      <div>
        <Label>When can you start? *</Label>
        <RadioGroup options={["Immediately", "Within 1 Week", "Within 2 Weeks", "Other"]} value={form.startDate} onChange={set("startDate") as (v: string) => void} />
      </div>
      <div>
        <Label>Comfortable working remotely? *</Label>
        <RadioGroup options={["Yes", "No", "Hybrid Preferred"]} value={form.remoteOk} onChange={set("remoteOk") as (v: string) => void} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Why do you want to join Sellixa? *</Label>
          <Textarea value={form.whySellixa} onChange={set("whySellixa")} rows={3} placeholder="What draws you to Sellixa specifically…" />
        </div>
        <div>
          <Label>One skill you want to develop *</Label>
          <Textarea value={form.skillToDevelop} onChange={set("skillToDevelop")} rows={3} placeholder="e.g. building funnels, short-form editing…" />
        </div>
      </div>
      <div>
        <Label>Why should we select you? *</Label>
        <Textarea value={form.whySelectYou} onChange={set("whySelectYou")} rows={3} placeholder="Make your case — be bold." />
      </div>
      <div>
        <Label>Comfortable with ownership & deadlines? *</Label>
        <RadioGroup options={["Yes", "No"]} value={form.ownershipOk} onChange={set("ownershipOk") as (v: string) => void} />
      </div>
    </div>
  );
}

function SuccessScreen({ name }: { name: string }) {
  return (
    <main className="min-h-screen bg-[#ffff00] flex flex-col items-center justify-center px-6 text-center">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex flex-col items-center gap-6 max-w-lg">
        <CheckCircle2 size={64} strokeWidth={1.5} className="text-black" />
        <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">YOU'RE IN.</h1>
        <p className="text-black/70 font-serif text-lg leading-relaxed">
          Thanks {name ? name.split(" ")[0] : ""}! 🚀 Your application is with us. Shortlisted candidates will be contacted for the next round.
        </p>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-black/40">— Team Sellixa · Turning Attention Into Revenue</p>
        <Link href="/" className="mt-4 bg-black text-[#ffff00] px-8 py-3 rounded-full font-mono text-xs tracking-widest uppercase font-black hover:bg-black/80 transition-all duration-200 hover:scale-105 active:scale-95">
          Back to Sellixa
        </Link>
      </motion.div>
    </main>
  );
}
