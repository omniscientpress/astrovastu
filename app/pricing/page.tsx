import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/Section'
import { PriceChip } from '@/components/PriceChip'
import { BookingBand } from '@/components/BookingBand'
import { services } from '@/data/services'
import { packages } from '@/data/packages'
import { PAYMENT_NOTES } from '@/data/pricing'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.pricing.title,
  description: en.pricing.metaDescription,
}

const PILLAR_LABEL = {
  astrology: en.pillars.astrology,
  vastu: en.pillars.vastu,
  numerology: en.pillars.numerology,
} as const

export default function PricingPage() {
  const marriage = services.find((s) => s.slug === 'marriage')
  const singleServices = services.filter((s) => s.slug !== 'marriage')

  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.pricing.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          {en.pricing.lead}
        </p>
      </Section>

      <Section tone="white">
        <SectionHeading title={en.pricing.perSessionHeading} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {singleServices.map((s) => (
            <li
              key={s.slug}
              className="flex items-center justify-between gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                  {PILLAR_LABEL[s.pillar]}
                </p>
                <p className="mt-1 font-semibold text-navy-700">{s.title}</p>
              </div>
              <PriceChip price={s.price} duration={s.duration} />
            </li>
          ))}
        </ul>
      </Section>

      {marriage?.tiers && (
        <Section deferOffscreen tone="cream">
          <SectionHeading title={en.pricing.marriageHeading} lead={en.pricing.marriageLead} />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {marriage.tiers.map((tier) => (
              <li
                key={tier.id}
                className={
                  tier.highlight
                    ? 'relative flex h-full flex-col rounded-2xl border-2 border-gold-400 bg-cream-50 p-7'
                    : 'flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-7'
                }
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold-400 px-3 py-0.5 text-xs font-semibold text-navy-800">
                    {en.labels.mostPopular}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-navy-700">{tier.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-navy-600">{tier.scope}</p>
                <div className="mt-6">
                  <PriceChip price={tier.price} duration={tier.duration} />
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section deferOffscreen tone="white">
        <SectionHeading title={en.pricing.packagesHeading} />
        <ul className="mt-10 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg) => (
            <li
              key={pkg.id}
              className="flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <h3 className="font-semibold text-navy-700">{pkg.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{pkg.scope}</p>
              <div className="mt-5">
                <PriceChip price={pkg.price} duration={pkg.duration} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section deferOffscreen tone="cream" className="py-10 lg:py-12">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-navy-600">
          {PAYMENT_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </Section>

      <BookingBand />
    </>
  )
}
