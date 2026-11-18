# Surface brief — index (/)

## Scope / Visitor mode
Single-page personal introduction. **Persuade** in the softest sense: the visitor should feel they briefly met the person. No conversion goal beyond that feeling.

## Audience, job, proof/content, constraints
- Audience: friends, collaborators, curious strangers arriving from a bio link.
- Job: get a quick, human sense of who Magalih is (what he builds/reads/listens to) and how to reach him.
- Content: name masthead, 2-3 sentence about, now/currently log, one Spotify favorite-song card, contact doors (Instagram, GitHub, Discord username, email).
- Constraints: Next.js App Router + Tailwind 4 + TS; no client libraries; genuinely responsive at 375px; Lighthouse 95+ mobile; SEO basics (title, OG, description); anti-AI-slop rules from the brief (no purple-blue gradients, no glassmorphism, no emoji headings, no generic icons, no thick blur shadows, no rounded-2xl everywhere, no centered hero + Get Started CTA, no gradient text, no "available for work" badge, no Inter/Poppins/Manrope, no 12-column grid, no AI copywriting).

## Direction contract

THESIS: The page is one numbered letterpress business card, not a website. It refuses the category defaults: no nav, no hero CTA, no card grids, no icon rows — instead a masthead name staircase, a logbook, a rubber-stamped song sleeve, and door-list contacts; the print-shop fiction owns every component.

OWN-WORLD: Restrained palette on cream paper (#f2ece0) with ink (#1a1712), soft ink (#5b544b), and one vermilion accent (#b23d24). Ibarra Real Nova (editorial serif, variable) for display and body; Fragment Mono for field labels, times, and handles. Hairline rules, dotted leaders, a registration mark, a paper-grain overlay at 4.5%, and a rubber-stamp label. No cards except the single song sleeve; asymmetric grids throughout.

STORY: A visitor sees a name set like a masthead, reads one curious sentence, then a short about, a "sekarang" logbook, a song of the month (with Spotify embed in a custom sleeve), and a door list of ways to reach the person. The visitor leaves feeling they met someone with taste and a sense of humor.

FIRST VIEWPORT: Field line "Edisi November 2026 · kartu no. 001" top-left with a registration mark top-right. The name in three stacked lines with staircase indent, middle line italic, accent period. A two-line curiosity paragraph below, then a mono status row with an accent dot. No nav, no buttons. Primary action is simply scrolling.

FORM: The direction is a grounded editorial/print world, chosen from the brief's list ("personal blog era Blogspot yang di-upgrade taste-nya" + print/letterpress mood). Seed reference: none (unavailable), because the user pinned the direction in the brief and forbade question loops; the direction was assigned directly with the user's explicit aesthetic constraints as the pin.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions
- Real handles/email/Spotify ID are placeholders marked [EDIT] in `src/lib/content.ts`.
- Domain in `metadataBase` is a placeholder (https://magalih.dev).
