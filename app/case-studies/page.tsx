import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Odoo Case Studies",
  description:
    "Example Odoo implementation scenarios from Libertas across manufacturing, wholesale, and professional services.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our work"
        title="Example Implementation Scenarios"
        subtitle="Illustrative examples of how Libertas approaches Odoo projects. These are representative scenarios rather than named customers."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Reveal as="div" key={study.slug}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </RevealGroup>

          <p className="mt-10 text-center text-sm text-navy-500">
            Labelled as example implementation scenarios. Real, named case
            studies will be added as projects complete.
          </p>
        </Container>
      </section>

      <CTASection
        title="Could this be your business?"
        text="If any of these scenarios sound familiar, we would be glad to show you how Odoo could work for you."
        primaryLabel="Book a Demo"
        primaryHref="/demos"
        secondaryLabel="Contact Libertas"
        secondaryHref="/contact"
      />
    </main>
  );
}
