"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { serviceOptions } from "@/lib/services";
import { demoOptions, companySizeOptions } from "@/lib/demos";
import {
  validateContact,
  type FieldErrors,
  type SubmissionType,
} from "@/lib/validation";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  preferredDemo: string;
  companySize: string;
  message: string;
  website: string; // honeypot
};

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  preferredDemo: "",
  companySize: "",
  message: "",
  website: "",
};

export function ContactForm({
  type = "Contact",
  meta,
  submitLabel = "Send message",
}: {
  type?: SubmissionType;
  meta?: string;
  submitLabel?: string;
}) {
  const isDemo = type === "Demo Request";
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
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form, type, meta: meta ?? "" };

    const clientErrors = validateContact(payload);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fields) setErrors(data.fields as FieldErrors);
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm(empty);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setErrorMsg(
        "We could not reach the server. Please try again or email us directly.",
      );
      setStatus("error");
    }
  };

  const busy = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            className={inputClass(errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Company" htmlFor="company" hint="optional">
          <input
            id="company"
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
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jane@acme.com"
            className={inputClass(errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" hint="optional">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+44 20 1234 5678"
            className={inputClass()}
          />
        </Field>
      </div>

      {isDemo ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field
            label="Preferred demo"
            htmlFor="preferredDemo"
            error={errors.preferredDemo}
          >
            <select
              id="preferredDemo"
              value={form.preferredDemo}
              onChange={update("preferredDemo")}
              className={cn(inputClass(errors.preferredDemo), "appearance-none bg-white pr-10")}
              aria-invalid={!!errors.preferredDemo}
            >
              <option value="" disabled>
                Select a demo...
              </option>
              {demoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Company size" htmlFor="companySize" hint="optional">
            <select
              id="companySize"
              value={form.companySize}
              onChange={update("companySize")}
              className={cn(inputClass(), "appearance-none bg-white pr-10")}
            >
              <option value="" disabled>
                Select size...
              </option>
              {companySizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} employees
                </option>
              ))}
            </select>
          </Field>
        </div>
      ) : (
        <div className="mt-5">
          <Field
            label="Service interested in"
            htmlFor="service"
            error={errors.service}
          >
            <select
              id="service"
              value={form.service}
              onChange={update("service")}
              className={cn(inputClass(errors.service), "appearance-none bg-white pr-10")}
              aria-invalid={!!errors.service}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>
        </div>
      )}

      <div className="mt-5">
        <Field
          label="Message"
          htmlFor="message"
          hint={isDemo ? "optional" : undefined}
          error={errors.message}
        >
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us a little about your systems and goals..."
            className={cn(inputClass(errors.message), "resize-none")}
            aria-invalid={!!errors.message}
          />
        </Field>
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
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
          {(status === "idle" || status === "error") && (
            <>
              {submitLabel}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
          {status === "sending" && (
            <>
              Sending...
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

        <AnimatePresence mode="wait">
          {status === "sent" && (
            <motion.span
              key="ok"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-emerald-600"
            >
              Thanks, we will be in touch shortly.
            </motion.span>
          )}
          {status === "error" && (
            <motion.span
              key="err"
              role="alert"
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
    </form>
  );
}

/* ---- helpers ---- */
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
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-navy-600">
        {label}
        {hint && <span className="font-normal text-navy-300">({hint})</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </span>
      )}
    </label>
  );
}
