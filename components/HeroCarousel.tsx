'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'
import { BrandText } from '@/components/BrandText'
import { HeroVisual } from '@/components/graphics/HeroVisual'
import { WhatsAppButton } from './WhatsAppButton'

const SLIDES = en.home.slides
const AUTO_ADVANCE_MS = 6500

export function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const regionId = useId()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const go = useCallback((next: number) => {
    setActive((next + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (reducedMotion || paused) return
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      AUTO_ADVANCE_MS
    )
    return () => window.clearInterval(timer)
  }, [reducedMotion, paused])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(active - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(active + 1)
    }
  }

  return (
    <section
      id={regionId}
      aria-roledescription="carousel"
      aria-label={en.home.carousel.label}
      data-paused={paused || reducedMotion}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1))
        touchStartX.current = null
      }}
      className="on-navy relative min-h-[32rem] overflow-hidden text-cream-100 sm:min-h-[36rem] lg:min-h-[40rem]"
    >
      {/* Full-bleed background images — one per slide */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none',
            i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
          )}
          aria-hidden={i !== active}
        >
          <HeroVisual
            slideId={slide.id}
            visualAlt={slide.visualAlt}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Slides share one grid cell so height stays stable */}
      <div className="relative z-10 mx-auto grid min-h-[32rem] max-w-content px-4 py-14 sm:min-h-[36rem] sm:px-6 lg:min-h-[40rem] lg:px-8 lg:py-20">
        {SLIDES.map((slide, i) => {
          const isActive = i === active
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
              className={cn(
                'col-start-1 row-start-1 flex items-center transition-opacity duration-500 motion-reduce:transition-none',
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
              )}
            >
              <div
                className={cn(
                  'max-w-2xl transition-transform duration-500 motion-reduce:transition-none',
                  isActive && !reducedMotion && 'translate-y-0',
                  !isActive && !reducedMotion && 'translate-y-2'
                )}
              >
                <p className="inline-flex rounded-full bg-navy-600/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300 backdrop-blur-sm">
                  {slide.badge}
                </p>
                <h1 className="mt-5 text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-cream-200/90">
                  <BrandText brandClassName="text-gold-200">{slide.subtitle}</BrandText>
                </p>
                <p className="mt-3 leading-relaxed text-cream-300/80">
                  <BrandText brandClassName="text-gold-200">{slide.body}</BrandText>
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton service={slide.whatsappService || undefined} />
                  <Link
                    href={slide.secondary.href}
                    className="inline-flex items-center justify-center rounded-lg bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-300"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="relative z-10 mx-auto flex max-w-content items-center gap-4 px-4 pb-8 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label={en.home.carousel.previous}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-500/80 bg-navy-900/40 text-cream-200 backdrop-blur-sm transition-colors hover:bg-navy-600/60"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label={en.home.carousel.next}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-500/80 bg-navy-900/40 text-cream-200 backdrop-blur-sm transition-colors hover:bg-navy-600/60"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <ul className="flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <li key={slide.id}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={en.home.carousel.goTo(i + 1)}
                aria-current={i === active ? 'true' : undefined}
                className={cn(
                  'block h-2.5 rounded-full transition-all',
                  i === active ? 'w-8 bg-gold-400' : 'w-2.5 bg-navy-500/80 hover:bg-navy-400'
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
