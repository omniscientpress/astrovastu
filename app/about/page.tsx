import type { Metadata } from 'next'
import Image from 'next/image'
import { X as XIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { TrustStrip } from '@/components/TrustStrip'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.about.title,
  description: en.about.metaDescription,
}

export default function AboutPage() {
  const a = en.about
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          <BrandText>{a.heading}</BrandText>
        </h1>
      </Section>

      {/* Meet Siva Kola */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Image
            src="/photos/siva-kola.webp"
            alt="Siva Kola, founder of Divine Jyothi"
            width={640}
            height={640}
            priority
            className="h-48 w-48 justify-self-center rounded-full object-cover ring-2 ring-gold-400/70 ring-offset-4 ring-offset-cream-50 lg:h-60 lg:w-60"
          />
          <div>
            <h2 className="text-3xl font-semibold text-navy-700">{a.meetHeading}</h2>
            <p className="mt-1 text-navy-500">{a.meetRole}</p>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">{a.meetBody}</p>
          </div>
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-widest text-gold-700">
          {a.credentialsHeading}
        </h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {a.credentials.map((c) => (
            <li key={c.title} className="border-l-2 border-gold-400 py-1 pl-4">
              <p className="font-semibold text-navy-700">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">{c.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why Divine Jyothi exists */}
      <Section tone="cream">
        <SectionHeading title={a.whyHeading} />
        <div className="mt-6 max-w-3xl space-y-4">
          {a.whyBody.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-navy-600">
              <BrandText>{p}</BrandText>
            </p>
          ))}
        </div>
      </Section>

      {/* Our approach */}
      <Section deferOffscreen tone="navy">
        <SectionHeading tone="navy" title={a.approachHeading} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {a.approach.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-navy-500 bg-navy-600/40 p-6"
            >
              <h3 className="font-semibold text-cream-50">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-cream-200/85">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* What is the KP System? */}
      <Section deferOffscreen tone="white">
        <SectionHeading title={a.kpHeading} />
        <div className="mt-6 max-w-3xl space-y-4">
          {a.kpBody.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-navy-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section deferOffscreen tone="cream">
        <SectionHeading title={a.howHeading} />
        <ol className="mt-8 max-w-2xl space-y-4">
          {a.how.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400 text-sm font-semibold text-navy-800">
                {i + 1}
              </span>
              <span className="leading-relaxed text-navy-700">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* What we won't do */}
      <Section tone="white">
        <SectionHeading title={a.wontHeading} />
        <ul className="mt-8 max-w-2xl space-y-3">
          {a.wont.map((item) => (
            <li key={item} className="flex gap-3">
              <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" aria-hidden="true" />
              <span className="leading-relaxed text-navy-700">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Trust strip + final CTA */}
      <Section tone="cream" className="py-10 lg:py-12">
        <TrustStrip />
      </Section>
      <Section tone="navy" className="py-12 text-center lg:py-16">
        <WhatsAppButton label={a.cta.label} className="mx-auto" />
      </Section>
    </>
  )
}
