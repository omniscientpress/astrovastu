import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSite } from "@/lib/content";
import { buildWaLink, getPhoneTelHref } from "@/lib/whatsapp";
import { getLogoSrc } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://divinejyothi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Divine Jyothi — KP Astrology · Vastu · Numerology",
    template: "%s | Divine Jyothi",
  },
  description:
    "Divine Jyothi offers integrated KP Astrology, Vastu, and Numerology consultations in Hyderabad and online. Clear guidance for timing, space, and name decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Divine Jyothi",
    title: "Divine Jyothi — Illuminate Your Destiny",
    description:
      "KP Astrology · Vastu · Numerology. Clear guidance for timing, space, and name decisions with Siva Kola.",
    images: [{ url: "/images/logo.png", width: 1024, height: 1024, alt: "Divine Jyothi" }],
  },
  twitter: {
    card: "summary",
    title: "Divine Jyothi — Illuminate Your Destiny",
    description:
      "KP Astrology · Vastu · Numerology consultations. Hyderabad-based, online worldwide.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSite();
  const waHome = buildWaLink({ page: "home" });
  const phoneHref = getPhoneTelHref();
  const logoSrc = getLogoSrc();

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd />
        <div className="flex min-h-screen flex-col">
          <Header
            brandName={site.brandName}
            tagline={site.tagline}
            serviceDescriptor={site.serviceDescriptor}
            logoSrc={logoSrc}
          />
          <main className="flex-1">{children}</main>
          <Footer site={site} logoSrc={logoSrc} />
        </div>
        <MobileStickyBar whatsappHref={waHome} phoneHref={phoneHref} />
        <FloatingWhatsApp href={waHome} />
      </body>
    </html>
  );
}
