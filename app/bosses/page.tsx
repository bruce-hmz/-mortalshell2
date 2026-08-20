import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("bosses")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 bosses",
    "mortal shell 2 all bosses",
    "mortal shell 2 boss list",
    "mortal shell 2 final boss",
  ],
  alternates: { canonical: "/bosses/" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    images: [{ url: "/img/site-5.jpg", width: 750, height: 422 }],
    type: "article",
  },
};

export default function BossesPage() {
  return <GuideArticle page={page} />;
}
