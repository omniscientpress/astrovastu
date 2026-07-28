import { Check } from 'lucide-react'
import { Section, SectionHeading } from './Section'
import { ServiceCard } from './ServiceCard'
import { BookingBand } from './BookingBand'
import { servicesByPillar } from '@/data/services'
import type { PillarInfo } from '@/data/pillars'

/** Template for the three pillar pages (spec §8.3). */
export function PillarPage({ info }: { info: PillarInfo }) {
  const list = servicesByPillar(info.pillar)

  return (
    <>
      {/* Navy hero: what this discipline answers, one sentence */}
      <Section tone="navy">
        <p className="inline-flex rounded-full bg-navy-600/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
          {info.name}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {info.heroLine}
        </h1>
      </Section>

      {/* Best for */}
      <Section tone="cream">
        <SectionHeading title="Best for" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {info.bestFor.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-cream-300 bg-cream-50 p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <span className="leading-relaxed text-navy-700">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Specialty grid */}
      <Section deferOffscreen tone="white">
        <SectionHeading title={`${info.name} services`} />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
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

      {/* How this pillar works here */}
      <Section deferOffscreen tone="cream">
        <SectionHeading title={info.explainer.heading} />
        <div className="mt-6 max-w-3xl space-y-4">
          {info.explainer.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="text-lg leading-relaxed text-navy-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <BookingBand service={info.name} />
    </>
  )
}
