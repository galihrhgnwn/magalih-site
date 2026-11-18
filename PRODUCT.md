# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) 16 + Tailwind CSS 4 + TypeScript, as specified in the user's brief. Code is in English; page content is authored in Indonesian (inferred from the user's Indonesian brief and known profile; content lives in `src/lib/content.ts` and is marked with [EDIT] where it needs the user's real values).

## Users

People who meet Magalih Irham Gunawan (Galih) online and want a quick, human sense of who he is: what he is building, reading, and listening to, and where to reach him. Friends, collaborators, and curious strangers arriving from a link in a bio or chat.

## Product Purpose

A digital business card: a personal introduction page. Success is a visitor closing the page feeling they briefly met Galih, that the page has personality, warmth, and specific true details rather than portfolio rhetoric.

## Positioning

A letterpress/business-card-inspired web page that presents Galih as a maker who writes code and sentences, currently building many things at once. Distinct from AI-template landing pages through editorial typography, asymmetric composition, hand-authored copy, and zero SaaS tropes.

## Operating Context

Read on phones and desktops, usually shared as a link. Likely opened in quiet moments; should load fast (Lighthouse 95+ target on mobile) and feel calm, not promotional.

## Capabilities and Constraints

- Single page, intentionally no navigation.
- Sections: hero/name, short about, now/currently, favorite song (custom-styled Spotify embed), contact doors.
- Self-hosted variable fonts (Ibarra Real Nova serif + Fragment Mono), no external font CDN.
- Placeholder Spotify track (Hindia - Evaluasi); user will swap the ID.
- Discord is shown as a username only, deliberately not a link.
- Must be genuinely mobile-responsive (tested at 375px).
- No JS libraries beyond React/Next; zero client-side animation libraries.

## Brand Commitments

- Tone: personal, quiet, confident, slightly quirky.
- Anti-AI-slop constraints from the brief: no purple-blue gradients, no glassmorphism, no emoji in headings, no generic icon libraries, no thick blur shadows, no rounded-2xl everywhere, no centered hero with a Get Started CTA, no gradient text, no "Available for work" badge, no Inter/Poppins/Manrope defaults, no 12-column template grid, no AI-sounding copywriting.
- The result should feel designed by a human with high taste.

## Evidence on Hand

Real handles inferred from the user's known GitHub/Discord username `galihrhgnwn` (inferred, marked [EDIT]); placeholder email `halo@magalih.dev` (inferred, marked [EDIT]); placeholder Spotify track ID. No personal photos exist or are assumed; the design does not depend on imagery.

## Product Principles

1. Honesty over polish: real, specific details beat generic claims.
2. Restraint: a small palette, clear hierarchy, generous whitespace.
3. The medium is the message: the numbered-card fiction unifies every section.
4. Performance is part of taste: self-hosted fonts, minimal JS, no layout shift.
5. Accessible: WCAG AA contrast, reduced-motion support, visible focus, semantics.

## Accessibility & Inclusion

Target WCAG AA contrast for body text; prefers-reduced-motion honored; semantic landmarks; keyboard focus visible; text remains readable at 375px.
