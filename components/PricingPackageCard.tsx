import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'
import { withBrand } from './Copy'
import { WhatsAppButton } from './WhatsAppButton'
import { buildWhatsAppLink } from '@/lib/config'
import type { PricingPackage } from '@/data/pricing-packages'

interface PricingPackageCardProps {
  pkg: PricingPackage
  className?: string
}

export function PricingPackageCard({ pkg, className }: PricingPackageCardProps) {
  const highlight = pkg.highlight === true

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-cream-50 p-7',
        highlight
          ? 'border-2 border-gold-300 p-8 shadow-[0_0_28px_rgba(233,193,99,0.28)] lg:scale-[1.03]'
          : 'border-cream-300',
        className
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-gold-400 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-navy-800">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-xl font-semibold text-navy-700">{pkg.title}</h3>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <p className="text-3xl font-semibold text-navy-700">{formatPrice(pkg.price)}</p>
        {pkg.compareAtPrice !== undefined && (
          <p className="text-lg text-navy-400 line-through">{formatPrice(pkg.compareAtPrice)}</p>
        )}
      </div>
      <p className="mt-4 flex-1 leading-relaxed text-navy-600">{withBrand(pkg.description)}</p>
      <div className="mt-8">
        {pkg.ctaVariant === 'primary' ? (
          <WhatsAppButton label={pkg.ctaLabel} message={pkg.whatsappMessage} />
        ) : (
          <a
            href={buildWhatsAppLink(pkg.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-400 sm:w-auto"
          >
            {pkg.ctaLabel}
          </a>
        )}
      </div>
    </article>
  )
}
