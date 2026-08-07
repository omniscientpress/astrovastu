export const SITE = {
  name: 'Divine Jyothi',
  pillarLine: 'KP Astrology · Vastu · Numerology',
  practitioner: 'Siva Kola',
  city: 'Hyderabad',
  url: 'https://divinejyothi.com',

  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919885099448',
  phoneDisplay: '+91 98850 99448',
  email: 'consult@divinejyothi.com',
  supportEmail: 'support@divinejyothi.com',
  hours: 'Mon–Sat, 9:00 AM – 9:00 PM IST',
  location: 'Hyderabad — in-person by appointment · Online consultations worldwide',

  /**
   * Owner-supplied. Left as placeholders until provided — never invent these.
   * Components must hide the element entirely when the value is still a placeholder.
   */
  googleBusinessUrl: '' as string,
  yearsExperience: '{{YEARS}}',
  social: {
    facebook: '' as string,
    instagram: '' as string,
    youtube: '' as string,
  },
} as const

/** True when an owner-supplied value is still unset, so UI can omit it rather than render a dead link. */
export const isPlaceholder = (value: string) =>
  !value || value.trim() === '' || value.includes('{{')

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Standard enquiry opener, optionally scoped to a service. */
export function whatsAppEnquiry(service?: string) {
  return buildWhatsAppLink(
    service
      ? `Hi Divine Jyothi, I'd like to ask about ${service}.`
      : `Hi Divine Jyothi, I'd like to ask about a consultation.`
  )
}
