import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://libertas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/odoo-apps", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/case-studies", priority: 0.7 },
    { path: "/videos", priority: 0.6 },
    { path: "/demos", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  const staticEntries = routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const caseStudyEntries = caseStudies.map((c) => ({
    url: `${siteUrl}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
