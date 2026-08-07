import type { CompatibilityResult } from '@/lib/compatibility-engine'
import type { Gender } from '@/lib/lo-shu-grid'

export type PersonSnapshot = {
  name: string
  gender: Gender
  dob: string
  kuaNumber: number
  driverNumber: number
}

export type CompatibilityPaymentPayload = {
  razorpayPaymentId: string
  razorpayOrderId: string
  razorpaySignature: string
  reportType: string
  contact: {
    name: string
    email: string
    phone: string
  }
  personA: PersonSnapshot
  personB: PersonSnapshot
  compatibility: CompatibilityResult
  source: string
}

export function normalizePhone(value: string): string {
  return value.trim().replace(/\s+/g, '')
}

export function isValidCompatibilityPayment(
  payload: CompatibilityPaymentPayload
): boolean {
  return Boolean(
    payload.razorpayPaymentId.trim() &&
      payload.razorpayOrderId.trim() &&
      payload.razorpaySignature.trim() &&
      payload.reportType.trim() &&
      payload.contact.name.trim() &&
      payload.contact.email.includes('@') &&
      normalizePhone(payload.contact.phone).length >= 10 &&
      payload.personA.name.trim() &&
      payload.personB.name.trim() &&
      payload.source.trim()
  )
}
