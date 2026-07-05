"use client";

import { Target, Layers, ShieldCheck, Workflow } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/cards/FeatureCard";

const approach = [
  {
    icon: Target,
    title: "Business process first",
    body: "We start with how your business runs, then design Odoo around it. Technology follows process, not the other way around.",
  },
  {
    icon: Layers,
    title: "Clean technical delivery",
    body: "Maintainable, well structured builds with proper environments and clear Git workflows, so your system stays healthy as it grows.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term support",
    body: "We stay past go live with support, upgrades, and continuous improvement, so your investment keeps paying off.",
  },
  {
    icon: Workflow,
    title: "Partner-led transformation",
    body: "One accountable partner across implementation, integration, and support, focused on real outcomes for your business.",
  },
];

export function ApproachGrid() {
  return (
    <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
      {approach.map((a) => (
        <Reveal as="div" key={a.title}>
          <FeatureCard icon={a.icon} title={a.title} body={a.body} />
        </Reveal>
      ))}
    </RevealGroup>
  );
}
