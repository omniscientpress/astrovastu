import { cn } from '@/lib/utils'
import { SITE, isPlaceholder } from '@/lib/config'
import { en } from '@/locales/en'

/**
 * Verifiable items ONLY (spec §8.1.2). No client counts, consultation counts,
 * outcome percentages, or satisfaction figures — all banned sitewide.
 *
 * Items backed by an owner-supplied value that is still unset are omitted
 * rather than rendered as a placeholder or a dead link.
 */
export function TrustStrip({ className }: { className?: string }) {
  const items: React.ReactNode[] = []

  if (!isPlaceholder(SITE.yearsExperience)) {
    items.push(
      <span key="years">
        {SITE.yearsExperience}
        {en.trust.yearsSuffix}
      </span>
    )
  }

  if (!isPlaceholder(SITE.googleBusinessUrl)) {
    items.push(
      <a
        key="rating"
        href={SITE.googleBusinessUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gold-700 underline-offset-4 hover:underline"
      >
        {en.trust.googleRating}
      </a>
    )
  }

  items.push(<span key="languages">{en.trust.languages}</span>)
  items.push(<span key="availability">{en.trust.availability}</span>)

  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-600',
        className
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-8">
          {item}
        </li>
      ))}
    </ul>
  )
}
