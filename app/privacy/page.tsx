import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Divine Jyothi consultations.',
}

export default function PrivacyPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="text-3xl font-semibold text-cream-50 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-cream-300/70">Last updated: July 2026</p>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-navy-600">
            <BrandText>
              Divine Jyothi ("we", "us") respects your privacy. This policy explains what
              information we collect when you use this website or book a consultation, and
              how we use it.
            </BrandText>
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">Information we collect</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Depending on the service you book or tool you use, we may ask for your name,
              phone number, email, and birth details (date of birth, and for astrology also
              time and place of birth); floor plans or property photographs for Vastu
              assessments; or names and numbers you would like reviewed for numerology.
              Your name, date of birth, and phone number are kept strictly confidential and
              used only to prepare your consultation or deliver your report. We do not sell
              or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">How we use it</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Your details are used solely to prepare your consultation, generate digital
              reports, schedule your appointment, and communicate with you about your
              booking — typically via email or WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">Third-party services</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              We use WhatsApp for booking and confirmations, UPI apps for consultation
              payments, and Razorpay for secure digital report purchases. Payment card
              details are processed directly by Razorpay and are not stored on our servers.
              Any information you share through those services is also subject to their own
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Data retention & security
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              We retain booking details, birth data, and floor plans only as long as
              needed to provide your consultation and for reasonable record-keeping
              afterward. We take reasonable measures to protect your data, but no method
              of transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">Your rights</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              You may request access to, correction of, or deletion of your personal data
              at any time by contacting us at {SITE.email} or via WhatsApp at{' '}
              {SITE.phoneDisplay}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
