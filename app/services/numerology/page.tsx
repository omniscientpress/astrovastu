import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getService } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numerology Consultation",
  description: "Name, baby name, business name, and mobile number numerology — chart-aligned.",
};

export default function NumerologyPage() {
  const service = getService("numerology");
  const wa = buildWaLink({ page: "numerology" });
  return (
    <Section narrow>
      <Badge>Phase 1 stub · content wired</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">{service.title}</h1>
      <p className="mt-3 text-neutral-600">{service.description}</p>
      <ul className="mt-6 space-y-2 text-sm text-neutral-700">
        {service.forYou.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Button href={wa} variant="whatsapp" className="mt-8" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        WhatsApp — Numerology consultation
      </Button>
    </Section>
  );
}
