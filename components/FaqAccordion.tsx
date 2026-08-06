import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { withBrand } from './Copy'
import type { Faq } from '@/data/types'

/**
 * Native <details>/<summary>: answers are present in server HTML, keyboard
 * accessible, and work with JavaScript disabled.
 */
export function FaqAccordion({
  items,
  className,
}: {
  items: Faq[]
  className?: string
}) {
  if (items.length === 0) return null
  return (
    <div className={cn('divide-y divide-cream-300 border-y border-cream-300', className)}>
      {items.map((faq) => (
        <details key={faq.question} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy-700 [&::-webkit-details-marker]:hidden">
            {withBrand(faq.question)}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="mt-3 leading-relaxed text-navy-600">{withBrand(faq.answer)}</div>
        </details>
      ))}
    </div>
  )
}
