import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { buildWaLink } from "@/lib/whatsapp";

export const runtime = "nodejs";

const bookingSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(8).max(20),
  email: z.string().email().optional().or(z.literal("")),
  service: z.enum(["KP", "VASTU", "NUMEROLOGY", "COMBO"]),
  packageId: z.string().optional(),
  slotDate: z.string().min(8),
  slotTime: z.string().min(3),
  dateOfBirth: z.string().optional(),
  birthTime: z.string().optional(),
  birthPlace: z.string().optional(),
  notes: z.string().max(2000).optional(),
  consent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid booking data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;
    if (!data.consent) {
      return NextResponse.json(
        { ok: false, error: "Consent is required to store your details." },
        { status: 400 },
      );
    }

    const slotDate = new Date(`${data.slotDate}T00:00:00.000Z`);
    if (Number.isNaN(slotDate.getTime())) {
      return NextResponse.json({ ok: false, error: "Invalid date" }, { status: 400 });
    }

    let bookingId: string | null = null;
    let savedToDb = false;

    try {
      const client = await prisma.client.upsert({
        where: { phone: data.phone },
        update: {
          name: data.name,
          email: data.email || undefined,
          dateOfBirth: data.dateOfBirth || undefined,
          birthTime: data.birthTime || undefined,
          birthPlace: data.birthPlace || undefined,
          consent: true,
        },
        create: {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          dateOfBirth: data.dateOfBirth || null,
          birthTime: data.birthTime || null,
          birthPlace: data.birthPlace || null,
          consent: true,
        },
      });

      const booking = await prisma.booking.create({
        data: {
          clientId: client.id,
          service: data.service,
          packageId: data.packageId || null,
          slotDate,
          slotTime: data.slotTime,
          notes: data.notes || null,
          status: "PENDING",
        },
      });

      bookingId = booking.id;
      savedToDb = true;
    } catch {
      savedToDb = false;
    }

    const ref = bookingId ? bookingId.slice(-8).toUpperCase() : `TMP${Date.now().toString().slice(-6)}`;
    const waHref = buildWaLink({
      page: "book",
      bookingRef: ref,
      extra: `Service: ${data.service}. Preferred: ${data.slotDate} ${data.slotTime}. Name: ${data.name}. Phone: ${data.phone}.`,
    });

    return NextResponse.json({
      ok: true,
      savedToDb,
      bookingRef: ref,
      bookingId,
      waHref,
      message: savedToDb
        ? "Booking saved. Confirm on WhatsApp to finalize your slot."
        : "Booking request noted. Database is not connected yet — please confirm on WhatsApp so we don't miss it.",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
