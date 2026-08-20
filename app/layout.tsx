import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";

// Both fonts are self-hosted, matching the platform: Plus Jakarta Sans is
// fetched and bundled at build time by next/font/google, Geist Mono ships in
// the `geist` package (next/font/local under the hood, no network fetch at
// all). Neither hits an external font host at runtime. `variable` exposes each
// as a CSS custom property so globals.css's `body` rule and the
// `font-mono-figures` utility can consume them.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-jakarta",
});

const SITE_URL = "https://www.palanae.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    "Palanae is a business-wide data platform that captures the work your team is already doing — meetings, notes, documents, deals — and turns it into structured, searchable knowledge. AI proposes; people approve.",
  // No logo asset exists yet: the Class 9/42 clearance hold means text
  // wordmark only, no commissioned mark, so there is deliberately no
  // opengraph-image here. Add one once the mark clears.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "A repository that fills itself from work you were already doing. AI proposes structured facts with citations; a person approves before anything lands.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // `data-theme="dark"` is stated explicitly rather than left implicit. The
  // token file pins --palette-* to the dark ramp regardless, but the
  // attribute is what tells a browser to render form controls, scrollbars,
  // and the address bar in dark chrome (via the color-scheme rule below).
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <body className={`${jakarta.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  );
}
