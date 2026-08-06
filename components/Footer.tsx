import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SITE, isPlaceholder } from '@/lib/config'
import { en } from '@/locales/en'
import { Logo } from './Logo'
import { BrandText } from './BrandText'

const SERVICE_LINKS = [
  { href: '/services/astrology', label: en.pillars.astrology },
  { href: '/services/vastu', label: en.pillars.vastu },
  { href: '/services/numerology', label: en.pillars.numerology },
  { href: '/services/astrology/marriage', label: 'Marriage & Family' },
  { href: '/services/astrology/muhurtham', label: 'Muhurtham' },
  { href: '/services/vastu/home-vastu', label: 'Home Vastu' },
]

const COMPANY_LINKS = [
  { href: '/about', label: en.nav.about },
  { href: '/testimonials', label: en.nav.testimonials },
  { href: '/blog', label: en.nav.blog },
  { href: '/faq', label: en.nav.faq },
  { href: '/contact', label: en.nav.contact },
  { href: '/book', label: en.nav.book },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: en.footer.privacy },
  { href: '/terms', label: en.footer.terms },
  { href: '/refund', label: en.footer.refund },
]

export function Footer() {
  // Social icons are omitted entirely until real URLs exist — no '#' placeholders.
  const socials = Object.entries(SITE.social).filter(([, url]) => !isPlaceholder(url))

  return (
    <footer className="on-navy bg-navy-700 px-4 py-14 text-cream-200 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="full" theme="dark" size={72} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300/80">
            <BrandText brandClassName="text-cream-100">{en.footer.blurb}</BrandText>
          </p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-4">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-cream-300 hover:text-gold-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            {en.footer.services}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-300/90 hover:text-cream-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            {en.footer.company}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-300/90 hover:text-cream-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            {en.footer.contact}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`tel:+${SITE.whatsappNumber}`} className="hover:text-cream-50">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-cream-300/90">{SITE.location}</span>
            </li>
            <li className="text-cream-300/90">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-content flex-col items-center justify-between gap-4 border-t border-navy-500 pt-6 text-sm text-cream-300/70 sm:flex-row">
        <p>
          <BrandText brandClassName="text-cream-100">
            {en.footer.rights(new Date().getFullYear())}
          </BrandText>
        </p>
        <ul className="flex gap-6">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-cream-50">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
