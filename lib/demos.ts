import type { LucideIcon } from "lucide-react";
import {
  Users2,
  Calculator,
  Warehouse,
  Factory,
  Globe,
  Cloud,
  ReceiptText,
} from "lucide-react";

export type Demo = {
  title: string;
  icon: LucideIcon;
  covers: string;
  bestFor: string;
  duration: string;
};

export const demos: Demo[] = [
  {
    title: "CRM & Sales Demo",
    icon: Users2,
    covers: "Pipeline, quotations, and orders in one flow.",
    bestFor: "Sales led teams wanting a clearer pipeline.",
    duration: "30 to 45 min",
  },
  {
    title: "Accounting & Invoicing Demo",
    icon: Calculator,
    covers: "Invoicing, reconciliation, and financial reporting.",
    bestFor: "Finance teams and business owners.",
    duration: "30 to 45 min",
  },
  {
    title: "Inventory & Purchase Demo",
    icon: Warehouse,
    covers: "Stock control, transfers, and reordering.",
    bestFor: "Distribution, wholesale, and retail.",
    duration: "30 to 45 min",
  },
  {
    title: "Manufacturing Demo",
    icon: Factory,
    covers: "Bills of materials, work orders, and planning.",
    bestFor: "Producers and assemblers.",
    duration: "45 min",
  },
  {
    title: "Website & eCommerce Demo",
    icon: Globe,
    covers: "Online store linked to stock and orders.",
    bestFor: "Businesses selling online.",
    duration: "30 to 45 min",
  },
  {
    title: "Odoo.sh / Custom Development Demo",
    icon: Cloud,
    covers: "Environments, Git workflow, and custom builds.",
    bestFor: "Teams needing custom development.",
    duration: "45 min",
  },
  {
    title: "E-invoicing & Automation Demo",
    icon: ReceiptText,
    covers: "Automated invoice flows and compliance.",
    bestFor: "Teams with digital invoicing needs.",
    duration: "30 min",
  },
];

/** Options for the preferred demo select. */
export const demoOptions = [
  ...demos.map((d) => d.title),
  "Not sure yet, recommend one",
];

export const companySizeOptions = [
  "1 to 10",
  "11 to 50",
  "51 to 200",
  "200+",
];

/* Backward-compatible alias for components importing `companySizes`. */
export const companySizes = companySizeOptions;
