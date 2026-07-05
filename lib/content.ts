/**
 * Home page content arrays. Page and domain data now live in dedicated
 * lib files (services.ts, industries.ts, odooApps.ts, etc.). This file
 * holds the smaller arrays used by the home page sections.
 */

import type { LucideIcon } from "lucide-react";
import {
  Target,
  Layers,
  ShieldCheck,
  Users2,
  ShoppingCart,
  Calculator,
  Warehouse,
  Truck,
  Factory,
  FolderKanban,
  Globe,
  Headset,
  UserRound,
  MapPin,
  FileText,
  Timer,
  Eye,
  Network,
  Table2,
  Boxes,
  BarChart3,
  Headphones,
  Code2,
  Compass,
  PencilRuler,
  Hammer,
  ClipboardCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

/* ---- Hero badges ------------------------------------------------- */
export const heroBadges = [
  "Odoo Implementation",
  "Odoo.sh",
  "Custom Development",
  "Integration Experts",
];

/* ---- Intro feature cards ---------------------------------------- */
export const introFeatures: { title: string; body: string; icon: LucideIcon }[] =
  [
    {
      title: "Business Process First",
      body: "We start with how your business actually runs, then shape Odoo around it, not the other way around.",
      icon: Target,
    },
    {
      title: "Clean Technical Delivery",
      body: "Maintainable, well structured Odoo builds with clear Git workflows and proper environments.",
      icon: Layers,
    },
    {
      title: "Long-Term Support",
      body: "A partner that stays past go live with improvements, upgrades, and continuous optimisation.",
      icon: ShieldCheck,
    },
  ];

/* ---- Why choose Libertas ---------------------------------------- */
export const whyPoints = [
  "ERP-focused thinking, not just software setup",
  "Clear scope and practical delivery",
  "Strong technical and integration capability",
  "Support from discovery to go live and beyond",
  "Scalable solutions for growing businesses",
  "Modern, clean, maintainable Odoo development",
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 100, suffix: "%", label: "Process-focused" },
  { value: 9, suffix: "", label: "Core Odoo Services" },
  { value: 1, suffix: "", label: "Partner for Implementation, Support & Integration" },
];

/* ---- Odoo expertise modules (home) ------------------------------ */
export const modules: { label: string; icon: LucideIcon }[] = [
  { label: "CRM", icon: Users2 },
  { label: "Sales", icon: ShoppingCart },
  { label: "Accounting", icon: Calculator },
  { label: "Inventory", icon: Warehouse },
  { label: "Purchase", icon: Truck },
  { label: "Manufacturing", icon: Factory },
  { label: "Project", icon: FolderKanban },
  { label: "Website", icon: Globe },
  { label: "Helpdesk", icon: Headset },
  { label: "HR", icon: UserRound },
  { label: "Field Service", icon: MapPin },
  { label: "Documents", icon: FileText },
];

/* ---- Business outcomes / benefits ------------------------------- */
export const benefits: { label: string; icon: LucideIcon }[] = [
  { label: "Reduce manual work", icon: Timer },
  { label: "Improve operational visibility", icon: Eye },
  { label: "Connect your business systems", icon: Network },
  { label: "Replace spreadsheets & disconnected tools", icon: Table2 },
  { label: "Scale on a flexible ERP platform", icon: Boxes },
  { label: "Improve reporting and control", icon: BarChart3 },
  { label: "Support users after go live", icon: Headphones },
  { label: "Clean, maintainable Odoo development", icon: Code2 },
];

/* ---- Delivery process ------------------------------------------- */
export const processSteps: { title: string; body: string; icon: LucideIcon }[] =
  [
    {
      title: "Discover",
      body: "We understand your current process, pain points, systems, and business goals.",
      icon: Compass,
    },
    {
      title: "Design",
      body: "We map the right Odoo structure, modules, workflows, and integrations.",
      icon: PencilRuler,
    },
    {
      title: "Build",
      body: "We configure, customise, migrate data, and prepare your system.",
      icon: Hammer,
    },
    {
      title: "Test",
      body: "We validate processes, train users, and support UAT.",
      icon: ClipboardCheck,
    },
    {
      title: "Go Live",
      body: "We manage launch, hypercare, and post go live improvements.",
      icon: Rocket,
    },
    {
      title: "Support & Optimise",
      body: "We keep improving with support, upgrades, new modules, and continuous optimisation.",
      icon: RefreshCw,
    },
  ];
