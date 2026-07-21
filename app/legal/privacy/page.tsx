import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Divine Jyothi.",
};

export default function PrivacyPage() {
  return (
    <Section narrow>
      <h1 className="text-3xl font-bold text-primary-900">Privacy Policy</h1>
      <p className="mt-4 text-neutral-600">
        Full policy lands before launch. We collect consultation details (including birth data
        when provided) only with consent, to deliver astrology / Vastu / numerology services and
        manage appointments. Contact us to request deletion of your records.
      </p>
    </Section>
  );
}
