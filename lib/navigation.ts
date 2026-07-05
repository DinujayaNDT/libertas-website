/** Primary navigation for the multi-page site. */
export type NavItem = { label: string; href: string };

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Odoo Apps", href: "/odoo-apps" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Videos", href: "/videos" },
  { label: "Demos", href: "/demos" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

/** Footer groupings. */
export const footerServices: NavItem[] = [
  { label: "Odoo Implementation", href: "/services" },
  { label: "Odoo Customisation", href: "/services" },
  { label: "Odoo.sh & Hosting", href: "/services" },
  { label: "Data Migration", href: "/services" },
  { label: "System Integrations", href: "/services" },
  { label: "Odoo Support", href: "/services" },
];

export const footerCompany: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Videos", href: "/videos" },
  { label: "Demos", href: "/demos" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
