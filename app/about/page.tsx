import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getSite } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About AstroVastu — KP Astrology, Vastu, and Numerology.",
};

export default function AboutPage() {
  const site = getSite();
  return (
    <Section narrow>
      <Badge>Phase 1 stub</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">About {site.brandName}</h1>
      <p className="mt-4 leading-relaxed text-neutral-600">
        Guided by <strong>{site.consultantName}</strong>, {site.brandName} bridges your birth
        chart, your name, and your living space — KP Astrology&apos;s timing precision,
        Vastu&apos;s spatial wisdom, and Numerology&apos;s vibrational alignment in one
        integrated practice.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-600">
        Based in {site.city}, consulting clients online worldwide. Full credentials, photo, and
        bio depth will expand in Phase 2 as you share more details.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {site.stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-neutral-100 p-4 text-center">
            <div className="text-2xl font-bold text-primary-900">{s.value}</div>
            <div className="text-xs text-neutral-600">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
