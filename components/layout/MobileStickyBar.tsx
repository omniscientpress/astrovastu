"use client";

import { trackEvent } from "@/lib/analytics";
import { IndianRupee, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

type MobileStickyBarProps = {
  whatsappHref: string;
  phoneHref: string;
};

export function MobileStickyBar({ whatsappHref, phoneHref }: MobileStickyBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-1 px-2 py-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { page: "sticky_bar", placement: "mobile_sticky" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-[#25D366] px-2 py-2 text-white"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href={phoneHref}
          onClick={() => trackEvent("call_click", { page: "sticky_bar", placement: "mobile_sticky" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-primary-900 px-2 py-2 text-white"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <Link
          href="/pricing/"
          onClick={() => trackEvent("pricing_view", { page: "sticky_bar", placement: "mobile_sticky" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-accent-500 px-2 py-2 text-primary-950"
        >
          <IndianRupee className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Pricing</span>
        </Link>
      </div>
    </div>
  );
}
