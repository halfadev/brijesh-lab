import type { Metadata } from "next";
import { EntryList } from "@/components/EntryList";
import { getEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Lab",
  description: "Exploratory projects and technology investigations by Brijesh Ramakrishnan.",
  path: "/lab",
});

export default function LabIndexPage() {
  const entries = getEntries("lab");

  return (
    <main className="about-main">
      <h1 className="page-title">Lab</h1>
      <p className="page-framing">Exploratory projects, experiments, and technology investigations.</p>
      <EntryList entries={entries} />
    </main>
  );
}
