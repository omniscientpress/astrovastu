import { NextResponse } from 'next/server'
import { isValidLoShuLead, type LoShuLeadPayload } from '@/lib/lo-shu-lead'

const WEBHOOK = process.env.N8N_LOSHU_WEBHOOK
const SECRET = process.env.N8N_LOSHU_SECRET

export async function POST(request: Request) {
  if (SECRET) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${SECRET}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
    }
  }

  if (!WEBHOOK) {
    return NextResponse.json({ ok: false, error: 'webhook_not_configured' }, { status: 503 })
  }

  let body: LoShuLeadPayload
  try {
    body = (await request.json()) as LoShuLeadPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!isValidLoShuLead(body)) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 })
  }

  try {
    const upstream = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name.trim(),
        whatsappNumber: body.whatsappNumber.trim().replace(/\s+/g, ''),
        dob: body.dob.trim(),
        source: body.source.trim(),
      }),
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
