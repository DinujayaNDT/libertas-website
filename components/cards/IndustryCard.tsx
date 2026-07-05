"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Industry } from "@/lib/industries";

/** Detailed industry card: problems, solutions, approach. */
export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <motion.article
      id={industry.slug}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="scroll-mt-28 flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-navy-700 text-white">
          <industry.icon className="h-6 w-6" />
        </span>
        <h2 className="font-display text-xl font-bold text-navy-800">
          {industry.label}
        </h2>
      </div>
      <p className="mt-3 text-sm text-navy-600/90">{industry.summary}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            Common problems
          </p>
          <ul className="mt-2 space-y-1.5">
            {industry.problems.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-300" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
            Odoo solution areas
          </p>
          <ul className="mt-2 space-y-1.5">
            {industry.solutions.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-navy-700">
                <Check className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-mist/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
          Our approach
        </p>
        <p className="mt-1 text-sm text-navy-700">{industry.approach}</p>
      </div>

      <Link
        href="/contact"
        className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy-700 transition-colors hover:text-sky-600"
      >
        Discuss your {industry.label.toLowerCase()} setup
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
