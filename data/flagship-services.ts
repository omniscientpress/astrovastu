export interface FlagshipService {
  id: string
  tag: string
  title: string
  description: string
  features: string[]
  ctaLabel: string
  whatsappMessage: string
  /** Premium card — gold border and glow (marriage flagship). */
  premium?: boolean
  ctaVariant: 'primary' | 'outline'
}

export const flagshipServices: FlagshipService[] = [
  {
    id: 'marriage-family',
    tag: 'PREMIUM SERVICE',
    title: 'Family System & Compatibility',
    description:
      "Marriage in India is rarely just two people. We help you understand the household you're joining through KP Astrology. Preparation, not just prediction.",
    features: [
      'Understand household rhythms & expectations.',
      'Guidance framed by role (in-laws, extended family).',
      'Ethical chart reading (consent required).',
    ],
    ctaLabel: 'Explore Marriage Consultation',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to explore a Marriage & Family Compatibility consultation.",
    premium: true,
    ctaVariant: 'primary',
  },
  {
    id: 'individual-blueprint',
    tag: 'MOST POPULAR',
    title: 'KP Astrology + Lo Shu Grid',
    description:
      'Navigate your career and financial trajectory. We combine exact mathematical KP timing with practical Lo Shu Grid elemental balancing.',
    features: [
      'Favorable windows for job changes or business.',
      'Identify missing numbers in your birth grid.',
      'Practical, non-commercial remedies (no gemstones/yantras to buy).',
    ],
    ctaLabel: 'Book Individual Blueprint',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to book the Individual Blueprint (KP Astrology + Lo Shu Grid).",
    ctaVariant: 'outline',
  },
  {
    id: 'onsite-vastu',
    tag: 'EXCLUSIVE',
    title: 'Physical Site Audit',
    description:
      'A comprehensive physical visit to your property to measure accurate degrees and analyze energy flows without demolition.',
    features: [
      'Precise degree measurements on-site.',
      'Non-destructive elemental balancing.',
      'Available across Hyderabad & Vijayawada regions.',
    ],
    ctaLabel: 'Request Site Visit',
    whatsappMessage:
      "Hi Divine Jyothi, I'd like to request an on-site Vastu & Energy Audit (VIP visit). My property is in:",
    ctaVariant: 'outline',
  },
]
