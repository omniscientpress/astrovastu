import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { getSite } from "@/lib/content";
import { buildWaLink, getPhoneTelHref } from "@/lib/whatsapp";
import { getLogoSrc } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Divine Jyothi — Illuminate Your Destiny",
    template: "%s | Divine Jyothi",
  },
  description:
    "Divine Jyothi offers integrated KP Astrology, Vastu, and Numerology consultations. Book via WhatsApp.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://divinejyothi.com",
  ),
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
        <div className="flex min-h-screen flex-col">
          <Header brandName={site.brandName} tagline={site.tagline} logoSrc={logoSrc} />
          <main className="flex-1">{children}</main>
          <Footer site={site} logoSrc={logoSrc} />
        </div>
        <MobileStickyBar whatsappHref={waHome} phoneHref={phoneHref} />
        <FloatingWhatsApp href={waHome} />
      </body>
    </html>
  );
}
