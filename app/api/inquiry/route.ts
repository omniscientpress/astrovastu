import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/db";
import { getSite } from "@/lib/content";

export const runtime = "nodejs";

const inquirySchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(8).max(20),
  email: z.string().email().optional().or(z.literal("")),
  service: z.enum(["KP", "VASTU", "NUMEROLOGY", "COMBO"]).optional(),
  message: z.string().min(5).max(2000),
  sourcePage: z.string().default("contact"),
  consent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data", details: parsed.error.flatten() },
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

    const site = getSite();
    let savedToDb = false;

    try {
      let client = await prisma.client.findUnique({ where: { phone: data.phone } });
      if (!client) {
        client = await prisma.client.create({
          data: {
            name: data.name,
            phone: data.phone,
            email: data.email || null,
            consent: true,
          },
        });
      }

      await prisma.inquiry.create({
        data: {
          clientId: client.id,
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          sourcePage: data.sourcePage,
          service: data.service,
          message: data.message,
        },
      });
      savedToDb = true;
    } catch {
      // DB may not be configured yet — continue with email/WhatsApp path
      savedToDb = false;
    }

    let emailed = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Divine Jyothi <onboarding@resend.dev>",
          to: site.email,
          subject: `New inquiry from ${data.name}`,
          text: [
            `Name: ${data.name}`,
            `Phone: ${data.phone}`,
            `Email: ${data.email || "—"}`,
            `Service: ${data.service || "—"}`,
            `Source: ${data.sourcePage}`,
            "",
            data.message,
          ].join("\n"),
        });
        emailed = true;
      } catch {
        emailed = false;
      }
    }

    return NextResponse.json({
      ok: true,
      savedToDb,
      emailed,
      message: "Inquiry received. We'll reply on WhatsApp shortly.",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
