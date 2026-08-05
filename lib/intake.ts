/** Maps the booking form to the n8n workflow 10 intake webhook shape. */

export type IntakeFormData = {
  name: string
  phone: string
  service: string
  serviceTitle: string
  pillar: 'astrology' | 'vastu' | 'numerology'
  tier?: string
  preferredTime?: string
  question?: string
  birthDate?: string
  birthTime?: string
  birthPlace?: string
  propertyType?: string
  namesToCheck?: string
}

export type IntakePayload = {
  name: string
  phone: string
  email?: string
  service: string
  preferred_time?: string
  question?: string
  date?: string
  time?: string
  place?: string
  lat?: number
  lon?: number
  tz?: number
  time_confidence?: 'exact' | 'approx'
  property_type?: string
  names_to_check?: string
  source: 'divinejyothi.com/book'
}

export function buildIntakePayload(data: IntakeFormData): IntakePayload {
  const questionParts = [
    data.question?.trim(),
    data.tier ? `Package tier: ${data.tier}` : '',
    data.propertyType ? `Property type: ${data.propertyType}` : '',
    data.namesToCheck ? `Name(s) to check: ${data.namesToCheck}` : '',
  ].filter(Boolean)

  const payload: IntakePayload = {
    name: data.name.trim(),
    phone: data.phone.trim().replace(/\s+/g, ''),
    service: data.serviceTitle,
    preferred_time: data.preferredTime?.trim() || undefined,
    question: questionParts.join('\n') || undefined,
    source: 'divinejyothi.com/book',
  }

  if (data.pillar === 'astrology' && data.birthDate && data.birthTime && data.birthPlace) {
    payload.date = data.birthDate
    payload.time = data.birthTime
    payload.place = data.birthPlace.trim()
    payload.tz = 5.5
    payload.time_confidence = 'exact'
  }

  return payload
}

export function canSendIntake(data: IntakeFormData): boolean {
  if (data.pillar !== 'astrology') return false
  return Boolean(data.birthDate && data.birthTime && data.birthPlace?.trim())
}

export async function geocodePlace(
  place: string
): Promise<{ lat: number; lon: number } | null> {
  const q = place.trim()
  if (!q) return null

  const url = new URL('https://nominatim.openstreetmap.org/search')
  url.searchParams.set('q', q)
  url.searchParams.set('format', 'json')
  url.searchParams.set('limit', '1')
  url.searchParams.set('countrycodes', 'in')

  const res = await fetch(url, {
    headers: { 'User-Agent': 'DivineJyothi/2.0 (consult@divinejyothi.com)' },
    next: { revalidate: 0 },
  })

  if (!res.ok) return null

  const rows = (await res.json()) as Array<{ lat: string; lon: string }>
  const hit = rows[0]
  if (!hit) return null

  const lat = parseFloat(hit.lat)
  const lon = parseFloat(hit.lon)
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null

  return { lat, lon }
}
