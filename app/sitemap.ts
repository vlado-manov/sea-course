import type { MetadataRoute } from "next";
import { tutorials } from "@/lib/content/tutorials";
import { tools } from "@/lib/content/tools";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aiseo.bg";
const locales = ["bg", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    "",
    "/tutorials",
    "/tools",
    "/glossary",
    "/guides",
    "/resources",
    "/prompts",
    "/case-studies",
    "/templates",
  ];

  const staticEntries = staticPages.flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );

  const tutorialEntries = tutorials.flatMap((t) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/tutorials/${t.slug}`,
      lastModified: t.updatedAt || t.publishedAt,
      changeFrequency: "monthly" as const,
      priority: t.featured ? 0.9 : 0.7,
    }))
  );

  const toolEntries = tools.flatMap((t) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/tools/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: t.featured ? 0.8 : 0.6,
    }))
  );

  const guideEntries = [
    "merchant-center",
    "schema-org",
    "technical-seo",
    "entity-seo",
    "ai-audit",
    "geo-guide",
  ].flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...staticEntries,
    ...tutorialEntries,
    ...toolEntries,
    ...guideEntries,
  ];
}
