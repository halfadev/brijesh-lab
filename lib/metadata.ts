import type { Metadata } from "next";
import { siteName, siteUrl } from "./site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Pass for article-type routes (writing/lab entries). */
  article?: { publishedTime: string };
  /**
   * Root-relative path to this route's OG image. Defaults to the site-wide
   * image at "/opengraph-image". Pages that generate their own image
   * (writing/lab entries) should pass their own path explicitly: routes that
   * define an `openGraph` object of their own don't inherit the file-based
   * image convention from an ancestor segment, so it has to be spelled out.
   */
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  article,
  image = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} - ${siteName}`;
  const images = [{ url: image, width: 1200, height: 630 }];

  const openGraph: Metadata["openGraph"] = article
    ? {
        title: fullTitle,
        description,
        url,
        siteName,
        type: "article",
        publishedTime: article.publishedTime,
        images,
      }
    : {
        title: fullTitle,
        description,
        url,
        siteName,
        type: "website",
        images,
      };

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
