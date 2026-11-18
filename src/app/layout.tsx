import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";
import SiteEffects from "@/components/effects";
import noise from "@/assets/noise.png";

// DECISION: Self-hosted variable fonts via next/font/local. Next handles
// preload, hashed asset URLs, and font-display; no Google CDN.
const ibarra = localFont({
  src: [
    {
      path: "../fonts/IbarraRealNova-VariableFont_wght.ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/IbarraRealNova-Italic-VariableFont_wght.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-ibarra",
  display: "swap",
});

const fragment = localFont({
  src: "../fonts/FragmentMono-Regular.ttf",
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

// DECISION: theme-color matches the paper. The paper-grain texture is
// imported as an asset and set as a CSS variable so static export keeps
// the correct hashed URL under the GitHub Pages basePath.
export const viewport: Viewport = {
  themeColor: "#f2ece0",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.edition}`,
    template: `%s - ${site.name}`,
  },
  description:
    "Digital business card for Magalih Irham Gunawan. Currently building many things at once, listening to Hindia, and writing small notes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.edition}`,
    description: "A digital business card. Introductions should happen slowly, without rushing.",
    images: [
      {
        url: `${site.url}og.png`,
        width: 1200,
        height: 630,
        alt: "Magalih Irham Gunawan - digital business card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.edition}`,
    description: "Digital business card for Magalih Irham Gunawan.",
    images: [`${site.url}og.png`],
  },
  icons: {
    icon: `${site.url}icon.svg`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibarra.variable} ${fragment.variable}`}>
      <body style={{ "--paper-grain": `url(${noise.src})` } as CSSProperties}>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
