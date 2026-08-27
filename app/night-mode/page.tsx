import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("night-mode")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 night mode",
    "mortal shell 2 night mode guide",
    "mortal shell 2 the collector",
    "mortal shell 2 gloom bonus",
    "mortal shell 2 thestus marrow keep",
  ],
  alternates: { canonical: "/night-mode/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-4.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-4.jpg" }],
  },
};

export default function NightModePage() {
  return <GuideArticle page={page} />;
}
