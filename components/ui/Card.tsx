"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Card, rounded, soft-shadowed surface with a hover lift.
 * Set `gradient` for the animated gradient border (key/featured cards).
 */
export function Card({
  className,
  gradient = false,
  hover = true,
  children,
}: {
  className?: string;
  gradient?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "relative h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300",
        hover && "hover:shadow-lift",
        gradient && "gradient-border",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
