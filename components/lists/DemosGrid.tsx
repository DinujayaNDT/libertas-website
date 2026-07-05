"use client";

import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { DemoCard } from "@/components/cards/DemoCard";
import { demos } from "@/lib/demos";

export function DemosGrid() {
  return (
    <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {demos.map((demo) => (
        <Reveal as="div" key={demo.title}>
          <DemoCard demo={demo} />
        </Reveal>
      ))}
    </RevealGroup>
  );
}
