import { NextResponse } from 'next/server'
import {
  buildIntakePayload,
  canSendIntake,
  geocodePlace,
  type IntakeFormData,
} from '@/lib/intake'

const WEBHOOK = process.env.N8N_INTAKE_WEBHOOK
const SECRET = process.env.N8N_INTAKE_SECRET

export async function POST(request: Request) {
  if (SECRET) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${SECRET}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
    }
  }

  if (!WEBHOOK) {
    return NextResponse.json({ ok: false, error: 'intake_not_configured' }, { status: 503 })
  }

  let body: IntakeFormData
  try {
    body = (await request.json()) as IntakeFormData
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!body.name?.trim() || !body.phone?.trim() || !body.serviceTitle?.trim()) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 })
  }

  if (!canSendIntake(body)) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: 'birth_details_incomplete',
    })
  }

  const payload = buildIntakePayload(body)

  if (payload.place && (payload.lat === undefined || payload.lon === undefined)) {
    const coords = await geocodePlace(payload.place)
    if (!coords) {
      return NextResponse.json({
        ok: false,
        error: 'geocode_failed',
        detail: 'Could not resolve birth place to coordinates.',
      }, { status: 422 })
    }
    payload.lat = coords.lat
    payload.lon = coords.lon
  }

  try {
    const upstream = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '')
      return NextResponse.json(
        { ok: false, error: 'upstream_failed', status: upstream.status, detail: detail.slice(0, 300) },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, sent: true })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'upstream_unreachable', detail: String(err).slice(0, 200) },
      { status: 502 }
    )
  }
}
