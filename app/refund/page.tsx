import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Divine Jyothi consultations.',
}

export default function RefundPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="text-3xl font-semibold text-cream-50 sm:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-sm text-cream-300/70">Last updated: July 2026</p>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6">
            <h2 className="text-2xl font-semibold text-navy-700">
              Digital PDF reports
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Relationship Blueprint and other instantly generated digital PDF reports are
              delivered immediately after successful payment. As these are digital products
              generated on purchase, <strong>all sales are final and strictly
              non-refundable</strong>. Please double-check names and birth dates before
              completing payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Before your consultation
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Free reschedule or cancellation with 24+ hours notice. Full refund if we
              cancel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Late cancellations & no-shows
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Cancellations made less than 24 hours before the appointment, or missed
              appointments without prior notice, are not eligible for a refund. We are
              happy to offer one free reschedule per booking if you let us know as soon
              as possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              After your consultation
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Once a consultation has been delivered or a written summary has been sent,
              the service is considered complete and is not eligible for a refund. Our
              guidance reflects honest professional analysis; we do not promise specific
              outcomes, and dissatisfaction with an assessment itself is not grounds for
              a refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              Incorrect details
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Astrology charts are calculated from the birth date, time, and place you
              provide; Vastu assessments depend on the floor plan you share. Please
              double-check these before your appointment. If incorrect details were
              provided, we can redo the analysis, but this does not qualify for a refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy-700">
              How to request a refund
            </h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Message us on WhatsApp at {SITE.phoneDisplay} or email {SITE.email} with
              your booking details. Approved refunds are sent back to the original UPI
              account within 3–5 business days.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
