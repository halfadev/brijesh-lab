import matter from "gray-matter";
import { marked } from "marked";
import generatedContent from "./generated-content.json";

export type ContentSection = "writing" | "videos" | "learn" | "lab";
export type ContentType = "article" | "video" | "course" | "lesson" | "lab";
export type ContentStatus = "draft" | "published";

export type EntryFrontmatter = {
  title: string; slug: string; type: ContentType; dek: string; date: string;
  status: ContentStatus; tags: string[]; featured: boolean; category?: string;
  course?: string; module?: string; youtubeId?: string; duration?: string;
  previous?: string; next?: string; objective?: string;
};
export type EntrySummary = EntryFrontmatter & { section: ContentSection; route: string; draft: boolean };
export type Entry = EntrySummary & { source: string; html: string };

type GeneratedContentFile = { path: string; raw: string };
const contentFiles = generatedContent as GeneratedContentFile[];

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === "string" ? value : "";
}
function normalizeString(value: unknown): string | undefined {
  if (typeof value === "number") return String(value).padStart(2, "0");
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMarkdown(value: string): string {
  return marked.parse(value.trim(), { async: false }) as string;
}

function renderEmbeddedComponents(source: string): string {
  return source
    .replace(/<KeyConcept>([\s\S]*?)<\/KeyConcept>/g, (_match, body: string) =>
      `<aside class="ui-key-concept">${renderMarkdown(body)}</aside>`,
    )
    .replace(/<Callout\s+title="([^"]+)">([\s\S]*?)<\/Callout>/g, (_match, title: string, body: string) =>
      `<aside class="ui-callout ui-callout-blue"><h3>${escapeHtml(title)}</h3>${renderMarkdown(body)}</aside>`,
    )
    .replace(/<Sources>([\s\S]*?)<\/Sources>/g, (_match, body: string) =>
      `<section class="ui-sources"><h2>Sources and references</h2>${renderMarkdown(body)}</section>`,
    )
    .replace(/<InfographicBlock\s+([^>]+)\/>/g, (_match, attributes: string) => {
      const stringAttribute = (name: string) => attributes.match(new RegExp(`${name}="([^"]*)"`))?.[1] ?? "";
      const numberAttribute = (name: string, fallback: number) => Number(attributes.match(new RegExp(`${name}=\\{(\\d+)\\}`))?.[1] ?? fallback);
      const src = stringAttribute("src");
      const alt = stringAttribute("alt");
      const caption = stringAttribute("caption");
      const width = numberAttribute("width", 1600);
      const height = numberAttribute("height", 900);

      return `<figure class="ui-media-block ui-infographic"><a href="${escapeHtml(src)}" target="_blank" rel="noreferrer" aria-label="Open full-size image"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="${width}" height="${height}" /></a>${caption ? `<figcaption class="ui-image-caption">${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
    });
}

function routeFor(section: ContentSection, slug: string, course?: string, type?: ContentType) {
  if (type === "course") return `/learn/${slug}`;
  if (section === "learn") return `/learn/${course}/${slug}`;
  return `/${section}/${slug}`;
}
function readFile(section: ContentSection, filePath: string, raw: string): Entry {
  const { data, content } = matter(raw);
  const pathParts = filePath.split("/");
  const fallbackSlug = pathParts.at(-1)?.replace(/\.(md|mdx)$/, "") ?? "";
  const courseFromPath = section === "learn"
    ? pathParts[1]
    : undefined;
  const type = (data.type ?? (section === "videos" ? "video" : section === "lab" ? "lab" : section === "learn" ? "lesson" : "article")) as ContentType;
  const slug = normalizeString(data.slug) ?? (type === "course" ? courseFromPath : fallbackSlug) ?? fallbackSlug;
  const status: ContentStatus = data.status === "draft" || data.draft === true ? "draft" : "published";
  const course = normalizeString(data.course) ?? courseFromPath;
  if (!data.title || !slug || !type) throw new Error(`Missing required content frontmatter in content/${filePath}`);
  return {
    section, slug, type, title: String(data.title), dek: String(data.dek ?? ""),
    date: normalizeDate(data.date), status,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [], featured: Boolean(data.featured),
    category: normalizeString(data.category), course, module: normalizeString(data.module),
    youtubeId: normalizeString(data.youtubeId), duration: normalizeString(data.duration),
    previous: normalizeString(data.previous), next: normalizeString(data.next),
    objective: normalizeString(data.objective), route: routeFor(section, slug, course, type),
    draft: status === "draft", source: content,
    html: marked.parse(renderEmbeddedComponents(content), { async: false }) as string,
  };
}
export function getAllContent(): Entry[] {
  const sections: ContentSection[] = ["writing", "videos", "learn", "lab"];
  return sections.flatMap((section) =>
    contentFiles
      .filter((file) => file.path.startsWith(`${section}/`))
      .map((file) => readFile(section, file.path, file.raw)),
  );
}
function newestFirst(a: EntrySummary, b: EntrySummary) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; }
export function getEntries(section: ContentSection, includeDrafts = process.env.NODE_ENV !== "production"): EntrySummary[] {
  return getAllContent().filter((entry) => entry.section === section && entry.type !== "course")
    .filter((entry) => includeDrafts || entry.status === "published").sort(newestFirst);
}
export function getPublishedEntries(): EntrySummary[] {
  return getAllContent().filter((entry) => entry.type !== "course" && entry.status === "published").sort(newestFirst);
}
export function getFeaturedEntries(limit = 4): EntrySummary[] {
  return getPublishedEntries().filter((entry) => entry.featured).slice(0, limit);
}
export function getEntry(section: ContentSection, slug: string, course?: string): Entry | null {
  const entry = getAllContent().find((item) => item.section === section && item.slug === slug && (!course || item.course === course));
  if (!entry || (process.env.NODE_ENV === "production" && entry.status !== "published")) return null;
  return entry;
}
export function getCourse(slug: string): Entry | null {
  const entry = getAllContent().find((item) => item.type === "course" && item.slug === slug);
  if (!entry || (process.env.NODE_ENV === "production" && entry.status !== "published")) return null;
  return entry;
}
export function getCourses(includeDrafts = process.env.NODE_ENV !== "production"): EntrySummary[] {
  return getAllContent().filter((entry) => entry.type === "course" && (includeDrafts || entry.status === "published")).sort(newestFirst);
}
export function getCourseLessons(course: string, includeDrafts = process.env.NODE_ENV !== "production"): EntrySummary[] {
  return getAllContent().filter((entry) => entry.type === "lesson" && entry.course === course)
    .filter((entry) => includeDrafts || entry.status === "published")
    .sort((a, b) => (a.module ?? "").localeCompare(b.module ?? ""));
}
export function getEntrySlugs(section: ContentSection): string[] { return getEntries(section, false).map((entry) => entry.slug); }
export function formatDate(isoDate: string): string {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
export function formatMonthYear(isoDate: string): string {
  if (!isoDate) return "";
  const [year, month] = isoDate.split("-").map(Number);
  if (!year || !month) return isoDate;
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", { year: "numeric", month: "long", timeZone: "UTC" });
}
export function getNow() {
  const raw = contentFiles.find((file) => file.path === "now.md")?.raw ?? "";
  const { data, content } = matter(raw);
  return { updated: normalizeDate(data.updated), html: marked.parse(content, { async: false }) as string };
}
