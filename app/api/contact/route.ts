import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContact,
  isBot,
  type ContactPayload,
} from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@libertas.com";
// The "from" address must be on a domain you have verified in Resend.
const FROM = process.env.CONTACT_FROM || "Libertas <noreply@libertas.com>";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let data: Partial<ContactPayload>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently accept honeypot hits without sending.
  if (isBot(data)) return NextResponse.json({ ok: true });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", fields: errors },
      { status: 400 },
    );
  }

  const type = (data.type ?? "Contact") as ContactPayload["type"];
  const name = (data.name ?? "").trim();
  const company = (data.company ?? "").trim() || "Not provided";
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim() || "Not provided";
  const service = (data.service ?? "").trim();
  const preferredDemo = (data.preferredDemo ?? "").trim();
  const companySize = (data.companySize ?? "").trim();
  const message = (data.message ?? "").trim() || "Not provided";
  const meta = (data.meta ?? "").trim();

  // The "interest" line varies by submission type.
  const interest =
    type === "Demo Request"
      ? preferredDemo
      : service || "Not specified";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, cannot send email.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subjectMap: Record<ContactPayload["type"], string> = {
    Contact: `New Libertas Website Enquiry - ${interest}`,
    "Demo Request": `New Libertas Demo Request - ${interest}`,
    "Pricing Quote": `New Libertas Pricing Quote Request - ${service || "General"}`,
  };

  try {
    await resend.emails.send({
      from: FROM,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subjectMap[type],
      html: adminEmailHtml({
        type,
        name,
        company,
        email,
        phone,
        interest,
        companySize,
        message,
        meta,
        submittedAt,
      }),
    });

    // Auto-confirmation (best effort).
    try {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Thank you for contacting Libertas",
        html: confirmationEmailHtml({ name, type, interest }),
      });
    } catch (confirmErr) {
      console.error("Confirmation email failed:", confirmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }
}

/* ---------------------------------------------------------------- */
const NAVY = "#14315f";
const SKY = "#2e9bdd";
const MIST = "#f1f5fa";

function adminEmailHtml(v: {
  type: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  companySize: string;
  message: string;
  meta: string;
  submittedAt: string;
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
      <td style="padding:10px 16px;color:#5b6b82;font-size:13px;font-weight:600;width:180px;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;color:${NAVY};font-size:14px;vertical-align:top;">${value}</td>
    </tr>`
      : "";

  return `
  <div style="background:${MIST};padding:32px 0;font-family:Inter,Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr><td style="background:${NAVY};padding:24px 28px;border-radius:14px 14px 0 0;">
          <div style="color:#ffffff;font-size:18px;font-weight:800;">Libertas</div>
          <div style="color:#bcd6ef;font-size:13px;margin-top:4px;">${escapeHtml(v.type)}</div>
        </td></tr>
        <tr><td style="background:#ffffff;padding:8px 12px;border:1px solid #e6edf6;border-top:none;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", escapeHtml(v.name))}
            ${row("Company", escapeHtml(v.company))}
            ${row("Email", `<a href="mailto:${escapeHtml(v.email)}" style="color:${SKY};text-decoration:none;">${escapeHtml(v.email)}</a>`)}
            ${row("Phone", escapeHtml(v.phone))}
            ${row("Interested in", `<strong>${escapeHtml(v.interest)}</strong>`)}
            ${row("Company size", escapeHtml(v.companySize))}
            ${row("Message", escapeHtml(v.message).replace(/\n/g, "<br>"))}
            ${row("Selections", escapeHtml(v.meta))}
            ${row("Submitted", escapeHtml(v.submittedAt))}
            ${row("Source", "Libertas website")}
          </table>
        </td></tr>
        <tr><td style="background:#ffffff;padding:18px 24px;border:1px solid #e6edf6;border-top:none;border-radius:0 0 14px 14px;">
          <a href="mailto:${escapeHtml(v.email)}" style="display:inline-block;background:${NAVY};color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:10px 18px;border-radius:999px;">Reply to ${escapeHtml(v.name)}</a>
        </td></tr>
      </table>
    </td></tr></table>
  </div>`;
}

function confirmationEmailHtml(v: {
  name: string;
  type: string;
  interest: string;
}): string {
  const line =
    v.type === "Demo Request"
      ? "We have received your demo request and one of our team members will get back to you shortly to arrange a time."
      : "We have received your enquiry and one of our team members will get back to you shortly.";
  const label = v.type === "Demo Request" ? "Your requested demo" : "Your selected service";

  return `
  <div style="background:${MIST};padding:32px 0;font-family:Inter,Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr><td style="background:${NAVY};padding:26px 28px;border-radius:14px 14px 0 0;">
          <div style="color:#ffffff;font-size:20px;font-weight:800;">Libertas</div>
        </td></tr>
        <tr><td style="background:#ffffff;padding:32px 28px;border:1px solid #e6edf6;border-top:none;border-radius:0 0 14px 14px;color:${NAVY};font-size:15px;line-height:1.7;">
          <p style="margin:0 0 16px;">Hi ${escapeHtml(v.name)},</p>
          <p style="margin:0 0 16px;">Thank you for contacting Libertas.</p>
          <p style="margin:0 0 16px;">${line}</p>
          ${
            v.interest
              ? `<p style="margin:0 0 4px;color:#5b6b82;font-size:13px;font-weight:600;">${label}</p>
                 <p style="margin:0 0 20px;padding:10px 14px;background:${MIST};border-radius:10px;font-weight:600;">${escapeHtml(v.interest)}</p>`
              : ""
          }
          <p style="margin:0;">Best regards,<br><strong>Libertas Team</strong></p>
        </td></tr>
        <tr><td style="padding:16px 8px;text-align:center;color:#8a97ab;font-size:12px;">© 2026 Libertas. All rights reserved.</td></tr>
      </table>
    </td></tr></table>
  </div>`;
}
