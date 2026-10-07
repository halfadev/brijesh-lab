import type { Entry } from "@/lib/content";
import { ArticleBody } from "@/components/ui/ArticlePrimitives";

export function ContentRenderer({ entry }: { entry: Entry }) {
  return <ArticleBody><div className="ui-rendered-content" dangerouslySetInnerHTML={{ __html: entry.html }} /></ArticleBody>;
}
