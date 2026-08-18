import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("weapons")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 weapons",
    "mortal shell 2 all weapons",
    "mortal shell 2 weapon upgrades",
    "mortal shell 2 ranged weapons",
  ],
  alternates: { canonical: "/weapons/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-3.jpg", width: 1000, height: 563 }],
    type: "article",
  },
};

export default function WeaponsPage() {
  return <GuideArticle page={page} />;
}
