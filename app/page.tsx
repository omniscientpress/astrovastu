import { Section, SectionHeading } from '@/components/Section'
import { TrustStrip } from '@/components/TrustStrip'
import { BookingBand } from '@/components/BookingBand'
import { en } from '@/locales/en'

/**
 * Placeholder shell — the hero carousel and full homepage section order
 * are built in Phase 2 (spec §5 and §8.1).
 */
export default function HomePage() {
  return (
    <>
      <Section tone="navy">
        <SectionHeading
          tone="navy"
          eyebrow={en.brand.pillars}
          title={en.brand.promise}
          lead="Divine Jyothi with Siva Kola in Hyderabad — integrated KP Astrology, Vastu, and Numerology for career, marriage, property, naming, and important life decisions."
        />
      </Section>

      <Section tone="cream" className="py-10 lg:py-12">
        <TrustStrip />
        <p className="mt-6 text-center text-sm text-navy-500">{en.trust.microline}</p>
      </Section>

      <BookingBand />
    </>
  )
}
