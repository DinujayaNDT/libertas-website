import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Truck,
  Warehouse,
  Store,
  Briefcase,
  Hotel,
  MapPin,
  Sprout,
} from "lucide-react";

export type Industry = {
  slug: string;
  label: string;
  icon: LucideIcon;
  summary: string;
  problems: string[];
  solutions: string[];
  approach: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    summary: "Connect production, stock, and costing in one system.",
    problems: [
      "Stock and production tracked in spreadsheets",
      "Poor visibility of work in progress",
      "Manual purchasing and reordering",
    ],
    solutions: [
      "Manufacturing with bills of materials and work orders",
      "Real time Inventory and Purchase",
      "Costing and dashboards in Accounting",
    ],
    approach:
      "We map your production flow first, then configure Odoo so planning, stock, and costs stay in step.",
  },
  {
    slug: "distribution",
    label: "Distribution",
    icon: Truck,
    summary: "Keep orders, stock, and deliveries moving accurately.",
    problems: [
      "Orders and stock in separate tools",
      "Delivery delays and errors",
      "Little visibility across locations",
    ],
    solutions: [
      "Sales and Inventory working together",
      "Automated reordering in Purchase",
      "Delivery and logistics integrations",
    ],
    approach:
      "We connect the order to delivery chain so stock levels and fulfilment stay reliable as volume grows.",
  },
  {
    slug: "wholesale",
    label: "Wholesale",
    icon: Warehouse,
    summary: "Manage pricing, quotes, and invoicing without friction.",
    problems: [
      "Complex customer pricing",
      "Quotes and invoices in different systems",
      "Slow quote to cash",
    ],
    solutions: [
      "CRM and Sales with pricelists",
      "Inventory linked to orders",
      "Invoicing tied to fulfilment",
    ],
    approach:
      "We centralise pricing and the sales cycle so quotes become orders and invoices without re keying.",
  },
  {
    slug: "retail-ecommerce",
    label: "Retail & eCommerce",
    icon: Store,
    summary: "Unify online and in store sales with one stock view.",
    problems: [
      "Online and in store stock out of sync",
      "Manual order handling",
      "Fragmented customer data",
    ],
    solutions: [
      "eCommerce and Website linked to stock",
      "POS for in store sales",
      "Unified customer records",
    ],
    approach:
      "We bring channels onto one platform so stock, orders, and customers are consistent everywhere.",
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    icon: Briefcase,
    summary: "Track projects, time, and billing in one place.",
    problems: [
      "Project status spread across tools",
      "Timesheets and billing disconnected",
      "Support hard to track",
    ],
    solutions: [
      "Project with timesheets",
      "Invoicing linked to work",
      "Helpdesk for support",
    ],
    approach:
      "We connect delivery, time, and billing so projects stay visible and invoicing is straightforward.",
  },
  {
    slug: "property-hospitality",
    label: "Property & Hospitality",
    icon: Hotel,
    summary: "Coordinate bookings, services, and finances cleanly.",
    problems: [
      "Bookings and finance in separate systems",
      "Manual scheduling",
      "Limited reporting",
    ],
    solutions: [
      "Sales and Invoicing for services",
      "Project and Field Service for operations",
      "Accounting with clear reporting",
    ],
    approach:
      "We tailor Odoo to your service and property operations so scheduling and finances line up.",
  },
  {
    slug: "field-service",
    label: "Field Service",
    icon: MapPin,
    summary: "Plan visits and bill on site work accurately.",
    problems: [
      "Scheduling by phone and paper",
      "Work not billed accurately",
      "No live view of jobs",
    ],
    solutions: [
      "Field Service scheduling",
      "Timesheets and Invoicing",
      "Mobile friendly task updates",
    ],
    approach:
      "We set up scheduling and billing so field teams and the office share one live picture.",
  },
  {
    slug: "growing-smes",
    label: "Growing SMEs",
    icon: Sprout,
    summary: "Replace spreadsheets with a platform you can scale on.",
    problems: [
      "Disconnected tools and spreadsheets",
      "Manual, repetitive admin",
      "Reporting is slow and painful",
    ],
    solutions: [
      "A right sized set of Odoo apps",
      "Automation of repetitive steps",
      "Dashboards for clear reporting",
    ],
    approach:
      "We start with what matters most and grow your Odoo footprint as the business scales.",
  },
];
