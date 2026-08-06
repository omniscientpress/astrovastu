import { PRICES } from './pricing'

export interface ComboPackage {
  id: string
  badge: string
  title: string
  subtitle: string
  description: string
  ctaLabel: string
  whatsappMessage: string
}

export const comboPackages: ComboPackage[] = [
  {
    id: 'destiny-alignment',
    badge: 'MOST POPULAR',
    title: 'The Destiny Alignment Combo',
    subtitle: 'KP Astrology + Lo Shu Grid',
    description:
      'Get perfect timing for life events along with practical number remedies. Ideal for career growth, financial stability, and marriage alignment.',
    ctaLabel: 'Book Destiny Combo',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book The Destiny Alignment Combo (KP Astrology + Lo Shu Grid).",
  },
  {
    id: 'life-blueprint',
    badge: 'ULTIMATE VALUE',
    title: 'The 360° Life Blueprint',
    subtitle: 'KP Astrology + Numerology + Vastu',
    description:
      'A complete holistic analysis. Sync your karmic timeline, name vibrations, and the energy of your living/workspace for ultimate success.',
    ctaLabel: 'Book 360° Blueprint',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book The 360° Life Blueprint (KP Astrology + Numerology + Vastu).",
  },
]

export const onSiteVastu = {
  title: 'On-Site Vastu & Energy Audit (VIP Service)',
  pricingTitle: 'VIP On-Site Vastu Audit',
  description:
    'A comprehensive physical site visit to measure accurate degrees, analyze energy flows, and provide non-destructive remedies (without demolition) for your home or office.',
  pricingDescription:
    'Physical site visits across Hyderabad and Vijayawada regions. Precise degree measurements and non-demolition remedies.',
  availability:
    'Available for on-site visits across Hyderabad and Vijayawada regions. Please reach out to coordinate travel and scheduling.',
  pricingNote: 'Price on Request (Consultation Fee + Travel Expenses)',
  pricingAmount: `Starting at ₹${PRICES.onSiteVastuFrom.toLocaleString('en-IN')} + Travel`,
  ctaLabel: 'Request VIP Site Visit',
  pricingCtaLabel: 'Request Site Visit',
  whatsappMessage:
    "Hi Divine Jyothi, I'd like to request an on-site Vastu & Energy Audit (VIP visit). My property is in:",
}
