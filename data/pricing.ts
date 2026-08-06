/**
 * Single source of truth for every rupee figure on the site (spec §9).
 * All prices are single fixed figures — ranges are banned.
 */

export const PRICES = {
  // KP Astrology
  career: 2000,
  childbirth: 2000,
  finance: 2000,
  health: 2000,
  muhurtham: 2000,
  prashna: 1000,

  // Marriage tiers
  marriageIndividual: 3000,
  marriageCouple: 6500,
  marriageFamily: 12000,

  // Vastu
  homeVastu: 3500,
  officeVastu: 3500,
  plotVastu: 3500,
  vastuRemedies: 3500,

  // Numerology
  nameAnalysis: 1500,
  babyName: 1500,
  businessName: 1500,
  mobileNumber: 1500,
  vehicleNumber: 1500,
  loShuGrid: 2500,

  // Online packages (pricing page)
  singleAreaFocus: 1499,
  destinyCombo: 2499,
  destinyComboCompareAt: 3000,
  lifeBlueprint: 4999,
  onSiteVastuFrom: 15000,

  // Packages
  kpFocusedQuestion: 2000,
  kpFullConsultation: 4000,
} as const

/** Owner-supplied — must remain a visible placeholder until a single fixed figure is given. */
export const AUDIT_PRICE = '{{AUDIT_PRICE}}'

export const PAYMENT_NOTES = [
  'UPI after slot confirmation — no card checkout on the site.',
  'Free reschedule or cancellation with 24+ hours notice.',
  'Full refund if we cancel.',
  'Prices are per session. No hidden remedy upselling.',
] as const
