import { NextResponse } from "next/server";

/**
 * Receives an inquiry from the contact section, normalizes it into a flat,
 * sheet-ready record (one record = one row), and forwards it to the Google
 * Drive sink.
 *
 * This mirrors the straingebs.com intake (`sai-www/app/api/inquiry/route.ts`),
 * which is verified working end to end — same shape, same honeypot, same
 * fail-loud-but-don't-lose-the-lead behaviour. It is a SEPARATE sink on
 * purpose: a Palanae inquiry is a different business, with different columns
 * and a different follow-up, and it has no business writing into the
 * consulting pipeline's sheet.
 *
 * Sink wiring (one env var, no secrets in the repo):
 *   PALANAE_INQUIRY_WEBHOOK_URL = the deployed Google Apps Script web-app URL
 *   that appends each record as a row in a Google Sheet in Hunter's Drive.
 *
 * ⚠ NOT YET WIRED as of 2026-08-20. Until the env var is set, submissions are
 * accepted and logged — so the form works end to end in dev and preview — but
 * are not persisted anywhere durable. Set it before the domain goes live, or
 * the first real lead exists only in a Vercel log line.
 */

export const runtime = "nodejs";

// The exact column order written to the sink. Keep in sync with the Apps
// Script header row.
const FIELDS = [
  "submittedAt",
  "name",
  "email",
  "company",
  "role",
  "employees",
  "message",
  "source",
] as const;

type InquiryField = (typeof FIELDS)[number];
type Inquiry = Record<InquiryField, string>;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : v == null ? "" : String(v);
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);

  if (!name) return NextResponse.json({ error: "Please tell us your name." }, { status: 422 });
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!message) {
    return NextResponse.json(
      { error: "Please tell us a little about your business." },
      { status: 422 },
    );
  }

  // Honeypot: a real person never fills a field they cannot see. Accept
  // silently so the bot has nothing to learn from the response.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const record: Inquiry = {
    submittedAt: new Date().toISOString(),
    name,
    email,
    company: str(body.company),
    role: str(body.role),
    employees: str(body.employees),
    message,
    source: str(body.source) || "palanae.com",
  };

  const webhook = process.env.PALANAE_INQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: FIELDS, record }),
      });
      if (!res.ok) throw new Error(`sink responded ${res.status}`);
    } catch (err) {
      // Don't lose the lead: log the full record so it is recoverable from
      // server logs even if the sink is momentarily down.
      console.error("[palanae-inquiry] sink failed:", err, JSON.stringify(record));
      return NextResponse.json(
        { error: "We couldn't save your message just now. Please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.log("[palanae-inquiry] (no sink configured yet):", JSON.stringify(record));
  }

  return NextResponse.json({ ok: true });
}
