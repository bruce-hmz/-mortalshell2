import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("beginner-guide")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 beginner guide",
    "mortal shell 2 starter guide",
    "mortal shell 2 first hours guide",
  ],
  alternates: { canonical: "/beginner-guide/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "article",
  },
};

export default function BeginnerGuidePage() {
  return <GuideArticle page={page} />;
}
