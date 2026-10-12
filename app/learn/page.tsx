import type { Metadata } from "next";
import { CourseSyllabus } from "@/components/CourseSyllabus";
import { HardLink } from "@/components/HardLink";
import { getCourseLessons, getCourses } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Learn",
  description: "Structured pharmaceutical and life-sciences learning from first principles.",
  path: "/learn",
});

const explainers = [
  {
    href: "/learn/four-wall-vs-network-visibility",
    title: "Four-wall visibility vs network visibility",
    dek: "Why seeing your own systems clearly is not the same as seeing the independent network that executes the work.",
  },
  {
    href: "/learn/one-medicine-five-systems",
    title: "One medicine, five systems of record",
    dek: "Why one serialized carton can have several correct-but-incomplete digital records—and how to assemble them into a trustworthy answer.",
  },
] as const;

export default function LearnPage() {
  const courses = getCourses();
  const primaryCourse = courses[0];
  const lessons = primaryCourse ? getCourseLessons(primaryCourse.slug) : [];

  return (
    <main className="editorial-main curriculum-page">
      <p className="eyebrow">Learn</p>
      <h1>Learn</h1>
      <p className="lead">
        If you are new to life sciences, the industry can look like a wall of acronyms, companies,
        regulations, and specialized roles.
      </p>
      <div className="editorial-copy">
        <p>A better way to learn it is to start with the system.</p>
        <p>
          Who discovers medicines? Who owns them? Who actually makes them? Who moves them? Who buys
          them? Who pays? What information travels alongside the product? And why does the answer
          change depending on where you are in the world?
        </p>
        <p>
          This learning path starts with those questions and gradually moves into data,
          interoperability, healthcare operations, and AI.
        </p>
        <p>No prior industry knowledge is required.</p>
      </div>

      {primaryCourse ? (
        <section className="curriculum-intro" aria-labelledby="primary-course-title">
          <p className="eyebrow">Primary learning path</p>
          <h2 id="primary-course-title">
            <HardLink href={primaryCourse.route}>{primaryCourse.title}</HardLink>
          </h2>
          <p>{primaryCourse.dek}</p>
          <HardLink className="editorial-link" href={primaryCourse.route}>
            View the course overview →
          </HardLink>
        </section>
      ) : null}

      <CourseSyllabus modules={lessons} />

      <section className="learning-path" aria-labelledby="focused-explanations-title">
        <p className="eyebrow">Focused explanations</p>
        <h2 id="focused-explanations-title">Pharmaceutical systems in practice</h2>
        <div className="explainer-list">
          {explainers.map((explainer) => (
            <HardLink className="featured-explainer" href={explainer.href} key={explainer.href}>
              <h2>{explainer.title}</h2>
              <p>{explainer.dek}</p>
              <strong>Read the explainer →</strong>
            </HardLink>
          ))}
        </div>
      </section>
    </main>
  );
}
