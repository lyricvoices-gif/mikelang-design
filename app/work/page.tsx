import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudies } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies in multimodal and conversational AI design.",
};

const LIVE = new Set(["lyric", "alexa-hospitality", "bmw-concierge"]);

export default function WorkIndex() {
  const studies = getCaseStudies().sort((a, b) => a.tier - b.tier || b.year - a.year);

  return (
    <>
      <section className="bg-paper">
        <div className="gutter pt-36 pb-[var(--section-space)]">
          <Reveal onLoad>
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              Selected Work
            </p>
            <h1 className="mt-6 font-display text-section font-bold leading-[0.92] tracking-[-0.02em]">
              Work
            </h1>
          </Reveal>

          <div className="mt-16">
            {studies.map((p) => {
              const linkable = LIVE.has(p.slug);
              const Row = (
                <div className="group grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[1fr_auto] md:items-baseline">
                  <div>
                    <h2 className="font-display text-lead font-semibold leading-tight tracking-tight transition-transform duration-[280ms] group-hover:translate-x-1">
                      {p.title}
                    </h2>
                    {p.shortDescription && (
                      <p className="mt-2 max-w-[60ch] text-body text-ink/65">
                        {p.shortDescription}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4 font-mono text-meta uppercase tracking-wider text-muted md:justify-end">
                    <span>{p.client}</span>
                    <span className="text-accent">·</span>
                    <span>{p.year}</span>
                    {linkable && <span className="text-accent">→</span>}
                  </div>
                </div>
              );
              return linkable ? (
                <Link key={p.id} href={`/work/${p.slug}`}>
                  {Row}
                </Link>
              ) : (
                <div key={p.id} className="opacity-60">
                  {Row}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
