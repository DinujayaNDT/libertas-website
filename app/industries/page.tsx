import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { IndustriesList } from "@/components/lists/IndustriesList";

export const metadata: Metadata = {
  title: "Odoo Industries",
  description:
    "How Libertas helps manufacturing, distribution, wholesale, retail, professional services, hospitality, field service, and growing SMEs with Odoo.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sectors we support"
        title="Odoo Tailored to Your Industry"
        subtitle="We tune Odoo to how different sectors actually operate, so the system fits your real world processes."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <IndustriesList />
        </Container>
      </section>
      <CTASection
        title="Let's talk about your sector"
        text="Every business is different. Tell us how yours runs and we will show you how Odoo can help."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
