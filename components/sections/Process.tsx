"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" tone="white">
      <SectionHeading
        eyebrow="How we work"
        title="Our Delivery Process"
        subtitle="A clear, staged path from first conversation to a confident go-live, and beyond."
      />

      {/* -------- Desktop: horizontal timeline -------- */}
      <div className="relative mt-16 hidden lg:block">
        {/* connector line */}
        <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute left-0 top-7 h-px origin-left bg-gradient-to-r from-sky-400 to-sky-500"
          style={{ right: "8.33%" }}
        />

        <div className="relative grid grid-cols-6 gap-3">
          {processSteps.map((step, i) => (
            <Reveal as="div" key={step.title} delay={i * 0.09} className="px-1 text-center">
              {/* node */}
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-navy-700 text-white shadow-lift ring-1 ring-navy-100 transition-transform duration-300 hover:scale-105">
                <step.icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-sky-500 text-[11px] font-bold text-white ring-2 ring-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-navy-800">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-600/90">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* -------- Mobile / tablet: vertical timeline -------- */}
      <div className="relative mt-12 lg:hidden">
        <div className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-sky-400 via-navy-200 to-transparent" />
        <div className="space-y-8">
          {processSteps.map((step, i) => (
            <Reveal as="div" key={step.title} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="relative grid h-14 w-14 flex-none place-items-center rounded-full border-4 border-white bg-navy-700 text-white shadow-lift ring-1 ring-navy-100">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-sky-500 text-[11px] font-bold text-white ring-2 ring-white">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-bold text-navy-800">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600/90">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
