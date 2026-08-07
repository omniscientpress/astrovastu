/** Freemium digital PDF products sold via Razorpay. */
export const DIGITAL_REPORTS = {
  relationshipBlueprint: {
    id: 'relationship-blueprint',
    priceInr: 299,
    title: 'Compatibility Blueprint PDF',
    description:
      'Full elemental compatibility report for any two people — bridging remedies, lucky colours, and a practical action plan.',
  },
} as const

export type DigitalReportType = keyof typeof DIGITAL_REPORTS
