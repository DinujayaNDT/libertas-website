import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

/**
 * Section, a vertical rhythm wrapper.
 * `tone` sets the background: white | mist (light grey) | navy (dark).
 */
export function Section({
  id,
  tone = "white",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: "white" | "mist" | "navy";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  const tones = {
    white: "bg-white text-navy-800",
    mist: "bg-mist text-navy-800",
    navy: "bg-navy-800 text-white",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-28",
        tones[tone],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Standard heading block: eyebrow → title → subtitle, center or left. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className,
      )}
    >
      <Reveal>
        {eyebrow && (
          <span className={cn("eyebrow", invert && "text-sky-300")}>
            <span
              className={cn(
                "h-px w-6",
                invert ? "bg-sky-300/70" : "bg-sky-400/70",
              )}
            />
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem]",
            invert ? "text-white" : "text-navy-800",
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              invert ? "text-navy-100/80" : "text-navy-600/90",
            )}
          >
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
