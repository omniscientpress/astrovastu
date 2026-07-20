import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

async function requireAdmin() {
  const jar = await cookies();
  return jar.get("astrovastu_admin")?.value === "1";
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [clients, bookings, inquiries] = await Promise.all([
      prisma.client.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
      prisma.booking.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
        include: { client: true },
      }),
      prisma.inquiry.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
    ]);

    return NextResponse.json({
      ok: true,
      dbConnected: true,
      counts: {
        clients: clients.length,
        bookings: bookings.length,
        inquiries: inquiries.length,
      },
      clients,
      bookings,
      inquiries,
    });
  } catch {
    return NextResponse.json({
      ok: true,
      dbConnected: false,
      counts: { clients: 0, bookings: 0, inquiries: 0 },
      clients: [],
      bookings: [],
      inquiries: [],
      message: "Postgres is not connected. Set DATABASE_URL and run migrations.",
    });
  }
}

export async function PATCH(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const id = typeof body.id === "string" ? body.id : "";
  const status = body.status;

  if (!id || !["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"].includes(status)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({ ok: true, booking });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not update booking" }, { status: 500 });
  }
}
