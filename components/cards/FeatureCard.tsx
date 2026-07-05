"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

/** Simple icon + title + body feature card. */
export function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group h-full rounded-2xl bg-white p-7 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-navy-800">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-navy-600/90">{body}</p>
    </motion.div>
  );
}
