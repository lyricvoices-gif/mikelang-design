import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBuild } from "@/lib/projects";
import { BuildMeta } from "@/components/BuildMeta";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "AI Agent Skill Doc Generator",
  description:
    "A Claude skill that lets designers author the exemplar doc that shapes how an AI agent behaves.",
};

function LogSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[14rem_1fr] md:gap-12">
        <p className="font-mono text-meta uppercase tracking-wider text-accent">
          {label}
        </p>
        <p className="measure text-[clamp(1.05rem,0.95rem+0.5vw,1.35rem)] leading-relaxed text-ink/80">
          {children}
        </p>
      </section>
    </Reveal>
  );
}

export default function AiSkillDocBuild() {
  const build = getBuild("ai-skill-doc");
  if (!build) notFound();

  return (
    <article className="bg-paper">
      <div className="gutter pt-36 pb-[var(--section-space)]">
        {/* Header */}
        <Reveal onLoad>
          <p className="font-mono text-meta uppercase tracking-wider text-accent">
            Build
          </p>
          <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.5rem,1.5rem+4.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.02em]">
            {build.title}
          </h1>
          {build.subtitle && (
            <p className="mt-6 max-w-[44ch] font-display text-lead text-muted">
              {build.subtitle}
            </p>
          )}

          <div className="mt-10">
            <BuildMeta
              year={build.year}
              context={build.context}
              artifactType={build.artifactType}
              tools={build.tools}
            />
          </div>

          {build.shareable && (
            <div className="mt-6">
              <span className="inline-block border border-accent px-3 py-1.5 font-mono text-meta uppercase tracking-wider text-accent">
                Shareable · Not AppFolio-specific
              </span>
            </div>
          )}
        </Reveal>

        {/* Build log */}
        <div className="mt-16">
          <LogSection label="The Problem">{build.problem}</LogSection>
          <LogSection label="The Build">{build.whatWasBuilt}</LogSection>
          <LogSection label="Why It Matters">{build.whyItMatters}</LogSection>
          <LogSection label="Outcome">{build.outcome}</LogSection>

          <Reveal>
            <section className="grid gap-4 border-y border-line py-12 md:grid-cols-[14rem_1fr] md:gap-12">
              <p className="font-mono text-meta uppercase tracking-wider text-accent">
                Live Link
              </p>
              {build.liveUrl ? (
                <a
                  href={build.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-lead text-accent"
                >
                  View the skill
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ) : (
                <p className="font-mono text-meta uppercase tracking-wider text-muted">
                  {build.liveUrlNote ?? "Link coming when published publicly"}
                </p>
              )}
            </section>
          </Reveal>
        </div>

        <div className="mt-12">
          <Link
            href="/builds"
            className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-ink"
          >
            <span className="text-accent transition-transform group-hover:-translate-x-1">
              ←
            </span>
            All builds
          </Link>
        </div>
      </div>

      <ContactCTA />
    </article>
  );
}
