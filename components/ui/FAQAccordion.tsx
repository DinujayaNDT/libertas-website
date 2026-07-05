"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faqs";

/** Accessible FAQ accordion (one open at a time). */
export function FAQAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-mist/60 sm:px-6"
              >
                <span className="font-display text-base font-semibold text-navy-800">
                  {item.q}
                </span>
                <span
                  className={`grid h-8 w-8 flex-none place-items-center rounded-full bg-navy-50 text-navy-700 transition-transform duration-300 ${
                    isOpen ? "rotate-45 bg-sky-500 text-white" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600/90 sm:px-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
