import type { Metadata } from "next";
import { EntryList } from "@/components/EntryList";
import { getEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Videos", description: "Video essays by Brijesh Ramakrishnan.", path: "/videos" });

export default function VideosPage() {
  return <main className="about-main"><h1 className="page-title">Videos</h1><p className="page-framing">Visual explanations and video essays about the systems underneath complicated outcomes.</p><EntryList entries={getEntries("videos")} /></main>;
}
