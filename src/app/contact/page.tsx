import { Metadata } from 'next';
import { BackButton } from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Contact Us | Sellixa',
  description: 'Get in touch with Sellixa - Business address, phone, email, and support information.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <BackButton />
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-white/60 text-lg">We&apos;re here to help. Reach out anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:hello@sellixa.com" className="text-[#ffff00] text-lg hover:underline">
                    hello@sellixa.com
                  </a>
                  <p className="text-white/40 text-sm mt-1">General inquiries & support</p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Phone</h3>
                  <a href="tel:+911234567890" className="text-[#ffff00] text-lg hover:underline">
                    +91 [Your Phone Number]
                  </a>
                  <p className="text-white/40 text-sm mt-1">Monday - Friday, 10 AM - 6 PM IST</p>
                </div>

                {/* Instagram */}
                <div>
                  <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/sellixahq/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ffff00] text-lg hover:underline"
                  >
                    @sellixahq
                  </a>
                  <p className="text-white/40 text-sm mt-1">Follow us for updates</p>
                </div>
              </div>
            </div>

            {/* Business Address */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Registered Office</h2>
              <div className="space-y-3 text-white/80">
                <p className="font-semibold text-white">Sellixa</p>
                {/* ADD YOUR COMPLETE BUSINESS ADDRESS */}
                <p>[Your Business Name (if different)]</p>
                <p>[Street Address]</p>
                <p>[City, State - PIN Code]</p>
                <p>[Country]</p>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Business Details</h2>
              <div className="space-y-4 text-white/80">
                {/* ADD YOUR BUSINESS DETAILS */}
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">GST Number</p>
                  <p className="font-mono">[Your GSTIN]</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">PAN Number</p>
                  <p className="font-mono">[Your PAN]</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Business Type</p>
                  <p>[Proprietorship / Partnership / Private Limited / LLP]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-semibold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ffff00] text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ffff00] text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ffff00] text-white"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ffff00] text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ffff00] text-white resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffff00] text-black font-semibold py-4 rounded-lg hover:bg-[#ffff00]/90 transition-colors duration-300"
              >
                Send Message
              </button>

              <p className="text-white/40 text-sm text-center">
                We typically respond within 24-48 hours during business days.
              </p>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-[#ffff00]/10 border border-[#ffff00]/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">Need Immediate Support?</h2>
          <p className="text-white/80 mb-6">
            For urgent matters or technical support, reach out via email or book a call directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@sellixa.com"
              className="px-6 py-3 bg-[#ffff00] text-black font-semibold rounded-lg hover:bg-[#ffff00]/90 transition-colors duration-300"
            >
              Email Support
            </a>
            <a
              href="#calendly"
              className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
