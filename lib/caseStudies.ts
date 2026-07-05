export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  modules: string[];
  results: string[];
};

/**
 * Example implementation scenarios. These are illustrative, not real named
 * customers. The "Example implementation scenario" label is shown in the UI.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-modernisation",
    title: "Manufacturing Operations Modernisation",
    industry: "Manufacturing",
    timeline: "Approx. 10 to 14 weeks",
    challenge:
      "A manufacturer was running on disconnected spreadsheets with poor inventory visibility and manual purchase workflows that were slow and error prone.",
    solution:
      "We implemented Odoo Inventory, Purchase, Manufacturing, and Accounting, with dashboards that give management a live view of stock, production, and costs.",
    modules: ["Inventory", "Purchase", "Manufacturing", "Accounting"],
    results: [
      "Better stock visibility across locations",
      "Reduced manual work in purchasing",
      "Improved order to delivery tracking",
    ],
  },
  {
    slug: "wholesale-crm-invoice",
    title: "Wholesale CRM to Invoice Transformation",
    industry: "Wholesale / Distribution",
    timeline: "Approx. 8 to 12 weeks",
    challenge:
      "Sales pipeline, quotes, stock, and invoicing were managed in separate tools, which slowed the sales cycle and made reporting difficult.",
    solution:
      "We brought the full cycle into Odoo CRM, Sales, Inventory, and Invoicing so quotes flow into orders and invoices from a single source of truth.",
    modules: ["CRM", "Sales", "Inventory", "Invoicing"],
    results: [
      "Faster quote to cash process",
      "Centralised customer history",
      "Improved sales reporting",
    ],
  },
  {
    slug: "service-automation",
    title: "Service Business Support & Automation",
    industry: "Professional Services",
    timeline: "Approx. 6 to 10 weeks",
    challenge:
      "Project tracking, timesheets, billing, and support were scattered across tools, making delivery and invoicing hard to manage.",
    solution:
      "We implemented Odoo Project, Timesheets, Helpdesk, and Invoicing so delivery, time, and support connect to billing cleanly.",
    modules: ["Project", "Timesheets", "Helpdesk", "Invoicing"],
    results: [
      "Clearer project visibility",
      "Easier, more accurate billing",
      "Better support tracking",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
