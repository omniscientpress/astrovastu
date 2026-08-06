import { cn } from '@/lib/utils'
import { withBrand } from './Copy'
import type { Testimonial } from '@/data/types'

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial
  className?: string
}) {
  const { name, city, service, quote, language } = testimonial
  return (
    <figure
      className={cn(
        'flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6',
        className
      )}
    >
      <blockquote
        className={cn('flex-1 text-navy-700', language === 'te' && 'font-telugu')}
      >
        <p>&ldquo;{withBrand(quote)}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-cream-300 pt-4">
        <span className="block font-semibold text-navy-700">{name}</span>
        <span className="block text-sm text-navy-500">
          {city} · {withBrand(service)}
        </span>
      </figcaption>
    </figure>
  )
}
