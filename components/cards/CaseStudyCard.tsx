"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

/** Case study preview card linking to the detail page. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
    >
      {/* gradient banner */}
      <div className="relative h-28 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-600">
        <div className="absolute inset-0 bg-grid-light [background-size:28px_28px] opacity-30" />
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-500/30 blur-2xl" />
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {study.industry}
        </span>
        <span className="absolute bottom-3 left-4 text-[11px] font-medium text-sky-200">
          Example implementation scenario
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-navy-800">
          {study.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-600/90">
          {study.challenge}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.modules.map((m) => (
            <span
              key={m}
              className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-navy-600"
            >
              {m}
            </span>
          ))}
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          className="group/link mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy-700 transition-colors hover:text-sky-600"
        >
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
