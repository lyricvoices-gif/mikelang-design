import Link from "next/link";
import type { CaseStudy } from "@/lib/projects";
import { MediaBlock } from "./MediaBlock";
import { Reveal } from "./Reveal";

function metaLine(p: CaseStudy) {
  const year = p.ongoing ? `${p.year}—Present` : `${p.year}`;
  return [p.client, p.role, year].filter(Boolean).join("  ·  ");
}

/** Tier 1 — full-width, ink background, cinematic. */
export function ProjectFeatureFlagship({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-ink text-paper"
    >
      <div className="gutter py-[var(--section-space)]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-meta uppercase tracking-wider text-accent">
            Flagship
          </span>
        </div>
        <div className="mt-6 flex items-start gap-3">
          <span className="mt-[0.55em] hidden h-3 w-3 shrink-0 -translate-x-4 bg-accent opacity-0 transition-all duration-[280ms] group-hover:translate-x-0 group-hover:opacity-100 md:block" />
          <h3 className="font-display text-section font-bold leading-[0.95] tracking-tight transition-transform duration-[280ms] group-hover:translate-x-2">
            {project.title}
          </h3>
        </div>
        {project.subtitle && (
          <p className="mt-6 max-w-[40ch] font-display text-lead text-paper/70">
            {project.subtitle}
          </p>
        )}
        <p className="mt-4 font-mono text-meta uppercase tracking-wider text-paper/50">
          {metaLine(project)}
        </p>
        {project.heroMedia && (
          <div className="mt-12">
            <MediaBlock
              media={project.heroMedia}
              showCaption={false}
              className="opacity-90 transition-opacity duration-[280ms] group-hover:opacity-100"
            />
          </div>
        )}
        <span className="mt-10 inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-accent">
          View case study
          <span className="transition-transform duration-[280ms] group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/** Tier 2 — secondary card on paper. */
export function ProjectFeatureCard({ project }: { project: CaseStudy }) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col border-t border-line pt-8"
      >
        <p className="font-mono text-meta uppercase tracking-wider text-muted">
          {project.client} <span className="text-accent">·</span> {project.year}
        </p>
        <h3 className="mt-6 font-display text-lead font-semibold leading-[1.05] tracking-tight transition-transform duration-[280ms] group-hover:translate-x-1">
          {project.title}
        </h3>
        {project.shortDescription && (
          <p className="mt-4 max-w-[44ch] text-body text-ink/70">
            {project.shortDescription}
          </p>
        )}
        <div className="mt-6 overflow-hidden">
          <p className="-translate-x-4 font-mono text-meta uppercase tracking-wider text-muted opacity-0 transition-all duration-[280ms] group-hover:translate-x-0 group-hover:opacity-100">
            {(project.discipline ?? []).join(" · ")}
          </p>
        </div>
        <span className="mt-auto pt-8 inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-ink">
          View
          <span className="text-accent transition-transform duration-[280ms] group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </Reveal>
  );
}
