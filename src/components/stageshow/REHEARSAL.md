# Rehearsal — BuildexNow stageshow product study

## Gold copied

`examples/buildex-board/` from the `stageshow` skill was copied as the starting
point, not re-authored from a glance. Its kit dependency set was copied into
`kit/` with the original relative imports intact:

- Source: `stage.tsx`, `act.ts`, `cursor.tsx`, `cursors.tsx`, `keys.tsx`,
  `looks.ts`, `measure.ts`, `reduced-motion.ts`, `clock.ts`, `util.ts`, `ease.ts`,
  `window.tsx`
- Styles: `stage.css`, `window.css`, `cursor.css`, `keys.css`
- `kit/index.ts` is a trimmed barrel exporting only `Stage`, `Window`, `Bar`,
  `Text`, `useReducedMotion` and the types used here. The full barrel re-exported
  every kit part and would have pulled in the whole library; `Window` is imported
  directly from `kit/window` because the barrel re-export collides with the DOM
  `Window` global under this project's JSX typechecking.

The closest published gold the example itself follows is `static-card`: one
quiet hierarchy, one hero window bled off an edge, one satellite straddling that
edge, real words only where the story needs them.

## Tokens changed

The gold's paper / carbon / cobalt look was replaced with BuildexNow's dark look:

| Role | Gold | Here |
|---|---|---|
| Stage ground / body | `#F1EEE6` paper | `#0B0B0C` charcoal |
| Raised surfaces (sidebar, cards, satellite) | `#FBF9F3` | `#141416` |
| Accent / signal | `#2F4BFF` cobalt | `#9AFD0D` lime |
| Primary text | `#17181A` | `#F4F4F5` |
| Muted / faint text | `#6B6B64` | `#8A8A90` / `#5E5E64` |
| Rules | opaque paper rule | `rgba(255,255,255,.09/.05)` |
| Window chrome | paper | `#141416` to match raised surfaces |

`theme="dark"` gives the kit's window chrome and shadow tokens the right base;
the board stylesheet then scopes the brand values under `.bb .ss-stage`. Only the
accent appears in orange: the selected nav mark, the **Live** pill, the preview's
own CTA, and the satellite dot / bars. Everything else is a quiet gray.

Content kept from the gold: the "Northstar" project, its `northstar.finance`
preview, "Money, made clear.", the three launch metrics and the "Launch health"
satellite. Non-selected nav labels became `Bar` filler instead of extra real
words, so the word budget stays on the story.

## Framing

- Wide design is 760 × 440. The 764 × 520 window is inset one 28px gutter at
  top-left and bleeds 32px right / 108px bottom; it fills well over two thirds of
  the stage. One rounded edge per side, stage masks everything.
- The 200px "Launch health" satellite sits at left 646 / top 168, straddling the
  window's right edge over its margin and running off the stage's right edge.
- The page ground is the stage ground (charcoal), so the window does not float on
  a plate.
- The status pill has a fixed 92px width and an absolutely positioned dot, so
  "In review" → "Live" changes in place without a layout jump.
- The idle cursor from the gold was removed: nothing in this story is driven by
  a pointer (the status changes on its own, like `dark-hero`), so a resting
  cursor would be unexplained decoration.
- `compact={{ below: 560, width: 358, height: 300 }}` is a real second design,
  not a squeeze: the sidebar and metrics row are dropped, the window is cropped
  tighter and the pill is inset so it stays whole. The satellite is repositioned
  to straddle the visible right edge. `BuildexBoard` also accepts a `compact`
  prop to force it and a `still` prop to suppress the loop.

## Story and poster

Four beats over roughly 10.2s: hold the draft (2.6s), publish — pill changes in
place and the satellite's dot and bars light orange (5.2s hold), reset, hold the
draft again (2.4s). The reset uses `act.snap()` so transitions are off for that
one patch: the score never animates backwards in view, and the loop ends in the
exact initial state, so `checkSeam` is clean.

The poster is `{ live: true }` — the **Live** result with the lit satellite — so
a thumbnail, reduced-motion render or screenshot tells the story on its own.
`Stage` handles `prefers-reduced-motion` (and the `still` prop) by dropping the
script and rendering the poster with all transitions disabled.

## What was verified

- `npx tsc --noEmit`: clean, zero errors across the project (run from the repo
  root); no diagnostics in `src/components/stageshow/`.
- Every relative import in the copied kit resolves to a copied file; the copied
  CSS files have no `@import` of their own, and the kit needs only `react` and
  `react-dom` (`flushSync`) beyond what is installed.
- Kit CSS uses `@layer stageshow`; the board stylesheet is unlayered, so its
  token overrides take precedence in the cascade.

## What was verified (2026-11-18)

- The exact board (`BuildexBoard.tsx`, `buildex-board.css`, trimmed `kit/`) was
  copied into the Stageshow preview as `examples/buildexnow-board/` and filmed with
  `node scripts/film.mjs "…/?capture=buildexnow-board" --gate` at 1440px (24 frames)
  and 390px (22 frames). **Both ended `rehearsal passed`** — every
  never-intentional framing line is at 0.
- The gate caught two real framing faults that are now fixed: the wide satellite
  sat 12px from the right edge where the gutter is 28px (moved to `left: 532px`,
  right gap 28px), and the compact satellite sat 8px from the bottom edge where
  the gutter is 16px (moved to `top: 168px` / `left: 194px`, 16px gutters). The
  compact "Launch health" label was 9px; it is now 10px.
- The status pill no longer swaps text in place: both labels stay mounted and
  crossfade on opacity, so the "In review" → "Live" change has an entrance and
  an exit. The contact sheet shows hold → publish → hold → snap-reset with the
  satellite lighting up, as authored.
- Remaining gate lines are the intentional transition-free snap at the loop seam
  and sampling gaps; neither fails the gate.
- Dark/blueprint/glass looks and `fidelity="minimal"` were not filmed; the study
  ships in its one dark, standard-fidelity brand look.
