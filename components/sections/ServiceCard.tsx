import { cn } from "@/lib/utils";
import type { ServicePillar } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accentBorder: Record<ServicePillar["accent"], string> = {
  gold: "border-pillar-gold/40 hover:border-pillar-gold",
  teal: "border-pillar-teal/40 hover:border-pillar-teal",
  lime: "border-pillar-lime/40 hover:border-pillar-lime",
};

const accentTitle: Record<ServicePillar["accent"], string> = {
  gold: "text-pillar-gold",
  teal: "text-pillar-teal",
  lime: "text-pillar-lime",
};

type ServiceCardProps = {
  service: ServicePillar;
  dark?: boolean;
};

export function ServiceCard({ service, dark = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className={cn(
        "group flex flex-col rounded-2xl border-2 p-6 shadow-sm transition-all duration-200",
        dark
          ? "border-white/10 bg-white/5 hover:bg-white/10"
          : cn("bg-white", accentBorder[service.accent]),
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-16 w-16 items-center justify-center rounded-full",
          dark ? "bg-black/40" : "bg-primary-950",
        )}
      >
        <Image
          src={service.icon}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14"
        />
      </div>
      <h3
        className={cn(
          "text-xl font-bold tracking-wide uppercase",
          dark ? accentTitle[service.accent] : "text-primary-900",
        )}
      >
        {service.shortTitle}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          dark ? "text-neutral-300" : "text-neutral-600",
        )}
      >
        {service.tagline}
      </p>
      <span
        className={cn(
          "mt-5 inline-flex items-center gap-1 text-sm font-semibold",
          dark ? accentTitle[service.accent] : "text-accent-700 group-hover:text-accent-600",
        )}
      >
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
