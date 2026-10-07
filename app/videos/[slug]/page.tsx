import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublishedPage } from "@/components/PublishedPage";
import { getEntry, getEntrySlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getEntrySlugs("videos").map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = getEntry("videos", (await params).slug);
  return entry ? pageMetadata({ title: entry.title, description: entry.dek, path: entry.route, article: { publishedTime: entry.date } }) : {};
}
export default async function VideoPage({ params }: Props) {
  const entry = getEntry("videos", (await params).slug); if (!entry) notFound();
  return <PublishedPage entry={entry} />;
}
