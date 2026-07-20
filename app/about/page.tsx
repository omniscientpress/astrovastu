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
        {site.brandName} bridges your birth chart, your name, and your living space — KP
        Astrology&apos;s timing precision, Vastu&apos;s spatial wisdom, and Numerology&apos;s
        vibrational alignment in one integrated practice.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-600">
        Full consultant bio, photo, and credentials will replace this stub once Phase 0 inputs
        are confirmed. Salvaged KP educational copy lives in <code>SALVAGE.md</code>.
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
