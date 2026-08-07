import type { Metadata } from 'next'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Section } from '@/components/Section'
import { SITE, whatsAppEnquiry } from '@/lib/config'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.contactPage.title,
  description: en.contactPage.metaDescription,
}

export default function ContactPage() {
  const c = en.contactPage
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {c.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">{c.lead}</p>
      </Section>

      <Section tone="white">
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <li className="flex gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-6">
            <MessageCircle className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy-700">{c.whatsappLabel}</h2>
              <a
                href={whatsAppEnquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-gold-700"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-6">
            <Phone className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy-700">{c.phoneLabel}</h2>
              <a href={`tel:+${SITE.whatsappNumber}`} className="text-navy-600 hover:text-gold-700">
                {SITE.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-6">
            <Mail className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy-700">{c.emailLabel}</h2>
              <a href={`mailto:${SITE.email}`} className="text-navy-600 hover:text-gold-700">
                {SITE.email}
              </a>
            </div>
          </li>
          <li className="flex gap-4 rounded-2xl border border-gold-200 bg-gold-50 p-6 sm:col-span-2">
            <Mail className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy-700">Support (digital reports)</h2>
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="text-navy-600 hover:text-gold-700"
              >
                {SITE.supportEmail}
              </a>
              <p className="mt-1 text-sm text-navy-500">
                For PDF delivery, payment issues, or report questions.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-6">
            <MapPin className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy-700">{c.locationLabel}</h2>
              <p className="text-navy-600">{SITE.location}</p>
            </div>
          </li>
        </ul>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-cream-100 p-6 text-center">
          <p className="font-medium text-navy-700">{SITE.hours}</p>
          <p className="mt-1 text-sm text-navy-500">{c.replyTime}</p>
        </div>
      </Section>
    </>
  )
}
