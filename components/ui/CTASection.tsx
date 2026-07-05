"use client";

import { CalendarCheck, MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

/** Reusable dark gradient CTA band used across pages. */
export function CTASection({
  eyebrow = "Let's talk",
  title = "Ready to Start Your Odoo Journey?",
  text = "Whether you are implementing Odoo for the first time or improving an existing setup, Libertas can help you move forward with confidence.",
  primaryLabel = "Book a Demo",
  primaryHref = site.demoHref,
  secondaryLabel = "Contact Libertas",
  secondaryHref = site.contactHref,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute inset-0 bg-grid-light [background-size:40px_40px] opacity-30" />
              <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center text-sky-300">
                <span className="h-px w-6 bg-sky-300/70" />
                {eyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
                {text}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href={primaryHref} variant="accent" size="lg">
                  <CalendarCheck className="h-5 w-5" />
                  {primaryLabel}
                </Button>
                <Button href={secondaryHref} variant="light" size="lg">
                  <MessageSquare className="h-5 w-5" />
                  {secondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
