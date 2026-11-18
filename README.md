# Magalih Irham Gunawan — kartu nama digital

Personal landing page built as a letterpress business card. Next.js App Router + Tailwind CSS 4 + TypeScript, zero client-side UI libraries.

## Mulai

```bash
npm install
npm run dev
```

## Isi / edit konten

Semua teks pribadi ada di satu file: `src/lib/content.ts`. Baris yang butuh nilai asli kamu ditandai `// [EDIT]` (handle sosial, email, ID lagu Spotify, kota).

## Struktur

- `src/app/page.tsx` — komposisi halaman (Hero, Tentang, Sekarang, Lagu, Temukan Aku, Footer)
- `src/app/globals.css` — seluruh sistem desain: token, tipografi, komponen, responsive
- `src/app/layout.tsx` — metadata, SEO/OG, font self-hosted via next/font/local
- `src/lib/content.ts` — semua konten pribadi, di satu tempat
- `src/fonts/` — font variabel self-hosted (Ibarra Real Nova, Fragment Mono)
- `public/og.png` / `src/app/icon.svg` — OG image & favicon
- `PRODUCT.md` / `DESIGN.md` — catatan produk & sistem desain

## Build & deploy

```bash
npm run build
npm start
```

Hasil build statis penuh (prerendered), bisa di-deploy ke Vercel, Netlify, atau host statis apa pun.
