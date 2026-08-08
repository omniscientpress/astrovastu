import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { Logo } from '@/components/Logo'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.about.title,
  description: en.about.metaDescription,
}

export default function ProfilePage() {
  const a = en.about

  return (
    <>
      <Section tone="white">
        <div className="mb-10 flex justify-center lg:mb-12">
          <Logo variant="full" theme="light" className="[--logo-size:160px] sm:[--logo-size:200px]" />
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Image
            src="/photos/siva-kola.webp"
            alt="Siva Kola, consultant at Divine Jyothi"
            width={640}
            height={640}
            priority
            className="h-56 w-56 justify-self-center rounded-full object-cover ring-2 ring-gold-400/70 ring-offset-4 ring-offset-cream-50 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
          />
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-navy-700 sm:text-4xl lg:text-5xl">
              {a.heading}
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gold-700">
              <BrandText>{a.subtitle}</BrandText>
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-navy-700 sm:text-3xl">{a.name}</h2>
            <div className="mt-6 space-y-4">
              {a.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-navy-600">
                  <BrandText>{paragraph}</BrandText>
                </p>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-widest text-gold-700">
          {a.credentialsHeading}
        </h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {a.credentials.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <h4 className="font-semibold text-navy-700">{item.title}</h4>
              <p className="mt-2 leading-relaxed text-navy-600">
                <BrandText>{item.detail}</BrandText>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" className="py-12 lg:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton label={a.cta.whatsapp} />
          <a
            href={`https://wa.me/919885099448?text=${encodeURIComponent(a.cta.chartMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-400"
          >
            {a.cta.chart}
          </a>
        </div>
      </Section>
    </>
  )
}
