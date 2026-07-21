import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PillarsBanner } from "@/components/sections/PillarsBanner";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getAllServices, getSpecialtiesByPillar, getUseCases } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Divine Jyothi services — start from your goal, then explore KP Astrology, Vastu, and Numerology specialties.",
};

function SpecialtyGrid({
  title,
  subtitle,
  pillar,
}: {
  title: string;
  subtitle: string;
  pillar: "kp-astrology" | "vastu" | "numerology";
}) {
  const specialties = getSpecialtiesByPillar(pillar);
  return (
    <div className="mb-14 last:mb-0">
      <div className="mb-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">{title}</h2>
        <p className="mt-2 text-neutral-600">{subtitle}</p>
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
            <p className="mt-2 text-xs text-neutral-500">
              {s.priceLabel} · {s.duration}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
              View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ServicesHubPage() {
  const services = getAllServices();
  const useCases = getUseCases();
  const wa = buildWaLink({ page: "services" });

  return (
    <>
      <Section tone="primary" className="!py-16 md:!py-20">
        <Badge tone="accent" className="bg-accent-500/20 text-accent-200">
          Services
        </Badge>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          How can we help?
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Start from your situation. We&apos;ll recommend KP Astrology, Vastu, Numerology, or the
          Divine Jyothi Audit when all three matter together.
        </p>
      </Section>

      <Section>
        <h2 className="mb-6 text-2xl font-bold text-primary-900">I need help with…</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <Link
              key={uc.id}
              href={uc.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-accent-400"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-accent-700">{uc.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{uc.description}</p>
              <p className="mt-3 text-xs text-neutral-500">{uc.pillars.join(" · ")}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <PillarsBanner className="mb-10" priority />
        <div className="mb-6 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary-900">Three pillars</h2>
          <p className="mt-2 text-neutral-600">
            Timing · Space · Name — open a pillar for specialties and process.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section>
        <SpecialtyGrid
          title="KP Astrology specialties"
          subtitle="Career, marriage, muhurtham, finance, health, childbirth, and Prashna."
          pillar="kp-astrology"
        />
        <SpecialtyGrid
          title="Vastu specialties"
          subtitle="Home, office/shop, plot selection, and remedies without demolition."
          pillar="vastu"
        />
        <SpecialtyGrid
          title="Numerology specialties"
          subtitle="Name analysis, baby names, business names, and mobile numbers."
          pillar="numerology"
        />
        <p className="mt-4 text-center text-sm text-neutral-600">
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
