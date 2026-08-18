import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("beginner-guide")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 beginner guide",
    "mortal shell 2 starter guide",
    "mortal shell 2 first hours guide",
  ],
  alternates: { canonical: "/beginner-guide/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/img/site-2.jpg"],
    type: "article",
  },
};

export default function BeginnerGuidePage() {
  return <GuideArticle page={page} />;
}
