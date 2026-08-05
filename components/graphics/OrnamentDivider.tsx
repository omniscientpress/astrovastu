import { cn } from '@/lib/utils'
import { DividerFlourishArt } from './LineArtSvg'
import type { GraphicTheme } from './types'

export function OrnamentDivider({
  className,
  theme = 'light',
}: {
  className?: string
  theme?: GraphicTheme
}) {
  return (
    <div className={cn('py-2', className)} aria-hidden="true">
      <DividerFlourishArt theme={theme} />
    </div>
  )
}
