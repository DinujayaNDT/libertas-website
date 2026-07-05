"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { money, type CurrencyCode, type Estimate } from "@/lib/pricing";

/** Estimate cards + breakdown table + CTA. All amounts convert from GBP base. */
export function EstimateSummary({
  estimate,
  currency,
}: {
  estimate: Estimate;
  currency: CurrencyCode;
}) {
  const cards = [
    { label: "Monthly equivalent", value: estimate.monthlyEquivalent, hint: "First year averaged" },
    { label: "First-year total", value: estimate.firstYearTotal, hint: "Recurring + one-time" },
    { label: "One-time implementation", value: estimate.oneTimeTotal, hint: "Setup + options" },
    { label: "Recurring per month", value: estimate.recurringMonthly, hint: "Licence + hosting + support" },
  ];

  const rows: [string, number][] = [
    ["Odoo licence (per month)", estimate.licenceMonthly],
    ["Hosting (per month)", estimate.hostingMonthly],
    ["Support (per month)", estimate.supportMonthly],
    ["Recurring subtotal (per month)", estimate.recurringMonthly],
    ["Implementation (one-time)", estimate.implementationOneTime],
    ["Optional services (one-time)", estimate.optionsOneTime],
    ["One-time subtotal", estimate.oneTimeTotal],
    ["First-year total", estimate.firstYearTotal],
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/70 sm:p-8">
      <h3 className="font-display text-lg font-bold text-navy-800">
        Your indicative estimate
      </h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-2xl border border-navy-100 bg-mist/40 p-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-navy-400">
              {c.label}
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold text-navy-800">
              {money(c.value, currency)}
            </div>
            <div className="mt-0.5 text-[11px] text-navy-400">{c.hint}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-navy-100">
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([label, value], i) => {
              const emphasis =
                label === "First-year total" || label === "Recurring subtotal (per month)";
              return (
                <tr
                  key={label}
                  className={
                    emphasis
                      ? "bg-navy-50/60 font-semibold text-navy-800"
                      : i % 2
                        ? "bg-white"
                        : "bg-mist/30"
                  }
                >
                  <td className="px-4 py-2.5 text-navy-600">{label}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-navy-800">
                    {money(value, currency)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Link
        href="#quote"
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift"
      >
        Request Accurate Quote
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
