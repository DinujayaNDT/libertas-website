"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { modules } from "@/lib/content";

export function Expertise() {
  return (
    <Section id="expertise" tone="white">
      <SectionHeading
        eyebrow="Odoo modules"
        title="Odoo Expertise Across Your Business"
        subtitle="One connected system, configured, customised, and supported across the apps your teams rely on every day."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        stagger={0.05}
      >
        {modules.map((mod) => (
          <Reveal as="div" key={mod.label}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-center gap-3.5 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft transition-colors duration-300 hover:border-sky-300 hover:shadow-card"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-mist text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                <mod.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold text-navy-800">
                {mod.label}
              </span>
            </motion.div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
