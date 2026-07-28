import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

interface DeliverablesListProps {
  items: string[]
  title?: string
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * "What you'll walk away with" — required on every service page (spec §8.4.5).
 * Concrete outputs only; never outcome promises.
 */
export function DeliverablesList({
  items,
  title = en.sections.deliverables,
  tone = 'light',
  className,
}: DeliverablesListProps) {
  if (items.length === 0) return null
  const onDark = tone === 'dark'
  return (
    <div
      className={cn(
        'rounded-2xl border p-6 sm:p-8',
        onDark ? 'border-navy-500 bg-navy-600/40' : 'border-gold-200 bg-gold-50',
        className
      )}
    >
      <h3
        className={cn(
          'text-xl font-semibold',
          onDark ? 'text-cream-50' : 'text-navy-700'
        )}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check
              className={cn(
                'mt-0.5 h-5 w-5 shrink-0',
                onDark ? 'text-gold-300' : 'text-gold-600'
              )}
              aria-hidden="true"
            />
            <span className={cn(onDark ? 'text-cream-200' : 'text-navy-700')}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
