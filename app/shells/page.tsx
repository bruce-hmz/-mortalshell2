import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("shells")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 shells",
    "mortal shell 2 all shells",
    "mortal shell 2 classes",
    "mortal shell 2 shell locations",
  ],
  alternates: { canonical: "/shells/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/img/shot-1.jpg"],
    type: "article",
  },
};

export default function ShellsPage() {
  return <GuideArticle page={page} />;
}
