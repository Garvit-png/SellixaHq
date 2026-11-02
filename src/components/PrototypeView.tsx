"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Upload, Sparkles, TrendingUp, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: any;
  details: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Creator Signup",
    description: "Join Sellixa V2 platform in 2 minutes",
    icon: User,
    details: [
      "Simple profile creation with social handles",
      "Audience size & niche verification",
      "Connect Instagram, YouTube, or Twitter",
      "Instant approval for 10k+ followers"
    ]
  },
  {
    id: 2,
    title: "Idea Validation",
    description: "We help you pick the right product",
    icon: Sparkles,
    details: [
      "AI-powered audience analysis",
      "Product recommendation based on niche",
      "Competitor research & pricing suggestions",
      "Pre-sale validation with landing page"
    ]
  },
  {
    id: 3,
    title: "Product Launch",
    description: "We build everything for you",
    icon: Upload,
    details: [
      "Course/ebook creation with templates",
      "Custom storefront on Sellixa domain",
      "Payment gateway integration (Razorpay)",
      "Email funnel & automation setup"
    ]
  },
  {
    id: 4,
    title: "Brand Partnerships",
    description: "Get matched with paying brands",
    icon: TrendingUp,
    details: [
      "Auto-matched with relevant brands",
      "Negotiated rates & contracts",
      "Campaign brief & content approval",
      "Payment through Sellixa escrow"
    ]
  },
  {
    id: 5,
    title: "Revenue & Growth",
    description: "Track earnings & scale your business",
    icon: DollarSign,
    details: [
      "Real-time dashboard with analytics",
      "Monthly payouts (product + brand deals)",
      "Performance insights & optimization tips",
      "Venture opportunities for top performers"
    ]
  }
];

export default function PrototypeView({ textColor }: { textColor: string }) {
  const [activeStep, setActiveStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {!showDemo ? (
        // Overview Mode
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="text-lg opacity-80 max-w-2xl mx-auto">
            See how creators go from signup to earning in 5 simple steps
          </div>

          {/* Step Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    textColor === "text-black" 
                      ? "bg-black/5 border-black/10 hover:bg-black/10" 
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      textColor === "text-black" ? "bg-black text-white" : "bg-white text-black"
                    }`}>
                      <StepIcon size={24} />
                    </div>
                    <div className="text-sm font-bold">{step.title}</div>
                    <div className="text-xs opacity-60">{step.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowDemo(true)}
            className={`px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl ${
              textColor === "text-black" 
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-[#ffff00] text-black hover:bg-[#ffd700]"
            }`}
          >
            View Interactive Demo →
          </motion.button>
        </motion.div>
      ) : (
        // Interactive Demo Mode
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`relative flex flex-col items-center transition-all ${
                      idx <= activeStep ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                      idx === activeStep
                        ? textColor === "text-black" ? "bg-black text-white scale-110" : "bg-[#ffff00] text-black scale-110"
                        : idx < activeStep
                        ? "bg-green-500 text-white"
                        : textColor === "text-black" ? "bg-black/10" : "bg-white/10"
                    }`}>
                      {idx < activeStep ? <CheckCircle size={28} /> : <StepIcon size={24} />}
                    </div>
                    <div className="text-xs mt-2 font-medium hidden md:block">{step.title}</div>
                  </button>
                  {idx < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 rounded-full ${
                      idx < activeStep 
                        ? "bg-green-500" 
                        : textColor === "text-black" ? "bg-black/10" : "bg-white/10"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-2xl border-2 ${
                textColor === "text-black" 
                  ? "bg-black/5 border-black/10" 
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${
                  textColor === "text-black" ? "bg-black text-white" : "bg-[#ffff00] text-black"
                }`}>
                  {(() => {
                    const StepIcon = steps[activeStep].icon;
                    return <StepIcon size={40} />;
                  })()}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2">{steps[activeStep].title}</h3>
                  <p className="text-lg opacity-70 mb-6">{steps[activeStep].description}</p>
                  
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          textColor === "text-black" ? "bg-black/5" : "bg-white/5"
                        }`}
                      >
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeStep === 0 
                      ? "opacity-30 cursor-not-allowed" 
                      : "hover:scale-105"
                  } ${
                    textColor === "text-black" ? "bg-black/10" : "bg-white/10"
                  }`}
                >
                  ← Previous
                </button>

                <div className="text-sm opacity-60">
                  Step {activeStep + 1} of {steps.length}
                </div>

                {activeStep < steps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    className={`px-6 py-2 rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 ${
                      textColor === "text-black" ? "bg-black text-white" : "bg-[#ffff00] text-black"
                    }`}
                  >
                    Next <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => window.location.href = "/join"}
                    className="px-8 py-3 rounded-full font-black text-lg bg-green-500 text-white hover:scale-105 transition-all shadow-xl"
                  >
                    Get Started →
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Back to Overview */}
          <button
            onClick={() => setShowDemo(false)}
            className="text-sm opacity-60 hover:opacity-100 transition-opacity mx-auto block"
          >
            ← Back to Overview
          </button>
        </motion.div>
      )}
    </div>
  );
}
