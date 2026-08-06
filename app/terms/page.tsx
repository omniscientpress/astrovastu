import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Divine Jyothi consultations.',
}

export default function TermsPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="text-3xl font-semibold text-cream-50 sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-cream-300/70">Last updated: July 2026</p>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-navy-600">
            By booking a consultation or using this website, you agree to the following
            terms.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Nature of our services
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              <BrandText>
                Divine Jyothi provides KP Astrology, Vastu, and Numerology consultations
                for guidance and informational purposes. These are belief-based and
                assessment-based practices, not exact sciences — we do not promise
                specific outcomes, timing, or results. Our consultations are not a
                substitute for professional medical, legal, financial, or structural
                engineering advice, and important decisions should not be based solely on
                a consultation with us.
              </BrandText>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Bookings & payment
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Consultations are booked through our website or WhatsApp, and confirmed via
              WhatsApp. Payment is collected directly via UPI after your slot is
              confirmed. Please see our Refund Policy for cancellation terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Accuracy of information
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              You are responsible for providing accurate birth details, floor plans, or
              names for review. Our analysis is only as accurate as the information
              provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">Confidentiality</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Details you share for your consultation are kept confidential and used only
              to prepare your session, as described in our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Limitation of liability
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              <BrandText>
                Divine Jyothi is not liable for any decisions made, or losses incurred,
                based on guidance provided during a consultation. Our services are offered
                in good faith based on genuine professional analysis.
              </BrandText>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Changes to these terms
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              We may update these terms from time to time. Continued use of our services
              after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">Contact</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Questions about these terms? Reach us at {SITE.email} or WhatsApp{' '}
              {SITE.phoneDisplay}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
