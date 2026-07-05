"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  // Toggle the scroll state (adds a stronger background + shadow).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-navy-900/95 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
          : "border-white/10 bg-navy-900/85 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo, in a clean white pill so the wordmark reads on the navy header.
            Replace /public/libertas-logo.jpg to change it. Aspect ratio is 4:1. */}
        <Link
          href="/"
          aria-label="Libertas home"
          className="flex flex-none items-center rounded-xl bg-white px-3 py-1.5 shadow-sm transition-shadow hover:shadow-md"
        >
          <Image
            src="/libertas-logo.jpg"
            alt="Libertas"
            width={160}
            height={40}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav (centred). Shown at xl and up; hamburger below. */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-6 xl:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors duration-200",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-sky-400 after:transition-all after:duration-300 after:content-['']",
                  active
                    ? "text-white after:w-full"
                    : "text-navy-100/70 hover:text-white after:w-0 hover:after:w-full",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA (desktop) + hamburger (mobile) */}
        <div className="flex flex-none items-center gap-2">
          <Button
            href={site.demoHref}
            variant="accent"
            size="sm"
            className="hidden whitespace-nowrap xl:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" />
            Book a Demo
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-900/98 backdrop-blur-md xl:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-3 sm:px-6">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-navy-100/80 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button
                  href={site.demoHref}
                  variant="accent"
                  size="md"
                  className="w-full"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
