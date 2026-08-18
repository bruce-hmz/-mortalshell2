import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("weapons")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 weapons",
    "mortal shell 2 all weapons",
    "mortal shell 2 weapon upgrades",
    "mortal shell 2 ranged weapons",
  ],
  alternates: { canonical: "/weapons/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/img/site-3.jpg"],
    type: "article",
  },
};

export default function WeaponsPage() {
  return <GuideArticle page={page} />;
}
