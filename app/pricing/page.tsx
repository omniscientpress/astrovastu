import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { PricingPackageCard } from '@/components/PricingPackageCard'
import { OnSiteVastuBanner } from '@/components/OnSiteVastuBanner'
import { onlinePricingPackages } from '@/data/pricing-packages'
import { PAYMENT_NOTES } from '@/data/pricing'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.pricing.title,
  description: en.pricing.metaDescription,
}

export default function PricingPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.pricing.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          <BrandText brandClassName="text-gold-200">{en.pricing.lead}</BrandText>
        </p>
      </Section>

      <Section tone="cream">
        <SectionHeading
          title={en.pricing.onlineHeading}
          lead={en.pricing.onlineLead}
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-center">
          {onlinePricingPackages.map((pkg) => (
            <li key={pkg.id}>
              <PricingPackageCard pkg={pkg} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy">
        <OnSiteVastuBanner variant="pricing" />
      </Section>

      <Section tone="white" className="py-10 lg:py-12">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-navy-600">
          {PAYMENT_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
