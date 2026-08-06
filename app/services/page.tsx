import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { SituationCards } from '@/components/SituationCards'
import { FlagshipServiceCard } from '@/components/FlagshipServiceCard'
import { BookingBand } from '@/components/BookingBand'
import { pillars } from '@/data/pillars'
import { flagshipServices } from '@/data/flagship-services'
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

      <Section tone="cream">
        <SectionHeading
          title={en.servicesHub.flagshipHeading}
          lead={en.servicesHub.flagshipLead}
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {flagshipServices.map((service) => (
            <li key={service.id}>
              <FlagshipServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading title={en.sections.situations} />
        <SituationCards className="mt-10" />
      </Section>

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

      <BookingBand
        title={en.servicesHub.closing.title}
        lead={en.servicesHub.closing.lead}
      />
    </>
  )
}
