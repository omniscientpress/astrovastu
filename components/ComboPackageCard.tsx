import { cn } from '@/lib/utils'
import { withBrand } from './Copy'
import { WhatsAppButton } from './WhatsAppButton'
import type { ComboPackage } from '@/data/combo-packages'

interface ComboPackageCardProps {
  combo: ComboPackage
  className?: string
}

export function ComboPackageCard({ combo, className }: ComboPackageCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border-2 border-gold-300 bg-cream-50 p-7 shadow-[0_0_20px_rgba(233,193,99,0.15)]',
        className
      )}
    >
      <span className="inline-flex w-fit rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-800">
        {combo.badge}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-navy-700 sm:text-2xl">{combo.title}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-700">
        {combo.subtitle}
      </p>
      <p className="mt-4 flex-1 leading-relaxed text-navy-600">
        {withBrand(combo.description)}
      </p>
      <div className="mt-8">
        <WhatsAppButton label={combo.ctaLabel} message={combo.whatsappMessage} />
      </div>
    </article>
  )
}
