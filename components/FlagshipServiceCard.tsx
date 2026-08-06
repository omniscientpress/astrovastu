import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buildWhatsAppLink } from '@/lib/config'
import { withBrand } from './Copy'
import { WhatsAppButton } from './WhatsAppButton'
import type { FlagshipService } from '@/data/flagship-services'

interface FlagshipServiceCardProps {
  service: FlagshipService
  className?: string
}

export function FlagshipServiceCard({ service, className }: FlagshipServiceCardProps) {
  const premium = service.premium === true

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-cream-50 p-7',
        premium
          ? 'border-2 border-gold-300 shadow-[0_0_28px_rgba(233,193,99,0.28)]'
          : 'border border-cream-300',
        className
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
          premium ? 'bg-gold-400 text-navy-800' : 'bg-cream-200 text-gold-800'
        )}
      >
        {service.tag}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-navy-700 sm:text-2xl">{service.title}</h3>
      <p className="mt-4 leading-relaxed text-navy-600">{withBrand(service.description)}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-navy-700">{withBrand(feature)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {service.ctaVariant === 'primary' ? (
          <WhatsAppButton label={service.ctaLabel} message={service.whatsappMessage} />
        ) : (
          <a
            href={buildWhatsAppLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gold-400 px-6 py-3 text-base font-semibold text-gold-800 transition-colors hover:bg-gold-400 hover:text-navy-800 sm:w-auto"
          >
            {service.ctaLabel}
          </a>
        )}
      </div>
    </article>
  )
}
