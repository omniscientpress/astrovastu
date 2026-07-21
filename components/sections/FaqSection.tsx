import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import type { Faq } from "@/lib/content";

type FaqSectionProps = {
  title?: string;
  faqs: Faq[];
};

export function FaqSection({ title = "Frequently asked questions", faqs }: FaqSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <Section narrow>
      <h2 className="mb-6 text-3xl font-bold text-primary-900">{title}</h2>
      <Accordion
        items={faqs.map((f) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        }))}
      />
    </Section>
  );
}
