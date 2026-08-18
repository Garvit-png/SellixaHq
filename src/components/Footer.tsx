import { Sparkles, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffff00]/5 hidden md:block rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-2xl font-serif font-bold mb-4 text-white">
              <div className="w-8 h-8 rounded-md bg-[#ffff00] flex items-center justify-center text-black">
                <Sparkles size={18} />
              </div>
              Sellixa
            </div>
            <p className="text-white/60 text-sm mb-6">
              We help creators and professionals monetize their expertise through premium digital products and sales funnels.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@sellixa.com" className="flex items-center gap-2 text-white/60 hover:text-[#ffff00] transition-colors">
                <Mail size={16} />
                hello@sellixa.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-white/60 hover:text-[#ffff00] transition-colors">
                <Phone size={16} />
                +91 [Your Phone]
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-semibold text-white">Services</h4>
            <Link href="#what-we-build" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Offer Creation</Link>
            <Link href="#what-we-build" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Funnel Building</Link>
            <Link href="#what-we-build" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Website Development</Link>
            <Link href="#what-we-build" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Launch Strategy</Link>
            <Link href="#what-we-build" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Consulting</Link>
          </div>
          
          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-semibold text-white">Company</h4>
            <Link href="#about" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">About Us</Link>
            <Link href="#portfolio" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Success Stories</Link>
            <Link href="#our-team" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Our Team</Link>
            <Link href="/contact" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Contact</Link>
            <Link href="#calendly" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Book a Call</Link>
          </div>
          
          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-semibold text-white">Legal</h4>
            <Link href="/privacy-policy" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Terms &amp; Conditions</Link>
            <Link href="/refund-policy" className="text-white/60 hover:text-[#ffff00] transition-colors text-sm">Refund Policy</Link>
          </div>
        </div>

        {/* Business Details Section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
            <div>
              <h5 className="text-white/80 font-semibold mb-2">Registered Office</h5>
              <p className="text-white/40 leading-relaxed">
                {/* ADD YOUR BUSINESS ADDRESS */}
                [Your Business Name]<br />
                [Street Address]<br />
                [City, State - PIN]<br />
                India
              </p>
            </div>
            <div>
              <h5 className="text-white/80 font-semibold mb-2">Business Details</h5>
              <p className="text-white/40">
                GST: [Your GSTIN]<br />
                PAN: [Your PAN]
              </p>
            </div>
            <div>
              <h5 className="text-white/80 font-semibold mb-2">Follow Us</h5>
              <a 
                href="https://www.instagram.com/sellixahq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#ffff00] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @sellixahq
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Sellixa. All rights reserved.</p>
          <p className="text-xs">
            Made with passion for creators who want to scale 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
