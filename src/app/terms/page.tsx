import { Metadata } from 'next';
import { BackButton } from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sellixa',
  description: 'Terms and Conditions for using Sellixa services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <BackButton />
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Terms &amp; Conditions</h1>
        <p className="text-white/60 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Sellixa&apos;s services, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="mb-3">Sellixa provides:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Digital product creation and monetization consulting</li>
              <li>Sales funnel design and development</li>
              <li>Website development and deployment</li>
              <li>Launch strategy and implementation</li>
              <li>Ongoing support and strategic consulting</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">3. User Obligations</h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Revenue-Share Model</h3>
            <p className="mb-3">
              Our primary business model operates on a revenue-share basis where we invest our resources upfront 
              and share in the success of your digital products. Specific terms are outlined in individual service agreements.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Payment Processing</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All payments are processed through secure third-party payment gateways</li>
              <li>You are responsible for paying all applicable taxes</li>
              <li>Payment terms are specified in individual service agreements</li>
              <li>We reserve the right to change our fees with 30 days&apos; notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">5. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Our IP</h3>
            <p className="mb-3">
              All content, features, and functionality of our services (including but not limited to text, graphics, logos, 
              software, and code) are owned by Sellixa and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Your Content</h3>
            <p>
              You retain ownership of content you provide to us. By submitting content, you grant us a non-exclusive, 
              worldwide, royalty-free license to use, reproduce, modify, and display your content solely for the purpose 
              of providing our services.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Deliverables</h3>
            <p>
              Upon full payment and completion of services, you receive full ownership rights to custom-developed assets 
              (websites, funnels, etc.), excluding any Sellixa proprietary frameworks or third-party components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during 
              the course of our business relationship, except as required by law or with written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">7. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Our Commitment</h3>
            <p className="mb-3">We commit to providing professional services with reasonable skill and care.</p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">No Guarantees</h3>
            <p className="mb-3">
              We do not guarantee specific revenue results, audience growth, or business outcomes. Results depend on multiple 
              factors including market conditions, audience engagement, and your execution.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Disclaimer</h3>
            <p>
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING 
              BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, SELLIXA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
              OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mt-3">
              Our total liability for any claim arising out of or relating to these terms or our services shall not exceed 
              the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">9. Term and Termination</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Term</h3>
            <p className="mb-3">These Terms remain in effect while you use our services.</p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Termination by You</h3>
            <p className="mb-3">You may terminate your use of our services at any time by contacting us.</p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Termination by Us</h3>
            <p className="mb-3">
              We may terminate or suspend your access immediately, without prior notice, for any breach of these Terms.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Effect of Termination</h3>
            <p>
              Upon termination, your right to use our services ceases immediately. Payment obligations for services 
              already rendered remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold Sellixa harmless from any claims, damages, losses, liabilities, and expenses 
              (including legal fees) arising from your use of our services or breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">11. Dispute Resolution</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Governing Law</h3>
            <p className="mb-3">
              These Terms are governed by the laws of India, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Jurisdiction</h3>
            <p className="mb-3">
              Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in 
              [Your City, State].
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Informal Resolution</h3>
            <p>
              Before filing a claim, you agree to contact us to attempt informal resolution of any dispute.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email 
              or a notice on our website. Your continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or 
              eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">14. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Sellixa regarding our services and supersede all 
              prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">15. Contact Information</h2>
            <p className="mb-3">For questions about these Terms, contact us:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:legal@sellixa.com" className="text-[#ffff00] hover:underline">legal@sellixa.com</a></p>
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
