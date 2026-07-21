import Image from "next/image";
import { getLogoSrc } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function BrandLogo({
  size = 40,
  className,
  priority = false,
  alt = "Divine Jyothi logo",
}: BrandLogoProps) {
  return (
    <Image
      src={getLogoSrc()}
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
      priority={priority}
    />
  );
}
