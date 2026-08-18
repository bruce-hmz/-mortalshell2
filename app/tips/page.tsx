import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("tips")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 tips",
    "mortal shell 2 combat tips",
    "mortal shell 2 parry tips",
    "mortal shell 2 resolve tips",
  ],
  alternates: { canonical: "/tips/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/img/site-7.jpg"],
    type: "article",
  },
};

export default function TipsPage() {
  return <GuideArticle page={page} />;
}
