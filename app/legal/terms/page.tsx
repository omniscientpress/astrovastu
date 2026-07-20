import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AstroVastu.",
};

export default function TermsPage() {
  return (
    <Section narrow>
      <h1 className="text-3xl font-bold text-primary-900">Terms of Service</h1>
      <p className="mt-4 text-neutral-600">
        Consultations are guidance based on traditional systems (KP astrology, Vastu, numerology).
        They are not medical, legal, or financial advice and do not guarantee outcomes. Full terms
        will be finalized before go-live.
      </p>
    </Section>
  );
}
