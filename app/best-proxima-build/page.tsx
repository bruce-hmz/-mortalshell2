import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("best-proxima-build")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 best proxima build",
    "mortal shell 2 proxima build",
    "best proxima build mortal shell 2",
    "mortal shell 2 lightning build",
  ],
  alternates: { canonical: "/best-proxima-build/" },
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

export default function BestProximaBuildPage() {
  return <GuideArticle page={page} />;
}
