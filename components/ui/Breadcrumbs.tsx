"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

/** Human labels for known routes; falls back to title-cased slug. */
const LABELS: Record<string, string> = {
  services: "Services",
  "odoo-apps": "Odoo Apps",
  industries: "Industries",
  "case-studies": "Case Studies",
  videos: "Videos",
  demos: "Demos",
  pricing: "Pricing",
  about: "About",
  contact: "Contact",
};

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Auto breadcrumb trail derived from the current path. */
export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const crumbs = parts.map((part, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    const label = LABELS[part] ?? titleCase(part);
    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-100/70">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-sky-300/70" aria-hidden />
              {last ? (
                <span className="font-medium text-white" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
