"use client";

import { currencies, type CurrencyCode } from "@/lib/pricing";
import { cn } from "@/lib/cn";

export function CurrencySelector({
  value,
  onChange,
}: {
  value: CurrencyCode;
  onChange: (c: CurrencyCode) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Select currency"
      className="inline-flex rounded-full border border-navy-100 bg-mist/50 p-1"
    >
      {currencies.map((c) => (
        <button
          key={c.code}
          type="button"
          aria-pressed={value === c.code}
          onClick={() => onChange(c.code)}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
            value === c.code
              ? "bg-navy-700 text-white shadow-soft"
              : "text-navy-600 hover:text-navy-800",
          )}
        >
          {c.code}
        </button>
      ))}
    </div>
  );
}
