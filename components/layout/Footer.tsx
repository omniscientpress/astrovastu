import Image from "next/image";
import Link from "next/link";
import type { Site } from "@/lib/content";

type FooterProps = {
  site: Site;
};

const serviceLinks = [
  { href: "/services/kp-astrology/", label: "Astrology", icon: "/images/services/astrology.svg" },
  { href: "/services/vastu/", label: "Vastu", icon: "/images/services/vastu.svg" },
  { href: "/services/numerology/", label: "Numerology", icon: "/images/services/numerology.svg" },
  { href: "/pricing/", label: "Pricing" },
];

const companyLinks = [
  { href: "/about/", label: "About" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
  { href: "/book/", label: "Book" },
];

const legalLinks = [
  { href: "/legal/privacy/", label: "Privacy" },
  { href: "/legal/terms/", label: "Terms" },
  { href: "/legal/refund/", label: "Refund" },
];

export function Footer({ site }: FooterProps) {
  return (
    <footer className="border-t border-primary-800 bg-primary-950 text-neutral-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Image src="/images/logo.svg" alt="" width={44} height={44} className="h-11 w-11" />
            <div>
              <div className="text-lg font-bold text-white">{site.brandName}</div>
              <p className="text-xs text-accent-300">{site.tagline}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Integrated consultations with {site.consultantName} — KP Astrology, Vastu, and
            Numerology for clear guidance on timing, space, and name alignment.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-400">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  {l.icon ? (
                    <Image src={l.icon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                  ) : null}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-400">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-400">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.hours}</li>
            <li>{site.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.brandName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-neutral-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
