import type { Gender } from '@/lib/lo-shu-grid'

export type LoShuLeadPayload = {
  name: string
  whatsappNumber: string
  gender: Gender
  dob: string
  kuaNumber: number
  source: string
}

export function normalizeWhatsAppNumber(value: string): string {
  return value.trim().replace(/\s+/g, '')
}

export function isValidLoShuLead(payload: LoShuLeadPayload): boolean {
  return Boolean(
    payload.name.trim() &&
      payload.whatsappNumber.trim().length >= 10 &&
      (payload.gender === 'male' || payload.gender === 'female') &&
      payload.dob.trim() &&
      payload.kuaNumber >= 1 &&
      payload.kuaNumber <= 9 &&
      payload.source.trim()
  )
}
