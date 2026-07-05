import type { LucideIcon } from "lucide-react";
import {
  Users2,
  ShoppingCart,
  Calculator,
  ReceiptText,
  Warehouse,
  Truck,
  Factory,
  FolderKanban,
  Globe,
  Store,
  Headset,
  MapPin,
  UserRound,
  FileText,
  PenLine,
  Monitor,
  Megaphone,
  Mail,
} from "lucide-react";

export type OdooApp = {
  name: string;
  icon: LucideIcon;
  description: string;
  useCase: string;
};

export type AppCategory = {
  key: string;
  label: string;
  blurb: string;
  apps: OdooApp[];
};

/**
 * Odoo app ecosystem, grouped by category. Copy is original to Libertas.
 * Odoo is an integrated business platform. Libertas configures these apps
 * around your processes.
 */
export const appCategories: AppCategory[] = [
  {
    key: "sales",
    label: "Sales",
    blurb: "Win work and manage the full sales cycle in one place.",
    apps: [
      {
        name: "CRM",
        icon: Users2,
        description: "Track leads, opportunities, and pipeline in one view.",
        useCase: "Give sales a clear pipeline and follow up that never slips.",
      },
      {
        name: "Sales",
        icon: ShoppingCart,
        description: "Quotations, sales orders, and customer pricing.",
        useCase: "Turn quotes into orders without re keying anything.",
      },
      {
        name: "POS",
        icon: Store,
        description: "Point of sale for shops and counters, online or offline.",
        useCase: "Run tills that sync straight into stock and accounting.",
      },
    ],
  },
  {
    key: "finance",
    label: "Finance",
    blurb: "Keep the books accurate and reporting close to real time.",
    apps: [
      {
        name: "Accounting",
        icon: Calculator,
        description: "Full accounting with reconciliation and reporting.",
        useCase: "Close faster with live figures instead of month end scrambles.",
      },
      {
        name: "Invoicing",
        icon: ReceiptText,
        description: "Customer invoices, payments, and follow ups.",
        useCase: "Bill accurately and get paid sooner.",
      },
    ],
  },
  {
    key: "operations",
    label: "Operations",
    blurb: "Move stock and production with visibility end to end.",
    apps: [
      {
        name: "Inventory",
        icon: Warehouse,
        description: "Real time stock, transfers, and warehouse control.",
        useCase: "Know what you hold and where, across locations.",
      },
      {
        name: "Purchase",
        icon: Truck,
        description: "Purchase orders, vendor pricing, and reordering.",
        useCase: "Automate reordering and control spend.",
      },
      {
        name: "Manufacturing",
        icon: Factory,
        description: "Bills of materials, work orders, and shop floor control.",
        useCase: "Plan production and track it against demand.",
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    blurb: "Deliver projects and support with clarity on time and cost.",
    apps: [
      {
        name: "Project",
        icon: FolderKanban,
        description: "Plan tasks, stages, and timesheets per project.",
        useCase: "See project status and profitability at a glance.",
      },
      {
        name: "Helpdesk",
        icon: Headset,
        description: "Tickets, SLAs, and a shared support inbox.",
        useCase: "Resolve customer issues without losing track.",
      },
      {
        name: "Field Service",
        icon: MapPin,
        description: "Schedule visits, tasks, and on site work.",
        useCase: "Coordinate field teams and bill work accurately.",
      },
    ],
  },
  {
    key: "web",
    label: "Website & eCommerce",
    blurb: "Sell and publish online, connected to the same data.",
    apps: [
      {
        name: "Website",
        icon: Globe,
        description: "Build pages and forms with a visual editor.",
        useCase: "Publish a site that plugs into your business data.",
      },
      {
        name: "eCommerce",
        icon: Monitor,
        description: "An online store linked to stock and pricing.",
        useCase: "Sell online with orders that flow into Odoo.",
      },
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    blurb: "Reach the right people and measure what works.",
    apps: [
      {
        name: "Email Marketing",
        icon: Mail,
        description: "Design campaigns and track engagement.",
        useCase: "Run campaigns from the same customer data as sales.",
      },
      {
        name: "Marketing Automation",
        icon: Megaphone,
        description: "Automated journeys triggered by behaviour.",
        useCase: "Nurture leads automatically based on what they do.",
      },
    ],
  },
  {
    key: "hr",
    label: "HR",
    blurb: "Support your people from hire to everyday admin.",
    apps: [
      {
        name: "HR",
        icon: UserRound,
        description: "Employees, time off, and core HR records.",
        useCase: "Keep people data and requests in one place.",
      },
    ],
  },
  {
    key: "productivity",
    label: "Productivity",
    blurb: "Handle documents and approvals without the paper trail.",
    apps: [
      {
        name: "Documents",
        icon: FileText,
        description: "Central document storage and workflows.",
        useCase: "Route and store files where the work happens.",
      },
      {
        name: "Sign",
        icon: PenLine,
        description: "Send and collect legally valid e signatures.",
        useCase: "Get contracts signed without printing.",
      },
    ],
  },
];
