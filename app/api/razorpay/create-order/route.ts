import { NextResponse } from 'next/server'
import { getPublicRazorpayKeyId, getRazorpayClient } from '@/lib/razorpay-server'

export async function POST(request: Request) {
  const client = getRazorpayClient()
  const keyId = getPublicRazorpayKeyId()

  if (!client || !keyId) {
    return NextResponse.json({ error: 'payment_not_configured' }, { status: 503 })
  }

  let body: { amount?: number; reportType?: string; notes?: Record<string, string> }
  try {
    body = (await request.json()) as {
      amount?: number
      reportType?: string
      notes?: Record<string, string>
    }
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const amount = body.amount
  const reportType = body.reportType?.trim()
  const extraNotes = body.notes ?? {}

  if (!amount || amount < 1 || !reportType) {
    return NextResponse.json({ error: 'missing_required_fields' }, { status: 400 })
  }

  // Razorpay notes: string values only, max 15 keys
  const notes: Record<string, string> = {
    report_type: reportType,
    ...Object.fromEntries(
      Object.entries(extraNotes)
        .slice(0, 14)
        .map(([k, v]) => [k, String(v).slice(0, 256)])
    ),
  }

  try {
    const order = await client.orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `dj_${reportType}_${Date.now()}`.slice(0, 40),
      notes,
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'order_creation_failed', detail: String(err).slice(0, 200) },
      { status: 502 }
    )
  }
}
