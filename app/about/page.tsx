import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ApproachGrid } from "@/components/lists/ApproachGrid";
import { whyPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "About Libertas | Odoo Partner" },
  description:
    "Libertas is a UK based Odoo partner focused on business process first ERP delivery, clean technical work, and long term support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who we are"
        title="A Partner for Practical Odoo Transformation"
        subtitle="Libertas is an Odoo focused consultancy helping growing businesses modernise with confidence."
      />

      {/* Who we are */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-sky-400/70" />
              Our story
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
              Built for businesses ready to modernise
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-600/90">
              <p>
                Many growing businesses reach a point where spreadsheets and
                disconnected tools start to hold them back. Reporting is slow,
                data lives in silos, and too much time goes into manual admin.
              </p>
              <p>
                Libertas exists to fix that with Odoo. We help businesses move to
                one connected platform that improves visibility, automates
                repetitive work, and gives leaders real control over operations.
              </p>
              <p>
                We are an independent Odoo partner. That means we focus on
                implementation, customisation, integration, and support, and we
                are judged on the outcomes we deliver for you.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Odoo approach"
            title="How We Work"
            subtitle="Four principles guide every Libertas engagement."
          />
          <ApproachGrid />
        </Container>
      </section>

      {/* Why Libertas */}
      <section className="relative overflow-hidden bg-navy-800 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-grid-light [background-size:44px_44px] opacity-40" />
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        </div>
        <Container className="relative">
          <SectionHeading eyebrow="Why Libertas" title="Why Businesses Choose Us" invert />
          <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <Reveal as="div" key={point}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/40 hover:bg-white/[0.07]">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-sky-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-navy-50/90">{point}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
