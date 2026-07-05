import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";

/**
 * Navy gradient hero for interior pages. One H1 per page lives here.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  showBreadcrumbs = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  showBreadcrumbs?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 pt-16 pb-16 text-white sm:pt-20 sm:pb-20">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-light [background-size:44px_44px] opacity-30" />
        <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
      </div>
      {/* flight-path line */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full opacity-60"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ph" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2e9bdd" stopOpacity="0" />
            <stop offset="50%" stopColor="#2e9bdd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2e9bdd" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -50 60 C 300 10, 600 110, 1000 50 S 1600 10, 2200 80"
          fill="none"
          stroke="url(#ph)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="animate-dash-flow"
        />
      </svg>

      <Container className="relative text-center">
        {showBreadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs />
          </div>
        )}
        {eyebrow && (
          <span className="eyebrow justify-center text-sky-300">
            <span className="h-px w-6 bg-sky-300/70" />
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
