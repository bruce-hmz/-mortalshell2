import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("missable-content")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 missable content",
    "mortal shell 2 missable trophies",
    "mortal shell 2 flower crown",
    "mortal shell 2 voltaic crown",
    "mortal shell 2 tar golem trophy",
  ],
  alternates: { canonical: "/missable-content/" },
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

export default function MissableContentPage() {
  return <GuideArticle page={page} />;
}
