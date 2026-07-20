import Image from "next/image";
import { getPillarsImageSrc } from "@/lib/brand";
import { cn } from "@/lib/utils";

type PillarsBannerProps = {
  className?: string;
  priority?: boolean;
};

/** Renders the combined 3-services brand image when present. */
export function PillarsBanner({ className, priority = false }: PillarsBannerProps) {
  const src = getPillarsImageSrc();
  if (!src) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm",
        className,
      )}
    >
      <Image
        src={src}
        alt="Astrology, Numerology, and Vastu — three pillars of AstroVastu"
        width={1600}
        height={600}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 1152px"
        priority={priority}
      />
    </div>
  );
}
