export type LoShuLeadPayload = {
  name: string
  whatsappNumber: string
  dob: string
  source: string
}

export function normalizeWhatsAppNumber(value: string): string {
  return value.trim().replace(/\s+/g, '')
}

export function isValidLoShuLead(payload: LoShuLeadPayload): boolean {
  return Boolean(
    payload.name.trim() &&
      payload.whatsappNumber.trim().length >= 10 &&
      payload.dob.trim() &&
      payload.source.trim()
  )
}
