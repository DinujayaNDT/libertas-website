import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title = "Ready to map Odoo to your business?",
  body = "Book a guided conversation with Libertas and get practical next steps for implementation, support, integration, or automation.",
  href = "/demos",
  label = "Book a Demo",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-8 text-white shadow-lift sm:p-12 lg:p-14">
          <div className="absolute inset-0 bg-grid-light [background-size:42px_42px] opacity-25" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100/82">
                {body}
              </p>
            </div>
            <Link
              href={href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              {label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

