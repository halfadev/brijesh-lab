import { ArticleHeader, PreviousNext, VideoEmbed } from "@/components/ui/ArticlePrimitives";
import { PageContainer } from "@/components/ui/LayoutPrimitives";
import { ContentRenderer } from "@/components/ContentRenderer";
import { formatDate, type Entry } from "@/lib/content";

const labels = { article: "Writing", video: "Video essay", lesson: "Course lesson", lab: "Lab note", course: "Course" } as const;

export async function PublishedPage({ entry, previous, next }: { entry: Entry; previous?: { href: string; title: string }; next?: { href: string; title: string } }) {
  const eyebrow = entry.type === "lesson" ? `${entry.course?.replaceAll("-", " ")} · Module ${entry.module}` : entry.category ?? labels[entry.type];
  const meta = [formatDate(entry.date), entry.duration, entry.status === "draft" ? "Draft preview" : ""].filter(Boolean).join(" · ");
  return <main className="publication-entry"><PageContainer width="wide"><ArticleHeader eyebrow={eyebrow} title={entry.title} dek={entry.dek} meta={meta} />{entry.youtubeId ? <VideoEmbed youtubeId={entry.youtubeId} title={entry.title} /> : null}<ContentRenderer entry={entry} />{previous || next ? <PreviousNext previous={previous} next={next} /> : null}</PageContainer></main>;
}
