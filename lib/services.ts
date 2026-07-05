import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Wrench,
  Cloud,
  DatabaseZap,
  Plug,
  LifeBuoy,
  GraduationCap,
  ReceiptText,
  Lightbulb,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string; // short, used on home + cards
  what: string; // what it is
  who: string; // who it is for
  benefits: string[];
  deliverables: string[];
  featured?: boolean;
};

/** Canonical services list (used on home preview and the Services page). */
export const services: Service[] = [
  {
    slug: "odoo-implementation",
    title: "Odoo Implementation",
    icon: Boxes,
    summary:
      "End to end Odoo setup, configuration, user training, and go live support.",
    what: "A structured, end to end rollout of Odoo across the apps your teams need, configured around how your business actually works.",
    who: "Businesses moving to Odoo for the first time, or replacing disconnected systems and spreadsheets with one platform.",
    benefits: [
      "One connected system instead of scattered tools",
      "Configuration mapped to your real processes",
      "Confident go live with trained users",
      "A clear, staged plan from day one",
    ],
    deliverables: [
      "Process and requirements review",
      "Configured Odoo environment",
      "Data loaded and validated",
      "User training and go live support",
    ],
    featured: true,
  },
  {
    slug: "odoo-customisation",
    title: "Odoo Customisation",
    icon: Wrench,
    summary:
      "Tailored modules, workflows, fields, reports, and business logic built around your process.",
    what: "Custom development on top of Odoo where the standard configuration is not enough, built cleanly and maintainably.",
    who: "Teams with specific workflows, approvals, or reporting needs that go beyond out of the box Odoo.",
    benefits: [
      "Software that fits your process, not the reverse",
      "Cleaner adoption through familiar workflows",
      "Maintainable code that upgrades safely",
      "Custom reports and dashboards",
    ],
    deliverables: [
      "Custom modules and fields",
      "Tailored workflows and approvals",
      "Bespoke reports and dashboards",
      "Technical documentation",
    ],
  },
  {
    slug: "odoo-sh-hosting",
    title: "Odoo.sh & Hosting",
    icon: Cloud,
    summary:
      "Professional Odoo.sh deployment, staging environments, Git workflows, and release management.",
    what: "Deployment and hosting on Odoo.sh with proper development, staging, and production environments and a clean release process.",
    who: "Businesses that want a professional development workflow, safe deployments, and room for custom development.",
    benefits: [
      "Separate staging and production environments",
      "Version controlled, reviewable changes",
      "Safer, repeatable deployments",
      "Room to grow with custom development",
    ],
    deliverables: [
      "Odoo.sh project setup",
      "Branch and Git workflow",
      "Staging and production pipeline",
      "Release and backup process",
    ],
  },
  {
    slug: "data-migration",
    title: "Data Migration",
    icon: DatabaseZap,
    summary:
      "Clean migration from Excel, Sage, QuickBooks, legacy ERP, or existing Odoo environments.",
    what: "A careful move of your master data and history into Odoo, cleaned, mapped, and validated before go live.",
    who: "Anyone leaving spreadsheets, older accounting tools, or a legacy ERP behind.",
    benefits: [
      "Trustworthy data from day one",
      "Reduced duplication and errors",
      "Preserved history where it matters",
      "A clear mapping you can review",
    ],
    deliverables: [
      "Data audit and mapping",
      "Cleaning and de duplication",
      "Test and final migrations",
      "Validation sign off",
    ],
  },
  {
    slug: "system-integrations",
    title: "System Integrations",
    icon: Plug,
    summary:
      "Connect Odoo with websites, payment systems, CRMs, ERPs, APIs, logistics, and reporting tools.",
    what: "Reliable connections between Odoo and the other systems your business depends on, built on stable APIs.",
    who: "Businesses running Odoo alongside other platforms that need to share data automatically.",
    benefits: [
      "No more manual re keying between systems",
      "Consistent data across platforms",
      "Automated, near real time updates",
      "Fewer errors and less admin",
    ],
    deliverables: [
      "Integration design",
      "API connections and middleware",
      "Error handling and logging",
      "Monitoring and documentation",
    ],
    featured: true,
  },
  {
    slug: "odoo-support",
    title: "Odoo Support",
    icon: LifeBuoy,
    summary:
      "Reliable support, issue resolution, improvements, upgrades, and continuous optimisation.",
    what: "Ongoing support after go live, covering fixes, small improvements, upgrades, and continuous optimisation.",
    who: "Any business running Odoo that wants a dependable partner past go live.",
    benefits: [
      "A partner who knows your setup",
      "Faster issue resolution",
      "Planned, low risk upgrades",
      "Continuous improvement over time",
    ],
    deliverables: [
      "Support channel and response targets",
      "Issue tracking and resolution",
      "Upgrade planning",
      "Ongoing optimisation",
    ],
  },
  {
    slug: "odoo-training",
    title: "Odoo Training",
    icon: GraduationCap,
    summary:
      "Role based training and clear documentation so your team adopts Odoo with confidence.",
    what: "Practical, role based training and documentation that helps your team use Odoo well from the start.",
    who: "Teams adopting Odoo, or existing users who want to get more from the platform.",
    benefits: [
      "Faster, more confident adoption",
      "Fewer support questions later",
      "Documentation your team can reuse",
      "Training focused on real tasks",
    ],
    deliverables: [
      "Role based training sessions",
      "Quick reference guides",
      "Admin and key user training",
      "Recorded walkthroughs where useful",
    ],
  },
  {
    slug: "e-invoicing-automation",
    title: "E-invoicing & Automation",
    icon: ReceiptText,
    summary:
      "Automated invoice flows, compliance ready integrations, and middleware for digital invoicing.",
    what: "Automated invoice and document flows, plus middleware to meet digital and e invoicing requirements.",
    who: "Businesses that need compliant digital invoicing or want to remove manual invoice handling.",
    benefits: [
      "Less manual invoice processing",
      "Compliance ready document flows",
      "Faster, more accurate billing",
      "Automation across repetitive steps",
    ],
    deliverables: [
      "E invoicing setup and mapping",
      "Automated document flows",
      "Compliance integrations",
      "Testing and validation",
    ],
  },
  {
    slug: "erp-consulting",
    title: "ERP Consulting",
    icon: Lightbulb,
    summary:
      "Process reviews and ERP strategy for growing businesses, a clear roadmap before you build.",
    what: "Independent ERP advice, process reviews, and a practical roadmap so you invest in the right things in the right order.",
    who: "Growing businesses planning an ERP move who want clarity before committing to a build.",
    benefits: [
      "A clear, prioritised roadmap",
      "Process first thinking",
      "Reduced risk and rework",
      "Confident, informed decisions",
    ],
    deliverables: [
      "Current state review",
      "Target process design",
      "Phased ERP roadmap",
      "Scope and effort guidance",
    ],
    featured: true,
  },
];

/** Options for the service select in forms. */
export const serviceOptions = [
  ...services.map((s) => s.title),
  "Not sure yet, need advice",
];
