import { formatDate, type EntrySummary } from "@/lib/content";
import { HardLink } from "@/components/HardLink";

type EntryListProps = {
  entries: EntrySummary[];
  /** Show a content-type badge next to the date. Used where sections mix. */
  showTrack?: boolean;
};

export function EntryList({ entries, showTrack = false }: EntryListProps) {
  if (entries.length === 0) {
    return <p className="entry-empty">Nothing published here yet.</p>;
  }

  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <li key={entry.route} className="entry-item">
          <HardLink className="entry-title" href={entry.route}>
            {entry.title}
          </HardLink>
          <p className="entry-dek">{entry.dek}</p>
          <p className="entry-meta">
            {showTrack && (
              <span className="entry-track">
                {entry.type === "article" ? "Writing" : entry.type === "video" ? "Video" : entry.type === "lesson" ? "Lesson" : "Lab"}
              </span>
            )}
            {entry.status === "draft" ? <span className="entry-track">Draft preview</span> : null}
            <time dateTime={entry.date}>{formatDate(entry.date)}</time>
          </p>
        </li>
      ))}
    </ul>
  );
}
