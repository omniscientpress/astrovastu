import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { GraphicTheme, HeroSlideKey, PillarKey, SituationKey, StepKey } from './types'

const STROKE = 1.5

type SvgProps = {
  className?: string
  theme?: GraphicTheme
}

function strokeColor(theme: GraphicTheme) {
  return theme === 'dark' ? '#e9c163' : '#a67322'
}

function IconFrame({
  className,
  theme = 'light',
  children,
  viewBox = '0 0 48 48',
}: SvgProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <g stroke={strokeColor(theme)} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  )
}

export function SituationArt({ id, className, theme = 'light' }: { id: SituationKey } & SvgProps) {
  switch (id) {
    case 'career':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M14 18h20v22H14z" />
          <path d="M18 18v-4a6 6 0 0112 0v4" />
          <path d="M24 28v6M21 31h6" />
        </IconFrame>
      )
    case 'marriage':
      return (
        <IconFrame className={className} theme={theme}>
          <circle cx="17" cy="22" r="6" />
          <circle cx="31" cy="22" r="6" />
          <path d="M17 28c0 4 3.5 8 7 8s7-4 7-8" />
          <path d="M24 14v4" />
        </IconFrame>
      )
    case 'childbirth':
      return (
        <IconFrame className={className} theme={theme}>
          <circle cx="24" cy="16" r="5" />
          <circle cx="14" cy="30" r="4" />
          <circle cx="34" cy="30" r="4" />
          <path d="M20 21c-2 3-2 7 0 10M28 21c2 3 2 7 0 10" />
          <path d="M18 34h12" />
        </IconFrame>
      )
    case 'property':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M24 10L10 22h4v16h20V22h4L24 10z" />
          <path d="M20 38V26h8v12" />
          <path d="M16 22h16" />
        </IconFrame>
      )
    case 'business':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M12 38V18l12-8 12 8v20" />
          <path d="M12 38h24" />
          <path d="M20 38V28h8v10" />
          <path d="M18 22h12M18 26h8" />
        </IconFrame>
      )
    case 'naming':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M16 12v24M16 12h10l-6 10h6" />
          <path d="M30 18h8M30 24h6M30 30h8" />
        </IconFrame>
      )
    case 'muhurtham':
      return (
        <IconFrame className={className} theme={theme}>
          <rect x="10" y="14" width="28" height="24" rx="3" />
          <path d="M10 22h28M18 10v6M30 10v6" />
          <circle cx="24" cy="30" r="3" fill={strokeColor(theme)} stroke="none" />
        </IconFrame>
      )
    case 'prashna':
      return (
        <IconFrame className={className} theme={theme}>
          <circle cx="24" cy="24" r="14" />
          <path d="M24 18v2" />
          <path d="M20 28c1.5 2 4 3 4 3s2.5-1 4-3" />
        </IconFrame>
      )
  }
}

export function PillarArt({ id, className, theme = 'dark' }: { id: PillarKey } & SvgProps) {
  switch (id) {
    case 'timing':
      return (
        <IconFrame className={className} theme={theme}>
          <circle cx="24" cy="24" r="12" />
          <path d="M24 14v10l7 4" />
          <path d="M12 24h4M32 24h4M24 12v4M24 32v4" />
        </IconFrame>
      )
    case 'space':
      return (
        <IconFrame className={className} theme={theme}>
          <rect x="10" y="14" width="28" height="22" rx="2" />
          <path d="M10 26h12v10H10zM22 26h16v10H22z" />
          <path d="M16 20h6M26 20h6" />
        </IconFrame>
      )
    case 'name':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M14 12v24M14 12h12l-7 11h7" />
          <rect x="28" y="16" width="10" height="10" rx="1" />
          <rect x="28" y="30" width="10" height="6" rx="1" />
        </IconFrame>
      )
  }
}

export function StepArt({ id, className, theme = 'light' }: { id: StepKey } & SvgProps) {
  switch (id) {
    case 'share':
      return (
        <IconFrame className={className} theme={theme}>
          <path d="M10 16a6 6 0 0112 0v14H10V16z" />
          <path d="M16 10h4" />
          <path d="M22 24h14a3 3 0 013 3v8H22V24z" />
          <path d="M28 20v4" />
        </IconFrame>
      )
    case 'confirm':
      return (
        <IconFrame className={className} theme={theme}>
          <rect x="10" y="14" width="28" height="24" rx="3" />
          <path d="M10 22h28M18 10v6M30 10v6" />
          <path d="M18 30l4 4 8-8" />
        </IconFrame>
      )
    case 'pay':
      return (
        <IconFrame className={className} theme={theme}>
          <rect x="8" y="16" width="32" height="20" rx="3" />
          <path d="M8 24h32" />
          <path d="M16 32h6" />
          <circle cx="32" cy="28" r="3" />
        </IconFrame>
      )
    case 'consult':
      return (
        <IconFrame className={className} theme={theme}>
          <rect x="8" y="14" width="32" height="22" rx="3" />
          <circle cx="20" cy="24" r="3" />
          <path d="M28 22h8M28 28h6" />
        </IconFrame>
      )
  }
}

export function HeroSlideArt({
  id,
  className,
  theme = 'dark',
}: { id: HeroSlideKey } & SvgProps) {
  const color = strokeColor(theme)

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        {id === 'brand' && (
          <>
            <rect x="24" y="48" width="44" height="44" rx="6" />
            <circle cx="46" cy="70" r="10" />
            <path d="M46 60v4M46 76v4M36 70h4M52 70h4" />
            <rect x="78" y="48" width="44" height="44" rx="6" />
            <path d="M88 88h24M88 68h16M88 78h20" />
            <rect x="132" y="48" width="44" height="44" rx="6" />
            <path d="M142 58h16l-8 14h8" />
            <path d="M46 92v20M100 92v20M154 92v20" />
            <path d="M46 112h108" />
            <path d="M100 112v36" />
            <circle cx="100" cy="160" r="8" />
          </>
        )}
        {id === 'marriage' && (
          <>
            <circle cx="72" cy="72" r="16" />
            <circle cx="128" cy="72" r="16" />
            <path d="M72 88c0 14 12 28 28 28s28-14 28-28" />
            <circle cx="52" cy="132" r="10" />
            <circle cx="100" cy="148" r="10" />
            <circle cx="148" cy="132" r="10" />
            <path d="M62 124l20 12M138 124l-20 12M82 140h36" />
          </>
        )}
        {id === 'vastu' && (
          <>
            <rect x="36" y="40" width="128" height="112" rx="4" />
            <path d="M36 96h56v56H36zM92 96h72v56H92z" />
            <path d="M56 60h24M120 60h24M56 112h16M120 112h24" />
            <path d="M100 40v112" strokeDasharray="4 4" />
            <text x="44" y="34" fill={color} stroke="none" fontSize="10" fontFamily="system-ui">
              N
            </text>
          </>
        )}
        {id === 'numerology' && (
          <>
            <path d="M48 52h36l-20 32h20" />
            <path d="M48 52v88" />
            <rect x="98" y="48" width="22" height="22" rx="2" />
            <rect x="128" y="48" width="22" height="22" rx="2" />
            <rect x="98" y="78" width="22" height="22" rx="2" />
            <rect x="128" y="78" width="22" height="22" rx="2" />
            <path d="M98 118h52" />
            <path d="M104 134h12M124 134h12M144 134h12" />
          </>
        )}
      </g>
    </svg>
  )
}

export function YantraArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-full w-full', className)}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" />
        <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" />
        <polygon points="100,60 140,80 140,120 100,140 60,120 60,80" />
        <polygon points="100,75 125,87.5 125,112.5 100,125 75,112.5 75,87.5" />
        <circle cx="100" cy="100" r="6" />
      </g>
    </svg>
  )
}

export function DividerFlourishArt({ className, theme = 'light' }: SvgProps) {
  const color = strokeColor(theme)
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('mx-auto w-full max-w-md', className)}
      aria-hidden="true"
    >
      <path d="M8 12h88" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M144 12h88" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M120 6l6 6-6 6-6-6 6-6zM120 6v12M114 12h12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
