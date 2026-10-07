import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublishedPage } from "@/components/PublishedPage";
import { getCourseLessons, getCourses, getEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ course: string; lesson: string }> };
export function generateStaticParams() { return getCourses(false).flatMap((course) => getCourseLessons(course.slug, false).map((lesson) => ({ course: course.slug, lesson: lesson.slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course, lesson } = await params; const entry = getEntry("learn", lesson, course);
  return entry ? pageMetadata({ title: entry.title, description: entry.dek, path: entry.route, article: { publishedTime: entry.date } }) : {};
}
export default async function LessonPage({ params }: Props) {
  const { course, lesson } = await params; const entry = getEntry("learn", lesson, course); if (!entry) notFound();
  const lessons = getCourseLessons(course); const index = lessons.findIndex((item) => item.slug === lesson);
  const previous = lessons[index - 1]; const next = lessons[index + 1];
  return <PublishedPage entry={entry} previous={previous ? { href: previous.route, title: previous.title } : { href: `/learn/${course}`, title: "Course overview" }} next={next ? { href: next.route, title: next.title } : { href: `/learn/${course}`, title: "Course overview" }} />;
}
