"use client";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { useState } from "react";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  whatsappHref: string;
};

export function ContactForm({ whatsappHref }: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    consent: false,
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: form.service || undefined,
          sourcePage: "contact",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Could not send inquiry");
        return;
      }
      trackEvent("form_submit", { page: "contact", savedToDb: Boolean(data.savedToDb) });
      router.push("/thank-you/");
    } catch {
      setError("Network error. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-primary-900">Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-500/40"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-primary-900">WhatsApp number</label>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-500/40"
            placeholder="9885099448"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-primary-900">Email (optional)</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-500/40"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-primary-900">Service interest</label>
        <select
          value={form.service}
          onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-500/40"
        >
          <option value="">Select…</option>
          <option value="KP">Astrology (KP)</option>
          <option value="VASTU">Vastu</option>
          <option value="NUMEROLOGY">Numerology</option>
          <option value="COMBO">Divine Jyothi Combo</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-primary-900">Message</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-500/40"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-neutral-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-1"
          required
        />
        I consent to Divine Jyothi storing my contact details to respond to this inquiry.
      </label>
      {error ? <p className="text-sm text-danger-500">{error}</p> : null}
      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Sending…" : "Send inquiry"}
        </Button>
        <Button href={whatsappHref} variant="whatsapp" target="_blank" rel="noopener noreferrer">
          Prefer WhatsApp
        </Button>
      </div>
    </form>
  );
}
