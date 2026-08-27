import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("side-quests")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 side quests",
    "mortal shell 2 npc quests",
    "mortal shell 2 gorf hilga",
    "mortal shell 2 vlas quest",
    "mortal shell 2 baghead",
    "mortal shell 2 genessa shell",
    "mortal shell 2 egon gloom",
  ],
  alternates: { canonical: "/side-quests/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-3.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-3.jpg" }],
  },
};

export default function SideQuestsPage() {
  return <GuideArticle page={page} />;
}
