import { GuideArticle } from "@/components/guide-article";
import { guidePages } from "@/content/pages";

const page = guidePages.find((p) => p.slug === "achievements");

export const metadata = {
  title: page?.metaTitle,
  description: page?.metaDescription,
  alternates: { canonical: "/achievements/" },
};

export default function AchievementsPage() {
  if (!page) throw new Error("Achievements page content missing");
  return <GuideArticle page={page} />;
}
