import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  badge?: string;
  title: string;
  tagline?: string;
  description?: string;
  whatsappHref?: string;
  whatsappLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  iconSrc?: string;
  tone?: "primary" | "light";
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  badge,
  title,
  tagline,
  description,
  whatsappHref,
  whatsappLabel = "Book on WhatsApp",
  secondaryHref,
  secondaryLabel,
  iconSrc,
  tone = "primary",
  children,
  className,
}: PageHeroProps) {
  const isPrimary = tone === "primary";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        isPrimary ? "bg-primary-900 text-white" : "bg-neutral-100 text-primary-900",
        className,
      )}
    >
      {isPrimary && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
        </>
      )}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          {badge ? (
            <Badge
              tone="accent"
              className={cn("mb-5", isPrimary && "bg-accent-500/20 text-accent-200")}
            >
              {badge}
            </Badge>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
          {tagline ? (
            <p
              className={cn(
                "mt-3 text-lg font-medium",
                isPrimary ? "text-accent-300" : "text-accent-700",
              )}
            >
              {tagline}
            </p>
          ) : null}
          {description ? (
            <p
              className={cn(
                "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
                isPrimary ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              {description}
            </p>
          ) : null}
          {(whatsappHref || secondaryHref) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {whatsappHref ? (
                <Button
                  href={whatsappHref}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  {whatsappLabel}
                </Button>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Button
                  href={secondaryHref}
                  variant="ghost"
                  className={cn(isPrimary && "border-white/20 text-white hover:bg-white/10")}
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          )}
          {children}
        </div>
        {iconSrc ? (
          <div className="mx-auto hidden lg:block">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-black/30 p-4 md:h-64 md:w-64">
              <Image src={iconSrc} alt="" width={220} height={220} className="h-full w-full" priority />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
