import { ImageResponse } from "next/og";
import { getEntry } from "@/lib/content";
import { ogContentType, ogSize, OgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("lab", slug);

  return new ImageResponse(<OgCard title={entry?.title ?? "Lab"} />, size);
}
