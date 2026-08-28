import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("sidearms")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 sidearms",
    "mortal shell 2 sidearm locations",
    "mortal shell 2 guns lots of guns",
    "mortal shell 2 troubadour's lute",
    "mortal shell 2 triarch repeater",
  ],
  alternates: { canonical: "/sidearms/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-3.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-3.jpg" }],
  },
};

export default function SidearmsPage() {
  return <GuideArticle page={page} />;
}
