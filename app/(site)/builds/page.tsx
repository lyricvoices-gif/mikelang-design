import type { Metadata } from "next";
import { getBuilds } from "@/lib/projects";
import { BuildFeature } from "@/components/BuildFeature";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Working artifacts designed and built using AI tools — Claude, Claude Code, Cursor.",
};

export default function BuildsIndex() {
  const builds = getBuilds();

  return (
    <>
      <section className="bg-paper">
        <div className="gutter pt-36 pb-[var(--section-space)]">
          <Reveal onLoad>
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              Built
            </p>
            <h1 className="mt-6 font-display text-section font-bold leading-[0.92] tracking-[-0.02em]">
              Built
            </h1>
            <p className="mt-6 max-w-[48ch] font-display text-lead text-muted">
              Working artifacts. Designed and built using AI tools.
            </p>
          </Reveal>

          <div className="mt-16">
            {builds.map((b) => (
              <BuildFeature key={b.id} build={b} />
            ))}
            <p className="border-t border-line pt-8 font-mono text-meta uppercase tracking-wider text-muted">
              More builds added as they ship.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
