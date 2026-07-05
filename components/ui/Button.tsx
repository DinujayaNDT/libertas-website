import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold " +
  "transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none " +
  "will-change-transform active:translate-y-px";

// A subtle light sweep that runs across filled buttons on hover.
const Sheen = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
  />
);

const filled: Variant[] = ["primary", "accent", "light"];

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  // Deep navy, primary action
  primary:
    "bg-navy-700 text-white shadow-soft hover:bg-navy-800 hover:shadow-lift hover:-translate-y-0.5",
  // Sky accent, secondary emphasis
  accent:
    "bg-sky-500 text-white shadow-[0_8px_24px_-8px_rgba(46,155,221,0.6)] hover:bg-sky-600 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(46,155,221,0.7)]",
  // Outlined, quieter action on light backgrounds
  outline:
    "border border-navy-200 bg-white/60 text-navy-700 hover:border-sky-400 hover:text-navy-800 hover:-translate-y-0.5 hover:shadow-soft",
  // Ghost, minimal
  ghost: "text-navy-700 hover:bg-navy-50",
  // Light, for use on dark navy backgrounds
  light:
    "bg-white text-navy-800 shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {filled.includes(variant) && <Sheen />}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {filled.includes(variant) && <Sheen />}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
