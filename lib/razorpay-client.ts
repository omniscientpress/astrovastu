import type { CompatibilityPaymentPayload } from '@/lib/compatibility-payment'

export type RazorpayPaymentParams = {
  amount: number
  name: string
  phone: string
  email: string
  reportType: string
  paymentPayload: Omit<
    CompatibilityPaymentPayload,
    'razorpayPaymentId' | 'razorpayOrderId' | 'razorpaySignature'
  >
  onSuccess?: (paymentId: string) => void
  onError?: (message: string) => void
}

type RazorpayInstance = {
  open: () => void
  on: (event: string, handler: (response: { error?: { description?: string } }) => void) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RazorpayCheckoutConstructor = new (options: any) => RazorpayInstance

type CreateOrderResponse = {
  orderId: string
  amount: number
  currency: string
  keyId: string
}

export async function createRazorpayOrder(
  amount: number,
  reportType: string,
  notes?: Record<string, string>
): Promise<CreateOrderResponse> {
  const res = await fetch('/api/razorpay/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, reportType, notes }),
  })
  const data = (await res.json()) as CreateOrderResponse & { error?: string }
  if (!res.ok) {
    throw new Error(data.error ?? 'Could not start payment. Please try again.')
  }
  return data
}

export async function verifyRazorpayPayment(
  payload: CompatibilityPaymentPayload
): Promise<void> {
  const res = await fetch('/api/razorpay/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = (await res.json()) as { ok?: boolean; error?: string }
  if (!res.ok || !data.ok) {
    throw new Error(data.error ?? 'Payment verification failed. Contact support with your payment ID.')
  }
}

/**
 * Opens Razorpay checkout in-page. Requires the Razorpay constructor from `useRazorpay()`.
 */
export async function triggerRazorpayPayment(
  Razorpay: unknown,
  params: RazorpayPaymentParams
): Promise<void> {
  if (!Razorpay || typeof Razorpay !== 'function') {
    params.onError?.('Payment gateway is still loading. Please wait a moment and try again.')
    return
  }

  try {
    const order = await createRazorpayOrder(params.amount, params.reportType, {
      report_type: params.reportType,
      person1_name: params.paymentPayload.personA.name,
      person1_dob: params.paymentPayload.personA.dob,
      gender1: params.paymentPayload.personA.gender,
      person2_name: params.paymentPayload.personB.name,
      person2_dob: params.paymentPayload.personB.dob,
      gender2: params.paymentPayload.personB.gender,
      whatsapp_number: params.phone.replace(/\s+/g, ''),
      email: params.email,
      match_percentage: String(params.paymentPayload.compatibility.matchPercentage),
      match_status: params.paymentPayload.compatibility.matchStatus,
      bridge_element: params.paymentPayload.compatibility.bridgeElement ?? '',
      source: params.paymentPayload.source,
    })

    const instance = new (Razorpay as RazorpayCheckoutConstructor)({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: 'Divine Jyothi',
      description: 'Compatibility Blueprint PDF',
      order_id: order.orderId,
      prefill: {
        name: params.name,
        email: params.email,
        contact: params.phone,
      },
      theme: { color: '#C9A227' },
      handler: async (response: {
        razorpay_payment_id: string
        razorpay_order_id: string
        razorpay_signature: string
      }) => {
        try {
          await verifyRazorpayPayment({
            ...params.paymentPayload,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          })
          params.onSuccess?.(response.razorpay_payment_id)
        } catch (err) {
          params.onError?.(
            err instanceof Error ? err.message : 'Payment verification failed. Please contact support.'
          )
        }
      },
      modal: {
        ondismiss: () => {
          params.onError?.('Payment cancelled. You can try again when ready.')
        },
      },
    })

    instance.on('payment.failed', (response) => {
      params.onError?.(
        response.error?.description ?? 'Payment failed. Please check your details and try again.'
      )
    })

    instance.open()
  } catch (err) {
    params.onError?.(
      err instanceof Error ? err.message : 'Could not open payment. Please try again.'
    )
  }
}
