'use client'

import { useId, useState, type ReactNode } from 'react'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import {
  LO_SHU_LAYOUT,
  calculateLoShuGrid,
  formatDob,
  parseDobString,
  type Gender,
  type LoShuGridResult,
} from '@/lib/lo-shu-grid'
import { normalizeWhatsAppNumber } from '@/lib/lo-shu-lead'

const INPUT_CLASS =
  'mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400'

function FieldLabel({
  htmlFor,
  label,
  tooltip,
  children,
}: {
  htmlFor: string
  label: ReactNode
  tooltip: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        <label htmlFor={htmlFor} className="text-sm font-medium text-navy-700">
          {label}
        </label>
        <span className="group relative inline-flex">
          <button
            type="button"
            tabIndex={0}
            className="inline-flex rounded-full text-gold-600 hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label={tooltip}
          >
            <Info className="h-4 w-4" aria-hidden="true" />
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-lg bg-navy-700 px-3 py-2 text-xs leading-relaxed text-cream-100 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
          >
            {tooltip}
          </span>
        </span>
      </div>
      {children}
    </div>
  )
}

function buildWhatsAppMessage(
  name: string,
  phone: string,
  gender: Gender,
  dob: string,
  result: LoShuGridResult
) {
  const lines = [
    "Hi Divine Jyothi, I'd like my full Lo Shu Grid analysis and practical remedies.",
    `Name: ${name.trim()}`,
    `WhatsApp: ${normalizeWhatsAppNumber(phone)}`,
    `Gender: ${gender === 'male' ? 'Male' : 'Female'}`,
    `Date of birth: ${dob}`,
    `Driver number: ${result.driverNumber}`,
    `Conductor number: ${result.conductorNumber}`,
    `Kua number: ${result.kuaNumber}`,
    'Please share missing-number insights and proportionate remedies.',
  ]
  return lines.join('\n')
}

function submitLoShuLead(payload: {
  name: string
  whatsappNumber: string
  gender: Gender
  dob: string
  kuaNumber: number
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
  const genderId = useId()
  const dobId = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState<Gender | ''>('')
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
    if (gender !== 'male' && gender !== 'female') {
      setError('Please select your gender.')
      setResult(null)
      return
    }
    setError('')
    const grid = calculateLoShuGrid(parsed, gender)
    const formattedDob = formatDob(parsed)
    setResult(grid)

    submitLoShuLead({
      name,
      whatsappNumber: phone,
      gender,
      dob: formattedDob,
      kuaNumber: grid.kuaNumber,
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
          Enter your details to generate a free basic Lo Shu Grid — driver, conductor, and
          Kua numbers plus your personal 3×3 grid.
        </p>

        <div className="mt-6">
          <FieldLabel htmlFor={nameId} label="Name" tooltip="Used to personalize your reading.">
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
          </FieldLabel>
        </div>

        <div className="mt-4">
          <FieldLabel
            htmlFor={phoneId}
            label="WhatsApp number"
            tooltip="We will send your detailed Lo Shu Grid report here."
          >
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
          </FieldLabel>
        </div>

        <div className="mt-4">
          <FieldLabel
            htmlFor={genderId}
            label="Gender"
            tooltip="Crucial for calculating your accurate Kua Number (hidden energy)."
          >
            <select
              id={genderId}
              name="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className={INPUT_CLASS}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </FieldLabel>
        </div>

        <div className="mt-4">
          <FieldLabel
            htmlFor={dobId}
            label={
              <>
                Date of birth <span className="text-navy-400">(DD-MM-YYYY)</span>
              </>
            }
            tooltip="Used to extract your core elemental numbers."
          >
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
          </FieldLabel>
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
            <div className="rounded-xl border border-gold-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                Kua number
              </p>
              <p className="mt-1 text-3xl font-semibold text-navy-700">{result.kuaNumber}</p>
              <p className="mt-1 text-xs text-navy-500">Hidden energy / directions</p>
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
                message={buildWhatsAppMessage(
                  name,
                  phone,
                  gender as Gender,
                  formattedDob,
                  result
                )}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
