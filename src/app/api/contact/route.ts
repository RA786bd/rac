import { NextResponse } from "next/server";

// Receives contact and service-booking form submissions.
// By default it logs the submission on the server. Set CONTACT_WEBHOOK_URL in .env.local
// to forward each submission as JSON (Zapier, Make, Slack, Formspree, your CRM, etc.).
// To send email instead, plug in Resend / Nodemailer here.

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions without processing
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone number are required." }, { status: 400 });
  }
  if (!/^[0-9+\-\s]{10,16}$/.test(phone)) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  const submission = {
    type: body.type === "booking" ? "Service booking" : "Contact enquiry",
    name,
    phone,
    email: body.email || "",
    company: body.company || "",
    service: body.service || "",
    address: body.address || "",
    date: body.date || "",
    equipment: body.equipment || "",
    units: body.units || "",
    message: (body.message || "").slice(0, 5000),
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      console.error("[contact] webhook failed", err);
      return NextResponse.json({ error: "Could not send right now. Please call us instead." }, { status: 502 });
    }
  } else {
    console.log("[contact] new submission", submission);
  }

  return NextResponse.json({ ok: true });
}
