import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Section narrow>
      <Badge tone="primary">Phase 1 stub · not public</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Admin dashboard</h1>
      <p className="mt-3 text-neutral-600">
        Password-protected ops view for clients, inquiries, and bookings will be built in Phase 2
        once Prisma is connected to a live Postgres instance.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {["Clients", "Bookings", "Inquiries"].map((label) => (
          <Card key={label}>
            <div className="text-sm text-neutral-500">{label}</div>
            <div className="mt-1 text-2xl font-bold text-primary-900">—</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
