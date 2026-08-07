'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import type { MatchStatus } from '@/lib/compatibility-engine'

const SIZE = 180
const STROKE = 12
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const STATUS_RING: Record<MatchStatus, string> = {
  Excellent: 'stroke-gold-400',
  Neutral: 'stroke-navy-400',
  'Needs Bridging': 'stroke-amber-500',
}

const STATUS_TEXT: Record<MatchStatus, string> = {
  Excellent: 'text-gold-700',
  Neutral: 'text-navy-600',
  'Needs Bridging': 'text-amber-700',
}

interface CompatibilityMeterProps {
  percentage: number
  status: MatchStatus
  className?: string
}

export function CompatibilityMeter({ percentage, status, className }: CompatibilityMeterProps) {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimated(percentage))
    return () => window.cancelAnimationFrame(frame)
  }, [percentage])

  const offset = CIRCUMFERENCE - (animated / 100) * CIRCUMFERENCE

  return (
    <div className={cn('relative mx-auto', className)} style={{ width: SIZE, height: SIZE }}>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="-rotate-90"
        role="img"
        aria-label={`Compatibility score ${percentage} percent`}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-cream-300"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className={cn(STATUS_RING[status], 'transition-[stroke-dashoffset] duration-[1200ms] ease-out')}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-semibold text-navy-700">{animated}%</span>
        <span className={cn('mt-1 text-xs font-semibold uppercase tracking-wide', STATUS_TEXT[status])}>
          {status}
        </span>
      </div>
    </div>
  )
}
