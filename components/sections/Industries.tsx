"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { industries } from "@/lib/industries";
import { Button } from "@/components/ui/Button";

export function Industries() {
  return (
    <Section id="industries" tone="mist">
      <SectionHeading
        eyebrow="Sectors"
        title="Industries We Support"
        subtitle="Practical Odoo delivery tuned to how different sectors actually operate."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        stagger={0.06}
      >
        {industries.map((industry) => (
          <Reveal as="div" key={industry.label}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col items-start overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
            >
              {/* accent wash on hover */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <industry.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-navy-800">
                {industry.label}
              </h3>
            </motion.div>
          </Reveal>
        ))}
      </RevealGroup>

      <div className="mt-12 text-center">
        <Button href="/industries" variant="outline" size="lg">
          Explore all industries
        </Button>
      </div>
    </Section>
  );
}
