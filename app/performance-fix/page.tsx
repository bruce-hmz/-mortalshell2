import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("performance-fix")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 performance fix",
    "mortal shell 2 crash fix",
    "mortal shell 2 stuttering fix",
    "mortal shell 2 fps drops",
    "mortal shell 2 keep crashing",
  ],
  alternates: { canonical: "/performance-fix/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1000, height: 562 }],
    type: "article",
  },
};

export default function PerformanceFixPage() {
  return <GuideArticle page={page} />;
}
