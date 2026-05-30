import Link from "next/link";
import type { Build } from "@/lib/projects";
import { firstSentence } from "@/lib/projects";

/** Compact, monospace-forward build entry — a technical manifest row. */
export function BuildFeature({ build }: { build: Build }) {
  return (
    <Link
      href={`/builds/${build.slug}`}
      className="group flex flex-col gap-4 border-t border-line py-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-lead font-semibold leading-tight tracking-tight transition-transform duration-[280ms] group-hover:translate-x-1">
          {build.title}
        </h3>
        <span className="shrink-0 font-mono text-meta uppercase tracking-wider text-muted">
          {build.year}
        </span>
      </div>

      <p className="max-w-[52ch] text-body text-ink/70">
        {firstSentence(build.problem)}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {build.tools.map((tool) => (
          <span
            key={tool}
            className="border border-accent px-2 py-1 font-mono text-meta uppercase leading-none tracking-wider text-ink"
          >
            {tool}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-accent">
        → View build
      </span>
    </Link>
  );
}
