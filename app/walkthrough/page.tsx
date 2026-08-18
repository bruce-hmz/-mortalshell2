import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("walkthrough")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 walkthrough",
    "mortal shell 2 full walkthrough",
    "mortal shell 2 progression guide",
    "mortal shell 2 chapter guide",
  ],
  alternates: { canonical: "/walkthrough/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/img/site-5.jpg"],
    type: "article",
  },
};

export default function WalkthroughPage() {
  return <GuideArticle page={page} />;
}
