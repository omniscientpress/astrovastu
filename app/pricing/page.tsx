import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPricing } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent consultation packages for KP Astrology, Vastu, Numerology, and the Divine Jyothi Audit. UPI after slot confirmation.",
};

export default function PricingPage() {
  const pricing = getPricing();
  return (
    <Section>
      <Badge>Pricing</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Consultation packages</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">{pricing.note}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricing.packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={cn(
              "flex flex-col",
              pkg.highlighted && "border-accent-400 ring-2 ring-accent-300",
            )}
          >
            {pkg.highlighted && (
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-accent-700">
                Recommended · Integrated
              </div>
            )}
            <h2 className="text-lg font-bold text-primary-900">{pkg.name}</h2>
            <div className="mt-2 text-2xl font-bold text-accent-700">{pkg.priceLabel}</div>
            <div className="text-xs text-neutral-500">
              {pkg.duration} · {pkg.deliveryMode}
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              <span className="font-semibold text-primary-900">Best for:</span> {pkg.bestFor}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-neutral-600">
              {pkg.inclusions.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
              <p>
                <span className="font-semibold text-neutral-700">Prepare:</span> {pkg.prepare}
              </p>
              <p>
                <span className="font-semibold text-neutral-700">After session:</span> {pkg.followUp}
              </p>
            </div>
            <Button
              href={buildWaLink({ page: "pricing", packageName: pkg.name })}
              variant={pkg.highlighted ? "whatsapp" : "primary"}
              className="mt-6 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
            </Button>
          </Card>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-neutral-600">
        Prefer a specialty topic first? See{" "}
        <Link href="/services/" className="font-medium text-primary-800 underline-offset-2 hover:underline">
          Services
        </Link>
        .
      </p>
    </Section>
  );
}
