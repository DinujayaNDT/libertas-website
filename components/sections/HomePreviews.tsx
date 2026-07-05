"use client";

import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { caseStudies } from "@/lib/caseStudies";
import { allVideos } from "@/lib/videos";

/** Home previews: case studies, videos, and a pricing calculator CTA. */
export function HomePreviews() {
  return (
    <>
      {/* Case studies preview */}
      <Section id="case-studies-preview" tone="white">
        <SectionHeading
          eyebrow="Proof"
          title="Example Implementation Scenarios"
          subtitle="Illustrative examples of how we approach common Odoo projects across different sectors."
        />
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Reveal as="div" key={study.slug}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </RevealGroup>
        <div className="mt-12 text-center">
          <Button href="/case-studies" variant="primary" size="lg">
            View all case studies
          </Button>
        </div>
      </Section>

      {/* Videos preview */}
      <Section id="videos-preview" tone="mist">
        <SectionHeading
          eyebrow="Learn"
          title="Videos & Demo Walkthroughs"
          subtitle="Short, practical videos covering Odoo basics and how Libertas delivers implementations."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allVideos.slice(0, 3).map((video) => (
            <Reveal as="div" key={video.title}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </RevealGroup>
        <div className="mt-12 text-center">
          <Button href="/videos" variant="outline" size="lg">
            Browse the video library
          </Button>
        </div>
      </Section>

      {/* Pricing calculator CTA */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-mist/50 p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-sky-400/70" />
                    Plan your budget
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                    Estimate your Odoo investment
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600/90 sm:text-base">
                    Use our interactive calculator to get an indicative estimate
                    across licences, hosting, implementation, and support. GBP,
                    USD, EUR, and LKR supported.
                  </p>
                </div>
                <Button href="/pricing" variant="primary" size="lg">
                  <Calculator className="h-5 w-5" />
                  Open the calculator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
