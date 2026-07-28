import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'

interface PriceChipProps {
  /** Number, or a placeholder token like '{{AUDIT_PRICE}}' which renders as-is. */
  price: number | string
  duration?: string
  tone?: 'light' | 'dark'
  className?: string
}

/** Single fixed figures only — never a range (spec §9). */
export function PriceChip({ price, duration, tone = 'light', className }: PriceChipProps) {
  const label = typeof price === 'number' ? formatPrice(price) : price
  return (
    <span className={cn('inline-flex flex-wrap items-center gap-2', className)}>
      <span
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
          tone === 'dark' ? 'bg-gold-400 text-navy-800' : 'bg-gold-100 text-gold-800'
        )}
      >
        {label}
      </span>
      {duration && (
        <span
          className={cn(
            'inline-flex items-center rounded-full px-3 py-1 text-sm',
            tone === 'dark'
              ? 'bg-navy-600/60 text-cream-200'
              : 'bg-cream-200 text-navy-600'
          )}
        >
          {duration}
        </span>
      )}
    </span>
  )
}
