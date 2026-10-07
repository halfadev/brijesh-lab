import { formatDate, type Entry } from "@/lib/content";
import { HardLink } from "@/components/HardLink";

type ArticleLayoutProps = {
  entry: Entry;
  breadcrumbLabel: string;
  breadcrumbHref: string;
};

export function ArticleLayout({ entry, breadcrumbLabel, breadcrumbHref }: ArticleLayoutProps) {
  return (
    <main className="article-main">
      <HardLink className="breadcrumb" href={breadcrumbHref}>
        &lt;- {breadcrumbLabel}
      </HardLink>
      <article className="article">
        <h1 className="article-title">{entry.title}</h1>
        <p className="article-dek">{entry.dek}</p>
        <p className="article-date">
          <time dateTime={entry.date}>{formatDate(entry.date)}</time>
        </p>
        {/* eslint-disable-next-line react/no-danger -- content is our own markdown, rendered at build time */}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: entry.html }} />
      </article>
    </main>
  );
}
