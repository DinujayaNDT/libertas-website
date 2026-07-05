"use client";

import { useMemo, useState } from "react";
import {
  currencies,
  exchangeRates,
  formatCurrency,
  hostingMonthly,
  implementationPackages,
  licenceMonthly,
  optionalServices,
  supportPackages,
  type Billing,
  type Currency,
  type Hosting,
  type ImplementationPackage,
  type OptionalService,
  type PlanType,
  type SupportPackage,
} from "@/lib/pricing";

export function PricingCalculator() {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [users, setUsers] = useState(10);
  const [plan, setPlan] = useState<PlanType>("Standard");
  const [billing, setBilling] = useState<Billing>("Yearly");
  const [hosting, setHosting] = useState<Hosting>("Odoo Online");
  const [implementation, setImplementation] = useState<ImplementationPackage>("Growth");
  const [support, setSupport] = useState<SupportPackage>("Essential");
  const [selected, setSelected] = useState<OptionalService[]>(["Data migration", "Training"]);

  const estimate = useMemo(() => {
    const rate = exchangeRates[currency];
    const annualLicence = users * licenceMonthly[plan] * 12 * (billing === "Yearly" ? 0.9 : 1);
    const hostingAnnual = hostingMonthly[hosting] * 12;
    const implementationTotal = implementationPackages[implementation] + selected.reduce((sum, item) => sum + optionalServices[item], 0);
    const supportAnnual = supportPackages[support] * 12;
    const firstYear = annualLicence + hostingAnnual + implementationTotal + supportAnnual;
    return {
      licence: annualLicence * rate,
      hosting: hostingAnnual * rate,
      implementation: implementationTotal * rate,
      support: supportAnnual * rate,
      firstYear: firstYear * rate,
      monthly: (firstYear / 12) * rate,
    };
  }, [billing, currency, hosting, implementation, plan, selected, support, users]);

  const toggleService = (service: OptionalService) => {
    setSelected((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="label">Currency</span>
            <select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)} className="field">
           {currencies.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="label">Number of users</span>
            <input type="number" min={1} value={users} onChange={(event) => setUsers(Math.max(1, Number(event.target.value)))} className="field" />
          </label>
          <Select label="Plan type" value={plan} options={Object.keys(licenceMonthly)} onChange={(value) => setPlan(value as PlanType)} />
          <Select label="Billing" value={billing} options={["Monthly", "Yearly"]} onChange={(value) => setBilling(value as Billing)} />
          <Select label="Hosting" value={hosting} options={Object.keys(hostingMonthly)} onChange={(value) => setHosting(value as Hosting)} />
          <Select label="Implementation package" value={implementation} options={Object.keys(implementationPackages)} onChange={(value) => setImplementation(value as ImplementationPackage)} />
          <Select label="Support package" value={support} options={Object.keys(supportPackages)} onChange={(value) => setSupport(value as SupportPackage)} />
        </div>
        <fieldset className="mt-6">
          <legend className="label">Optional services</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {(Object.keys(optionalServices) as OptionalService[]).map((service) => (
              <label key={service} className="flex items-center gap-3 rounded-xl border border-navy-100 bg-mist/40 p-3 text-sm text-navy-700">
                <input type="checkbox" checked={selected.includes(service)} onChange={() => toggleService(service)} className="h-4 w-4 rounded border-navy-300 text-sky-600 focus:ring-sky-500" />
                {service}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="rounded-3xl bg-navy-900 p-6 text-white shadow-lift sm:p-8">
        <p className="eyebrow text-sky-300"><span className="h-px w-6 bg-sky-300/70" /> Estimate summary</p>
        <div className="mt-6 grid gap-4">
          <Estimate label="Odoo licence estimate" value={estimate.licence} currency={currency} />
          <Estimate label="Hosting estimate" value={estimate.hosting} currency={currency} />
          <Estimate label="Libertas implementation estimate" value={estimate.implementation} currency={currency} />
          <Estimate label="Support estimate" value={estimate.support} currency={currency} />
        </div>
        <div className="mt-6 rounded-2xl bg-white p-5 text-navy-900">
          <p className="text-sm font-semibold text-navy-500">Total first-year estimate</p>
          <p className="mt-2 font-display text-3xl font-extrabold">{formatCurrency(estimate.firstYear, currency)}</p>
          <p className="mt-2 text-sm text-navy-600">Monthly equivalent: {formatCurrency(estimate.monthly, currency)}</p>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-navy-100/70">
          This calculator provides an indicative estimate only. Final pricing depends on official Odoo licence pricing, scope, hosting requirements, data migration complexity, integrations, and support needs.
        </p>
        <a href="/contact" className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">
          Request Accurate Quote
        </a>
      </aside>
    </div>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="field">
        {options.map((item) => <option key={item}>{item}</option>)}
      </select>
    </label>
  );
}

function Estimate({ label, value, currency }: { label: string; value: number; currency: Currency }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-sm text-navy-100/75">{label}</span>
      <strong>{formatCurrency(value, currency)}</strong>
    </div>
  );
}

