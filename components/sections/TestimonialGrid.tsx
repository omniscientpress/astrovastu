import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { Testimonial } from "@/lib/content";

type TestimonialGridProps = {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
};

export function TestimonialGrid({
  title = "What clients say",
  subtitle,
  testimonials,
}: TestimonialGridProps) {
  if (testimonials.length === 0) return null;

  return (
    <Section tone="muted">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-primary-900">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-neutral-500">{subtitle}</p> : null}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.id}>
            <div className="text-accent-500">{"★".repeat(t.rating)}</div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-4 text-sm font-semibold text-primary-900">{t.name}</div>
            <div className="text-xs text-neutral-500">
              {t.location}
              {t.resultSummary ? ` · ${t.resultSummary}` : ""}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
