import type { Package } from './types'
import { PRICES, AUDIT_PRICE } from './pricing'

export const packages: Package[] = [
  {
    id: 'kp-focused',
    name: 'KP Focused Question',
    scope: 'One clear question, answered with the timing behind it.',
    price: PRICES.kpFocusedQuestion,
    duration: '30 min',
  },
  {
    id: 'kp-full',
    name: 'KP Full Consultation',
    scope: 'A broader review across the life areas you are weighing up.',
    price: PRICES.kpFullConsultation,
    duration: '45–60 min',
    highlight: true,
  },
  {
    id: 'prashna',
    name: 'Prashna',
    scope: 'A focused answer when you do not have birth details to hand.',
    price: PRICES.prashna,
    duration: '15 min',
  },
  {
    id: 'audit',
    name: 'Divine Jyothi Audit',
    scope: 'Timing, Space, and Name reviewed together for one major decision.',
    price: AUDIT_PRICE,
    duration: 'By arrangement',
  },
]
