import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

type LogoVariant = 'full' | 'mark'
type LogoTheme = 'light' | 'dark'

interface LogoProps {
  variant?: LogoVariant
  /** 'dark' = placed on a dark (navy) surface. */
  theme?: LogoTheme
  /**
   * Mark height. Sizing flows from the `--logo-size` CSS variable so a single
   * instance can be responsive, e.g. className="[--logo-size:40px] lg:[--logo-size:44px]".
   */
  size?: number
  href?: string
  /** Show the "KP Astrology · Vastu · Numerology" caption under the wordmark. */
  showPillars?: boolean
  className?: string
  priority?: boolean
}

const MARK_RATIO = 620 / 529 // intrinsic w/h of logo-mark

export function Logo({
  variant = 'full',
  theme = 'light',
  size,
  href,
  showPillars = false,
  className,
  priority = false,
}: LogoProps) {
  // Inline var only when an explicit size is passed; otherwise the caller sets
  // --logo-size via className (responsive).
  const style = size ? ({ '--logo-size': `${size}px` } as React.CSSProperties) : undefined

  const mark = (
    <span
      className="inline-flex shrink-0 items-center"
      style={{ height: 'var(--logo-size, 44px)' }}
    >
      <Image
        src="/brand/logo-mark.webp"
        alt={variant === 'mark' && !href ? en.brand.logoAlt : ''}
        aria-hidden={variant === 'full' || Boolean(href) ? true : undefined}
        width={Math.round(64 * MARK_RATIO)}
        height={64}
        priority={priority}
        sizes="(max-width: 1024px) 40px, 44px"
        className="h-full w-auto select-none"
      />
    </span>
  )

  const content =
    variant === 'mark' ? (
      mark
    ) : (
      <>
        {mark}
        <span className="ml-3 flex flex-col justify-center leading-none">
          <span
            className={cn(
              'font-semibold tracking-wide',
              theme === 'dark' ? 'text-cream-100' : 'text-navy-700'
            )}
            style={{ fontSize: 'calc(var(--logo-size, 44px) * 0.46)' }}
          >
            {en.brand.name}
          </span>
          {showPillars && (
            <span
              className={cn(
                'mt-1 tracking-wide',
                theme === 'dark' ? 'text-cream-300/80' : 'text-navy-500'
              )}
              style={{ fontSize: 'max(9px, calc(var(--logo-size, 44px) * 0.2))' }}
            >
              {en.brand.pillars}
            </span>
          )}
        </span>
      </>
    )

  if (href) {
    return (
      <Link
        href={href}
        aria-label={en.brand.logoAlt}
        style={style}
        className={cn('inline-flex items-center', className)}
      >
        {content}
      </Link>
    )
  }

  return (
    <span style={style} className={cn('inline-flex items-center', className)}>
      {content}
    </span>
  )
}
