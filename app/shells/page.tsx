import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("shells")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 shells",
    "mortal shell 2 all shells",
    "mortal shell 2 classes",
    "mortal shell 2 shell locations",
  ],
  alternates: { canonical: "/shells/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/shot-1.jpg", width: 1920, height: 1080 }],
    type: "article",
  },
};

export default function ShellsPage() {
  return <GuideArticle page={page} />;
}
