import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Display face, headings. Characterful but professional.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body face, paragraphs, UI, captions.
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in your environment (see .env.example).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://libertas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Libertas | Odoo Partner for Implementation, Support & Integration",
    template: "%s | Libertas",
  },
  description:
    "Libertas helps businesses implement, customise, integrate, and support Odoo with confidence.",
  applicationName: "Libertas",
  keywords: [
    "Odoo Partner UK",
    "Odoo implementation",
    "Odoo support",
    "Odoo.sh setup",
    "Odoo custom development",
    "Odoo integration",
    "Odoo ERP consultant",
    "Odoo data migration",
    "Odoo e-invoicing",
    "Odoo automation",
  ],
  authors: [{ name: "Libertas" }],
  creator: "Libertas",
  publisher: "Libertas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Libertas",
    title: "Libertas | Odoo Partner for Implementation, Support & Integration",
    description:
      "Libertas helps businesses implement, customise, integrate, and support Odoo with confidence.",
    images: [
      {
        url: "/og-image.png", // 1200x630, replace with your own if desired
        width: 1200,
        height: 630,
        alt: "Libertas, Your Trusted Odoo Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libertas | Odoo Partner for Implementation, Support & Integration",
    description:
      "Implement, customise, integrate, and support Odoo with confidence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // app/icon.png and app/apple-icon.png are auto-detected by Next.js.
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14315f", // Libertas navy
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
