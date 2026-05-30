import Link from "next/link";
import type { CaseStudy } from "@/lib/projects";
import { ProjectMeta } from "./ProjectMeta";

export function ComingSoon({ project }: { project: CaseStudy }) {
  return (
    <article className="bg-ink text-paper">
      <div className="gutter flex min-h-[80svh] flex-col justify-center pt-36 pb-24">
        <p className="font-mono text-meta uppercase tracking-wider text-accent">
          Case Study
        </p>
        <h1 className="mt-8 max-w-[16ch] font-display text-section font-bold leading-[0.92] tracking-[-0.02em]">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="mt-6 max-w-[40ch] font-display text-lead text-paper/60">
            {project.subtitle}
          </p>
        )}

        <div className="mt-12">
          <ProjectMeta
            invert
            year={project.year}
            ongoing={project.ongoing}
            client={project.client}
            role={project.role}
            services={project.services ?? project.discipline}
          />
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <span className="inline-block border border-paper/25 px-4 py-2 font-mono text-meta uppercase tracking-wider text-paper/70">
            Coming soon
          </span>
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-accent"
            >
              {project.externalLink.label}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-paper"
          >
            <span className="text-accent transition-transform group-hover:-translate-x-1">
              ←
            </span>
            All work
          </Link>
        </div>
      </div>
    </article>
  );
}
