import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { getFaqs } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Divine Jyothi consultations.",
};

export default function FaqPage() {
  const faqs = getFaqs();
  return (
    <Section narrow>
      <Badge>FAQ</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Frequently asked questions</h1>
      <p className="mt-3 text-neutral-600">
        Edit answers in <code>content/faqs.json</code> — the build validates every entry.
      </p>
      <Accordion
        className="mt-8"
        items={faqs.map((f) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        }))}
      />
    </Section>
  );
}
