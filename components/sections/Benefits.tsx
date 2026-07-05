"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { benefits } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Business outcomes, frames Odoo work in terms of what the business gets,
 * not features. Sticky heading on desktop, benefit grid alongside.
 */
export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* faint flight-path accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left, heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-sky-400/70" />
                Business outcomes
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-800 sm:text-4xl">
                Real outcomes, not just software
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-navy-600/90">
                We measure success by what changes in your business, less manual
                work, clearer reporting, and systems that finally talk to each
                other.
              </p>
              <div className="mt-8">
                <Button href={site.bookingHref} variant="primary" size="md">
                  Start Your Odoo Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right, benefit grid */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
            {benefits.map((benefit) => (
              <Reveal as="div" key={benefit.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-mist/40 p-5 transition-colors duration-300 hover:border-sky-300 hover:bg-white hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white text-navy-700 shadow-soft ring-1 ring-navy-100/70 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-800">
                    {benefit.label}
                  </span>
                </motion.div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
