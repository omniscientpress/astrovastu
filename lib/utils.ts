import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Fixed rupee figures only — never ranges (spec §9). */
export function formatPrice(rupees: number) {
  return `₹${rupees.toLocaleString('en-IN')}`
}
