/** Freemium digital PDF products sold via Razorpay. */
export const DIGITAL_REPORTS = {
  relationshipBlueprint: {
    id: 'relationship-blueprint',
    priceInr: 299,
    title: 'Relationship Blueprint PDF',
    description: 'Full elemental compatibility report with bridging remedies, lucky colours, and action plan.',
  },
} as const

export type DigitalReportType = keyof typeof DIGITAL_REPORTS
