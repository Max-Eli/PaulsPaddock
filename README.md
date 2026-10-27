# Paul’s Paddock

Marketing site for Paul’s Paddock, an independent BMW specialist in Palm Bay, FL. Replaces the old Wix site at paulspaddock.com.

Next.js 16 (App Router) · Tailwind 4 · Resend for form emails · Markdown blog. Hosted on Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage |
| `/services`, `/services/[slug]` | Services overview and 20 service pages in 6 categories |
| `/european-auto-repair` | European auto repair hub |
| `/bmw-repair` | BMW page (custom layout) |
| `/mini-repair`, `/mercedes-benz-repair`, `/audi-repair`, `/volkswagen-repair`, `/porsche-repair` | Make pages, all rendered by `app/components/MakePage.tsx` |
| `/pricing` | Posted prices and how quotes work |
| `/about`, `/contact`, `/faq` | Company pages |
| `/book` | Booking request form (`?service=brakes` preselects a service) |
| `/blog`, `/blog/[slug]` | Blog index and articles, plus RSS at `/blog/feed.xml` |
| `/privacy` | Privacy policy |

## Where to edit things

- **Business details** (phone, address, hours, prices, reviews): `app/lib/content.ts`. Set `hours` there and it shows everywhere.
- **Service pages**: `app/lib/services.ts`. One object per page, including its category, prices and FAQs. Set `popular: true` to show it on the homepage and footer.
- **Unpublished services**: entries with `draft: true` (currently A/C repair and pre-purchase inspection) are written but excluded from the site, sitemap and menus. Delete the flag to publish one.
- **Make pages**: `app/lib/makes.ts`. Add a make there plus a one-line page folder like `app/mini-repair/page.tsx`.
- **FAQ page**: `app/lib/faqs.ts`. **BMW page lists**: `app/lib/bmw.ts`.
- **Photos**: drop files in `public/photos/` and register them in `app/lib/photos.ts`. Only the shop’s own photos, no stock. Blur license plates before adding.
- **Old Wix URLs**: redirects in `next.config.ts`.

## Blog posts

Add a Markdown file to `content/blog/`. The filename is the URL slug.

```md
---
title: Post title
description: One or two sentences for Google and the post cards.
date: 2026-11-01
category: Brakes
photo: liftBrakes
service: brake-repair
---

Intro paragraph...

## A section heading

Body text. Each `##` heading becomes an entry in the table of contents.
```

`photo` is a key from `app/lib/photos.ts`. `service` is the slug of the related service page, which drives the “Book this service” card. Straight quotes are converted to curly ones automatically.

## SEO

Each page sets its own title, description, canonical URL and share image. Structured data covers the business (`AutoRepair`), services, FAQs, breadcrumbs and blog posts. `sitemap.xml` and `robots.txt` are generated from the content.

## Deploying on Vercel

1. Import the GitHub repo in Vercel. The framework preset (Next.js), build command and output are detected automatically; no `vercel.json` is needed.
2. Add the environment variables below for Production (and Preview if you want forms to work there), then redeploy.
3. Add `paulspaddock.com` and `www.paulspaddock.com` under Domains and point DNS from Wix to Vercel as instructed. The site’s canonical URLs use `https://www.paulspaddock.com`, so make `www` the primary domain.
4. After launch, submit `https://www.paulspaddock.com/sitemap.xml` in Google Search Console and update the website link on the Google Business Profile.

Node 20.9+ is required (`engines` in `package.json`). Keep `next` up to date; security fixes ship in patch releases.

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Without it the forms show “call us” instead of sending. |
| `BOOKING_FROM_EMAIL` | Recommended | Must be on a domain verified in Resend, e.g. `Paul’s Paddock <bookings@paulspaddock.com>`. |
| `BOOKING_TO_EMAIL` | No | Defaults to paulspaddock@gmail.com. Used by both the booking and contact forms. |

## Adding Google reviews

Paste real reviews into `REVIEWS` in `app/lib/content.ts`, word for word, with first name and last initial. The quote grid appears automatically once the array has entries.
