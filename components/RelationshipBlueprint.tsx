'use client'

import { useId, useRef, useState, type ReactNode } from 'react'
import { CreditCard, Info, Loader2, Lock } from 'lucide-react'
import { useRazorpay } from 'react-razorpay'
import { cn } from '@/lib/utils'
import { CompatibilityMeter } from '@/components/CompatibilityMeter'
import { Toast, type ToastMessage } from '@/components/Toast'
import {
  elementLabel,
  getCompatibility,
  type CompatibilityResult,
} from '@/lib/compatibility-engine'
import {
  calculateLoShuGrid,
  formatDob,
  parseDobString,
  type Gender,
} from '@/lib/lo-shu-grid'
import { DIGITAL_REPORTS } from '@/lib/digital-reports'
import { triggerRazorpayPayment } from '@/lib/razorpay-client'
import type { PersonSnapshot } from '@/lib/compatibility-payment'
import { en } from '@/locales/en'

const INPUT_CLASS =
  'mt-1 w-full rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-navy-800 focus:border-gold-400'

type Phase = 'form' | 'loading' | 'result'

type PersonForm = {
  name: string
  gender: Gender | ''
  dob: string
}

const EMPTY_PERSON: PersonForm = { name: '', gender: '', dob: '' }

function FieldLabel({
  htmlFor,
  label,
  tooltip,
  children,
}: {
  htmlFor: string
  label: ReactNode
  tooltip?: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        <label htmlFor={htmlFor} className="text-sm font-medium text-navy-700">
          {label}
        </label>
        {tooltip && (
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
              className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-52 -translate-x-1/2 rounded-lg bg-navy-700 px-3 py-2 text-xs leading-relaxed text-cream-100 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {tooltip}
            </span>
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function PersonFields({
  prefix,
  person,
  onChange,
}: {
  prefix: string
  person: PersonForm
  onChange: (next: PersonForm) => void
}) {
  const nameId = useId()
  const genderId = useId()
  const dobId = useId()

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor={nameId} label="Name">
        <input
          id={nameId}
          name={`${prefix}-name`}
          type="text"
          required
          autoComplete="name"
          value={person.name}
          onChange={(e) => onChange({ ...person, name: e.target.value })}
          className={INPUT_CLASS}
        />
      </FieldLabel>

      <FieldLabel
        htmlFor={genderId}
        label="Gender"
        tooltip="Required to calculate the accurate Kua number."
      >
        <select
          id={genderId}
          name={`${prefix}-gender`}
          required
          value={person.gender}
          onChange={(e) => onChange({ ...person, gender: e.target.value as Gender })}
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FieldLabel>

      <FieldLabel
        htmlFor={dobId}
        label={
          <>
            Date of birth <span className="text-navy-400">(DD-MM-YYYY)</span>
          </>
        }
        tooltip="Used to derive Kua numbers for elemental compatibility."
      >
        <input
          id={dobId}
          name={`${prefix}-dob`}
          type="text"
          inputMode="numeric"
          required
          placeholder="28-05-1990"
          pattern="\d{2}-\d{2}-\d{4}"
          value={person.dob}
          onChange={(e) => onChange({ ...person, dob: e.target.value })}
          className={INPUT_CLASS}
        />
      </FieldLabel>
    </div>
  )
}

export interface RelationshipBlueprintProps {
  source: string
  className?: string
}

export function RelationshipBlueprint({ source, className }: RelationshipBlueprintProps) {
  const copy = en.relationshipBlueprint
  const { Razorpay, isLoading: razorpayLoading } = useRazorpay()
  const emailId = useId()
  const phoneId = useId()

  const [phase, setPhase] = useState<Phase>('form')
  const [person1, setPerson1] = useState<PersonForm>(EMPTY_PERSON)
  const [person2, setPerson2] = useState<PersonForm>(EMPTY_PERSON)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState<CompatibilityResult | null>(null)
  const [snapshots, setSnapshots] = useState<{ a: PersonSnapshot; b: PersonSnapshot } | null>(
    null
  )
  const [paying, setPaying] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const toastId = useRef(0)

  function showToast(message: string, variant: ToastMessage['variant']) {
    toastId.current += 1
    setToast({ id: toastId.current, message, variant })
  }

  function parsePerson(person: PersonForm, label: string) {
    const parsed = parseDobString(person.dob)
    if (!parsed) throw new Error(`${label}: enter a valid date as DD-MM-YYYY.`)
    if (person.gender !== 'male' && person.gender !== 'female') {
      throw new Error(`${label}: please select gender.`)
    }
    const grid = calculateLoShuGrid(parsed, person.gender)
    return {
      snapshot: {
        name: person.name.trim(),
        gender: person.gender,
        dob: formatDob(parsed),
        kuaNumber: grid.kuaNumber,
        driverNumber: grid.driverNumber,
      },
      grid,
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    try {
      const a = parsePerson(person1, copy.person1Label)
      const b = parsePerson(person2, copy.person2Label)
      const compatibility = getCompatibility(a.grid.kuaNumber, b.grid.kuaNumber)

      setSnapshots({ a: a.snapshot, b: b.snapshot })
      setResult(compatibility)
      setPhase('loading')
      setUnlocked(false)

      window.setTimeout(() => setPhase('result'), 750)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Please check the details and try again.')
      setPhase('form')
    }
  }

  async function handleUnlock() {
    if (!result || !snapshots) return
    if (!email.trim() || !phone.trim()) {
      showToast('Add your email and WhatsApp number to receive the PDF.', 'error')
      return
    }

    setPaying(true)
    const report = DIGITAL_REPORTS.relationshipBlueprint

    await triggerRazorpayPayment(Razorpay, {
      amount: report.priceInr,
      name: person1.name.trim() || snapshots.a.name,
      phone: phone.trim(),
      email: email.trim(),
      reportType: report.id,
      paymentPayload: {
        reportType: report.id,
        contact: {
          name: person1.name.trim() || snapshots.a.name,
          email: email.trim(),
          phone: phone.trim(),
        },
        personA: snapshots.a,
        personB: snapshots.b,
        compatibility: result,
        source,
      },
      onSuccess: (paymentId) => {
        setUnlocked(true)
        showToast(
          `Payment successful! Your PDF will arrive at ${email.trim()} shortly. (ID: ${paymentId.slice(0, 12)}…)`,
          'success'
        )
      },
      onError: (message) => {
        if (!message.toLowerCase().includes('cancelled')) {
          showToast(message, 'error')
        }
      },
    })

    setPaying(false)
  }

  const report = DIGITAL_REPORTS.relationshipBlueprint

  return (
    <>
      <div
        className={cn(
          'rounded-2xl border border-cream-300 bg-cream-50 p-6 sm:p-8',
          className
        )}
      >
        {phase === 'form' && (
          <form onSubmit={handleSubmit}>
            <div className="rounded-xl border border-gold-200 bg-white p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                {copy.useCasesHeading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{copy.useCasesBrief}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {copy.useCases.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-navy-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-navy-700">{copy.person1Label}</h3>
                <div className="mt-4">
                  <PersonFields prefix="p1" person={person1} onChange={setPerson1} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-700">{copy.person2Label}</h3>
                <div className="mt-4">
                  <PersonFields prefix="p2" person={person2} onChange={setPerson2} />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-gold-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                {copy.contactHeading}
              </h3>
              <p className="mt-1 text-sm text-navy-600">{copy.contactLead}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FieldLabel htmlFor={emailId} label="Email">
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </FieldLabel>
                <FieldLabel htmlFor={phoneId} label="WhatsApp number">
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
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-gold-400 px-6 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gold-300 sm:w-auto"
            >
              {copy.submitLabel}
            </button>
          </form>
        )}

        {phase === 'loading' && (
          <div className="flex min-h-[20rem] flex-col items-center justify-center py-12 text-center">
            <Loader2 className="h-10 w-10 animate-spin text-gold-500" aria-hidden="true" />
            <p className="mt-4 text-lg font-medium text-navy-700">{copy.loadingLabel}</p>
            <p className="mt-2 text-sm text-navy-500">{copy.loadingSubtext}</p>
          </div>
        )}

        {phase === 'result' && result && snapshots && (
          <div className="transition-opacity duration-500">
            <div className="flex flex-col items-center text-center">
              <CompatibilityMeter
                percentage={result.matchPercentage}
                status={result.matchStatus}
              />
              <p className="mt-6 max-w-lg text-lg font-medium text-navy-700">
                {snapshots.a.name} ({elementLabel(result.personA.element)}) +{' '}
                {snapshots.b.name} ({elementLabel(result.personB.element)})
              </p>
              <p className="mt-2 text-sm text-navy-500">
                Kua {result.personA.number} · Kua {result.personB.number}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-600">
                {copy.honestyNote}
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-2xl border border-cream-300 bg-white">
              <div
                className={cn(
                  'space-y-6 p-6 transition-all duration-300',
                  !unlocked && 'select-none blur-md'
                )}
                aria-hidden={!unlocked}
              >
                <div>
                  <h4 className="text-lg font-semibold text-navy-700">{copy.paywallRemediesTitle}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {result.remedies?.en ?? copy.paywallRemediesFallback}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-700">{copy.paywallColorsTitle}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{copy.paywallColorsBody}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-700">{copy.paywallActionTitle}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{copy.paywallActionBody}</p>
                </div>
              </div>

              {!unlocked && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-cream-50/30 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                    <Lock className="h-8 w-8 text-gold-600" aria-hidden="true" />
                    <button
                      type="button"
                      onClick={handleUnlock}
                      disabled={paying || razorpayLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3.5 text-base font-semibold text-navy-800 shadow-md transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {paying || razorpayLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      ) : (
                        <CreditCard className="h-5 w-5" aria-hidden="true" />
                      )}
                      {copy.unlockCta(report.priceInr)}
                    </button>
                    <p className="max-w-xs text-center text-xs text-navy-500">
                      {copy.unlockNote}
                    </p>
                  </div>
                </>
              )}

              {unlocked && (
                <div className="border-t border-gold-200 bg-gold-50 p-5 text-center">
                  <p className="font-semibold text-navy-700">{copy.unlockedTitle}</p>
                  <p className="mt-1 text-sm text-navy-600">{copy.unlockedLead}</p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setPhase('form')
                setResult(null)
                setSnapshots(null)
                setUnlocked(false)
              }}
              className="mt-6 text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              {copy.checkAnother}
            </button>
          </div>
        )}
      </div>

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </>
  )
}
