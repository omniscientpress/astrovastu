import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSite } from "@/lib/content";
import { buildWaLink, getPhoneTelHref } from "@/lib/whatsapp";
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AstroVastu in Hyderabad via WhatsApp, phone, or inquiry form.",
};

export default function ContactPage() {
  const site = getSite();
  const wa = buildWaLink({ page: "contact" });

  return (
    <Section>
      <Badge>Contact</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Get in touch</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
        WhatsApp is the fastest way to reach {site.consultantName}. Use the form if you prefer
        email follow-up — we&apos;ll still usually reply on WhatsApp.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card className="space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-accent-600" />
            <div>
              <div className="font-semibold text-primary-900">Phone / WhatsApp</div>
              <a href={getPhoneTelHref()} className="text-sm text-neutral-600 hover:text-primary-900">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-accent-600" />
            <div>
              <div className="font-semibold text-primary-900">Email</div>
              <div className="text-sm text-neutral-600">{site.email}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-accent-600" />
            <div>
              <div className="font-semibold text-primary-900">Hours</div>
              <div className="text-sm text-neutral-600">{site.hours}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-accent-600" />
            <div>
              <div className="font-semibold text-primary-900">Location</div>
              <div className="text-sm text-neutral-600">{site.address}</div>
              <div className="text-sm text-neutral-500">{site.serviceArea}</div>
            </div>
          </div>
          <Button href={wa} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </Button>
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-bold text-primary-900">Send an inquiry</h2>
          <ContactForm whatsappHref={wa} />
        </Card>
      </div>
    </Section>
  );
}
