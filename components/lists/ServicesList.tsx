"use client";

import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border border-navy-100 bg-mist/50 px-4 py-1.5 text-sm font-medium text-navy-600 transition-colors hover:border-sky-300 hover:text-navy-800"
          >
            {s.title}
          </a>
        ))}
      </div>
      <RevealGroup className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <Reveal as="div" key={service.slug}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </RevealGroup>
    </>
  );
}
