import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("performance-fix")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 crash fix",
    "mortal shell 2 crashing",
    "mortal shell 2 crash on load",
    "mortal shell 2 keeps crashing",
    "mortal shell 2 stuttering fix",
    "mortal shell 2 won't launch",
    "mortal shell 2 black screen",
  ],
  alternates: { canonical: "/performance-fix/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1000, height: 562 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg" }],
  },
};

export default function PerformanceFixPage() {
  return <GuideArticle page={page} />;
}
