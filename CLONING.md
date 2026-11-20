# Cloning target and working guidelines

## What this project is

This repository is being rebuilt to look **exactly like** the reference site:

- **Reference:** https://buildexnow.com/
- **Brand in the clone:** **BuildexNow** (the previous placeholder name, *BuildexNow*, was wrong and has been replaced everywhere).

The reference is a WordPress/Elementor site. It was reverse-engineered from
its live HTML, CSS, assets and rendered screenshots (see "Evidence" below),
then reproduced as a React + TypeScript + Vite multi-page site.

## Reverse-engineering evidence

Captured on 2026-11-18 into `/tmp/refcap/`:

- `buildexnow.html` — full served HTML (469 KB).
- `buildexnow-loaded.png` — 1440×1000 hero screenshot after the preloader.
- `vp_*.png` — viewport screenshots at 850 px scroll steps over the full
  9,478 px page (hero, trusted brands, global reach, services, showcase,
  process, comparison, testimonials, FAQ, CTA, footer).
- CDP-computed styles: body background `rgb(17,17,17)`, body font
  `Inter, sans-serif`, accent `#9AFD0D`, nav/menu/asset URLs, section classes
  (`buildexnow-showcase`, `bfy-dark`, `bfy-light`, `buildexnow-dark-comparison`, …).

### Extracted design system

| Token | Value |
|---|---|
| Canvas / dark sections | `#111111` / `#0B0B0B` |
| Light sections | `#FDFCF7` / `#F1EFE9` (warm cream) |
| Signal / accent | `#9AFD0D` (neon lime) |
| Text on dark | `#FFFFFF` / `#A0A0A0` |
| Text on light | `#17171A` / `#62625F` |
| Type | Inter for headings and body; heavy weight, tight tracking |
| Nav | centered floating dark translucent pill, lime logo, white CTA pill |
| Hero | full-bleed dark warm photograph, giant centered white headline, lime CTA |
| WhatsApp | fixed lime circular button, bottom-right |

### Page architecture (mirrored here)

`Hero → Showcase strip → Trusted-by logos → Global reach + stats → marquee →
What we do (services) → Creative showcase (work) → From idea to execution
(process) → Comparison → Client stories → FAQ → CTA → Footer`.

## Andrej Karpathy skills

The build also applies the **Andrej Karpathy coding-agent guidelines**
([`multica-ai/andrej-karpathy-skills`](https://github.com/multica-ai/andrej-karpathy-skills),
a single `CLAUDE.md` derived from Karpathy's observations on LLM coding
pitfalls). Its four rules, used throughout this clone:

1. **Think before coding** — state assumptions, surface tradeoffs, stop when
   unclear instead of guessing.
2. **Simplicity first** — minimum code that solves the problem; nothing
   speculative, no abstractions for single-use code.
3. **Surgical changes** — touch only what the request requires, match existing
   style, remove only orphans created by your own changes.
4. **Goal-driven execution** — turn tasks into verifiable goals and loop until
   the checks pass (`npm run build`, route screenshots, red→green tests).

These align with the repository's `AGENTS.md` "craft" constitution and the
reverse-engineering skill's evidence discipline: distinguish observations from
inferences, preserve limitations, and show evidence that the work ran.

## Process visual / Stageshow

The reference process section shows a photograph that changes with the active
step, so `src/sections/Process.tsx` now renders the six captured originals
(`home-process-1..6.webp`) as a crossfading image keyed to the active step.
The **Stageshow** study remains in the repository at
`src/components/stageshow/BuildexBoard.tsx` with its kit and rehearsal notes;
its framing and single-focal-point rules informed this panel's composition,
but the board itself is no longer rendered on the homepage.

## Structural fidelity pass (2026-11-19, second pass)

- **Client stories** — the reference has five distinct cards in a horizontal
  carousel (three visible), not four in a wrapped grid. `TESTIMONIALS` now holds
  the exact five records in reference order and `.stories-grid` is a single
  399×324px card row; this also brought the section from 1171px to 880px (ref 894px).
- **Footer** — rebuilt with the reference's Headquarters/address, social links,
  GST line and four link columns (Services / Company / Assets / Policies).
- **Hero strip overflow** — the six-image marquee is wider than the viewport, so
  `.hero` uses `overflow-x: clip` with `overflow-y: visible`: the strip may hang
  over the next section without creating a 4114px-wide page.
- **Audit false positives** — the 29 `v-overflow` DOM findings come from hidden
  nav dropdowns, not-yet-revealed `.reveal` elements and clipped marquee dots,
  not visible component overlap.

## Final fidelity pass (2026-11-19, third pass)

- **Mobile dock** — rebuilt as the reference's full-bleed 390×68 black bar with
  five 78px slots and a raised 64px lime contact action (`#98f90d` border and
  glow), measured item-for-item against the live site (x0/78/163/234/312).
- **Stories offset** — the carousel opens two cards in (`scrollLeft = 830`,
  desktop scroll-snap disabled) so visible cards land at x286/701/1116 versus
  the reference's x286/706/1127.
- **Section rhythm** — comparison 898→858 (ref 853), FAQ 774→724 (ref 725),
  CTA+footer 1118→1092 (ref 1092). A final pass closed the remaining deltas:
  reach 741→679 (ref 679), work 2549→2581 (ref 2581), process 1628→1664
  (ref 1664), stories 865→894 (ref 894), and the extra 45px FAQ margin was
  removed. Loaded document height is now **10936** vs the reference's **10926**
  (10px / 0.09%). Mobile stat values use `white-space: nowrap` so "6+ yrs"
  stays on one line as on the reference.
- **Parity review** — reference and clone were captured at identical scroll
  offsets at 1440×900 and 390×844 and inspected side by side (hero, showcase,
  trusted-by, reach, services, work, process, comparison, stories, FAQ, CTA and
  footer). Final build: `npm run build` clean; 54/54 route × viewport checks
  clean (log: `/tmp/opencode/audit-last.log`).
- **Audit correction** — routes must carry trailing slashes; without them Vite
  serves the homepage fallback. Also, fixed-overlay children (mobile dock, FAB)
  are excluded from pairwise overlap checks because they intentionally paint
  above content. Re-run on the final build: **54/54 route × viewport checks
  clean** at 1440×900 and 390×844 (one `h1`, no overflow, zero text overlaps,
  no page errors), with a visual contact-sheet review of every section on
  desktop/mobile and all 27 routes at both widths.

## Alignment and overlap audit (2026-11-19)

A CDP-driven pass measured the clone and the live reference at 1440×900 and
390×900. The first measurement pass was misleading because the reference lazy-loads
its showcase imagery: with images unloaded its document was 9,478px tall vs the
clone's 10,994px. Forcing `loading="eager"` before measuring removed the artifact
and showed the two layouts were far closer than the raw numbers suggested.

Findings and fixes:

- **Trusted-by strip** — the clone rendered a static centered grid of 8 logos at
  32px; the reference uses two opposite-scrolling rows of 10 marks at 45px that
  bleed past both viewport edges. Added the two missing assets (Learndojo,
  Plentypay) to `public/assets/ref/`, expanded `TRUSTED_LOGOS`, and rebuilt
  `TrustedBy.tsx` + CSS as a duplicated, seamless marquee. Also redistributed
  `.trusted` padding (the old 160px bottom gap created a 200px void before the
  reach section).
- **Case-study strip** — only 4 of the reference's 6 stills were present and the
  strip was a fixed 4-column grid. Restored the missing `2-1-2.png` / `3-1-2.png`
  stills in reference order and converted the strip to a 6-image looping marquee
  with the reference's 258px tile height.
- **Mobile overflow** — at 390px the document was 403px wide; the culprit was the
  footer link "Free Invoice Generator" refusing to wrap. Added `min-width: 0` to
  `.footer-col` and `overflow-wrap: anywhere` to its links. Now 390/390.
- **WhatsApp FAB** — replaced the generic chat-bubble icon with the brand glyph.

Verification after the changes (`npm run build` clean; 27/27 routes HTTP 200):

| Landmark | Reference | Clone |
|---|---|---|
| Showcase strip top | 804 | 804 |
| "Trusted by" heading | ~1160 | 1160 |
| Global-reach eyebrow | ~1477 | 1477 |
| Document width @1440 / @390 | 1440 / 390 | 1440 / 390 |
| Broken images | 0 | 0 |

An automated pairwise bounding-box scan at 1440/1280/1024/768/390 found no
overlapping content: the only intersections are the intentional 7px overlap of
the overlapping flag avatars in the global-reach panel. Earlier "duplicate CTA"
sightings in stitched full-page captures were a stitching artifact — a direct
DOM query finds exactly one `.cta-panel`.

## Full page/subpage mirror audit (2026-11-19, pass 2)

The live sitemap (`page-sitemap.xml`, `post-sitemap.xml`) plus the footer links
established the reference's real route set. Findings and fixes:

- **Blog articles** — all eight clone slugs and their copy were invented. Scraped
  the eight real articles from the reference DOM (H1, H2/H3 hierarchy, every
  paragraph/list item, publication date, meta description and featured image).
  Added `src/data/blog-posts.ts` (1,861 lines of mirrored article data), replaced
  the eight old routes in `scripts/generate-pages.mjs`, downloaded all eight
  featured images into `public/assets/blog/`, and rewrote `BlogPage.tsx` /
  `BlogPostPage.tsx` to match the reference's "Your Go-To Source" card grid and
  the bordered title + featured-image article hero.
- **Subpage headings** — the reference's H1s had been replaced with studio-style
  rewrites on 11 pages. Restored the exact reference H1 text on about, work,
  pricing, contact, seo-checker and all six service pages, plus exact `<title>`
  tags for all 27 routes.
- **Service-page hero** — changed from the left-aligned hero to the reference's
  centered headline, single lime "Book a Call" CTA and case-study strip; replaced
  the six descriptions with the reference's own copy.

Verification (`node /tmp/check.js`, CDP at 1440×900): **27 routes, 27/27 H1s
matching the reference, 27/27 titles matching, 0 broken images, 0 horizontal
overflow, 0 missing H1s**. `npm run build` clean; all routes HTTP 200. Note:
`/invoice-generator/` in the reference intermittently returns a WP database
error; its stable title/H1 ("Free Invoice Generator Online – BuildexNow" / "INVOICE")
are mirrored while the clone keeps a working generator.

## Production readiness

- `npm run build` must pass with no type errors.
- Every route must render one `h1` and no console errors.
- All images and the WhatsApp/nav CTAs must resolve locally (no dead links).
- Motion is gated by `prefers-reduced-motion`.
