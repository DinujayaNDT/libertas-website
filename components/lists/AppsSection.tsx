"use client";

import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { AppCard } from "@/components/cards/AppCard";
import { appCategories } from "@/lib/odooApps";

export function AppsSection() {
  return (
    <div className="space-y-16">
      {appCategories.map((category) => (
        <div key={category.key} id={category.key} className="scroll-mt-28">
          <Reveal>
            <div className="flex flex-col gap-1 border-l-4 border-sky-500 pl-4">
              <h2 className="font-display text-2xl font-bold text-navy-800">
                {category.label}
              </h2>
              <p className="text-sm text-navy-600/90">{category.blurb}</p>
            </div>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.apps.map((app) => (
              <Reveal as="div" key={app.name}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      ))}
    </div>
  );
}
