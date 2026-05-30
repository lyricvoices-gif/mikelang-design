import Link from "next/link";
import {
  getFeaturedCaseStudies,
  getFeaturedBuilds,
} from "@/lib/projects";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  ProjectFeatureFlagship,
  ProjectFeatureCard,
} from "@/components/ProjectFeature";
import { BuildFeature } from "@/components/BuildFeature";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ContactCTA } from "@/components/ContactCTA";

const CAPABILITIES = [
  "Multimodal Design",
  "Conversational AI",
  "Product Design",
  "Creative Direction",
];

export default function Home() {
  const featured = getFeaturedCaseStudies();
  const flagship = featured.find((p) => p.tier === 1);
  const secondary = featured.filter((p) => p.tier === 2);
  const builds = getFeaturedBuilds();

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative grain overflow-hidden">
        <div className="gutter relative z-10 flex min-h-[92svh] flex-col justify-center pt-24 pb-16">
          <RevealGroup onLoad>
            <RevealItem>
              <h1 className="font-display text-hero font-bold leading-[0.86] tracking-[-0.03em]">
                Michael Lang
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-8 font-display text-lead font-medium leading-[1.1] tracking-tight">
                Multimodal AI Experience Designer
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 max-w-[46ch] text-body text-muted">
                Creating at the intersection of AI, voice, and human emotion.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ---- Featured Work ---- */}
      <section aria-label="Featured work">
        <div className="gutter pt-[var(--section-space)]">
          <Reveal>
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              Selected Work
            </p>
          </Reveal>
        </div>

        {flagship && (
          <div className="mt-10">
            <ProjectFeatureFlagship project={flagship} />
          </div>
        )}

        {secondary.length > 0 && (
          <div className="gutter grid gap-x-12 gap-y-12 py-16 md:grid-cols-2">
            {secondary.map((p) => (
              <ProjectFeatureCard key={p.id} project={p} />
            ))}
          </div>
        )}

        <div className="gutter pb-4">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-ink"
            >
              View all work
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Builds Strip ---- */}
      <section aria-label="Builds" className="bg-paper">
        <div className="gutter py-[var(--section-space)]">
          <Reveal>
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              Built
            </p>
            <p className="mt-4 max-w-[44ch] font-display text-lead leading-[1.1] tracking-tight">
              Working artifacts. Designed and built using AI tools.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {builds.map((b) => (
              <BuildFeature key={b.id} build={b} />
            ))}
          </div>

          <div className="border-t border-line pt-8">
            <Link
              href="/builds"
              className="group inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-accent"
            >
              View all builds
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Capabilities ---- */}
      <section className="bg-ink text-paper">
        <div className="gutter py-16">
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-meta uppercase tracking-wider text-paper/70">
              {CAPABILITIES.map((c, i) => (
                <span key={c} className="inline-flex items-center gap-3">
                  {c}
                  {i < CAPABILITIES.length - 1 && (
                    <span className="text-accent">·</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Brief Bio ---- */}
      <section className="bg-paper">
        <div className="gutter py-[var(--section-space)]">
          <Reveal>
            <p className="measure font-display text-[clamp(1.5rem,1rem+2.5vw,3rem)] font-medium leading-[1.15] tracking-tight">
              Co-founder of Lyric Voices. Multimodal AI Experience Designer at
              AppFolio.{" "}
              <span className="text-muted">
                I design with AI and build with it too.
              </span>
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-meta uppercase tracking-wider text-ink"
            >
              More about Michael
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Experience marquee ---- */}
      <LogoMarquee />

      {/* ---- Contact ---- */}
      <ContactCTA />
    </>
  );
}
