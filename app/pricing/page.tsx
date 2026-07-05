import type { Metadata } from "next";
import { ExternalLink, Cloud, Server, Globe, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { pricingFaqs } from "@/lib/faqs";
import { pricingNote } from "@/lib/pricing";
import { officialOdoo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Odoo Pricing Calculator",
  description:
    "Estimate your Odoo investment across licences, hosting, implementation, and support with the Libertas calculator. Supports GBP, USD, EUR, and LKR.",
  alternates: { canonical: "/pricing" },
};

const hostingOptions = [
  {
    icon: Globe,
    title: "Odoo Online",
    body: "Fully managed cloud hosting by Odoo. The simplest option to get started with less to maintain.",
  },
  {
    icon: Cloud,
    title: "Odoo.sh",
    body: "A managed platform built for custom development, with staging, Git, and production environments.",
  },
  {
    icon: Server,
    title: "On-premise",
    body: "Self hosted on your own infrastructure for full control. You manage servers, updates, and backups.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plan your budget"
        title="Odoo Pricing, Made Clear"
        subtitle="Understand how Odoo pricing works, then build an indicative estimate with our interactive calculator. GBP, USD, EUR, and LKR supported."
      />

      {/* Licensing overview */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal as="div">
              <span className="eyebrow">
                <span className="h-px w-6 bg-sky-400/70" />
                Licensing overview
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                How Odoo licensing works
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-600/90">
                Odoo licences are typically charged per user, with a Standard
                tier and a Custom tier that unlocks studio and more advanced
                capabilities. Pricing varies by region, billing cycle, and the
                apps you use. Libertas charges separately for implementation,
                customisation, and support.
              </p>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-900">
                {pricingNote}
              </div>
              <a
                href={officialOdoo.pricing}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition-colors hover:text-sky-600"
              >
                View official Odoo pricing
                <ExternalLink className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal as="div">
              <div className="rounded-2xl bg-mist/50 p-7 ring-1 ring-navy-100/60">
                <h3 className="font-display text-lg font-bold text-navy-800">
                  Standard vs Custom
                </h3>
                <div className="mt-4 space-y-4 text-sm text-navy-700">
                  <div>
                    <p className="font-semibold text-navy-800">Standard</p>
                    <p className="mt-1 text-navy-600/90">
                      Access to Odoo apps for everyday business use. A strong fit
                      when standard configuration meets your needs.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
                    <span>Best for straightforward setups on managed hosting.</span>
                  </div>
                  <div className="border-t border-navy-100 pt-4">
                    <p className="font-semibold text-navy-800">Custom</p>
                    <p className="mt-1 text-navy-600/90">
                      Adds studio customisation and flexibility for tailored
                      workflows and custom development.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
                    <span>Best when you need bespoke development on Odoo.sh.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Hosting options */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Hosting"
            title="Choose the Right Hosting"
            subtitle="Where Odoo runs affects cost, control, and how much you maintain. We can advise based on your needs."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {hostingOptions.map((h) => (
              <Reveal as="div" key={h.title}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-soft ring-1 ring-navy-100/70">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-700 text-white">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-800">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
                    {h.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Calculator */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Interactive calculator"
            title="Estimate Your Odoo Investment"
            subtitle="Adjust the options below for an indicative estimate. Licence figures are separated from Libertas service estimates."
          />
          <div className="mt-12">
            <PricingCalculator />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Questions" title="Pricing FAQ" />
          <div className="mt-12">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready for an accurate quote?"
        text="Once we understand your processes, data, and integrations, we can turn an estimate into an itemised quote."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="Book a Demo"
        secondaryHref="/demos"
      />
    </main>
  );
}
