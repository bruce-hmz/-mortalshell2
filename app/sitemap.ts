import type { MetadataRoute } from "next";
import { guidePages } from "@/content/pages";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-17");

  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "daily", priority: 1 },
    ...guidePages.map((page) => ({
      url: `${BASE_URL}/${page.slug}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/privacy/`, lastModified, priority: 0.2 },
    { url: `${BASE_URL}/terms/`, lastModified, priority: 0.2 },
  ];
}
