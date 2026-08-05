import { cn } from '@/lib/utils'
import { SITE, isPlaceholder } from '@/lib/config'
import { en } from '@/locales/en'

/**
 * Verifiable trust items — languages, availability, and location guidance.
 * No client counts, consultation counts, or outcome percentages.
 */
export function TrustStrip({ className }: { className?: string }) {
  const extras: React.ReactNode[] = []

  if (!isPlaceholder(SITE.yearsExperience)) {
    extras.push(
      <span key="years">
        {SITE.yearsExperience}
        {en.trust.yearsSuffix}
      </span>
    )
  }

  if (!isPlaceholder(SITE.googleBusinessUrl)) {
    extras.push(
      <a
        key="rating"
        href={SITE.googleBusinessUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold-700 underline-offset-4 hover:underline"
      >
        {en.trust.googleRating}
      </a>
    )
  }

  const lines = [en.trust.languages, en.trust.availability, en.trust.microline]

  return (
    <div
      className={cn(
        'rounded-2xl border-2 border-gold-400/45 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10',
        className
      )}
    >
      <ul className="space-y-4 text-center">
        {lines.map((line) => (
          <li
            key={line}
            className="text-lg font-bold tracking-tight text-navy-800 sm:text-xl"
          >
            {line}
          </li>
        ))}
      </ul>

      {extras.length > 0 && (
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base font-semibold text-navy-700">
          {extras.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
