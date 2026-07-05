import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { introFeatures } from "@/lib/content";

export function Intro() {
  return (
    <Section id="about" tone="white">
      <SectionHeading
        eyebrow="Who we are"
        title="Built for Businesses Ready to Modernise"
        subtitle="Libertas is an Odoo-focused consultancy helping growing businesses move away from disconnected systems, spreadsheets, and manual processes. We design practical Odoo solutions that improve visibility, automation, and operational control."
      />

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {introFeatures.map((feature) => (
          <Reveal as="div" key={feature.title}>
            <Card gradient className="p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600/90">
                {feature.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
