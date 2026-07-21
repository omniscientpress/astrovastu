import { existsSync } from "fs";
import path from "path";

function publicAsset(...parts: string[]): string | null {
  const full = path.join(process.cwd(), "public", ...parts);
  return existsSync(full) ? `/${parts.join("/")}` : null;
}

/** Prefer real PNG logo when dropped into public/images/logo.png */
export function getLogoSrc(): string {
  return publicAsset("images", "logo.png") ?? "/images/logo.svg";
}

/**
 * Combined Astrology + Numerology + Vastu brand strip.
 * Place file at: public/images/services/pillars.png
 */
export function getPillarsImageSrc(): string | null {
  return (
    publicAsset("images", "services", "pillars.png") ??
    publicAsset("images", "services", "pillars.jpg") ??
    publicAsset("images", "services", "main-services.png") ??
    null
  );
}
