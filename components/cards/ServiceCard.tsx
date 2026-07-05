"use client";

import { motion } from "framer-motion";
import { Check, CalendarCheck } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/cn";

/** Detailed service card for the Services page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      id={service.slug}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "scroll-mt-28 rounded-2xl bg-white p-7 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift",
        service.featured && "gradient-border",
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "grid h-12 w-12 flex-none place-items-center rounded-xl",
            service.featured
              ? "bg-gradient-to-br from-sky-500 to-sky-600 text-white"
              : "bg-navy-700 text-white",
          )}
        >
          <service.icon className="h-6 w-6" />
        </span>
        <h2 className="font-display text-xl font-bold text-navy-800">
          {service.title}
        </h2>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-navy-600/90">
        {service.what}
      </p>

      <div className="mt-5 rounded-xl bg-mist/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
          Who it is for
        </p>
        <p className="mt-1 text-sm text-navy-700">{service.who}</p>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            Key benefits
          </p>
          <ul className="mt-2 space-y-1.5">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-navy-700">
                <Check className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            Typical deliverables
          </p>
          <ul className="mt-2 space-y-1.5">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-300" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/contact"
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-soft"
      >
        <CalendarCheck className="h-4 w-4" />
        Book a Consultation
      </Link>
    </motion.article>
  );
}
