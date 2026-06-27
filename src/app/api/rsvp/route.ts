import { NextResponse } from "next/server";

interface RsvpPayload {
  name: string;
  email: string;
  attending: "yes" | "no";
  guests: number;
  notes: string;
}

function parsePayload(body: unknown): RsvpPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  if (!name) return null;
  const attending =
    b.attending === "yes" || b.attending === "no" ? b.attending : "yes";
  return {
    name,
    email: typeof b.email === "string" ? b.email.trim() : "",
    attending,
    guests: Number.isFinite(Number(b.guests)) ? Number(b.guests) : 1,
    notes: typeof b.notes === "string" ? b.notes.trim() : "",
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Name is required" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.RSVP_WEBHOOK_URL;
  const submittedAt = new Date().toISOString();

  if (!webhookUrl) {
    console.info("[rsvp] no RSVP_WEBHOOK_URL configured; logging only", {
      submittedAt,
      ...payload,
    });
    return NextResponse.json({ ok: true, persisted: false });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ submittedAt, ...payload }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("[rsvp] upstream non-OK", upstream.status, text);
      return NextResponse.json(
        { ok: false, error: "Upstream rejected the response" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[rsvp] upstream error", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach RSVP store" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, persisted: true });
}
