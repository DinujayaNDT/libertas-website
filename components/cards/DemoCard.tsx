"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Demo } from "@/lib/demos";

/** Demo option card. */
export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-700 text-white transition-colors duration-300 group-hover:bg-sky-500">
        <demo.icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-navy-800">
        {demo.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
        {demo.covers}
      </p>
      <p className="mt-3 text-sm text-navy-500">
        <span className="font-semibold text-navy-700">Best for: </span>
        {demo.bestFor}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-navy-400">
        <Clock className="h-3.5 w-3.5" />
        {demo.duration}
      </div>
      <Link
        href="/contact"
        className="group/link mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy-700 transition-colors hover:text-sky-600"
      >
        Book This Demo
        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.article>
  );
}
