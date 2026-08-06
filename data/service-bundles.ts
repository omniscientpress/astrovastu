export interface ServiceBundle {
  id: string
  title: string
  description: string
  href: string
  /** Short list of services included in this bundle. */
  includes: string[]
  /** Flagship bundle — pale gold highlight on the hub. */
  flagship?: boolean
}

export const serviceBundles: ServiceBundle[] = [
  {
    id: 'losu-numerology',
    title: 'Lo Shu Grid & Numerology Mastery',
    description:
      'Start with your birth grid, then align names and numbers — the integrated numerology path we recommend first.',
    href: '/services/numerology/lo-shu-grid',
    includes: [
      'Lo Shu Grid Analysis',
      'Name Analysis & spelling check',
      'Mobile number alignment',
      'Baby & business name verification',
    ],
    flagship: true,
  },
  {
    id: 'kp-deep-dives',
    title: 'KP Astrology Deep Dives',
    description:
      'Career, wealth, and marriage timing — Sub-Lord analysis with specific, checkable windows.',
    href: '/services/astrology',
    includes: [
      'Career & Education',
      'Finance & Wealth',
      'Marriage & Relationships',
      'Muhurtham & Prashna',
    ],
  },
  {
    id: 'vastu-practical',
    title: 'Practical Vastu Consultation',
    description:
      'Home, office, and plot assessments — placement corrections without demolition-first advice.',
    href: '/services/vastu',
    includes: [
      'Home Vastu assessment',
      'Office & business layout',
      'Plot evaluation before purchase',
      'Proportionate remedies',
    ],
  },
]
