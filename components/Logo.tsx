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
const FULL_LOGO_RATIO = 4 / 3

export function Logo({
  variant = 'full',
  size,
  href,
  className,
  priority = false,
}: LogoProps) {
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

  const fullLogo = (
    <Image
      src="/brand/divine-jyothi-full-logo.png"
      alt={en.brand.logoAlt}
      width={Math.round(96 * FULL_LOGO_RATIO)}
      height={96}
      priority={priority}
      sizes="(max-width: 640px) 107px, 139px"
      unoptimized
      className="h-[var(--logo-size,96px)] w-auto select-none"
    />
  )

  const content = variant === 'mark' ? mark : fullLogo

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
