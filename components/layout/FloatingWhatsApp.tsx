"use client";

import { trackEvent } from "@/lib/analytics";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  href: string;
};

export function FloatingWhatsApp({ href }: FloatingWhatsAppProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { page: "floating", placement: "desktop_float" })}
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 md:inline-flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      Chat with us
    </a>
  );
}
