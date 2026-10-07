import type { Metadata } from "next";
import { getCourses } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { HardLink } from "@/components/HardLink";
export const metadata: Metadata = pageMetadata({ title: "Learn", description: "Structured learning paths for understanding complex systems in life sciences.", path: "/learn" });
export default function LearnPage() { const courses = getCourses(); return <main className="editorial-main"><p className="eyebrow">Learn</p><h1>Learn</h1><p className="lead">Some ideas make more sense in sequence.</p><p className="editorial-copy">These learning paths build from first principles, then progressively connect business models, operations, data, technology, and decision-making.</p>{courses.map((course) => <section className="learning-path" key={course.slug}><p className="course-meta">{course.status === "draft" ? "Draft preview" : "Available course"}</p><h2><HardLink href={course.route}>{course.title}</HardLink></h2><p>{course.dek}</p><HardLink className="editorial-link" href={course.route}>View the course →</HardLink></section>)}</main>; }
