# Design

## World
Letterpress stationery / a printed business card. The page is one continuous numbered card, not a website with navigation. Color, type, and components all follow the fiction of a letterpress print shop: paper, ink, a rubber stamp, a registration mark, dotted leaders, a colophon.

## Palette (restrained)
- Paper `#f2ece0` (cream base; never pure #fff)
- Paper deep `#e7dfcd` (inset surfaces, iframe well)
- Ink `#1a1712` (foreground, display)
- Ink soft `#5b544b` (secondary text; 6.34:1 on paper)
- Accent `#b23d24` (vermilion; used as ink, never as gradient)

## Type
- Ibarra Real Nova (editorial serif, variable 400–700, upright + italic): display and body.
- Fragment Mono (quirky monospace): field labels, times, handles, meta. Never for running text.
- Self-hosted via next/font/local (variable subsets); no network font CDN. Preloaded automatically.

## Composition
- Asymmetric masthead: name set in three stacked lines with a staircase indent, middle line italic, accent period.
- No nav. No hero CTA. Numbered-card fiction: sections carry field numbers 01–04 inside the heading.
- About: asymmetric two-column (meta column + reading column with drop cap and hanging margin note).
- Now: logbook rows with mono times and hairlines; hover nudges the row and warms the time.
- Song: ink sleeve (rotated, soft shadow, vinyl accent circle) beside a paper player panel with a rubber-stamp label and the Spotify embed set in a deep-paper well.
- Find me: door list with field numbers, dotted leaders, and handles that warm to accent on hover. Discord is deliberately not a link.
- Paper grain: fixed noise overlay at 4.5% multiply; themed scrollbar, selection, focus ring.

## Motion
- Entrance: name lines stagger in once (ease-out, translateY), treated as a breath, not a show.
- Scroll: reveals use `animation-timeline: view()` where supported; content stays visible by default elsewhere.
- Hover: underline draws, color shifts, and a 0.3s padding nudge. No bounce, no scaling, no parallax.
- `prefers-reduced-motion` collapses all animation and transition durations.

## Responsive
Single re-composition breakpoint at 720px: grids collapse to one column, leaders hide, notes drop under handles, the sleeve loses its rotation. Verified at 375px and 1440px in a real browser.

## Dark mode
None. The paper scene is light by nature; one committed world beats two half-finished ones.
