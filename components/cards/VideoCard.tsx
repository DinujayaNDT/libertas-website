"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import type { Video } from "@/lib/videos";

/** Gradient-thumbnail video card (no real embed). */
export function VideoCard({ video }: { video: Video }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy-100/70 transition-shadow duration-300 hover:shadow-lift"
    >
      {/* thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-sky-700">
        <div className="absolute inset-0 bg-grid-light [background-size:26px_26px] opacity-25" />
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sky-400/30 blur-2xl" />
        {/* play button */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy-800 shadow-lift transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          <Clock className="h-3 w-3" />
          {video.duration}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-sky-500 px-2.5 py-1 text-[11px] font-semibold text-white">
          {video.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-navy-800">
          {video.title}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy-600/90">
          {video.description}
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-white"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          Watch Video
        </button>
      </div>
    </motion.article>
  );
}
