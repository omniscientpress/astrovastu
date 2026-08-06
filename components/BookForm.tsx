'use client'

import { useMemo, useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { services } from '@/data/services'
import { SITE, buildWhatsAppLink } from '@/lib/config'
import { canSendIntake, type IntakeFormData } from '@/lib/intake'
import { en } from '@/locales/en'

const PILLAR_LABEL = {
  astrology: en.pillars.astrology,
  vastu: en.pillars.vastu,
  numerology: en.pillars.numerology,
} as const

const PILLARS = ['astrology', 'vastu', 'numerology'] as const

/**
 * Booking form with dual submit: POST structured intake to /api/intake (when birth
 * details are complete for astrology) and always open WhatsApp for slot confirmation.
 * Intake is optional — if n8n is not configured or geocoding fails, WhatsApp still works.
 */
export function BookForm() {
  const [slug, setSlug] = useState(services[0].slug)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [tier, setTier] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [question, setQuestion] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [namesToCheck, setNamesToCheck] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [statusNote, setStatusNote] = useState('')

  const service = useMemo(() => services.find((s) => s.slug === slug) ?? services[0], [slug])
  const pillar = service.pillar

  const message = useMemo(() => {
    const lines = [
      `Hi Divine Jyothi, I'd like to book a consultation.`,
      ``,
      `Service: ${service.title}`,
    ]
    if (tier && service.tiers) {
      const t = service.tiers.find((x) => x.id === tier)
      if (t) lines.push(`Package: ${t.name}`)
    }
    if (name) lines.push(`Name: ${name}`)
    if (email) lines.push(`Email: ${email}`)
    if (phone) lines.push(`WhatsApp: ${phone}`)
    if (preferredTime) lines.push(`Preferred time (IST): ${preferredTime}`)
    if (pillar === 'astrology') {
      if (birthDate) lines.push(`Date of birth: ${birthDate}`)
      if (birthTime) lines.push(`Time of birth: ${birthTime}`)
      if (birthPlace) lines.push(`Place of birth: ${birthPlace}`)
    }
    if (pillar === 'vastu' && propertyType) lines.push(`Property type: ${propertyType}`)
    if (pillar === 'numerology' && namesToCheck) lines.push(`Name(s) to check: ${namesToCheck}`)
    if (question) lines.push(``, `Question: ${question}`)
    return lines.join('\n')
  }, [service, tier, name, email, phone, preferredTime, pillar, birthDate, birthTime, birthPlace, propertyType, namesToCheck, question])

  const whatsAppHref = buildWhatsAppLink(message)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setStatusNote('')

    const formData: IntakeFormData = {
      name,
      email,
      phone,
      service: slug,
      serviceTitle: service.title,
      pillar,
      tier: tier || undefined,
      preferredTime: preferredTime || undefined,
      question: question || undefined,
      birthDate: birthDate || undefined,
      birthTime: birthTime || undefined,
      birthPlace: birthPlace || undefined,
      propertyType: propertyType || undefined,
      namesToCheck: namesToCheck || undefined,
    }

    if (canSendIntake(formData)) {
      try {
        const res = await fetch('/api/intake/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          const data = (await res.json()) as { sent?: boolean; skipped?: boolean }
          setStatusNote(
            data.sent ? en.form.intakeReceived : en.form.intakeSkipped
          )
        } else {
          setStatusNote(en.form.intakeSkipped)
        }
      } catch {
        setStatusNote(en.form.intakeSkipped)
      }
    } else {
      setStatusNote(en.form.intakeSkipped)
    }

    window.open(whatsAppHref, '_blank', 'noopener,noreferrer')
    setSubmitting(false)
  }

  return (
    <form
      className="space-y-6 rounded-2xl border border-cream-300 bg-cream-50 p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-700">
          {en.form.name} <span className="text-navy-400">({en.form.required})</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-700">
          {en.form.email} <span className="text-navy-400">({en.form.required})</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-700">
          {en.form.whatsapp} <span className="text-navy-400">({en.form.required})</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 9XXXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-navy-700">
          {en.bookPage.servicePillarLabel}
        </label>
        <select
          id="service"
          name="service"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value)
            setTier('')
          }}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        >
          {PILLARS.map((p) => (
            <optgroup key={p} label={PILLAR_LABEL[p]}>
              {services
                .filter((s) => s.pillar === p)
                .map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>

      {service.tiers && (
        <div>
          <label htmlFor="tier" className="block text-sm font-medium text-navy-700">
            {en.form.tier}
          </label>
          <select
            id="tier"
            name="tier"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
          >
            <option value="">Not sure — help me choose</option>
            {service.tiers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} — ₹{t.price.toLocaleString('en-IN')}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-medium text-navy-700">
          {en.form.preferredTime}
        </label>
        <input
          id="preferredTime"
          name="preferredTime"
          type="text"
          placeholder="e.g. Weekday evenings after 7 PM"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        />
        <p className="mt-1 text-xs text-navy-400">{en.form.preferredTimeHint}</p>
      </div>

      <div>
        <label htmlFor="question" className="block text-sm font-medium text-navy-700">
          {en.form.question}
        </label>
        <textarea
          id="question"
          name="question"
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
        />
      </div>

      <p className="flex gap-3 rounded-xl border border-gold-200 bg-gold-50 p-4 text-sm text-navy-700">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
        {en.booking.privacyNote}
      </p>

      {pillar === 'astrology' && (
        <fieldset className="space-y-4 rounded-xl border border-cream-300 p-4">
          <legend className="px-1 text-sm font-medium text-navy-700">
            {en.form.birthDetails}
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="birthDate" className="block text-sm text-navy-600">
                {en.form.birthDate}
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
              />
            </div>
            <div>
              <label htmlFor="birthTime" className="block text-sm text-navy-600">
                {en.form.birthTime}
              </label>
              <input
                id="birthTime"
                name="birthTime"
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
              />
            </div>
          </div>
          <div>
            <label htmlFor="birthPlace" className="block text-sm text-navy-600">
              {en.form.birthPlace}
            </label>
            <input
              id="birthPlace"
              name="birthPlace"
              type="text"
              placeholder="City, State"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
            />
          </div>
        </fieldset>
      )}

      {pillar === 'vastu' && (
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-navy-700">
            {en.form.propertyType}
          </label>
          <input
            id="propertyType"
            name="propertyType"
            type="text"
            placeholder="e.g. 3BHK apartment, office, plot"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
          />
        </div>
      )}

      {pillar === 'numerology' && (
        <div>
          <label htmlFor="namesToCheck" className="block text-sm font-medium text-navy-700">
            {en.form.namesToCheck}
          </label>
          <input
            id="namesToCheck"
            name="namesToCheck"
            type="text"
            value={namesToCheck}
            onChange={(e) => setNamesToCheck(e.target.value)}
            className="mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-whatsapp px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark disabled:opacity-70"
      >
        {submitting ? en.form.submitting : en.form.submit}
      </button>
      <p className="text-center text-sm text-navy-500">
        {statusNote || en.booking.afterSubmit}
      </p>
    </form>
  )
}
