"use client";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { useMemo, useState } from "react";

const SERVICES = [
  { id: "KP", label: "Astrology (KP)" },
  { id: "VASTU", label: "Vastu" },
  { id: "NUMEROLOGY", label: "Numerology" },
  { id: "COMBO", label: "Divine Jyothi Combo" },
] as const;

const TIMES = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

type Result = {
  bookingRef: string;
  waHref: string;
  savedToDb: boolean;
  message: string;
};

export function BookingForm({ initialService = "" }: { initialService?: string }) {
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [form, setForm] = useState({
    service: initialService,
    name: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    birthTime: "",
    birthPlace: "",
    slotDate: "",
    slotTime: "",
    notes: "",
    consent: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/bookings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Could not create booking");
        return;
      }
      trackEvent("book_submit", {
        service: form.service,
        savedToDb: Boolean(data.savedToDb),
      });
      setResult({
        bookingRef: data.bookingRef,
        waHref: data.waHref,
        savedToDb: Boolean(data.savedToDb),
        message: data.message,
      });
      setStep(4);
    } catch {
      setError("Network error. Please try again or use WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (result && step === 4) {
    return (
      <div className="space-y-4 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-bold text-primary-900">Booking request received</h2>
        <p className="text-sm text-neutral-700">{result.message}</p>
        <p className="text-sm">
          <strong>Reference:</strong> {result.bookingRef}
        </p>
        <Button href={result.waHref} variant="whatsapp" target="_blank" rel="noopener noreferrer">
          Confirm on WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={`rounded-full px-3 py-1 ${step >= s ? "bg-primary-900 text-white" : "bg-neutral-200"}`}
          >
            Step {s}
          </span>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary-900">Choose a service</h2>
          <div className="grid gap-3">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => update("service", s.id)}
                className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  form.service === s.id
                    ? "border-accent-500 bg-accent-50 text-primary-900"
                    : "border-neutral-200 hover:border-accent-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <Button type="button" variant="primary" disabled={!form.service} onClick={() => setStep(2)}>
            Continue
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary-900">Your details</h2>
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="WhatsApp number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <input
              type="date"
              value={form.dateOfBirth}
              onChange={(e) => update("dateOfBirth", e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
              title="Date of birth"
            />
            <input
              type="time"
              value={form.birthTime}
              onChange={(e) => update("birthTime", e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
              title="Birth time"
            />
            <input
              placeholder="Birth place"
              value={form.birthPlace}
              onChange={(e) => update("birthPlace", e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Your question / notes"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
          />
          <div className="flex gap-3">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              type="button"
              variant="primary"
              disabled={!form.name || !form.phone}
              onClick={() => setStep(3)}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary-900">Preferred date & time (IST)</h2>
          <input
            type="date"
            min={minDate}
            value={form.slotDate}
            onChange={(e) => update("slotDate", e.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
          />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {TIMES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => update("slotTime", t)}
                className={`rounded-lg px-2 py-2 text-xs font-semibold ${
                  form.slotTime === t
                    ? "bg-primary-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-accent-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="flex items-start gap-2 text-sm text-neutral-600">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="mt-1"
            />
            I consent to Divine Jyothi storing my details (including birth data if provided) to
            schedule and deliver this consultation.
          </label>
          {error ? <p className="text-sm text-danger-500">{error}</p> : null}
          <div className="flex gap-3">
            <Button type="button" variant="ghost" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button
              type="button"
              variant="secondary"
              disabled={!form.slotDate || !form.slotTime || !form.consent || loading}
              onClick={submit}
            >
              {loading ? "Saving…" : "Submit booking"}
            </Button>
          </div>
          <p className="text-xs text-neutral-500">
            After submit, confirm on WhatsApp. Payment via UPI once the slot is confirmed.
          </p>
        </div>
      )}
    </div>
  );
}
