import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { SituationCards } from '@/components/SituationCards'
import { ServiceCard } from '@/components/ServiceCard'
import { BookingBand } from '@/components/BookingBand'
import { pillars } from '@/data/pillars'
import { servicesByPillar } from '@/data/services'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.servicesHub.title,
  description: en.servicesHub.metaDescription,
}

export default function ServicesPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.servicesHub.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          <BrandText brandClassName="text-gold-200">{en.servicesHub.intro}</BrandText>
        </p>
      </Section>

      {/* Situation cards (shared component with Home) */}
      <Section tone="white">
        <SectionHeading title={en.sections.situations} />
        <SituationCards className="mt-10" />
      </Section>

      {/* Three pillar cards */}
      <Section tone="cream">
        <SectionHeading title={en.servicesHub.pillarsHeading} />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.pillar}>
              <Link
                href={`/services/${p.path}`}
                className="group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-7 transition-colors hover:border-gold-400"
              >
                <h3 className="text-xl font-semibold text-navy-700">{p.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-navy-600">{p.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-700">
                  {en.cta.explore(p.name)}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Specialty grids per pillar */}
      {pillars.map((p, i) => (
        <Section key={p.pillar} tone={i % 2 === 0 ? 'white' : 'cream'}>
          <SectionHeading title={p.name} lead={p.tagline} />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesByPillar(p.pillar).map((s) => (
              <li key={s.slug}>
                <ServiceCard
                  title={s.title}
                  description={s.subtitle}
                  href={`/services/${s.pillar}/${s.slug}`}
                  price={s.price}
                  duration={s.duration}
                />
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <BookingBand
        title={en.servicesHub.closing.title}
        lead={en.servicesHub.closing.lead}
      />
    </>
  )
}
