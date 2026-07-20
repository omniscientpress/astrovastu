import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PillarsBanner } from "@/components/sections/PillarsBanner";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getAllServices } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description: "Astrology, Vastu, and Numerology consultations with AstroVastu.",
};

export default function ServicesHubPage() {
  const services = getAllServices();
  const wa = buildWaLink({ page: "services" });

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
        <PillarsBanner className="mb-10" priority />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Prefer a package? See{" "}
          <Link href="/pricing/" className="font-medium text-primary-800 underline-offset-2 hover:underline">
            Pricing
          </Link>
          .
        </p>
      </Section>

      <CtaBanner
        title="Not sure which service fits?"
        description="Message us with your question. We’ll suggest the right starting point."
        whatsappHref={wa}
        secondaryHref="/book/"
        secondaryLabel="Book a session"
      />
    </>
  );
}
