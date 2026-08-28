import { GuideArticle } from "@/components/guide-article";
import { guidePages } from "@/content/pages";

const page = guidePages.find((p) => p.slug === "achievements/seeking-the-past");

export const metadata = {
  title: page?.metaTitle,
  description: page?.metaDescription,
  alternates: { canonical: "/achievements/seeking-the-past/" },
};

export default function SeekingThePastPage() {
  if (!page) throw new Error("Seeking the Past page content missing");
  return <GuideArticle page={page} />;
}
