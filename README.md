# BuildexNow — website

A visual clone of **https://buildexnow.com/**, rebuilt as a React + TypeScript + Vite multi-page site after an end-to-end reverse-engineering pass (live HTML/CSS, computed styles, assets and rendered screenshots). The reference's brand, layout, copy, imagery and motion vocabulary are reproduced. See `CLONING.md` for the evidence ledger and the Andrej Karpathy working guidelines applied to this build.

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run dev -- --port 4173
npm run build        # type-check + 28 static HTML pages in dist/
npm run preview
```

To regenerate route entries and `public/sitemap.xml` after adding a page:

```bash
SITE_ORIGIN=https://buildexnow.pages.dev node scripts/generate-pages.mjs
```

## Routes (27 static entries)

`/` · `/contact/` · `/work/` · `/pricing/` · `/about/` · `/blog/` · 8 `/blog/<slug>/` articles · 6 service pages (`/website-design-development/`, `/seo-service/`, `/app-development/`, `/branding/`, `/paid-ads/`, `/social-media-content-marketing/`) · `/invoice-generator/` · `/seo-checker/` · 5 policy pages.

## Stack

React 19 · TypeScript (strict) · Vite 7 multi-page · Tailwind CSS 4 · GSAP + ScrollTrigger · Framer Motion · Lucide icons. The process panel renders the reference's six step photographs; a Stageshow product study remains in `src/components/stageshow/` as a design reference.

## Design system

- **Canvas** `#111111`; light interludes `#FDFCF7` / `#F1EFE9`; signal `#9AFD0D` (neon lime); dark ink `#111111` on lime for AA contrast.
- **Type** Inter for headings and body (400–800); Instrument Serif italic for the comparison headline.
- **Nav** centered floating dark pill with lime logo and white CTA pill. **Hero** full-bleed video, giant centered headline, lime CTA and case-study strip.
- **Motion** hero entrance, scroll reveals, marquee, sticky process panel, accordion, liquid CTA — all gated by `prefers-reduced-motion`.
- Reference assets (hero video, case-study imagery, process frames, brand marks) are served locally from `public/assets/ref/`.
- Full evidence: `CLONING.md` and the capture set in `/tmp/refcap/` (`buildexnow-loaded.png`, `vp_*.png`, `buildexnow.html`).

## Content integrity

Copy, section order and proof mirror the reference site for visual parity. The WhatsApp floating button opens WhatsApp with a prefilled message rather than a fabricated phone number.

## Contact

There is no contact form. The contact page presents a `mailto:buildexnow@gmail.com` link and a WhatsApp link with a prefilled message; no backend is needed. Canonical origin is generated from `SITE_ORIGIN` in `scripts/generate-pages.mjs` (see the deploy section below).

## Verification

- `npm run build` — clean, 28 HTML entries (27 routes + 404), no warnings.
- Browser smoke test across all **27 routes × desktop/mobile (54 loads)**: zero failures, one `h1` per page, no overflow, no console errors. See `/tmp/refcap/verify-routes.log`.
- Interactions verified: pricing tabs, gallery lightbox, invoice calculation, SEO checker, FAQ accordion.

## Deploy to Cloudflare Pages (free tier)

- **Framework preset:** **React (Vite)**
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** leave blank
- **Node version:** pinned by the root `.node-version` (`22.23.4`) — required because Vite 7 needs Node >=20.19/22.12
- **Environment variable:** `SITE_ORIGIN=https://buildexnow.pages.dev` — canonical URLs, JSON-LD, `sitemap.xml` and `robots.txt` are generated from it by the `prebuild` script. If you later add a custom domain, change this one value and redeploy.

**Deploy flow:** push to GitHub → Cloudflare Pages → Create → Connect to Git → select the repo → apply the settings above → deploy.

`public/_headers` adds security headers and immutable caching for hashed `/static/*` bundles (Vite emits fingerprints there, while reference media stays in `/assets/*` with Cloudflare's default ETag revalidation). A generated root `404.html` makes unknown URLs return a real 404 instead of the homepage. The build fails fast if `SITE_ORIGIN` is missing in a Cloudflare Pages environment.

The free tier fits easily: ~15 MB / 75 files, largest asset 9.96 MB (under the 25 MiB/file limit), 500 builds/month.
