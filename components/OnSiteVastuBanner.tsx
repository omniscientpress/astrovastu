import { cn } from '@/lib/utils'
import { buildWhatsAppLink } from '@/lib/config'
import { withBrand } from './Copy'
import { onSiteVastu } from '@/data/combo-packages'

type OnSiteVastuBannerProps = {
  variant?: 'services' | 'pricing'
  className?: string
}

export function OnSiteVastuBanner({ variant = 'services', className }: OnSiteVastuBannerProps) {
  const v = onSiteVastu
  const isPricing = variant === 'pricing'

  return (
    <div
      className={cn(
        'rounded-2xl border border-gold-400/45 bg-navy-600/50 p-8 lg:p-10',
        className
      )}
    >
      {!isPricing && (
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
          Premium on-site service
        </p>
      )}
      <h2
        className={cn(
          'font-semibold text-cream-50 sm:text-3xl',
          isPricing ? 'text-2xl' : 'mt-3 text-2xl'
        )}
      >
        {isPricing ? v.pricingTitle : v.title}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream-200/90">
        {withBrand(isPricing ? v.pricingDescription : v.description)}
      </p>
      {!isPricing && (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cream-300/85">
          {v.availability}
        </p>
      )}
      <p className={cn('mt-5 text-gold-300', isPricing ? 'text-base font-medium' : 'text-base italic')}>
        {isPricing ? v.pricingAmount : v.pricingNote}
      </p>
      <a
        href={buildWhatsAppLink(v.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-gold-400 bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:border-gold-300 hover:bg-gold-300"
      >
        {isPricing ? v.pricingCtaLabel : v.ctaLabel}
      </a>
    </div>
  )
}
