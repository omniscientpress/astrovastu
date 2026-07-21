import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getSite, getTestimonials } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { Card } from "@/components/ui/Card";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client experiences with Divine Jyothi consultations.",
  robots: { index: false, follow: true },
};

export default function TestimonialsPage() {
  const site = getSite();
  const testimonials = site.showTestimonials ? getTestimonials() : [];
  const wa = buildWaLink({ page: "testimonials" });

  if (!testimonials.length) {
    return (
      <Section>
        <Badge>Testimonials</Badge>
        <h1 className="mt-3 text-3xl font-bold text-primary-900">Client experiences</h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          We are collecting permission-cleared reviews from recent consultations. Until then, the
          best way to understand the practice is to speak with {site.consultantName} directly or
          read how consultations work on the{" "}
          <Link href="/about/" className="font-medium text-primary-800 underline-offset-2 hover:underline">
            About
          </Link>{" "}
          and{" "}
          <Link href="/faq/" className="font-medium text-primary-800 underline-offset-2 hover:underline">
            FAQ
          </Link>{" "}
          pages.
        </p>
        <Button href={wa} variant="whatsapp" className="mt-8" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          Message on WhatsApp
        </Button>
      </Section>
    );
  }

  return (
    <Section>
      <Badge>Testimonials</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Client experiences</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
        Permission-cleared feedback from consultations with {site.brandName}.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.id}>
            <div className="text-accent-500">{"★".repeat(t.rating)}</div>
            <p className="mt-3 text-sm text-neutral-700">&ldquo;{t.text}&rdquo;</p>
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
