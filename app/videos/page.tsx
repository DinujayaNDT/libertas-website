import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { videoSections } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Odoo Videos & Demos",
  description:
    "A library of Odoo overview videos, demo walkthroughs, and Libertas service explainers to help you learn Odoo at your own pace.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Video library"
        title="Learn Odoo at Your Own Pace"
        subtitle="Short, practical videos covering Odoo basics, demo walkthroughs, and how Libertas runs implementations."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          {/* top CTA */}
          <Reveal>
            <div className="mb-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sky-200 bg-sky-50/60 p-6 text-center sm:flex-row sm:text-left">
              <p className="text-sm font-medium text-navy-700 sm:text-base">
                Want a personalised walkthrough? Book a Libertas demo.
              </p>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Demo
              </Link>
            </div>
          </Reveal>

          <div className="space-y-16">
            {videoSections.map((section) => (
              <div key={section.key}>
                <Reveal>
                  <h2 className="border-l-4 border-sky-500 pl-4 font-display text-2xl font-bold text-navy-800">
                    {section.label}
                  </h2>
                </Reveal>
                <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.videos.map((video) => (
                    <Reveal as="div" key={video.title}>
                      <VideoCard video={video} />
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-sm text-navy-500">
            Video thumbnails are placeholders. Real videos will be added here.
          </p>
        </Container>
      </section>

      <CTASection
        title="Prefer a live walkthrough?"
        text="A guided demo maps Odoo to your real business process and answers your specific questions."
        primaryLabel="Book a Demo"
        primaryHref="/demos"
        secondaryLabel="Contact Libertas"
        secondaryHref="/contact"
      />
    </main>
  );
}
