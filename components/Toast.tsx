'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ToastVariant = 'success' | 'error' | 'info'

export interface ToastMessage {
  id: number
  message: string
  variant: ToastVariant
}

interface ToastProps {
  toast: ToastMessage | null
  onDismiss: () => void
}

const VARIANT_CLASS: Record<ToastVariant, string> = {
  success: 'border-gold-300 bg-cream-50 text-navy-800',
  error: 'border-red-300 bg-red-50 text-navy-800',
  info: 'border-navy-300 bg-white text-navy-800',
}

export function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(onDismiss, 6000)
    return () => window.clearTimeout(timer)
  }, [toast, onDismiss])

  if (!toast) return null

  return (
    <div
      role="alert"
      className={cn(
        'fixed bottom-6 left-1/2 z-50 flex w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2 items-start gap-3 rounded-xl border px-4 py-3 shadow-lg',
        VARIANT_CLASS[toast.variant]
      )}
    >
      <p className="flex-1 text-sm leading-relaxed">{toast.message}</p>
      <button
        type="button"
        onClick={onDismiss}
        className="shrink-0 rounded-md p-1 text-navy-500 hover:text-navy-800"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  )
}
