import Link from "next/link";
import type { Site } from "@/lib/content";

type FooterProps = {
  site: Site;
};

const serviceLinks = [
  { href: "/services/kp-astrology/", label: "KP Astrology" },
  { href: "/services/vastu/", label: "Vastu" },
  { href: "/services/numerology/", label: "Numerology" },
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
          <div className="mb-3 text-lg font-bold text-white">{site.brandName}</div>
          <p className="mb-4 text-sm text-accent-300">{site.tagline}</p>
          <p className="text-sm leading-relaxed text-neutral-400">
            Integrated consultations across KP Astrology, Vastu, and Numerology —
            clear guidance for timing, space, and name alignment.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-400">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((l) => (
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
          <p>© {new Date().getFullYear()} {site.brandName}. All rights reserved.</p>
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
