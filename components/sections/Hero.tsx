"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  TrendingUp,
  CheckCircle2,
  Boxes,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroBadges } from "@/lib/content";
import { site } from "@/lib/site";

/* Entrance stagger for the left column */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20 lg:pt-24 lg:pb-28"
    >
      {/* Ambient background: soft navy grid + drifting sky orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-navy [background-size:44px_44px] opacity-60 mask-fade-b" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl animate-drift" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-navy-200/40 blur-3xl animate-float-slow" />
      </div>

      {/* Signature flight-path line, nods to the bird in the logo */}
      <FlightPath />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* -------- Left: copy -------- */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/70 px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-soft"
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-500" />
              Odoo implementation &amp; support partner
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-800 sm:text-5xl lg:text-[3.4rem]"
            >
              Your Trusted{" "}
              <span className="relative whitespace-nowrap text-gradient">
                Odoo Partner
              </span>{" "}
              for Smarter Business Growth
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600/90"
            >
              Libertas helps businesses implement, customise, integrate, and
              scale Odoo with confidence, from first setup to long-term
              support.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button href={site.demoHref} variant="primary" size="lg">
                <CalendarCheck className="h-5 w-5" />
                Book a Demo
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap gap-2.5"
              aria-label="Capabilities"
            >
              {heroBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-mist/70 px-3.5 py-1.5 text-xs font-medium text-navy-600"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                  {badge}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* -------- Right: animated dashboard -------- */}
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}

/* Decorative animated SVG "flight path" streaking across the hero */
function FlightPath() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="fp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2e9bdd" stopOpacity="0" />
          <stop offset="50%" stopColor="#2e9bdd" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2e9bdd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M -50 120 C 300 40, 600 260, 1000 120 S 1600 40, 2000 180"
        fill="none"
        stroke="url(#fp)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />
    </svg>
  );
}

/* Floating ERP dashboard mock built entirely from styled elements */
function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* Main dashboard card */}
      <div className="relative rounded-3xl border border-navy-100 bg-white p-5 shadow-card">
        {/* window chrome */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-navy-400">
            Libertas · Odoo overview
          </span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "£482k", icon: TrendingUp },
            { label: "Orders", value: "1,204", icon: Boxes },
            { label: "On-time", value: "98%", icon: CheckCircle2 },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl bg-mist p-3 ring-1 ring-navy-100/60"
            >
              <kpi.icon className="h-4 w-4 text-sky-500" />
              <div className="mt-2 font-display text-lg font-bold text-navy-800">
                {kpi.value}
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wide text-navy-400">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl bg-navy-800 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-medium text-navy-100">
              <BarChart3 className="h-3.5 w-3.5 text-sky-300" />
              Sales pipeline
            </span>
            <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-200">
              +18%
            </span>
          </div>
          <div className="flex h-24 items-end gap-2">
            {[42, 58, 36, 72, 50, 84, 64].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                className="flex-1 rounded-t bg-gradient-to-t from-sky-500/40 to-sky-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat chip, top right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-3 -top-5 hidden rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500/12 text-sky-600">
            <CheckCircle2 className="h-4 w-4" />
          </span>
          <div>
            <div className="text-xs font-semibold text-navy-800">Go-live ready</div>
            <div className="text-[10px] text-navy-400">UAT passed</div>
          </div>
        </div>
      </motion.div>

      {/* Floating module chip, bottom left */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-700 text-white">
            <Boxes className="h-4 w-4" />
          </span>
          <div>
            <div className="text-xs font-semibold text-navy-800">12 modules</div>
            <div className="text-[10px] text-navy-400">connected</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
