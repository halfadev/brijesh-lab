import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/ContentRenderer";
import { CourseSyllabus } from "@/components/CourseSyllabus";
import { ArticleHeader } from "@/components/ui/ArticlePrimitives";
import { PageContainer } from "@/components/ui/LayoutPrimitives";
import { getCourse, getCourses, getCourseLessons } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ course: string }> };
export function generateStaticParams() { return getCourses(false).map((course) => ({ course: course.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourse((await params).course);
  return course ? pageMetadata({ title: course.title, description: course.dek, path: course.route }) : {};
}
export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).course); if (!course) notFound();
  const lessons = getCourseLessons(course.slug);
  return <main className="publication-entry course-overview"><PageContainer width="content"><ArticleHeader eyebrow="Course" title={course.title} dek={course.dek} /><ContentRenderer entry={course} /><h2 className="syllabus-title">Course syllabus</h2><CourseSyllabus modules={lessons} /></PageContainer></main>;
}
