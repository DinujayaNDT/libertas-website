import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { AppsSection } from "@/components/lists/AppsSection";

export const metadata: Metadata = {
  title: "Odoo Apps & Modules",
  description:
    "Explore the Odoo business app ecosystem across sales, finance, operations, services, website, marketing, HR, and productivity, configured by Libertas.",
  alternates: { canonical: "/odoo-apps" },
};

export default function OdooAppsPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Odoo ecosystem"
        title="One Platform, Many Connected Apps"
        subtitle="Odoo is an integrated business platform. Libertas helps you pick the right apps and configure them around how your teams actually work."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <AppsSection />
          <p className="mt-14 text-center text-sm text-navy-500">
            Odoo also has a large community and third party app ecosystem.
            Libertas can advise on which apps fit your requirements.
          </p>
        </Container>
      </section>
      <CTASection
        title="Want these apps configured for your business?"
        text="We will map the right Odoo apps to your processes and set them up so they work together cleanly."
        primaryLabel="Book a Demo"
        primaryHref="/demos"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </main>
  );
}
