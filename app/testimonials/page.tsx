import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { TestimonialCard } from '@/components/TestimonialCard'
import { BookingBand } from '@/components/BookingBand'
import { testimonials } from '@/data/testimonials'
import { SITE, isPlaceholder } from '@/lib/config'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.testimonialsPage.title,
  description: en.testimonialsPage.metaDescription,
}

const PILLAR_LABEL = {
  astrology: en.pillars.astrology,
  vastu: en.pillars.vastu,
  numerology: en.pillars.numerology,
} as const

export default function TestimonialsPage() {
  const hasReviews = testimonials.length > 0

  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.testimonialsPage.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          {en.testimonialsPage.lead}
        </p>
      </Section>

      <Section tone="white">
        {hasReviews ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={`${t.name}-${t.service}`}>
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-gold-700">
                  {PILLAR_LABEL[t.pillar]}
                </span>
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-2xl leading-relaxed text-navy-600">
            {en.testimonialsPage.empty}
          </p>
        )}

        {!isPlaceholder(SITE.googleBusinessUrl) && (
          <a
            href={SITE.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-semibold text-gold-700 hover:text-gold-800"
          >
            Read our reviews on Google
          </a>
        )}
      </Section>

      <BookingBand />
    </>
  )
}
