"use client";

import { motion } from "framer-motion";
import type { OdooApp } from "@/lib/odooApps";

/** Odoo app card with hover reveal of the suggested use case. */
export function AppCard({ app }: { app: OdooApp }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
        <app.icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-navy-800">
        {app.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-600/90">
        {app.description}
      </p>
      {/* use case reveals on hover / focus-within */}
      <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
        <p className="rounded-lg bg-sky-50 px-3 py-2 text-xs text-navy-700">
          <span className="font-semibold text-sky-700">Use case: </span>
          {app.useCase}
        </p>
      </div>
    </motion.div>
  );
}
