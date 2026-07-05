"use client";

import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <Section id="services" tone="mist">
      <SectionHeading
        eyebrow="What we do"
        title="Services That Cover the Full Odoo Lifecycle"
        subtitle="From first configuration to integrations, migrations, and ongoing support, one partner across every stage."
      />

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Reveal
            as="div"
            key={service.title}
            className={cn(service.featured && "lg:col-span-1")}
          >
            <Card
              gradient={service.featured}
              className="flex flex-col p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105",
                    service.featured
                      ? "bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-[0_8px_20px_-8px_rgba(46,155,221,0.6)]"
                      : "bg-navy-50 text-navy-700 group-hover:bg-navy-700 group-hover:text-white",
                  )}
                >
                  <service.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-navy-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-500" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-navy-800">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600/90">
                {service.summary}
              </p>
            </Card>
          </Reveal>
        ))}
      </RevealGroup>

      <div className="mt-12 text-center">
        <Button href="/services" variant="primary" size="lg">
          View all services
        </Button>
      </div>
    </Section>
  );
}
