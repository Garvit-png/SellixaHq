import { Metadata } from 'next';
import { BackButton } from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sellixa',
  description: 'Privacy Policy for Sellixa - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <BackButton />
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Sellixa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Personal Information</h3>
            <p className="mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information (company name, website, industry)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To process your transactions and send related information</li>
              <li>To communicate with you about our services, updates, and promotional offers</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at <a href="mailto:privacy@sellixa.com" className="text-[#ffff00] hover:underline">privacy@sellixa.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
              content of these third-party sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If you become aware that a child has provided us with personal information, 
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">13. Contact Us</h2>
            <p className="mb-3">If you have questions about this Privacy Policy, please contact us:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:privacy@sellixa.com" className="text-[#ffff00] hover:underline">privacy@sellixa.com</a></p>
              <p><strong>Website:</strong> <a href="https://sellixa.com" className="text-[#ffff00] hover:underline">https://sellixa.com</a></p>
              {/* ADD YOUR REGISTERED BUSINESS ADDRESS HERE */}
              <p><strong>Address:</strong> [Your Registered Business Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
