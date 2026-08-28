import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("patch-notes")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 patch notes",
    "mortal shell 2 balance patch 1",
    "mortal shell 2 update history",
    "mortal shell 2 hotfix",
    "mortal shell 2 patch",
  ],
  alternates: { canonical: "/patch-notes/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-7.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-7.jpg" }],
  },
};

export default function PatchNotesPage() {
  return <GuideArticle page={page} />;
}
