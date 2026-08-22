import type { Metadata } from "next";
import { Cinzel, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { AdSlot } from "@/components/ad-slot";
import { ConsentBanner } from "@/components/consent-banner";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mortal Shell II Guide & Walkthrough Hub",
    template: "%s | Mortal Shell II Guide",
  },
  description:
    "Fan-made Mortal Shell II guide hub: beginner routes, best builds, all 8 shells, weapon upgrades, boss order, and PC performance fixes.",
  manifest: "/site.webmanifest",
  verification: {
    other: {
      "msvalidate.01": "4E8F39340F2231F9711A6DC34C13F360",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${sourceSerif.variable} ${plexMono.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <AdSlot />
        <SiteFooter />
        <ConsentBanner />
        <GoogleAnalytics gaId="G-2WH9BHR3T7" />
      </body>
    </html>
  );
}
