import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAllServices } from "@/lib/content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "KP Astrology, Vastu, and Numerology consultations.",
};

export default function ServicesHubPage() {
  const services = getAllServices();
  return (
    <Section>
      <Badge>Phase 1 stub</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Our Services</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
        Full pillar pages with deep copy land in Phase 2. Content structure is already loaded from{" "}
        <code className="text-sm">/content/services/*.json</code>.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.slug}>
            <h2 className="text-xl font-bold text-primary-900">{s.shortTitle}</h2>
            <p className="mt-2 text-sm text-neutral-600">{s.tagline}</p>
            <Link
              href={`/services/${s.slug}/`}
              className="mt-4 inline-block text-sm font-semibold text-accent-700"
            >
              Open page →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
