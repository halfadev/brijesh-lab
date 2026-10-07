import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublishedPage } from "@/components/PublishedPage";
import { getEntry, getEntrySlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return getEntrySlugs("lab").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("lab", slug);
  if (!entry) return {};

  return pageMetadata({
    title: entry.title,
    description: entry.dek,
    path: `/lab/${entry.slug}`,
    article: { publishedTime: entry.date },
    image: `/lab/${entry.slug}/opengraph-image`,
  });
}

export default async function LabEntryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry("lab", slug);
  if (!entry) notFound();

  return <PublishedPage entry={entry} />;
}
