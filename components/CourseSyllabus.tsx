import type { EntrySummary } from "@/lib/content";
import { HardLink } from "@/components/HardLink";

export function CourseSyllabus({ modules }: { modules: EntrySummary[] }) {
  return (
    <ol className="course-syllabus">
      {modules.map((module) => (
        <li key={module.slug} className="course-module">
          <span className="course-number">Module {module.module}</span>
          <div>
            <h2>
              <HardLink href={module.route}>{module.title}</HardLink>
            </h2>
            <p>{module.objective ?? module.dek}</p>
            <p className="course-meta">
              Text · diagrams <span aria-hidden="true">/</span> {module.status === "published" ? "Available" : "Draft preview"}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
