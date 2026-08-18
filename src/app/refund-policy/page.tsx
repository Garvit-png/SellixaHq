import { Metadata } from 'next';
import { BackButton } from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Sellixa',
  description: 'Refund and Cancellation Policy for Sellixa services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Refund &amp; Cancellation Policy</h1>
        <p className="text-white/60 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">1. Overview</h2>
            <p>
              At Sellixa, we are committed to delivering exceptional results. This policy outlines our refund and 
              cancellation terms for our various service offerings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">2. Revenue-Share Services</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">No Upfront Payment Model</h3>
            <p className="mb-3">
              For our revenue-share partnership model where we invest our resources upfront:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No refunds are applicable as there are no upfront payments from clients</li>
              <li>Revenue-sharing terms are defined in individual partnership agreements</li>
              <li>Either party may terminate the partnership as per the terms in the service agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">3. Fixed-Fee Services</h2>
            <p className="mb-3">For services purchased at a fixed fee (consulting, development, or other paid services):</p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Before Work Begins</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full refund available if requested within 48 hours of payment and before any work has commenced</li>
              <li>Refund will be processed within 5-7 business days to the original payment method</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">After Work Has Started</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No refunds once project work has begun and deliverables are in progress</li>
              <li>Partial refunds may be considered on a case-by-case basis for work not yet completed</li>
              <li>Refund amount will be calculated based on work completed vs. total project scope</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">After Delivery</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No refunds after final deliverables have been provided and accepted</li>
              <li>Minor revisions included as per service agreement terms</li>
              <li>Major scope changes require additional payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">4. Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Client-Initiated Cancellation</h3>
            <p className="mb-3">You may cancel services by providing written notice via email. Upon cancellation:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You will be charged for work completed up to the cancellation date</li>
              <li>Any advance payments will be adjusted against completed work</li>
              <li>Remaining balance (if any) will be refunded within 5-7 business days</li>
              <li>All intellectual property rights for incomplete work remain with Sellixa</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-2 mt-4">Sellixa-Initiated Cancellation</h3>
            <p className="mb-3">We reserve the right to cancel or terminate services if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Client fails to provide required information or materials within agreed timelines</li>
              <li>Client breaches the Terms & Conditions</li>
              <li>Client engages in abusive or unprofessional conduct</li>
              <li>Project requirements are misrepresented or unfeasible</li>
            </ul>
            <p className="mt-3">
              In such cases, any advance payment will be adjusted for work completed, and the remaining balance 
              will be refunded within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">5. Refund Timeline</h2>
            <div className="bg-[#ffff00]/10 border border-[#ffff00]/30 rounded-lg p-6">
              <p className="text-white font-semibold mb-2">Standard Refund Processing Time:</p>
              <p className="text-[#ffff00] text-lg font-bold">5-7 Business Days</p>
              <p className="mt-3 text-sm">
                Refunds are processed to the original payment method. Depending on your bank or payment provider, 
                it may take an additional 3-5 business days for the amount to reflect in your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">6. Non-Refundable Items</h2>
            <p className="mb-3">The following are non-refundable:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Third-party costs (domain registration, hosting, premium plugins, licenses)</li>
              <li>Consultation fees after the consultation has been delivered</li>
              <li>Completed deliverables that have been approved and accepted</li>
              <li>Rush fees or expedited service charges</li>
              <li>Subscription or recurring service fees for the current billing cycle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">7. Modifications and Scope Changes</h2>
            <p>
              Significant changes to project scope after work has begun may require additional payment. Such changes 
              will be documented in writing with revised pricing before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">8. Dispute Resolution</h2>
            <p className="mb-3">
              If you&apos;re unsatisfied with our services or have concerns about a refund:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact us immediately at <a href="mailto:support@sellixa.com" className="text-[#ffff00] hover:underline">support@sellixa.com</a></li>
              <li>We will review your case within 48 hours</li>
              <li>We aim to resolve all disputes amicably and fairly</li>
              <li>If resolution cannot be reached, the matter may be escalated as per our Terms & Conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">9. Payment Gateway Policies</h2>
            <p>
              Refunds are subject to the terms and conditions of our payment gateway providers (Razorpay, Stripe, etc.). 
              Transaction fees charged by payment gateways are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">10. Force Majeure</h2>
            <p>
              We shall not be held liable for delays or inability to perform services due to circumstances beyond our 
              reasonable control (natural disasters, pandemics, government restrictions, etc.). In such cases, timelines 
              may be extended, and refunds will be assessed on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">11. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our services after changes constitutes 
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">12. Contact Us</h2>
            <p className="mb-3">For refund requests or questions about this policy:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:support@sellixa.com" className="text-[#ffff00] hover:underline">support@sellixa.com</a></p>
              <p><strong>Response Time:</strong> Within 48 hours during business days</p>
              <p><strong>Phone:</strong> [Add your phone number here]</p>
              {/* ADD YOUR REGISTERED BUSINESS ADDRESS HERE */}
              <p><strong>Address:</strong> [Your Registered Business Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
