"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

type AdminData = {
  dbConnected: boolean;
  message?: string;
  counts: { clients: number; bookings: number; inquiries: number };
  bookings: Array<{
    id: string;
    service: string;
    slotDate: string;
    slotTime: string;
    status: string;
    client: { name: string; phone: string };
  }>;
  inquiries: Array<{
    id: string;
    name: string;
    phone: string;
    message: string;
    status: string;
    createdAt: string;
  }>;
  clients: Array<{
    id: string;
    name: string;
    phone: string;
    email: string | null;
    createdAt: string;
  }>;
};

export function AdminDashboard() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    const res = await fetch("/api/admin/data/");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/admin/auth/");
        const json = await res.json();
        if (cancelled) return;
        setAuthed(Boolean(json.authed));
        if (json.authed) {
          const dataRes = await fetch("/api/admin/data/");
          if (dataRes.status === 401) {
            setAuthed(false);
            return;
          }
          setData(await dataRes.json());
        }
      } catch {
        if (!cancelled) setAuthed(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/auth/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Login failed");
        return;
      }
      setAuthed(true);
      await loadData();
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/auth/", { method: "DELETE" });
    setAuthed(false);
    setData(null);
  }

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/data/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    await loadData();
  }

  if (authed === null) {
    return <p className="text-sm text-neutral-500">Checking session…</p>;
  }

  if (!authed) {
    return (
      <form onSubmit={login} className="mx-auto max-w-sm space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-primary-900">Admin login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
        {error ? <p className="text-sm text-danger-500">{error}</p> : null}
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-primary-900">Operations dashboard</h2>
          <p className="text-sm text-neutral-500">
            {data?.dbConnected
              ? "Connected to Postgres"
              : data?.message || "Database not connected"}
          </p>
        </div>
        <Button type="button" variant="ghost" onClick={logout}>
          Log out
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Clients", data?.counts.clients ?? 0],
          ["Bookings", data?.counts.bookings ?? 0],
          ["Inquiries", data?.counts.inquiries ?? 0],
        ].map(([label, value]) => (
          <div key={label as string} className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm text-neutral-500">{label}</div>
            <div className="mt-1 text-3xl font-bold text-primary-900">{value}</div>
          </div>
        ))}
      </div>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-primary-900">Recent bookings</h3>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-neutral-50 text-xs uppercase text-neutral-500">
              <tr>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Slot</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {(data?.bookings || []).map((b) => (
                <tr key={b.id} className="border-t border-neutral-100">
                  <td className="px-4 py-3">
                    <div className="font-medium">{b.client.name}</div>
                    <div className="text-xs text-neutral-500">{b.client.phone}</div>
                  </td>
                  <td className="px-4 py-3">{b.service}</td>
                  <td className="px-4 py-3">
                    {String(b.slotDate).slice(0, 10)} · {b.slotTime}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={b.status}
                      onChange={(e) => updateStatus(b.id, e.target.value)}
                      className="rounded-lg border border-neutral-200 px-2 py-1 text-xs"
                    >
                      {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {!data?.bookings?.length ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-neutral-500">
                    No bookings yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-primary-900">Recent inquiries</h3>
        <div className="space-y-3">
          {(data?.inquiries || []).map((i) => (
            <div key={i.id} className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
              <div className="font-semibold text-primary-900">
                {i.name} · {i.phone}
              </div>
              <p className="mt-1 text-neutral-600">{i.message}</p>
            </div>
          ))}
          {!data?.inquiries?.length ? (
            <p className="text-sm text-neutral-500">No inquiries yet.</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
