"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="rounded-2xl bg-white shadow-soft ring-1 ring-navy-100/70">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-800"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              {item.question}
              <ChevronDown className={cn("h-5 w-5 transition-transform", active && "rotate-180")} />
            </button>
            {active && <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600/90">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

