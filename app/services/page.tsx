import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { ServicesList } from "@/components/lists/ServicesList";

export const metadata: Metadata = {
  title: "Odoo Services",
  description:
    "Odoo implementation, customisation, hosting, data migration, integrations, support, training, e-invoicing, and ERP consulting from Libertas.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title="Odoo Services Across the Full Lifecycle"
        subtitle="From first configuration to integrations, migrations, and ongoing support, Libertas covers every stage of your Odoo journey."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ServicesList />
        </Container>
      </section>
      <CTASection
        title="Not sure which service you need?"
        text="Tell us about your systems and goals. We will point you to the right starting place, whether that is implementation, migration, or a quick consultation."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}
