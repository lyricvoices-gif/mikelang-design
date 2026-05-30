import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/projects";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { ProjectMeta } from "@/components/ProjectMeta";
import { MediaBlock } from "@/components/MediaBlock";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Lyric Voices — Composer",
  description:
    "An ethical AI voice platform built on real artist partnerships. Composed, not cloned.",
};

const STEPS = [
  {
    n: "01",
    title: "Choose the character",
    body: "Start with a voice. Each one is a fully realized character with a defined range, not a generic preset.",
  },
  {
    n: "02",
    title: "Set the intent",
    body: "Direct the tone before a word is written. The intent you set shapes the entire performance that follows.",
  },
  {
    n: "03",
    title: "Direct as you compose",
    body: "Write and place inline emotion marks to shift tone mid-script — without switching context or voice.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-meta uppercase tracking-wider text-accent">
      {children}
    </p>
  );
}

export default function LyricCaseStudy() {
  const project = getCaseStudy("lyric");
  if (!project || !project.product) notFound();

  const { product } = project;
  const edition01 = product.editions.find((e) => e.number === 1);

  return (
    <article>
      <CaseStudyHero
        eyebrow="Flagship Case Study"
        title="Lyric Voices — Composer"
        tagline="Direction happens before you write."
        meta={
          <ProjectMeta
            invert
            year={project.year}
            yearEnd={project.yearEnd}
            ongoing={project.ongoing}
            client={project.client}
            role={project.role}
            services={project.services ?? project.discipline}
          />
        }
      />

      {/* Hero media */}
      <section className="bg-ink">
        <div className="gutter pb-[var(--section-space)]">
          {project.heroMedia && (
            <Reveal>
              <MediaBlock media={project.heroMedia} priority showCaption={false} />
            </Reveal>
          )}
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-paper">
        <div className="gutter grid gap-8 py-[var(--section-space)] md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
          </Reveal>
          <Reveal>
            <p className="measure font-display text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] font-medium leading-[1.15] tracking-tight">
              {project.challenge}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Insight — pull quote */}
      <section className="bg-ink text-paper">
        <div className="gutter flex flex-col items-center py-[calc(var(--section-space)*1.2)] text-center">
          <Reveal>
            <SectionLabel>The Insight</SectionLabel>
          </Reveal>
          <Reveal>
            <blockquote className="mt-10 max-w-[16ch] font-display text-section font-bold leading-[0.98] tracking-[-0.02em]">
              Output is not the same as performance.
            </blockquote>
          </Reveal>
          <Reveal>
            <p className="mt-10 max-w-[48ch] text-body text-paper/60">
              {project.insight}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Product — Composer */}
      <section className="bg-paper">
        <div className="gutter py-[var(--section-space)]">
          <Reveal>
            <SectionLabel>The Product — Composer</SectionLabel>
            <h2 className="mt-6 max-w-[18ch] font-display text-[clamp(2rem,1rem+4vw,4.5rem)] font-semibold leading-[1.0] tracking-tight">
              Choose, direct, compose.
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-12 md:grid-cols-3">
            {STEPS.map((step) => (
              <RevealItem key={step.n}>
                <div className="border-t border-line pt-6">
                  <span className="font-mono text-meta uppercase tracking-wider text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-lead font-semibold leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body text-ink/70">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {project.media && project.media.length > 0 && (
            <Reveal className="mt-16">
              <MediaBlock media={project.media[0]} />
            </Reveal>
          )}
        </div>
      </section>

      {/* The Edition Model */}
      <section className="bg-ink text-paper">
        <div className="gutter py-[var(--section-space)]">
          <Reveal>
            <SectionLabel>The Edition Model</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2rem,1rem+4vw,4.5rem)] font-semibold leading-[1.0] tracking-tight">
              Five voices. Fifteen directions.
            </h2>
            <p className="mt-6 max-w-[52ch] text-body text-paper/60">
              Curated, finite releases — not an overwhelming catalog. Each voice
              ships with three tonal directions, built with real professional
              artists.
            </p>
          </Reveal>

          {edition01 && (
            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {edition01.voices.map((voice) => (
                <RevealItem key={voice.name}>
                  <div className="flex h-full flex-col border border-paper/15 p-6 transition-colors duration-[280ms] hover:border-accent">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-[clamp(1.5rem,1rem+1.5vw,2rem)] font-semibold tracking-tight">
                        {voice.name}
                      </h3>
                      <span className="font-mono text-meta uppercase tracking-wider text-accent">
                        {voice.archetype}
                      </span>
                    </div>
                    {voice.description && (
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/60">
                        {voice.description}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {voice.tones.map((tone) => (
                        <span
                          key={tone}
                          className="border border-paper/20 px-2 py-1 font-mono text-meta uppercase leading-none tracking-wider text-paper/80"
                        >
                          {tone}
                        </span>
                      ))}
                    </div>
                    {voice.useCases && (
                      <ul className="mt-5 space-y-1 text-meta text-paper/45">
                        {voice.useCases.map((uc) => (
                          <li key={uc}>{uc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </section>

      {/* Ethics */}
      <section className="bg-paper">
        <div className="gutter grid gap-8 py-[var(--section-space)] md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Ethics</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,1rem+4vw,4.5rem)] font-semibold leading-[1.0] tracking-tight">
                {product.tagline}
              </h2>
            </Reveal>
            <Reveal>
              <p className="measure mt-8 text-body text-ink/70">
                {product.ethicsStatement}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper">
        <div className="gutter pb-[var(--section-space)]">
          <Reveal>
            <SectionLabel>Pricing</SectionLabel>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {product.pricing.map((tier) => {
              const recommended = tier.plan === "Studio";
              return (
                <RevealItem key={tier.plan}>
                  <div
                    className={[
                      "flex h-full flex-col p-7",
                      recommended
                        ? "bg-ink text-paper"
                        : "border border-line bg-paper text-ink",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lead font-semibold tracking-tight">
                        {tier.plan}
                      </h3>
                      {recommended && (
                        <span className="font-mono text-meta uppercase tracking-wider text-accent">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-4 font-display text-[clamp(2rem,1rem+3vw,3rem)] font-semibold leading-none">
                      {tier.price === null ? (
                        "Custom"
                      ) : (
                        <>
                          ${tier.price}
                          <span
                            className={[
                              "ml-1 text-meta font-normal",
                              recommended ? "text-paper/50" : "text-muted",
                            ].join(" ")}
                          >
                            /{tier.period}
                          </span>
                        </>
                      )}
                    </p>
                    <ul
                      className={[
                        "mt-6 space-y-2 text-[0.95rem]",
                        recommended ? "text-paper/70" : "text-ink/70",
                      ].join(" ")}
                    >
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-accent">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Outcome + Live link */}
      <section className="bg-ink text-paper">
        <div className="gutter py-[var(--section-space)]">
          <Reveal>
            <SectionLabel>Outcome</SectionLabel>
            <p className="measure mt-8 font-display text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] font-medium leading-[1.15] tracking-tight">
              {project.outcome}
            </p>
            <a
              href={product.composerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-3 font-display text-lead text-accent"
            >
              Try the Composer
              <span className="transition-transform duration-[280ms] group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </article>
  );
}
