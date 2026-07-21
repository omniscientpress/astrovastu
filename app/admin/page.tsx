import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AdminDashboard } from "@/components/forms/AdminDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Section>
      <Badge tone="primary">Private</Badge>
      <h1 className="mt-3 text-3xl font-bold text-primary-900">Admin</h1>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">
        Password-protected ops view for clients, bookings, and inquiries. Set{" "}
        <code>ADMIN_PASSWORD</code> and <code>DATABASE_URL</code> in your environment.
      </p>
      <div className="mt-8">
        <AdminDashboard />
      </div>
    </Section>
  );
}
