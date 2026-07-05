import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Layers, Clock, Building2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

/** Pre-render a page for each case study. */
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case Study" };
  return {
    title: `${study.title} (Case Study)`,
    description: study.challenge,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default function CaseStudyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <main>
      <PageHero eyebrow={study.industry} title={study.title} />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-600 transition-colors hover:text-sky-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>
          </Reveal>

          {/* meta strip */}
          <div className="mb-10 flex flex-wrap gap-3">
            <Meta icon={Building2} label="Industry" value={study.industry} />
            <Meta icon={Clock} label="Timeline" value={study.timeline} />
            <Meta icon={Layers} label="Modules" value={`${study.modules.length} apps`} />
          </div>

          <span className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            Example implementation scenario
          </span>

          <div className="mt-8 space-y-10">
            <Block title="The challenge">{study.challenge}</Block>
            <Block title="Our solution">{study.solution}</Block>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-800">
                Modules used
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.modules.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-navy-100 bg-mist/60 px-3.5 py-1.5 text-sm font-medium text-navy-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-800">
                Results
              </h2>
              <ul className="mt-4 space-y-2.5">
                {study.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-navy-700">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-sky-500 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Want results like these?"
        text="Tell us about your processes and we will map a practical Odoo approach for your business."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="More Case Studies"
        secondaryHref="/case-studies"
      />
    </main>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-xl border border-navy-100 bg-mist/40 px-4 py-2.5">
      <Icon className="h-4 w-4 text-sky-500" />
      <span className="text-xs text-navy-400">{label}:</span>
      <span className="text-sm font-semibold text-navy-800">{value}</span>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy-800">{title}</h2>
      <p className="mt-3 leading-relaxed text-navy-600/90">{children}</p>
    </div>
  );
}
