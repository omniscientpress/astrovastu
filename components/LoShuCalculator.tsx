'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import {
  LO_SHU_LAYOUT,
  calculateLoShuGrid,
  formatDob,
  parseDobString,
  type LoShuGridResult,
} from '@/lib/lo-shu-grid'
import { normalizeWhatsAppNumber } from '@/lib/lo-shu-lead'

const INPUT_CLASS =
  'mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400'

function buildWhatsAppMessage(
  name: string,
  phone: string,
  dob: string,
  result: LoShuGridResult
) {
  const lines = [
    "Hi Divine Jyothi, I'd like my full Lo Shu Grid analysis and practical remedies.",
    `Name: ${name.trim()}`,
    `WhatsApp: ${normalizeWhatsAppNumber(phone)}`,
    `Date of birth: ${dob}`,
    `Driver number: ${result.driverNumber}`,
    `Conductor number: ${result.conductorNumber}`,
    'Please share missing-number insights and proportionate remedies.',
  ]
  return lines.join('\n')
}

function submitLoShuLead(payload: {
  name: string
  whatsappNumber: string
  dob: string
  source: string
}) {
  void fetch('/api/lo-shu-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {
    /* Non-blocking — calculator still shows results if webhook is unavailable */
  })
}

export interface LoShuCalculatorProps {
  /** Analytics / n8n source tag, e.g. divinejyothi.com/home */
  source: string
  className?: string
}

export function LoShuCalculator({ source, className }: LoShuCalculatorProps) {
  const nameId = useId()
  const phoneId = useId()
  const dobId = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dobInput, setDobInput] = useState('')
  const [result, setResult] = useState<LoShuGridResult | null>(null)
  const [error, setError] = useState('')

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    const parsed = parseDobString(dobInput)
    if (!parsed) {
      setError('Enter a valid date as DD-MM-YYYY (e.g. 28-05-1971).')
      setResult(null)
      return
    }
    setError('')
    const grid = calculateLoShuGrid(parsed)
    const formattedDob = formatDob(parsed)
    setResult(grid)

    submitLoShuLead({
      name,
      whatsappNumber: phone,
      dob: formattedDob,
      source,
    })
  }

  const formattedDob = result ? formatDob(result.dob) : dobInput

  return (
    <div
      className={cn(
        'grid gap-10 rounded-2xl border border-cream-300 bg-cream-50 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12',
        className
      )}
    >
      <form onSubmit={handleGenerate} className="flex flex-col">
        <h3 className="text-xl font-semibold text-navy-700 sm:text-2xl">
          Discover Your Life&apos;s Blueprint
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          Enter your details to generate a free basic Lo Shu Grid — driver number, conductor
          number, and your personal 3×3 grid.
        </p>

        <div className="mt-6">
          <label htmlFor={nameId} className="block text-sm font-medium text-navy-700">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={INPUT_CLASS}
          />
        </div>

        <div className="mt-4">
          <label htmlFor={phoneId} className="block text-sm font-medium text-navy-700">
            WhatsApp number
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 9XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={INPUT_CLASS}
          />
        </div>

        <div className="mt-4">
          <label htmlFor={dobId} className="block text-sm font-medium text-navy-700">
            Date of birth <span className="text-navy-400">(DD-MM-YYYY)</span>
          </label>
          <input
            id={dobId}
            name="dob"
            type="text"
            inputMode="numeric"
            required
            placeholder="28-05-1971"
            pattern="\d{2}-\d{2}-\d{4}"
            title="Use DD-MM-YYYY format"
            value={dobInput}
            onChange={(e) => setDobInput(e.target.value)}
            className={INPUT_CLASS}
          />
        </div>

        {error && (
          <p className="mt-4 text-sm text-navy-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-300 sm:w-auto"
        >
          Generate My Grid
        </button>
      </form>

      {result && (
        <div className="flex flex-col border-t border-cream-300 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div className="flex flex-wrap gap-4">
            <div className="rounded-xl border border-gold-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                Driver number
              </p>
              <p className="mt-1 text-3xl font-semibold text-navy-700">{result.driverNumber}</p>
              <p className="mt-1 text-xs text-navy-500">Mulank · from birth day</p>
            </div>
            <div className="rounded-xl border border-gold-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                Conductor number
              </p>
              <p className="mt-1 text-3xl font-semibold text-navy-700">{result.conductorNumber}</p>
              <p className="mt-1 text-xs text-navy-500">Bhagyank · from full DOB</p>
            </div>
          </div>

          <p className="mt-6 text-sm font-medium text-navy-700">Your Lo Shu Grid</p>
          <div
            className="mt-3 grid max-w-xs grid-cols-3 gap-2 sm:max-w-sm"
            role="grid"
            aria-label="Lo Shu Grid"
          >
            {LO_SHU_LAYOUT.flat().map((digit) => (
              <div
                key={digit}
                role="gridcell"
                className={cn(
                  'flex min-h-[4.5rem] items-center justify-center rounded-xl border-2 px-2 py-3 text-center text-lg font-semibold tracking-wide sm:min-h-[5rem] sm:text-xl',
                  result.cells[digit]
                    ? 'border-gold-300 bg-white text-navy-700 shadow-sm'
                    : 'border-cream-300 bg-cream-100/80 text-navy-300'
                )}
              >
                {result.cells[digit] || '—'}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="relative overflow-hidden rounded-xl border border-cream-300 bg-white p-5">
              <p
                className="select-none text-sm leading-relaxed text-navy-600 blur-sm"
                aria-hidden="true"
              >
                Missing numbers in your grid point to areas that may need practical balance —
                including tailored colour, direction, and habit-based remedies aligned with your
                chart. A full session maps each gap to specific life areas and proportionate steps
                you can take this week, without selling gemstones or fear-based fixes.
              </p>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cream-50/40 to-cream-50/90" />
            </div>
            <div className="mt-6">
              <WhatsAppButton
                label="Get Full Analysis & Remedies"
                message={buildWhatsAppMessage(name, phone, formattedDob, result)}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
