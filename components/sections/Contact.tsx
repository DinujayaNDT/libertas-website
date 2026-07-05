"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Layers,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { serviceOptions } from "@/lib/services";
import { validateContact, type FieldErrors } from "@/lib/validation";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string; // honeypot
};

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

const contactCards = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.location },
  {
    icon: Layers,
    label: "Services",
    value: "Odoo Implementation, Support & Integration",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      // Clear a field's error as the user corrects it.
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side check first for instant feedback.
    const clientErrors = validateContact(form);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("idle");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (payload.fields) setErrors(payload.fields as FieldErrors);
        setErrorMsg(payload.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm(empty);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setErrorMsg(
        "We couldn't reach the server. Please try again or email us directly.",
      );
      setStatus("error");
    }
  };

  const busy = status === "sending";

  return (
    <Section id="contact" tone="mist">
      <SectionHeading
        eyebrow="Get in touch"
        title="Tell Us About Your Odoo Project"
        subtitle="Share a few details and we'll come back with practical next steps, with no pressure and no jargon."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* -------- Form -------- */}
        <Reveal as="div">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className={inputClass(errors.name)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>
              <Field label="Company" htmlFor="company" hint="optional">
                <input
                  id="company"
                  name="organization"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Acme Ltd"
                  className={inputClass()}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@acme.com"
                  className={inputClass(errors.email)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
              <Field label="Phone" htmlFor="phone" hint="optional">
                <input
                  id="phone"
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+44 20 1234 5678"
                  className={inputClass()}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field
                label="Service interested in"
                htmlFor="service"
                error={errors.service}
              >
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={update("service")}
                  className={cn(inputClass(errors.service), "appearance-none bg-white pr-10")}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" htmlFor="message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us a little about your systems and goals…"
                  className={cn(inputClass(errors.message), "resize-none")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
              </Field>
            </div>

            {/* Honeypot: visually hidden, ignored by humans */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={update("website")}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <motion.button
                type="submit"
                disabled={busy || status === "sent"}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70",
                  status === "sent"
                    ? "bg-emerald-500"
                    : "bg-navy-700 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift",
                )}
              >
                {status === "idle" || status === "error" ? (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                ) : null}
                {status === "sending" && (
                  <>
                    Sending…
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                )}
                {status === "sent" && (
                  <>
                    Message sent
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                )}
              </motion.button>

              <div className="min-h-5" role="status" aria-live="polite">
                <AnimatePresence mode="wait">
                  {status === "sent" && (
                    <motion.span
                      key="ok"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-emerald-600"
                    >
                    Thanks, we&apos;ll be in touch shortly.
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      key="err"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-sm text-red-600"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errorMsg}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </Reveal>

        {/* -------- Contact cards -------- */}
        <Reveal as="div" delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            {contactCards.map((card) => {
              const inner = (
                <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-navy-700 text-white transition-colors duration-300 group-hover:bg-sky-500">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                      {card.label}
                    </div>
                    <div className="mt-1 font-medium text-navy-800">
                      {card.value}
                    </div>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}

            {/* Assurance panel */}
            <div className="mt-auto rounded-2xl border border-sky-200 bg-sky-50/60 p-6">
              <p className="text-sm leading-relaxed text-navy-700">
                Prefer to talk it through first? Book a free consultation and
                we&apos;ll help you scope the right approach for implementation,
                migration, or integration.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---- small helpers ---- */
function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-mist/50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors duration-200 focus:bg-white focus:outline-none focus:ring-2",
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-400/25"
      : "border-navy-100 focus:border-sky-400 focus:ring-sky-400/30",
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  const errorId = `${htmlFor}-error`;

  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-navy-600">
        {label}
        {hint && <span className="font-normal text-navy-300">({hint})</span>}
      </span>
      {children}
      {error && (
        <span
          id={errorId}
          className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
        >
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </span>
      )}
    </label>
  );
}
