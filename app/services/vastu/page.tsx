import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getService } from "@/lib/content";
import { buildWaLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vastu Consultant",
  description: "Vastu consultation for home, office, shop, and plot — remedies without demolition.",
};

export default function VastuPage() {
  const service = getService("vastu");
  const wa = buildWaLink({ page: "vastu" });
  return (
    <Section narrow>
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-950">
        <Image src={service.icon} alt="" width={72} height={72} className="h-[72px] w-[72px]" />
      </div>
      <Badge>Phase 1 stub · content wired</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">{service.title}</h1>
      <p className="mt-2 text-lg font-medium text-pillar-lime">{service.tagline}</p>
      <p className="mt-3 text-neutral-600">{service.description}</p>
      <ul className="mt-6 space-y-2 text-sm text-neutral-700">
        {service.forYou.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Button href={wa} variant="whatsapp" className="mt-8" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        WhatsApp — Vastu consultation
      </Button>
    </Section>
  );
}
