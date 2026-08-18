import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("walkthrough")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 walkthrough",
    "mortal shell 2 full walkthrough",
    "mortal shell 2 progression guide",
    "mortal shell 2 chapter guide",
  ],
  alternates: { canonical: "/walkthrough/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-5.jpg", width: 750, height: 422 }],
    type: "article",
  },
};

export default function WalkthroughPage() {
  return <GuideArticle page={page} />;
}
