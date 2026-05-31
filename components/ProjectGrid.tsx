"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/lib/projects";
import { resolveMediaSrc } from "@/lib/projects";
import { Reveal } from "./Reveal";

function gridMeta(project: CaseStudy) {
  const year = project.ongoing ? `${project.year}—Present` : `${project.year}`;
  return [project.sector, year].filter(Boolean).join(" · ");
}

function projectTitleLines(project: CaseStudy) {
  const title = project.title;
  const dash = title.indexOf("—");
  if (dash === -1) return { line1: title, line2: project.subtitle ?? "" };
  return {
    line1: title.slice(0, dash).trim(),
    line2: title.slice(dash + 1).trim(),
  };
}

function ProjectGridCard({ project }: { project: CaseStudy }) {
  const reduced = useReducedMotion();
  const src = resolveMediaSrc(project.heroMedia);
  const { line1, line2 } = projectTitleLines(project);
  const description =
    project.shortDescription ??
    project.subtitle ??
    project.approach?.slice(0, 160) ??
    "";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <div className="relative overflow-hidden bg-ink/[0.04]">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: project.heroMedia?.aspectRatio ?? "4/3" }}
        >
          {src ? (
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[680ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
          ) : (
            <div className="absolute inset-0 bg-line/40" />
          )}

          {/* Hover: ink wash + accent edge */}
          <div
            className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-[420ms] group-hover:bg-ink/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-[420ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
            aria-hidden
          />

          {/* Hover: floating meta */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-1 p-4 opacity-0 transition-all duration-[420ms] group-hover:translate-y-0 group-hover:opacity-100 md:p-5"
            aria-hidden
          >
            <p className="font-mono text-meta uppercase tracking-wider text-paper/80">
              {gridMeta(project)}
            </p>
            <p className="font-display text-lg font-semibold leading-tight tracking-tight text-paper">
              View project
              <span className="ml-2 text-accent">→</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <p className="font-mono text-meta uppercase tracking-wider text-muted">
          {gridMeta(project)}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-[1.15] tracking-tight text-ink md:text-2xl">
          <span className="block transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
            {line1}
          </span>
          {line2 && (
            <span className="mt-0.5 block text-ink/80 transition-transform duration-[320ms] delay-[40ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              {line2}
            </span>
          )}
        </h3>
        {description && (
          <p className="mt-3 max-w-[36ch] text-body leading-relaxed text-ink/70">
            {description}
          </p>
        )}
      </div>

      {!reduced && (
        <motion.span
          className="pointer-events-none absolute -right-1 top-8 hidden h-8 w-8 rounded-full border border-line bg-paper font-mono text-[10px] leading-8 text-center text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
          initial={false}
          aria-hidden
        >
          ↗
        </motion.span>
      )}
    </Link>
  );
}

export function ProjectGrid({ projects }: { projects: CaseStudy[] }) {
  return (
    <section aria-label="Selected work" className="bg-paper">
      <div className="gutter pb-[var(--section-space)] pt-6 md:pt-10">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-b border-line pb-6">
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              {projects.length} projects
            </p>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-ink"
            >
              View all
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <ul className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {projects.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={i * 0.06}>
                <ProjectGridCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
