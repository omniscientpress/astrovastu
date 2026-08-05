'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { en } from '@/locales/en'
import { Logo } from './Logo'

const NAV = [
  { href: '/', label: en.nav.home },
  { href: '/services', label: en.nav.services },
  { href: '/pricing', label: en.nav.pricing },
  { href: '/about', label: en.nav.about },
  { href: '/faq', label: en.nav.faq },
  { href: '/contact', label: en.nav.contact },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-cream-300 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo stays generous; nav shrinks instead (spec §4) */}
        <Logo
          href="/"
          variant="full"
          priority
          className="[--logo-size:80px] sm:[--logo-size:88px] lg:[--logo-size:104px]"
        />

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-600 transition-colors hover:text-navy-800"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-300"
          >
            {en.nav.book}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? en.nav.closeMenu : en.nav.openMenu}
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-700 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className={cn('border-t border-cream-300 lg:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-navy-700 hover:bg-cream-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-gold-400 px-4 py-3 text-center font-semibold text-navy-800"
            >
              {en.nav.book}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
