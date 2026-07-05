import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerCompany, footerServices } from "@/lib/navigation";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* Replace /public/libertas-logo-white.jpg with your white logo */}
            <Image
              src="/libertas-logo-white.jpg"
              alt="Libertas"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/70">
              An Odoo focused consultancy helping growing businesses implement,
              customise, integrate, and support Odoo with confidence.
            </p>
          </div>

          <FooterCol title="Company">
            {footerCompany.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {footerServices.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-navy-100/70 transition-colors hover:text-sky-300"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-sm text-navy-100/70">
              <MapPin className="h-4 w-4 text-sky-400" />
              {site.location}
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-100/60">{site.copyright}</p>
          <p className="text-xs text-navy-100/60">
            Odoo is a trademark of Odoo S.A. Libertas is an independent
            implementation partner.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-navy-100/70 transition-colors hover:text-sky-300"
      >
        {children}
      </Link>
    </li>
  );
}
