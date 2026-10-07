import type { MetadataRoute } from "next";
import { getCourses, getPublishedEntries } from "@/lib/content";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/start-here`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/learn`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/explainers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/explainers/one-medicine-five-systems`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/research`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/writing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/videos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/lab`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = getCourses(false).map((course) => ({ url: `${siteUrl}${course.route}`, lastModified: course.date, changeFrequency: "monthly", priority: 0.8 }));
  const entryRoutes: MetadataRoute.Sitemap = getPublishedEntries().map((entry) => ({
    url: `${siteUrl}${entry.route}`,
    lastModified: entry.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...entryRoutes];
}
