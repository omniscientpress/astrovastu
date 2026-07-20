import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPricing } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent consultation packages for KP Astrology, Vastu, and Numerology.",
};

export default function PricingPage() {
  const pricing = getPricing();
  return (
    <Section>
      <Badge>Phase 1 · draft prices</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Pricing</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">{pricing.note}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricing.packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={cn(pkg.highlighted && "border-accent-400 ring-2 ring-accent-300")}
          >
            {pkg.highlighted && (
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-accent-700">
                Recommended
              </div>
            )}
            <h2 className="text-lg font-bold text-primary-900">{pkg.name}</h2>
            <div className="mt-2 text-2xl font-bold text-accent-700">{pkg.priceLabel}</div>
            <div className="text-xs text-neutral-500">{pkg.duration} · {pkg.deliveryMode}</div>
            <ul className="mt-4 space-y-1.5 text-sm text-neutral-600">
              {pkg.inclusions.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
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
    </Section>
  );
}
