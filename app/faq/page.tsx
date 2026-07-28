import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/Section'
import { FaqAccordion } from '@/components/FaqAccordion'
import { BookingBand } from '@/components/BookingBand'
import { faqGroups } from '@/data/faqs'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.faqPage.title,
  description: en.faqPage.metaDescription,
}

export default function FaqPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.faqPage.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          {en.faqPage.lead}
        </p>
      </Section>

      {faqGroups.map((group, i) => (
        <Section key={group.id} tone={i % 2 === 0 ? 'white' : 'cream'}>
          <SectionHeading title={group.title} />
          <FaqAccordion items={group.items} className="mt-8 max-w-3xl" />
        </Section>
      ))}

      <BookingBand
        title="Still have a question?"
        lead="Message us on WhatsApp — we reply within working hours."
      />
    </>
  )
}
