import type { MetadataRoute } from "next";
import { guidePages } from "@/content/pages";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-20");

  return [
    { url: `${BASE_URL}/`, lastModified },
    ...guidePages.map((page) => ({
      url: `${BASE_URL}/${page.slug}/`,
      lastModified,
    })),
    { url: `${BASE_URL}/about/`, lastModified },
    { url: `${BASE_URL}/privacy/`, lastModified },
    { url: `${BASE_URL}/terms/`, lastModified },
  ];
}
