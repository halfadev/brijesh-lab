import type { Metadata } from "next";
import { EntryList } from "@/components/EntryList";
import { getEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Essays",
  description: "Essays by Brijesh Ramakrishnan.",
  path: "/writing",
});

export default function WritingIndexPage() {
  const entries = getEntries("writing");

  return (
    <main className="about-main">
      <h1 className="page-title">Essays</h1>
      <p className="page-framing">Ideas, observations, and occasional detours that do not need to become a course.</p>
      <p className="page-framing">This is the more personal and exploratory part of the site.</p>
      <EntryList entries={entries} />
    </main>
  );
}
