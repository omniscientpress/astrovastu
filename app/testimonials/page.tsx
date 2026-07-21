import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getTestimonials } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client experiences with Divine Jyothi consultations.",
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();
  return (
    <Section>
      <Badge>Phase 1 · placeholders</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Testimonials</h1>
      <p className="mt-3 max-w-2xl text-sm text-neutral-500">
        Replace with real, permission-cleared reviews before launch. Only{" "}
        <code>approved: true</code> entries render.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.id}>
            <div className="text-accent-500">{"★".repeat(t.rating)}</div>
            <p className="mt-3 text-sm text-neutral-700">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-4 text-sm font-semibold text-primary-900">{t.name}</div>
            <div className="text-xs text-neutral-500">
              {t.location} · {t.service}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
