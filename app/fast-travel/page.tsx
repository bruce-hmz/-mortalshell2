import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { getGuidePage } from "@/content/pages";

const page = getGuidePage("fast-travel")!;

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: [
    "mortal shell 2 fast travel",
    "mortal shell 2 beacons",
    "mortal shell 2 beacon locations",
    "how to fast travel mortal shell 2",
    "mortal shell 2 mether's breath",
  ],
  alternates: { canonical: "/fast-travel/" },
  openGraph: {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg", width: 1600, height: 899 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    images: [{ url: "/img/site-2.jpg" }],
  },
};

export default function FastTravelPage() {
  return <GuideArticle page={page} />;
}
