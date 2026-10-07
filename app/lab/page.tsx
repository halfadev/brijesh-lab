import type { Metadata } from "next";
import { EntryList } from "@/components/EntryList";
import { getEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Lab",
  description: "Research and working notes by Brijesh Ramakrishnan.",
  path: "/lab",
});

export default function LabIndexPage() {
  const entries = getEntries("lab");

  return (
    <main className="about-main">
      <h1 className="page-title">Lab</h1>
      <p className="page-framing">Compact research notes, open questions, and things learned by doing.</p>
      <EntryList entries={entries} />
    </main>
  );
}
