import Link from 'next/link'
import { ArrowLeft, Check, ShieldCheck, Stethoscope } from 'lucide-react'
import { Section, SectionHeading } from './Section'
import { withBrand } from './Copy'
import { WhatsAppButton } from './WhatsAppButton'
import { PriceChip } from './PriceChip'
import { DeliverablesList } from './DeliverablesList'
import { ServiceCard } from './ServiceCard'
import { getPillar } from '@/data/pillars'
import { getService } from '@/data/services'
import {
  analysisFactors,
  familyConsentNote,
  familyRoles,
  marriageHonestyNote,
} from '@/data/marriage'
import type { Service } from '@/data/types'
import { formatPrice } from '@/lib/utils'
import { en } from '@/locales/en'

/**
 * Reusable template for all service pages. Hero + audience cards + included
 * list are data-driven from `Service`; marriage flagship extensions render
 * only for that slug. Booking actions never exceed two per section.
 */
export function ServiceDetailPage({ service }: { service: Service }) {
  const pillar = getPillar(service.pillar)
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s))
  const isMarriage = service.slug === 'marriage'
  const categoryLabel = service.categoryTag ?? pillar?.name ?? ''

  return (
    <>
      {/* Hero */}
      <Section tone="navy">
        <p className="inline-flex rounded-full bg-navy-600/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
          {categoryLabel}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          {withBrand(service.description)}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            service={service.title}
            label={en.cta.bookService(service.title) + ' on WhatsApp'}
          />
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-300"
          >
            {en.cta.viewPricing}
          </Link>
        </div>
      </Section>

      {/* Breadcrumb + price */}
      <Section tone="white" className="py-8 lg:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/services/${service.pillar}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {pillar?.name}
          </Link>
          <PriceChip price={service.price} duration={service.duration} />
        </div>
      </Section>

      {/* Is this for you? */}
      <Section deferOffscreen tone="white">
        <h2 className="text-2xl font-semibold text-navy-700 sm:text-3xl">
          {en.sections.isThisForYou}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.isThisForYou.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-cream-200 bg-white p-6 leading-relaxed text-navy-700 shadow-sm"
            >
              {withBrand(item)}
            </li>
          ))}
        </ul>
      </Section>

      {/* What's included */}
      <Section deferOffscreen tone="cream">
        <h2 className="text-2xl font-semibold text-navy-700 sm:text-3xl">
          {en.sections.whatsIncluded}
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {service.included.map((item) => (
            <li key={item} className="flex gap-3">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                aria-hidden="true"
              />
              <span className="leading-relaxed text-navy-700">{withBrand(item)}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What we cover */}
      <Section deferOffscreen tone="white">
        <SectionHeading title={en.sections.whatWeCover} />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.covered.map((topic) => (
            <li
              key={topic.title}
              className="rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <h3 className="font-semibold text-navy-700">{topic.title}</h3>
              <ul className="mt-4 space-y-2">
                {topic.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-navy-600">
                    <span aria-hidden="true" className="text-gold-500">
                      —
                    </span>
                    {withBrand(point)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {isMarriage && (
        <Section deferOffscreen tone="navy">
          <SectionHeading
            tone="navy"
            title="What we analyse"
            lead="Six factors, stated as method — what we examine, not what we promise."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analysisFactors.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-navy-500 bg-navy-600/40 p-6"
              >
                <h3 className="font-semibold text-cream-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/85">
                  {f.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl rounded-2xl border border-navy-500 bg-navy-600/40 p-5 text-cream-200">
            {withBrand(marriageHonestyNote)}
          </p>
        </Section>
      )}

      {isMarriage && (
        <Section deferOffscreen tone="cream">
          <SectionHeading
            eyebrow="Preparation, not prediction"
            title="Family Compatibility"
            lead="Marriage in India is rarely just two people. We help you understand the household you're joining — the expectations, the rhythms, and where you'll want to be patient — so you go in prepared rather than surprised."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {familyRoles.map((r) => (
              <li
                key={r.role}
                className="rounded-2xl border border-cream-300 bg-cream-50 p-6"
              >
                <h3 className="font-semibold text-navy-700">{r.role}</h3>
                <p className="mt-0.5 font-telugu text-sm text-navy-500">{r.telugu}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {r.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-3xl gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5 text-navy-700">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-gold-600"
              aria-hidden="true"
            />
            <span>{withBrand(familyConsentNote)}</span>
          </p>
        </Section>
      )}

      {isMarriage && service.tiers && (
        <Section deferOffscreen tone="white">
          <SectionHeading
            title="Choose your scope"
            lead="Fixed prices per session — no ranges, no negotiation, no hidden extras."
          />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {service.tiers.map((tier) => (
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
                <p className="mt-6 text-3xl font-semibold text-navy-700">
                  {formatPrice(tier.price)}
                </p>
                <p className="mt-1 text-sm text-navy-500">{tier.duration}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {service.disclaimer && (
        <Section deferOffscreen tone="white" className="py-8 lg:py-10">
          <p className="flex gap-3 rounded-2xl border border-navy-200 bg-cream-100 p-5 text-navy-700">
            <Stethoscope
              className="mt-0.5 h-5 w-5 shrink-0 text-navy-500"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold">Medical disclaimer: </strong>
              {service.disclaimer}
            </span>
          </p>
        </Section>
      )}

      <Section deferOffscreen tone="cream">
        <DeliverablesList items={service.deliverables} className="mx-auto max-w-3xl" />
      </Section>

      <Section deferOffscreen tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">
            Book {service.title}
          </h2>
          <p className="mt-4 text-cream-200/90">
            {formatPrice(service.price)}
            {service.tiers ? ' onwards' : ''} · {service.duration} · {en.booking.policy}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton service={service.title} label="WhatsApp to book" />
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-lg border-2 border-cream-300/60 px-6 py-3 text-base font-semibold text-cream-100 transition-colors hover:border-cream-100"
            >
              {en.cta.useForm}
            </Link>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section deferOffscreen tone="white">
          <SectionHeading title={en.sections.related} />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <ServiceCard
                  title={r.title}
                  description={r.subtitle}
                  href={`/services/${r.pillar}/${r.slug}`}
                  pillar={r.pillar}
                  price={r.price}
                  duration={r.duration}
                />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
