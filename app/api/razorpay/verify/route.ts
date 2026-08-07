import { NextResponse } from 'next/server'
import {
  isValidCompatibilityPayment,
  normalizePhone,
  type CompatibilityPaymentPayload,
} from '@/lib/compatibility-payment'
import { verifyRazorpaySignature } from '@/lib/razorpay-server'

const WEBHOOK = process.env.N8N_COMPATIBILITY_PAYMENT_WEBHOOK
const SECRET = process.env.N8N_COMPATIBILITY_PAYMENT_SECRET

export async function POST(request: Request) {
  if (SECRET) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${SECRET}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
    }
  }

  let body: CompatibilityPaymentPayload
  try {
    body = (await request.json()) as CompatibilityPaymentPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!isValidCompatibilityPayment(body)) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 })
  }

  const valid = verifyRazorpaySignature(
    body.razorpayOrderId,
    body.razorpayPaymentId,
    body.razorpaySignature
  )

  if (!valid) {
    return NextResponse.json({ ok: false, error: 'invalid_signature' }, { status: 400 })
  }

  if (!WEBHOOK) {
    return NextResponse.json({ ok: true, verified: true, sent: false })
  }

  try {
    const upstream = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'digital_report_purchased',
        reportType: body.reportType,
        razorpayPaymentId: body.razorpayPaymentId,
        razorpayOrderId: body.razorpayOrderId,
        contact: {
          name: body.contact.name.trim(),
          email: body.contact.email.trim(),
          phone: normalizePhone(body.contact.phone),
        },
        personA: body.personA,
        personB: body.personB,
        compatibility: {
          matchStatus: body.compatibility.matchStatus,
          matchPercentage: body.compatibility.matchPercentage,
          bridgeElement: body.compatibility.bridgeElement,
          elementA: body.compatibility.personA.element,
          elementB: body.compatibility.personB.element,
        },
        source: body.source.trim(),
      }),
    })

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '')
      return NextResponse.json(
        {
          ok: false,
          error: 'webhook_failed',
          status: upstream.status,
          detail: detail.slice(0, 300),
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, verified: true, sent: true })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'webhook_unreachable', detail: String(err).slice(0, 200) },
      { status: 502 }
    )
  }
}
