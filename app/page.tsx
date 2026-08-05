import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Mic, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HeroCarousel } from '@/components/HeroCarousel'
import { Section, SectionHeading } from '@/components/Section'
import { SituationCards } from '@/components/SituationCards'
import { FamilyCompatibilityBlock } from '@/components/FamilyCompatibilityBlock'
import { TrustStrip } from '@/components/TrustStrip'
import { TestimonialCard } from '@/components/TestimonialCard'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PriceChip } from '@/components/PriceChip'
import { BookingBand } from '@/components/BookingBand'
import { OrnamentDivider, PillarIcon, StepIcon } from '@/components/graphics'
import type { PillarKey, StepKey } from '@/components/graphics/types'
import { testimonials } from '@/data/testimonials'
import { featuredFaqs } from '@/data/faqs'
import { packages } from '@/data/packages'
import { en } from '@/locales/en'

const METHOD_ACCENT: Record<PillarKey, string> = {
  timing: 'border-l-pillar-timing',
  space: 'border-l-pillar-space',
  name: 'border-l-pillar-name',
}

const RIBBON = [
  { icon: FileText, label: 'Written summary (PDF)' },
  { icon: Sparkles, label: 'Specific recommendations' },
  { icon: Mic, label: 'Session recording on request' },
]

export default function HomePage() {
  const faqs = featuredFaqs()
  const featuredPackages = packages.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <HeroCarousel />

      <OrnamentDivider theme="light" className="bg-cream-100" />

      {/* Trust strip — verifiable items only */}
      <Section tone="cream" className="py-10 lg:py-12">
        <TrustStrip />
        <p className="mt-6 text-center text-sm text-navy-500">{en.trust.microline}</p>
      </Section>

      {/* I need help with… */}
      <Section tone="white">
        <SectionHeading
          title={en.home.situations.heading}
          lead={en.home.situations.lead}
        />
        <SituationCards className="mt-10" />
      </Section>

      {/* The Divine Jyothi method — the only pillar presentation on this page */}
      <Section deferOffscreen tone="navy">
        <SectionHeading
          tone="navy"
          title={en.home.method.heading}
          lead={en.home.method.lead}
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {en.home.method.items.map((item) => (
            <li
              key={item.key}
              className={cn(
                'rounded-2xl border border-navy-500 border-l-4 bg-navy-600/40 p-7',
                METHOD_ACCENT[item.key as PillarKey]
              )}
            >
              <PillarIcon
                id={item.key as PillarKey}
                theme="dark"
                className="h-12 w-12 text-gold-300"
              />
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold-300">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-cream-50">
                {item.discipline}
              </h3>
              <p className="mt-3 leading-relaxed text-cream-200/85">{item.description}</p>
              <ul className="mt-5 space-y-2">
                {item.uses.map((use) => (
                  <li key={use} className="flex gap-2 text-sm text-cream-300/90">
                    <span aria-hidden="true" className="text-gold-400">
                      —
                    </span>
                    {use}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* Family Compatibility — headline differentiator */}
      <Section deferOffscreen tone="cream">
        <FamilyCompatibilityBlock />
      </Section>

      {/* How consultation works */}
      <Section deferOffscreen tone="white">
        <SectionHeading
          title={en.home.howItWorks.heading}
          lead={en.home.howItWorks.lead}
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {en.home.howItWorks.steps.map((step, i) => (
            <li
              key={step.key}
              className="rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <div className="flex items-start gap-4">
                <StepIcon
                  id={step.key as StepKey}
                  theme="light"
                  className="h-11 w-11 shrink-0 text-gold-600"
                />
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400 font-semibold text-navy-800">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-navy-700">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 rounded-2xl bg-cream-100 px-6 py-5">
          {RIBBON.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm text-navy-700">
              <item.icon className="h-4 w-4 text-gold-600" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </Section>

      {/* Founder */}
      <Section deferOffscreen tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Image
            src="/photos/siva-kola.webp"
            alt="Siva Kola, founder of Divine Jyothi"
            width={640}
            height={640}
            className="h-44 w-44 justify-self-center rounded-full object-cover ring-2 ring-gold-400/70 ring-offset-4 ring-offset-cream-100 lg:h-52 lg:w-52"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-700">
              {en.home.founder.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy-700 sm:text-4xl">
              {en.home.founder.heading}
            </h2>
            <p className="mt-1 text-navy-500">{en.home.founder.role}</p>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              {en.home.founder.body}
            </p>
            <Link
              href={en.home.founder.cta.href}
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800"
            >
              {en.home.founder.cta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials — rendered only when real reviews exist */}
      {featuredTestimonials.length > 0 && (
        <Section deferOffscreen tone="white">
          <SectionHeading
            title={en.home.testimonials.heading}
            lead={en.home.testimonials.lead}
          />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <li key={`${t.name}-${t.service}`}>
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
          <Link
            href="/testimonials"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800"
          >
            {en.cta.allTestimonials}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Section>
      )}

      {/* Packages preview */}
      <Section deferOffscreen tone="cream">
        <SectionHeading
          title={en.home.packagesPreview.heading}
          lead={en.home.packagesPreview.lead}
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <li
              key={pkg.id}
              className="flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <h3 className="text-lg font-semibold text-navy-700">{pkg.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-navy-600">{pkg.scope}</p>
              <div className="mt-5">
                <PriceChip price={pkg.price} duration={pkg.duration} />
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/pricing"
          className="group mt-8 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800"
        >
          {en.cta.fullPricing}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </Section>

      {/* FAQ preview */}
      <Section deferOffscreen tone="white">
        <SectionHeading title={en.home.faq.heading} lead={en.home.faq.lead} />
        <FaqAccordion items={faqs} className="mt-10" />
        <Link
          href={en.home.faq.cta.href}
          className="group mt-8 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800"
        >
          {en.home.faq.cta.label}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </Section>

      <BookingBand
        title={en.home.finalCta.heading}
        lead={en.home.finalCta.lead}
      />
    </>
  )
}
