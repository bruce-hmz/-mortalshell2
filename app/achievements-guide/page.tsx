import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("achievements-guide")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 achievement guide",
    "mortal shell 2 trophy guide",
    "mortal shell 2 seeking the past",
    "mortal shell 2 shell memories",
    "mortal shell 2 missable trophies",
    "mortal shell 2 lord of war",
  ],
  alternates: { canonical: "/achievements-guide/" },
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

export default function AchievementsGuidePage() {
  return <GuideArticle page={page} />;
}
