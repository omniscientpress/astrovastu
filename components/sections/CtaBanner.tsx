import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { MessageCircle } from "lucide-react";

type CtaBannerProps = {
  title: string;
  description: string;
  whatsappHref: string;
  whatsappLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  description,
  whatsappHref,
  whatsappLabel = "WhatsApp us",
  secondaryHref,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <Section tone="primary">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="mt-3 text-neutral-300">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={whatsappHref} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            {whatsappLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
