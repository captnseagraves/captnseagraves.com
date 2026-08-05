// POST { email } → sends a double-opt-in confirmation email via Resend.
// Stateless: the confirm link carries an HMAC-signed token, no database.
// Env: RESEND_API_KEY, NEWSLETTER_SECRET, NEWSLETTER_FROM, SITE_URL (optional)
import { createHmac } from "node:crypto";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function b64url(s: string): string {
  return Buffer.from(s).toString("base64url");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method not allowed" });
  }
  const { RESEND_API_KEY, NEWSLETTER_SECRET, NEWSLETTER_FROM } = process.env;
  if (!RESEND_API_KEY || !NEWSLETTER_SECRET || !NEWSLETTER_FROM) {
    return res.status(503).json({ error: "newsletter not configured" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const email = String(body.email || "").trim().toLowerCase();
  // honeypot: bots fill "website"; pretend success
  if (body.website) return res.status(200).json({ ok: true });
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: "invalid email" });
  }

  const payload = `${email}|${Date.now()}`;
  const sig = createHmac("sha256", NEWSLETTER_SECRET).update(payload).digest("hex");
  const token = `${b64url(payload)}.${sig}`;
  const site = process.env.SITE_URL || "https://www.captnseagraves.com";
  const confirmUrl = `${site}/api/confirm?t=${encodeURIComponent(token)}`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NEWSLETTER_FROM,
      to: [email],
      subject: "Confirm your subscription",
      html:
        `<p>One click to confirm you'd like new essays from ` +
        `<a href="${site}/writing">captnseagraves.com</a>:</p>` +
        `<p><a href="${confirmUrl}" style="display:inline-block;padding:10px 18px;` +
        `background:#0a0f1a;color:#ffffff;border-radius:8px;text-decoration:none">` +
        `Confirm subscription</a></p>` +
        `<p style="color:#666;font-size:13px">If you didn't request this, ignore this email ` +
        `and nothing will happen. The link expires in 7 days.</p>`,
    }),
  });
  if (!r.ok) {
    return res.status(502).json({ error: "could not send confirmation" });
  }
  return res.status(200).json({ ok: true });
}
