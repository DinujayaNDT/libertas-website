/**
 * Shared validation for contact, demo, and pricing-quote submissions.
 * Used on the client (instant feedback) and on the server (source of truth).
 */

export type SubmissionType = "Contact" | "Demo Request" | "Pricing Quote";

export type ContactPayload = {
  type: SubmissionType;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string; // for Contact / Pricing Quote
  preferredDemo: string; // for Demo Request
  companySize: string; // for Demo Request
  message: string;
  meta: string; // optional serialised context (e.g. calculator estimate)
  // Honeypot, real users never fill this. Bots often do.
  website?: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(data: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};
  const type = data.type ?? "Contact";

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  if (type === "Demo Request") {
    if (!(data.preferredDemo ?? "").trim())
      errors.preferredDemo = "Please choose a demo.";
  } else {
    if (!(data.service ?? "").trim())
      errors.service = "Please choose a service.";
  }

  // Message required for Contact; optional (but capped) for demo/quote.
  if (type === "Contact") {
    if (message.length < 10)
      errors.message = "Please add a little more detail (10+ characters).";
  }
  if (message.length > 4000)
    errors.message = "That message is a bit long, please shorten it.";

  const linkCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (linkCount >= 4)
    errors.message = "Message looks like spam. Please remove extra links.";

  return errors;
}

/** True when a submission trips the honeypot (treat as a silent bot). */
export function isBot(data: Partial<ContactPayload>): boolean {
  return Boolean((data.website ?? "").trim());
}
