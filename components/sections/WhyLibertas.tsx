"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { whyPoints, stats } from "@/lib/content";

export function WhyLibertas() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 overflow-hidden bg-navy-800 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-grid-light [background-size:44px_44px] opacity-40" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Libertas"
          title="Why Businesses Choose Libertas"
          subtitle="A partner that thinks in processes and outcomes, with the technical depth to deliver and the commitment to stay."
          invert
        />

        {/* Points grid */}
        <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <Reveal as="div" key={point}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-sky-400/40 hover:bg-white/[0.07]">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-sky-500 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-navy-50/90">{point}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        {/* Counters */}
        <Reveal className="mt-16">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 text-center">
                <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-navy-100/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
