import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { getAllServices } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Astrology, Vastu, and Numerology consultations with AstroVastu.",
};

export default function ServicesHubPage() {
  const services = getAllServices();
  return (
    <>
      <Section tone="primary" className="!py-16 md:!py-20">
        <Badge tone="accent" className="bg-accent-500/20 text-accent-200">
          Main services
        </Badge>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Our Services</h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Three pillars — Astrology, Numerology, and Vastu — with clear guidance for your path,
          numbers, and spaces.
        </p>
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
