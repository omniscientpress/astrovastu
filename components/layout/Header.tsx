"use client";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

type HeaderProps = {
  brandName: string;
  tagline: string;
};

export function Header({ brandName, tagline }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-900 text-accent-400 font-bold">
            A
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-primary-900">{brandName}</div>
            <div className="hidden text-[10px] text-neutral-500 sm:block">{tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                  ? "bg-primary-50 text-primary-900"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/book/"
            variant="secondary"
            className="hidden sm:inline-flex"
            onClick={() => trackEvent("nav_book_click", { page: pathname })}
          >
            Book Consultation
          </Button>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-primary-900 hover:bg-neutral-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/book/" variant="secondary" className="mt-2" onClick={() => setOpen(false)}>
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
