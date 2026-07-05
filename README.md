# Libertas, Odoo Partner Website

A premium, multi-page marketing site for Libertas, a UK based Odoo
implementation and support partner. Built with Next.js (App Router) and
TypeScript, Tailwind CSS, Framer Motion, and Lucide icons, with a working
contact, demo, and pricing-quote backend (Resend), a currency-aware pricing
calculator, full SEO, and Vercel-ready deployment.

## Tech stack

- Next.js 14 (App Router) and TypeScript
- Tailwind CSS for styling
- Framer Motion for animation
- Lucide React for icons
- Resend for transactional email

## Pages

- `/` Home, premium overview with service, benefit, industry, case study, and video previews plus a pricing calculator CTA
- `/services` Detailed Odoo services (what it is, who it is for, benefits, deliverables)
- `/odoo-apps` Odoo app ecosystem grouped by category
- `/industries` Industries with problems, solution areas, and our approach
- `/case-studies` Example implementation scenarios, plus detail pages at `/case-studies/[slug]`
- `/videos` Video library with placeholder thumbnails (no embeds yet)
- `/demos` Demo options, guided vs official Odoo demo, request form, official Odoo resources, FAQ
- `/pricing` Licensing overview, hosting options, interactive calculator (GBP, USD, EUR, LKR), FAQ
- `/about` Company story and approach
- `/contact` Contact form and contact details

## Getting started

```bash
npm install
cp .env.example .env.local     # then fill in your values
npm run dev                    # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

The first dev/build downloads Inter and Plus Jakarta Sans via `next/font/google`,
so it needs an internet connection.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (for forms) | Resend API key, from https://resend.com/api-keys |
| `CONTACT_EMAIL` | Yes | Inbox that receives enquiries. Defaults to hello@libertas.com |
| `CONTACT_FROM` | Optional | From address, must be on a verified Resend domain. Defaults to `Libertas <noreply@libertas.com>` |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public URL for metadata, canonical URLs, sitemap, robots |

The contact, demo, and pricing-quote forms all post to `/api/contact`, which
sends a notification to `CONTACT_EMAIL` and an auto-confirmation to the sender.
Without `RESEND_API_KEY` the API returns a clear "not configured" message
instead of sending.

## Configuring Resend

1. Create an account at https://resend.com and add an API key.
2. Verify your sending domain at https://resend.com/domains and add the DNS records.
3. Set `CONTACT_FROM` to an address on that domain.
4. Set `CONTACT_EMAIL` to your destination inbox.

## Deploying to Vercel

1. Push to a Git repo and import it in Vercel (auto-detects Next.js).
2. Add the environment variables under Settings, Environment Variables.
3. Deploy, add your custom domain, then set `NEXT_PUBLIC_SITE_URL` to the final
   domain and redeploy.

## Content and configuration

All copy and data live in `lib/`, so you can edit the site without touching
components:

| What | Where |
| --- | --- |
| Brand, contact, official Odoo links | `lib/site.ts` |
| Navigation and footer links | `lib/navigation.ts` |
| Services | `lib/services.ts` |
| Odoo apps | `lib/odooApps.ts` |
| Industries | `lib/industries.ts` |
| Case studies | `lib/caseStudies.ts` |
| Videos | `lib/videos.ts` |
| Demos | `lib/demos.ts` |
| Pricing assumptions and FX rates | `lib/pricing.ts` |
| FAQs | `lib/faqs.ts` |
| Home page arrays | `lib/content.ts` |
| Brand colours | `tailwind.config.ts` (`colors.navy`, `colors.sky`) |
| Fonts | `app/layout.tsx` |
| Logo | replace `public/libertas-logo.jpg` (navy) and `public/libertas-logo-white.jpg` (white) |

## Pricing calculator assumptions

All prices are indicative, defined in GBP as the base, and fully editable in
`lib/pricing.ts`:

- Licence per user per month: Standard 24, Custom 37
- Yearly billing multiplier: 0.9 (a 10 percent saving)
- Hosting per month: Odoo Online 0, Odoo.sh 45, On-premise 30 (nominal)
- Implementation one-time: Starter 1500, Growth 4000, Advanced 9000, Enterprise 18000
- Support per month: None 0, Essential 150, Business 400, Premium 900
- Optional services one-time: Data migration 1200, Custom development 2500, Integration 1800, Training 800, E-invoicing setup 1000
- Exchange rates from GBP: USD 1.27, EUR 1.17, LKR 390

Exchange rates are indicative. There is a TODO in `lib/pricing.ts` to connect a
live FX API server side with an API key. Do not fetch FX in the browser without
a key. Currency is formatted with `Intl.NumberFormat`, and LKR is included.

## Replacing placeholder assets

- `app/icon.png` favicon (navy monogram placeholder)
- `app/apple-icon.png` Apple touch icon placeholder
- `public/og-image.png` 1200x630 social image placeholder
- Video thumbnails are gradient placeholders (no embeds yet)
- Case studies are labelled "Example implementation scenario"

## Quality and accessibility

- Responsive across mobile, tablet, laptop, desktop, no horizontal scroll
- One H1 per page, semantic landmarks, labelled fields with inline ARIA errors
- Keyboard-visible focus rings, accessible accordion and mobile menu
- `prefers-reduced-motion` respected
- `npm run build` and `npm run lint` pass with no errors
- Content is written without em dash characters

---

Odoo is a trademark of Odoo S.A. Libertas is an independent implementation partner.
