"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { CurrencySelector } from "./CurrencySelector";
import { EstimateSummary } from "./EstimateSummary";
import { ContactForm } from "@/components/ContactForm";
import {
  calculateEstimate,
  money,
  implementationPackages,
  supportPackages,
  optionalServices,
  hostingMonthly,
  type CurrencyCode,
  type PlanType,
  type BillingCycle,
  type HostingType,
  type ImplementationPackage,
  type SupportPackage,
  type OptionalService,
  pricingDisclaimer,
} from "@/lib/pricing";
import { cn } from "@/lib/cn";

const planOptions: PlanType[] = ["Standard", "Custom"];
const billingOptions: BillingCycle[] = ["Monthly", "Yearly"];
const hostingOptions = Object.keys(hostingMonthly) as HostingType[];
const implementationOptions = Object.keys(
  implementationPackages,
) as ImplementationPackage[];
const supportOptions = Object.keys(supportPackages) as SupportPackage[];
const optionKeys = Object.keys(optionalServices) as OptionalService[];

export function PricingCalculator() {
  const [currency, setCurrency] = useState<CurrencyCode>("GBP");
  const [users, setUsers] = useState(10);
  const [plan, setPlan] = useState<PlanType>("Standard");
  const [billing, setBilling] = useState<BillingCycle>("Yearly");
  const [hosting, setHosting] = useState<HostingType>("Odoo.sh");
  const [implementation, setImplementation] =
    useState<ImplementationPackage>("Growth");
  const [support, setSupport] = useState<SupportPackage>("Essential");
  const [options, setOptions] = useState<OptionalService[]>(["Data migration"]);

  const estimate = useMemo(
    () =>
      calculateEstimate({
        users,
        plan,
        billing,
        hosting,
        implementation,
        support,
        options,
      }),
    [users, plan, billing, hosting, implementation, support, options],
  );

  const toggleOption = (opt: OptionalService) =>
    setOptions((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt],
    );

  // Serialised context sent with a pricing-quote enquiry.
  const meta = [
    `Currency: ${currency}`,
    `Users: ${users}`,
    `Plan: ${plan}`,
    `Billing: ${billing}`,
    `Hosting: ${hosting}`,
    `Implementation: ${implementation}`,
    `Support: ${support}`,
    `Options: ${options.join(", ") || "none"}`,
    `First-year estimate: ${money(estimate.firstYearTotal, currency)}`,
  ].join(" | ");

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* -------- Inputs -------- */}
        <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-lg font-bold text-navy-800">
              Build your estimate
            </h3>
            <CurrencySelector value={currency} onChange={setCurrency} />
          </div>

          {/* Users */}
          <div className="mt-6">
            <FieldLabel>Number of users</FieldLabel>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-navy-100 bg-mist/40">
                <button
                  type="button"
                  aria-label="Decrease users"
                  onClick={() => setUsers((u) => Math.max(1, u - 1))}
                  className="grid h-10 w-10 place-items-center rounded-full text-navy-700 hover:bg-navy-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-display text-lg font-bold text-navy-800">
                  {users}
                </span>
                <button
                  type="button"
                  aria-label="Increase users"
                  onClick={() => setUsers((u) => Math.min(500, u + 1))}
                  className="grid h-10 w-10 place-items-center rounded-full text-navy-700 hover:bg-navy-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <input
                type="range"
                min={1}
                max={200}
                value={Math.min(users, 200)}
                onChange={(e) => setUsers(Number(e.target.value))}
                aria-label="Number of users"
                className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-navy-100 accent-sky-500"
              />
            </div>
          </div>

          {/* Plan + Billing */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <FieldLabel>Plan type</FieldLabel>
              <Segmented
                options={planOptions}
                value={plan}
                onChange={setPlan}
              />
            </div>
            <div>
              <FieldLabel>Billing</FieldLabel>
              <Segmented
                options={billingOptions}
                value={billing}
                onChange={setBilling}
              />
            </div>
          </div>

          {/* Hosting */}
          <div className="mt-6">
            <FieldLabel>Hosting</FieldLabel>
            <Segmented
              options={hostingOptions}
              value={hosting}
              onChange={setHosting}
            />
          </div>

          {/* Implementation + Support */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <FieldLabel>Implementation package</FieldLabel>
              <SelectBox
                value={implementation}
                onChange={(v) => setImplementation(v as ImplementationPackage)}
                options={implementationOptions}
              />
            </div>
            <div>
              <FieldLabel>Support package</FieldLabel>
              <SelectBox
                value={support}
                onChange={(v) => setSupport(v as SupportPackage)}
                options={supportOptions}
              />
            </div>
          </div>

          {/* Optional services */}
          <div className="mt-6">
            <FieldLabel>Optional services</FieldLabel>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {optionKeys.map((opt) => {
                const active = options.includes(opt);
                return (
                  <label
                    key={opt}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition-colors",
                      active
                        ? "border-sky-300 bg-sky-50/60 text-navy-800"
                        : "border-navy-100 bg-mist/30 text-navy-600 hover:border-navy-200",
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleOption(opt)}
                      className="h-4 w-4 rounded accent-sky-500"
                    />
                    <span className="flex-1">{opt}</span>
                    <span className="text-xs text-navy-400">
                      {money(optionalServices[opt], currency)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* -------- Estimate -------- */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <EstimateSummary estimate={estimate} currency={currency} />
        </div>
      </div>

      <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-900">
        {pricingDisclaimer}
      </p>

      {/* Quote form */}
      <div id="quote" className="mt-14 scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-display text-2xl font-bold text-navy-800">
            Request an accurate quote
          </h3>
          <p className="mt-3 text-sm text-navy-600/90">
            Send us your details and we will turn this estimate into an itemised,
            accurate quote based on your real requirements. Your current
            selections are included automatically.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <ContactForm
            type="Pricing Quote"
            meta={meta}
            submitLabel="Request quote"
          />
        </div>
      </div>
    </div>
  );
}

/* ---- small controls ---- */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-navy-500">
      {children}
    </span>
  );
}

function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex w-full rounded-xl border border-navy-100 bg-mist/40 p-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "flex-1 rounded-lg px-2 py-2 text-sm font-semibold transition-colors",
            value === opt
              ? "bg-navy-700 text-white shadow-soft"
              : "text-navy-600 hover:text-navy-800",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function SelectBox({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-800 transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
