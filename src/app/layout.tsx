import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Butterfly Built | Master Carpenters Sydney — Bespoke Carpentry & Joinery",
    template: "%s | Butterfly Built",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  generator: "Next.js",
  keywords: [
    "carpenter Sydney",
    "carpentry Sydney",
    "carpenter Bondi",
    "carpenter Eastern Suburbs",
    "custom joinery Sydney",
    "bespoke carpentry Sydney",
    "decking Sydney",
    "renovation carpenter Sydney",
  ],
  icons: { icon: "/images/logo.svg" },
  openGraph: {
    title: "Butterfly Built | Master Carpenters Sydney",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Butterfly Built | Master Carpenters Sydney",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
