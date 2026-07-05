/**
 * ------------------------------------------------------------------
 *  Libertas pricing configuration + estimate calculator
 * ------------------------------------------------------------------
 *  ALL prices below are indicative and defined in GBP as the base.
 *  Everything here is editable. Adjust the numbers to match your
 *  commercial model and confirm Odoo licence pricing against the
 *  official Odoo pricing page before quoting.
 *
 *  DISCLAIMER (shown in the UI): This calculator provides an indicative
 *  estimate only. Final pricing depends on official Odoo licence pricing,
 *  scope, hosting requirements, data migration complexity, integrations,
 *  and support needs.
 * ------------------------------------------------------------------
 */

export type CurrencyCode = "GBP" | "USD" | "EUR" | "LKR";

/**
 * Exchange rates relative to GBP (1 GBP = rate units of currency).
 * These are indicative and editable.
 * TODO: connect a live FX API (server side, with an API key) and cache
 * the rates. Do not fetch FX directly from the browser without a key.
 */
export const exchangeRates: Record<CurrencyCode, number> = {
  GBP: 1,
  USD: 1.27, // editable
  EUR: 1.17, // editable
  LKR: 390, // editable, included intentionally
};

export const currencies: { code: CurrencyCode; label: string }[] = [
  { code: "GBP", label: "GBP (£)" },
  { code: "USD", label: "USD ($)" },
  { code: "EUR", label: "EUR (€)" },
  { code: "LKR", label: "LKR (Rs)" },
];

/* ---- Licence (per user, per month, GBP) ------------------------- */
export const licencePerUserMonthly = {
  Standard: 24, // indicative
  Custom: 37, // indicative
} as const;

/** Applied to the per user monthly price when billed yearly (a discount). */
export const yearlyMultiplier = 0.9; // i.e. 10% saving, editable

/* ---- Hosting (per month, GBP) ----------------------------------- */
export const hostingMonthly = {
  "Odoo Online": 0, // typically included with the licence
  "Odoo.sh": 45, // placeholder for worker/storage/staging
  "On-premise": 30, // nominal placeholder, infrastructure billed separately
} as const;

/* ---- Implementation packages (one time, GBP) -------------------- */
export const implementationPackages = {
  Starter: 1500,
  Growth: 4000,
  Advanced: 9000,
  Enterprise: 18000,
} as const;

/* ---- Support packages (per month, GBP) -------------------------- */
export const supportPackages = {
  None: 0,
  Essential: 150,
  Business: 400,
  Premium: 900,
} as const;

/* ---- Optional services (one time, GBP) -------------------------- */
export const optionalServices = {
  "Data migration": 1200,
  "Custom development": 2500,
  Integration: 1800,
  Training: 800,
  "E-invoicing setup": 1000,
} as const;

export type PlanType = keyof typeof licencePerUserMonthly;
export type BillingCycle = "Monthly" | "Yearly";
export type HostingType = keyof typeof hostingMonthly;
export type ImplementationPackage = keyof typeof implementationPackages;
export type SupportPackage = keyof typeof supportPackages;
export type OptionalService = keyof typeof optionalServices;

export type CalculatorInput = {
  users: number;
  plan: PlanType;
  billing: BillingCycle;
  hosting: HostingType;
  implementation: ImplementationPackage;
  support: SupportPackage;
  options: OptionalService[];
};

export type Estimate = {
  // all values in GBP base
  licenceMonthly: number;
  hostingMonthly: number;
  supportMonthly: number;
  recurringMonthly: number;
  implementationOneTime: number;
  optionsOneTime: number;
  oneTimeTotal: number;
  firstYearTotal: number;
  monthlyEquivalent: number;
};

/** Compute an estimate in GBP base values. */
export function calculateEstimate(input: CalculatorInput): Estimate {
  const users = Math.max(1, Math.floor(input.users || 1));

  const perUser =
    licencePerUserMonthly[input.plan] *
    (input.billing === "Yearly" ? yearlyMultiplier : 1);
  const licenceMonthly = perUser * users;

  const hosting = hostingMonthly[input.hosting];
  const support = supportPackages[input.support];
  const recurringMonthly = licenceMonthly + hosting + support;

  const implementationOneTime = implementationPackages[input.implementation];
  const optionsOneTime = input.options.reduce(
    (sum, key) => sum + optionalServices[key],
    0,
  );
  const oneTimeTotal = implementationOneTime + optionsOneTime;

  const firstYearTotal = recurringMonthly * 12 + oneTimeTotal;
  const monthlyEquivalent = firstYearTotal / 12;

  return {
    licenceMonthly,
    hostingMonthly: hosting,
    supportMonthly: support,
    recurringMonthly,
    implementationOneTime,
    optionsOneTime,
    oneTimeTotal,
    firstYearTotal,
    monthlyEquivalent,
  };
}

/** Convert a GBP base amount into the chosen currency. */
export function convert(amountGbp: number, currency: CurrencyCode): number {
  return amountGbp * exchangeRates[currency];
}

/** Format an amount (already in the target currency) with Intl. */
export function formatCurrency(amount: number, currency: CurrencyCode): string {
  const locales: Record<CurrencyCode, string> = {
    GBP: "en-GB",
    USD: "en-US",
    EUR: "de-DE",
    LKR: "en-LK",
  };
  try {
    return new Intl.NumberFormat(locales[currency], {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    // Fallback if a locale/currency is unavailable in the runtime.
    const symbol =
      currency === "LKR" ? "Rs " : currency === "GBP" ? "£" : currency === "EUR" ? "€" : "$";
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  }
}

/** Convenience: convert a GBP base amount and format it in one step. */
export function money(amountGbp: number, currency: CurrencyCode): string {
  return formatCurrency(convert(amountGbp, currency), currency);
}

export const pricingDisclaimer =
  "This calculator provides an indicative estimate only. Final pricing depends on official Odoo licence pricing, scope, hosting requirements, data migration complexity, integrations, and support needs.";

export const pricingNote =
  "Odoo licence pricing is indicative and should be confirmed against the official Odoo pricing page before purchase.";

/* ------------------------------------------------------------------ */
/*  Backward-compatible aliases                                        */
/*  Some components import shorter names. These keep them working.     */
/* ------------------------------------------------------------------ */
export const licenceMonthly = licencePerUserMonthly;
export type Currency = CurrencyCode;
export type Billing = BillingCycle;
export type Hosting = HostingType;
export type Implementation = ImplementationPackage;
export type Support = SupportPackage;
export type Optional = OptionalService;
