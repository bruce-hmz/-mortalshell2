import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("farming-guide")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 farming guide",
    "mortal shell 2 gloom farming",
    "mortal shell 2 coin farming",
    "mortal shell 2 gold fast",
    "mortal shell 2 level up fast",
    "mortal shell 2 tarforge gloom cost",
  ],
  alternates: { canonical: "/farming-guide/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg" }],
  },
};

export default function FarmingGuidePage() {
  return <GuideArticle page={page} />;
}
