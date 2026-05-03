import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// TODO: configure email provider (Resend/SendGrid). See README for instructions.
// Required env vars (when configured):
//   ENQUIRY_PROVIDER=resend|sendgrid
//   RESEND_API_KEY=...
//   ENQUIRY_TO=jon@butterflybuilt.com.au
//   ENQUIRY_FROM="Butterfly Built <noreply@butterflybuilt.com.au>"

export async function POST(req: Request) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, email } = body;
  if (!name || !phone || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const text = [
    `New enquiry — ${siteConfig.name}`,
    "",
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Email: ${body.email}`,
    `Suburb: ${body.suburb || "-"}`,
    `Service: ${body.service || "-"}`,
    `Preferred contact: ${body.contactMethod || "-"}`,
    "",
    "Details:",
    body.details || "-",
  ].join("\n");

  const provider = process.env.ENQUIRY_PROVIDER;
  const to = process.env.ENQUIRY_TO || siteConfig.email;
  const from = process.env.ENQUIRY_FROM || `Butterfly Built <noreply@butterflybuilt.com.au>`;

  try {
    if (provider === "resend" && process.env.RESEND_API_KEY) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: `Website enquiry — ${body.name}`,
          text,
          reply_to: body.email,
        }),
      });
      if (!r.ok) throw new Error(await r.text());
    } else if (provider === "sendgrid" && process.env.SENDGRID_API_KEY) {
      const r = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from.replace(/.*<|>.*/g, "") || from, name: "Butterfly Built" },
          reply_to: { email: body.email, name: body.name },
          subject: `Website enquiry — ${body.name}`,
          content: [{ type: "text/plain", value: text }],
        }),
      });
      if (!r.ok) throw new Error(await r.text());
    } else {
      // No provider configured — log to server console so the message isn't lost during setup.
      console.log("[enquiry] (no provider configured)\n" + text);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] send failed:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
