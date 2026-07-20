import { existsSync } from "fs";
import path from "path";

/** Prefer real PNG logo when dropped into public/images/logo.png */
export function getLogoSrc(): string {
  const pngPath = path.join(process.cwd(), "public", "images", "logo.png");
  return existsSync(pngPath) ? "/images/logo.png" : "/images/logo.svg";
}
