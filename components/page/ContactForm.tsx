"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { serviceOptions } from "@/lib/services";
import { companySizes, demoOptions } from "@/lib/demos";
import { validateContact, type FieldErrors } from "@/lib/validation";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  companySize: string;
  message: string;
  website: string;
  submissionType: string;
};

const baseForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  companySize: "",
  message: "",
  website: "",
  submissionType: "Contact",
};

export function ContactForm({
  type = "Contact",
  demo = false,
  defaultService = "",
}: {
  type?: "Contact" | "Demo Request" | "Pricing Quote";
  demo?: boolean;
  defaultService?: string;
}) {
  const [form, setForm] = useState<FormState>({ ...baseForm, submissionType: type, service: defaultService });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
     setErrors((current) => (current[key as keyof typeof current] ? { ...current, [key]: undefined } : current));
    };

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validateContact(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => null);

    const payload = await response?.json().catch(() => ({}));
    if (!response || !response.ok) {
      if (payload?.fields) setErrors(payload.fields as FieldErrors);
      setErrorMsg(payload?.error || "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("sent");
    setForm({ ...baseForm, submissionType: type, service: defaultService });
  }
const options = demo ? demoOptions : serviceOptions;
const busy = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input id="name" value={form.name} onChange={update("name")} autoComplete="name" className={inputClass(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Company" htmlFor="company">
          <input id="company" value={form.company} onChange={update("company")} autoComplete="organization" className={inputClass()} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input id="email" type="email" value={form.email} onChange={update("email")} autoComplete="email" className={inputClass(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" className={inputClass()} />
        </Field>
        <Field label={demo ? "Preferred demo" : "Service interested in"} htmlFor="service" error={errors.service}>
          <select id="service" value={form.service} onChange={update("service")} className={inputClass(errors.service)} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}>
            <option value="">Select an option</option>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        {demo && (
          <Field label="Company size" htmlFor="companySize">
            <select id="companySize" value={form.companySize} onChange={update("companySize")} className={inputClass()}>
              <option value="">Select company size</option>
              {companySizes.map((size) => <option key={size}>{size}</option>)}
            </select>
          </Field>
        )}
      </div>
      <div className="mt-5">
        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea id="message" rows={5} value={form.message} onChange={update("message")} className={cn(inputClass(errors.message), "resize-none")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        </Field>
      </div>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${type}-website`}>Website</label>
        <input id={`${type}-website`} tabIndex={-1} value={form.website} onChange={update("website")} autoComplete="off" />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70">
          {busy ? "Sending" : type === "Demo Request" ? "Book a Guided Demo" : "Send Message"}
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
        <div role="status" aria-live="polite" className="min-h-5 text-sm">
          {status === "sent" && <span className="inline-flex items-center gap-1.5 text-emerald-600"><CheckCircle2 className="h-4 w-4" /> Message sent.</span>}
          {status === "error" && <span className="inline-flex items-center gap-1.5 text-red-600"><AlertCircle className="h-4 w-4" /> {errorMsg}</span>}
        </div>
      </div>
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-mist/50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors duration-200 focus:bg-white focus:outline-none focus:ring-2",
    error ? "border-red-300 focus:border-red-400 focus:ring-red-400/25" : "border-navy-100 focus:border-sky-400 focus:ring-sky-400/30",
  );
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold text-navy-600">{label}</span>
      {children}
      {error && <span id={`${htmlFor}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3.5 w-3.5" /> {error}</span>}
    </label>
  );
}

