import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-28 text-white sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-light [background-size:42px_42px] opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>
      <Container className="relative pb-16 pt-10 sm:pb-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-sky-300">
              <span className="h-px w-6 bg-sky-300/70" />
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/82">
              {subtitle}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && <HeroLink href={primaryCta.href}>{primaryCta.label}</HeroLink>}
                {secondaryCta && (
                  <HeroLink href={secondaryCta.href} variant="light">
                    {secondaryCta.label}
                  </HeroLink>
                )}
              </div>
            )}
          </div>
          {children && <div>{children}</div>}
        </div>
      </Container>
    </section>
  );
}

function HeroLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light";
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-sky-500 text-white shadow-[0_12px_32px_-14px_rgba(46,155,221,0.9)] hover:bg-sky-400"
          : "border border-white/20 bg-white/8 text-white hover:bg-white/14",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
