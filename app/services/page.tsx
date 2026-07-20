import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PillarsBanner } from "@/components/sections/PillarsBanner";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getAllServices, getAllSpecialties } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Astrology, Vastu, and Numerology consultations — plus KP specialty pages for career, marriage, muhurtham, and more.",
};

export default function ServicesHubPage() {
  const services = getAllServices();
  const specialties = getAllSpecialties();
  const wa = buildWaLink({ page: "services" });

  return (
    <>
      <Section tone="primary" className="!py-16 md:!py-20">
        <Badge tone="accent" className="bg-accent-500/20 text-accent-200">
          Main services
        </Badge>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Our Services</h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Three pillars — Astrology, Numerology, and Vastu — plus focused KP specialty pages for
          career, marriage, muhurtham, and more.
        </p>
      </Section>

      <Section>
        <PillarsBanner className="mb-10" priority />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            KP Astrology specialties
          </h2>
          <p className="mt-3 text-neutral-600">
            Dedicated pages restored from the previous site — same URLs under{" "}
            <code className="text-sm">/services/…</code>.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-accent-400"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-accent-700">
                {s.shortTitle}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{s.tagline}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Prefer a package? See{" "}
          <Link
            href="/pricing/"
            className="font-medium text-primary-800 underline-offset-2 hover:underline"
          >
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
