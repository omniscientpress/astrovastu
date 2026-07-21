import type { MetadataRoute } from "next";
import { getAllSpecialties } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://divinejyothi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services/",
    "/services/kp-astrology/",
    "/services/vastu/",
    "/services/numerology/",
    "/pricing/",
    "/about/",
    "/faq/",
    "/contact/",
    "/book/",
    "/legal/privacy/",
    "/legal/terms/",
    "/legal/refund/",
  ];

  const specialtyRoutes = getAllSpecialties().map((s) => `/services/${s.slug}/`);

  return [...staticRoutes, ...specialtyRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
