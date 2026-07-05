"use client";

import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { industries } from "@/lib/industries";

export function IndustriesList() {
  return (
    <RevealGroup className="grid gap-6 lg:grid-cols-2">
      {industries.map((industry) => (
        <Reveal as="div" key={industry.slug}>
          <IndustryCard industry={industry} />
        </Reveal>
      ))}
    </RevealGroup>
  );
}
