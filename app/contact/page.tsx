import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Layers, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Libertas | Odoo Implementation Partner" },
  description:
    "Get in touch with Libertas for Odoo implementation, support, and integration. Based in the United Kingdom. Email hello@libertas.com.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.location },
  {
    icon: Layers,
    label: "Services",
    value: "Odoo Implementation, Support & Integration",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Tell Us About Your Odoo Project"
        subtitle="Share a few details and we will come back with practical next steps. No pressure, no jargon."
      />

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal as="div">
              <ContactForm type="Contact" />
            </Reveal>

            <Reveal as="div" delay={0.1}>
              <div className="flex h-full flex-col gap-4">
                {contactCards.map((card) => {
                  const inner = (
                    <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-navy-700 text-white transition-colors duration-300 group-hover:bg-sky-500">
                        <card.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                          {card.label}
                        </div>
                        <div className="mt-1 font-medium text-navy-800">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  );
                  return card.href ? (
                    <a key={card.label} href={card.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={card.label}>{inner}</div>
                  );
                })}

                {/* Book a demo CTA */}
                <div className="mt-auto rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 p-6 text-white">
                  <h2 className="font-display text-lg font-bold">
                    Prefer to see it first?
                  </h2>
                  <p className="mt-2 text-sm text-navy-100/85">
                    Book a guided demo and we will map Odoo to your business.
                  </p>
                  <Link
                    href="/demos"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Book a Demo
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
