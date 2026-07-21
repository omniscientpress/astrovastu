import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getSite } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { getLogoSrc } from "@/lib/brand";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Divine Jyothi and Siva Kola — KP Astrology, Vastu, and Numerology consultations from Hyderabad. Practical guidance for timing, space, and name.",
};

export default function AboutPage() {
  const site = getSite();
  const wa = buildWaLink({ page: "about" });
  const logoSrc = getLogoSrc();

  return (
    <>
      <Section tone="primary" className="!py-16 md:!py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Badge tone="accent" className="bg-accent-500/20 text-accent-200">
              About
            </Badge>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              About {site.brandName}
            </h1>
            <p className="mt-2 text-accent-300">{site.serviceDescriptor}</p>
            <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
              Guided by <strong className="text-white">{site.consultantName}</strong>,{" "}
              {site.brandName} bridges your birth chart, your living space, and your name — KP
              Astrology&apos;s timing precision, Vastu&apos;s spatial wisdom, and blended
              Numerology in one integrated practice.
            </p>
          </div>
          <Image
            src={logoSrc}
            alt={`${site.brandName} logo`}
            width={160}
            height={160}
            className="mx-auto h-36 w-36 object-contain"
          />
        </div>
      </Section>

      <Section narrow>
        <h2 className="text-2xl font-bold text-primary-900">Meet {site.consultantName}</h2>
        <p className="mt-1 text-sm font-medium text-neutral-500">{site.founderTitle}</p>
        <p className="mt-4 leading-relaxed text-neutral-600">
          With {site.stats[0]?.value ?? "9+"} years of consultation practice from {site.city},{" "}
          {site.consultantName} works with clients online worldwide and in person by appointment.
          Sessions are conducted in {site.languages.join(", ")}.
        </p>
        <p className="mt-4 leading-relaxed text-neutral-600">{site.philosophy}</p>

        <h2 className="mt-12 text-2xl font-bold text-primary-900">Why {site.brandName} exists</h2>
        <p className="mt-4 leading-relaxed text-neutral-600">
          Many people receive timing advice from one place, Vastu from another, and name suggestions
          from a third — sometimes conflicting. {site.brandName} was built so Timing, Space, and
          Name are reviewed together: {site.differentiator}
        </p>

        <h2 className="mt-12 text-2xl font-bold text-primary-900">Our approach</h2>
        <ul className="mt-4 space-y-3 text-neutral-600">
          <li>
            <strong className="text-primary-900">Practical over theatrical.</strong> Clear
            recommendations you can act on — not vague yearly forecasts or fear-selling.
          </li>
          <li>
            <strong className="text-primary-900">No guaranteed outcomes.</strong> Charts and
            assessments indicate tendencies and favorable windows; they do not promise results.
          </li>
          <li>
            <strong className="text-primary-900">Integrated when it matters.</strong> Single-pillar
            sessions when one question is enough; combined Audit when timing, space, and name all
            affect the same decision.
          </li>
          <li>
            <strong className="text-primary-900">Confidential by default.</strong> Birth details and
            floor plans stay private.
          </li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-primary-900">What is the KP System?</h2>
        <p className="mt-4 leading-relaxed text-neutral-600">
          The Krishnamurti Paddhati (KP) system was developed by K.S. Krishnamurti. Unlike
          traditional Vedic astrology that often gives broad windows, KP uses Sub-Lord theory —
          dividing each star into finer segments — to pinpoint when events are most likely to
          unfold.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-primary-900">How we work</h2>
        <ul className="mt-4 space-y-2 text-neutral-600">
          <li>• Based in {site.city} — online worldwide, in-person by appointment only</li>
          <li>• {site.hours}</li>
          <li>• Languages: {site.languages.join(" · ")}</li>
          <li>• Payment via UPI after slot confirmation on WhatsApp</li>
          <li>• Free reschedule with 24+ hours notice</li>
          <li>• Typical reply time: {site.responseTime}</li>
        </ul>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {site.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-neutral-100 p-4 text-center">
              <div className="text-2xl font-bold text-primary-900">{s.value}</div>
              <div className="text-xs text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>

        <Button href={wa} variant="whatsapp" className="mt-10" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          Message {site.consultantName}
        </Button>
      </Section>
    </>
  );
}
