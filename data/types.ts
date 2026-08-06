export type Pillar = 'astrology' | 'vastu' | 'numerology'

export interface ServiceTier {
  id: string
  name: string
  scope: string
  price: number
  duration: string
  highlight?: boolean
}

export interface CoveredTopic {
  title: string
  points: string[]
}

export interface Service {
  slug: string
  pillar: Pillar
  title: string
  /** One-line hero subtitle. */
  subtitle: string
  /** 2–3 sentences naming real techniques. */
  description: string
  /** Unique meta description for this page. */
  metaDescription: string
  /** 3–4 concrete situations. */
  isThisForYou: string[]
  /** 6–8 checklist items. */
  included: string[]
  /** 3–5 topic cards with concrete sub-topics. */
  covered: CoveredTopic[]
  /** REQUIRED on every service page (spec §8.4.5). */
  deliverables: string[]
  price: number
  duration: string
  /** Marriage only — tiered packages. */
  tiers?: ServiceTier[]
  /** Slugs of 2–3 related services, cross-pillar where natural. */
  related: string[]
  /** Rendered verbatim where legally required (e.g. Health). */
  disclaimer?: string
  /** Optional uppercase hero tag, e.g. "NUMEROLOGY & LO SHU". */
  categoryTag?: string
}

export interface Package {
  id: string
  name: string
  scope: string
  /** Number, or a placeholder token such as '{{AUDIT_PRICE}}'. */
  price: number | string
  duration: string
  highlight?: boolean
}

export interface Testimonial {
  name: string
  city: string
  service: string
  pillar: Pillar
  quote: string
  language: 'en' | 'te'
}

export interface Faq {
  question: string
  answer: string
}

export interface FaqGroup {
  id: string
  title: string
  items: Faq[]
}

export interface Situation {
  title: string
  description: string
  pillar: Pillar
  href: string
}
