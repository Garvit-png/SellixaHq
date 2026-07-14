import { Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border mt-32 py-20 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 hidden md:block rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-xl font-heading font-bold mb-4">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-black">
                <Sparkles size={14} />
              </div>
              Aura
            </div>
            <p className="text-text-muted text-sm">
              Crafting digital masterpieces. A world-class platform built for visionaries.
            </p>
          </div>
          
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-medium text-text-primary">Product</h4>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Features</a>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Integrations</a>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Pricing</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-medium text-text-primary">Company</h4>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">About</a>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Careers</a>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-medium text-text-primary">Legal</h4>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Aura Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <MagneticButton variant="secondary" className="p-2 h-auto w-auto px-4 py-2 text-xs" strength={10}>X</MagneticButton>
            <MagneticButton variant="secondary" className="p-2 h-auto w-auto px-4 py-2 text-xs" strength={10}>GH</MagneticButton>
            <MagneticButton variant="secondary" className="p-2 h-auto w-auto px-4 py-2 text-xs" strength={10}>LI</MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
