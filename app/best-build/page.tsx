import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("best-build")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 best build",
    "mortal shell 2 builds",
    "mortal shell 2 best shell build",
    "mortal shell 2 combat build",
  ],
  alternates: { canonical: "/best-build/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "article",
  },
};

export default function BestBuildPage() {
  return <GuideArticle page={page} />;
}
