import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'

type LogoVariant = 'full' | 'mark'
type LogoTheme = 'light' | 'dark'

interface LogoProps {
  variant?: LogoVariant
  /** Reserved for future theme variants; logo image is used as supplied. */
  theme?: LogoTheme
  /**
   * Logo height. Sizing flows from the `--logo-size` CSS variable so a single
   * instance can be responsive, e.g. className="[--logo-size:40px] lg:[--logo-size:44px]".
   */
  size?: number
  href?: string
  /** @deprecated Tagline is part of the supplied text logo image. */
  showPillars?: boolean
  className?: string
  priority?: boolean
}

const MARK_RATIO = 440 / 375
const TEXT_LOGO_RATIO = 1024 / 682

export function Logo({
  variant = 'full',
  theme = 'light',
  size,
  href,
  className,
  priority = false,
}: LogoProps) {
  const style = size ? ({ '--logo-size': `${size}px` } as React.CSSProperties) : undefined
  const onDark = theme === 'dark'

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

  const logoImage = (
    <Image
      src="/brand/text-logo.png"
      alt={en.brand.logoAlt}
      width={Math.round(96 * TEXT_LOGO_RATIO)}
      height={96}
      priority={priority}
      sizes="(max-width: 640px) 120px, 156px"
      unoptimized
      className={cn(
        'h-[var(--logo-size,96px)] w-auto select-none',
        onDark ? 'brightness-105' : 'brightness-105 contrast-110'
      )}
    />
  )

  const textLogo = onDark ? (
    logoImage
  ) : (
    <span className="inline-flex rounded-xl bg-navy-900/90 px-3 py-1.5 shadow-[0_4px_24px_rgba(30,27,75,0.18)] ring-1 ring-gold-400/25">
      {logoImage}
    </span>
  )

  const content = variant === 'mark' ? mark : textLogo

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
