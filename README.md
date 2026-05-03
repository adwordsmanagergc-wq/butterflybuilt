# Butterfly Built — Website

A production-ready Next.js 14 (App Router) marketing website for [Butterfly Built](https://butterflybuilt.com.au), a premium carpentry company based in Dover Heights, Sydney.

- **Stack**: Next.js 14, TypeScript, Tailwind CSS, React Hook Form + Zod, framer-motion (optional).
- **SEO**: per-page metadata, canonical tags, Open Graph + Twitter cards, sitemap, robots, JSON-LD (LocalBusiness, Organization, Service, FAQPage, BreadcrumbList, Review).
- **AI / LLM optimisation**: declarative About + Quick Facts blocks, FAQ structured data, `/llms.txt` summary at the site root.
- **Design**: editorial, premium, craftsmanship-led — Fraunces serif headings + Inter body, timber/charcoal/sage palette, generous whitespace.
- **Conversion**: phone CTA in header, sticky mobile CTA, enquiry form on home/contact/every service/every suburb page.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                Next.js App Router pages
    page.tsx          Homepage
    services/         Services hub + dynamic [slug] pages
    areas/            Dynamic [suburb] pages (Bondi + Eastern Suburbs)
    about/            About page
    projects/         Portfolio
    contact/          Contact + enquiry form
    api/enquiry/      Enquiry POST endpoint
    sitemap.ts        Auto-generated sitemap.xml
    robots.ts         robots.txt
  components/         Header, Footer, EnquiryForm, Hero, Sections, etc.
  lib/
    site.ts           Business name, phone, email, address, ABN — single source of truth
    services.ts       All services with copy, FAQs, SEO metadata
    suburbs.ts        All suburb pages with localised copy
    faqs.ts           Homepage FAQs
    seo.ts            Helper for per-page metadata
    jsonld.ts         JSON-LD generators
public/
  images/             Image placeholders (replace via GitHub)
  llms.txt            LLM-friendly site summary
```

## Replacing the logo

The logo lives at `public/images/logo.svg`. Replace it in place (any vector or 1:1 raster works). It's referenced by both `Header.tsx` and `Footer.tsx`. Search for `TODO: Replace with logo from GitHub upload` to find every reference.

## Replacing image placeholders

All photo placeholders use descriptive, SEO-friendly file names under `public/images/`. Until you upload real photos, the site falls back to a branded placeholder (`public/images/placeholder.svg`). To replace them:

1. Search the codebase for `TODO: Replace with Instagram image`.
2. Each `<Img src="/images/.../filename.jpg">` references a specific file. Drop a real JPG (or PNG/WEBP) at the same path.
3. Recommended sizing:
   - Hero / portrait images: **1600×2000** (4:5)
   - Project tiles: **1600×2000** (4:5)
   - Suburb case studies: **1600×1200** (4:3)
   - OG image: replace `public/images/og-default.svg` with `og-default.jpg` at **1200×630** and update `siteConfig.ogImage` in `src/lib/site.ts` if you change the extension.

Source images from your Instagram ([@butterfly.built](https://www.instagram.com/butterfly.built)) are a great starting point.

## Configuring the enquiry form

The enquiry form posts to `/api/enquiry`. By default it logs the message to the server console. To deliver real email, configure one of the supported providers via environment variables.

### Resend (recommended)

```env
ENQUIRY_PROVIDER=resend
RESEND_API_KEY=your-resend-key
ENQUIRY_TO=jon@butterflybuilt.com.au
ENQUIRY_FROM="Butterfly Built <noreply@butterflybuilt.com.au>"
```

Sign up at [resend.com](https://resend.com), verify the `butterflybuilt.com.au` domain (DNS records), and create an API key.

### SendGrid

```env
ENQUIRY_PROVIDER=sendgrid
SENDGRID_API_KEY=your-sendgrid-key
ENQUIRY_TO=jon@butterflybuilt.com.au
ENQUIRY_FROM=noreply@butterflybuilt.com.au
```

Verify the sender at [sendgrid.com](https://sendgrid.com) and create an API key.

Set the variables in Vercel under **Project → Settings → Environment Variables** and redeploy.

## Editing content

- **Site-wide info** (phone, email, address, ABN, founding year, hours): `src/lib/site.ts`
- **Services**: `src/lib/services.ts` — each service has its own slug, hero image path, intro, benefits, process, FAQs and keywords.
- **Suburbs**: `src/lib/suburbs.ts` — each suburb has localised intro, housing styles, landmarks, common projects and neighbour links.
- **Homepage FAQs**: `src/lib/faqs.ts`
- **Testimonials**: `src/components/Testimonials.tsx`
- **Projects**: `src/components/ProjectsGrid.tsx`

Search the codebase for `TODO:` to find every placeholder waiting to be filled in.

## SEO

- Per-page `<title>` and `<meta name="description">` via `generateMetadata` (each ≤ 60 / 155 characters).
- `<link rel="canonical">` set per page.
- Open Graph + Twitter card tags on every page.
- `app/sitemap.ts` produces `/sitemap.xml` automatically including all services and suburbs.
- `app/robots.ts` produces `/robots.txt`.
- Rich JSON-LD: `LocalBusiness`, `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, aggregate `Review`.
- Semantic HTML — one `<h1>` per page, breadcrumb navigation, alt text optimised for "carpenter Sydney" + suburb keywords.
- `public/llms.txt` provides a markdown summary that AI search engines and LLMs can cite.

## Deployment

The site deploys cleanly on [Vercel](https://vercel.com).

```bash
npm i -g vercel
vercel link
vercel deploy
```

Make sure to set the production domain (`butterflybuilt.com.au`) and configure the email provider env vars listed above.

## Accessibility

- WCAG AA contrast on all default colour combinations.
- Skip-to-content link.
- All interactive elements are keyboard-navigable with visible focus states.
- ARIA labels on iconography and interactive controls.
- Alt text on every image.

## License

Proprietary. © Butterfly Built.
