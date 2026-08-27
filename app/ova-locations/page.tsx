import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("ova-locations")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 ova locations",
    "mortal shell 2 all ova",
    "mortal shell 2 196 ova",
    "mortal shell 2 ascension trophy",
    "mortal shell 2 ova ng+ bug",
  ],
  alternates: { canonical: "/ova-locations/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-5.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-5.jpg" }],
  },
};

export default function OvaLocationsPage() {
  return <GuideArticle page={page} />;
}
