// GET ?t=<token> → verifies the signed token and adds the contact to the
// Resend audience, then redirects to /subscribed.
// Env: RESEND_API_KEY, RESEND_AUDIENCE_ID, NEWSLETTER_SECRET
import { createHmac, timingSafeEqual } from "node:crypto";

const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export default async function handler(req: any, res: any) {
  const { RESEND_API_KEY, RESEND_AUDIENCE_ID, NEWSLETTER_SECRET } = process.env;
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID || !NEWSLETTER_SECRET) {
    return res.status(503).send("newsletter not configured");
  }
  const token = String(req.query?.t || "");
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return res.status(400).send("bad token");

  let payload: string;
  try {
    payload = Buffer.from(b64, "base64url").toString();
  } catch {
    return res.status(400).send("bad token");
  }
  const expected = createHmac("sha256", NEWSLETTER_SECRET).update(payload).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return res.status(400).send("bad token");
  }
  const [email, ts] = payload.split("|");
  if (!email || Date.now() - Number(ts) > MAX_AGE_MS) {
    return res.status(400).send("link expired — subscribe again");
  }

  const r = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    },
  );
  if (!r.ok && r.status !== 409) {
    return res.status(502).send("could not complete subscription — try again");
  }
  res.setHeader("Location", "/subscribed");
  return res.status(302).end();
}
