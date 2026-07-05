import type { Metadata } from "next";
import { ExternalLink, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { DemosGrid } from "@/components/lists/DemosGrid";
import { ContactForm } from "@/components/ContactForm";
import { demoFaqs } from "@/lib/faqs";
import { officialOdoo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Odoo Demo",
  description:
    "See Odoo in action with a guided Libertas demo, or try the official Odoo demo. We help map Odoo to your real business process.",
  alternates: { canonical: "/demos" },
};

const guidedBenefits = [
  "Mapped to your real business process",
  "Focused on your industry and priorities",
  "Space to ask setup specific questions",
  "Clear, honest advice with no obligation",
];

export default function DemosPage() {
  return (
    <main>
      <PageHero
        eyebrow="See it in action"
        title="See Odoo in Action with Libertas"
        subtitle="Explore Odoo on your own with the official demo, or book a guided Libertas demo that maps Odoo to how your business actually runs."
      />

      {/* Two paths */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal as="div">
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 p-8 text-white shadow-lift">
                <h2 className="font-display text-xl font-bold">
                  Guided Libertas demo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-100/85">
                  A tailored session where we show Odoo against your processes
                  and answer your questions.
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {guidedBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-navy-50/90">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-sky-300" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="#demo-form" variant="accent" size="md">
                    Book a Guided Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal as="div">
              <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl font-bold text-navy-800">
                  Official Odoo demo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-600/90">
                  Great for exploring features on your own. Libertas then helps
                  you configure Odoo properly for real business use.
                </p>
                <div className="mt-5 flex-1 rounded-xl bg-mist/60 p-4 text-sm text-navy-600">
                  The official demo shows standard Odoo. A guided demo shows how
                  it fits your specific processes, data, and integrations.
                </div>
                <div className="mt-6">
                  <Button href={officialOdoo.demo} variant="outline" size="md">
                    Try Official Odoo Demo
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Demo types */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Demo options"
            title="Choose What You Want to See"
            subtitle="Pick a focus area, or let us recommend one based on your business."
          />
          <DemosGrid />
        </Container>
      </section>

      {/* Demo request form */}
      <section id="demo-form" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Book a demo"
            title="Request Your Guided Demo"
            subtitle="Tell us what you would like to see and we will arrange a time that suits you."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal>
              <ContactForm type="Demo Request" submitLabel="Request demo" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Official Odoo resources */}
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Official Odoo resources"
            title="Straight From Odoo"
            subtitle="Libertas is an independent Odoo partner. These official links open in a new tab."
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              { label: "Official Odoo Website", href: officialOdoo.website },
              { label: "Official Odoo Pricing", href: officialOdoo.pricing },
              { label: "Official Odoo Demo / Trial", href: officialOdoo.demo },
              { label: "Official Odoo Apps", href: officialOdoo.apps },
              { label: "Official Odoo Documentation", href: officialOdoo.docs },
            ].map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 text-sm font-semibold text-navy-700 shadow-soft transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lift"
              >
                {r.label}
                <ExternalLink className="h-4 w-4 text-navy-400 transition-colors group-hover:text-sky-500" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Demo FAQ"
          />
          <div className="mt-12">
            <FAQAccordion items={demoFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
