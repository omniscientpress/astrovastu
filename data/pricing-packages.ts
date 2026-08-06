import { PRICES } from './pricing'

export interface PricingPackage {
  id: string
  title: string
  price: number
  compareAtPrice?: number
  description: string
  ctaLabel: string
  whatsappMessage: string
  highlight?: boolean
  ctaVariant: 'primary' | 'outline'
}

export const onlinePricingPackages: PricingPackage[] = [
  {
    id: 'single-area',
    title: 'Single Area Focus',
    price: PRICES.singleAreaFocus,
    description:
      'Clear answers for a single life area (KP Astrology OR Lo Shu Grid).',
    ctaLabel: 'Book Single Query',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book a Single Area Focus consultation (KP Astrology OR Lo Shu Grid).",
    ctaVariant: 'outline',
  },
  {
    id: 'destiny-combo',
    title: 'The Destiny Combo',
    price: PRICES.destinyCombo,
    compareAtPrice: PRICES.destinyComboCompareAt,
    description:
      'KP Astrology + Lo Shu Grid. The complete roadmap for career, marriage, and practical remedies.',
    ctaLabel: 'Book Destiny Combo',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book The Destiny Combo (KP Astrology + Lo Shu Grid).",
    highlight: true,
    ctaVariant: 'primary',
  },
  {
    id: 'life-blueprint',
    title: '360° Life Blueprint',
    price: PRICES.lifeBlueprint,
    description:
      'KP + Numerology + Online Vastu (Floor plan). Complete karmic and spatial alignment.',
    ctaLabel: 'Book Blueprint',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book the 360° Life Blueprint (KP + Numerology + Online Vastu).",
    ctaVariant: 'outline',
  },
]
