import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael Lang is a Multimodal AI Experience Designer. Co-founder of Lyric Voices. He designs with AI and builds with it too.",
};

const CAREER: { company: string; role: string; type: string }[] = [
  { company: "Lyric Voices", role: "Co-founder", type: "Independent" },
  { company: "AppFolio", role: "Multimodal AI Experience Designer", type: "In-house" },
  { company: "Amazon Alexa", role: "Multimodal AI Experience Designer", type: "In-house" },
  { company: "United Airlines", role: "Designer", type: "In-house" },
  { company: "BMW Group", role: "Lead Designer", type: "In-house" },
  { company: "Motorola Mobility", role: "Designer", type: "In-house" },
  { company: "Nokia", role: "Designer", type: "In-house" },
  { company: "Sapient Razorfish", role: "Designer", type: "Agency" },
  { company: "Hearst", role: "Designer", type: "Agency" },
  { company: "Avalere Health", role: "Designer", type: "Agency" },
];

const SKILLS = ["Multimodal Design", "Conversational AI", "Product Design", "Creative Direction"];
const BUILD_TOOLS = ["Claude", "Claude Code", "Cursor"];

export default function About() {
  return (
    <>
      <section className="bg-paper">
        <div className="gutter pt-36 pb-[var(--section-space)]">
          <Reveal onLoad>
            <p className="font-mono text-meta uppercase tracking-wider text-muted">
              About
            </p>
            <p className="measure mt-8 font-display text-[clamp(1.6rem,1rem+3vw,3.5rem)] font-medium leading-[1.12] tracking-tight">
              Michael Lang is a Multimodal AI Experience Designer who creates at
              the intersection of AI, voice, and human emotion. Co-founder of
              Lyric Voices. Currently at AppFolio.{" "}
              <span className="text-muted">
                He designs with AI and builds with it too.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="gutter pb-[var(--section-space)]">
          <Reveal>
            <p className="font-mono text-meta uppercase tracking-wider text-accent">
              Career
            </p>
          </Reveal>
          <div className="mt-8">
            {CAREER.map((c) => (
              <div
                key={c.company}
                className="grid grid-cols-[1fr_auto] gap-4 border-t border-line py-4 md:grid-cols-[1fr_1fr_auto]"
              >
                <span className="font-display text-body font-medium">{c.company}</span>
                <span className="hidden text-body text-ink/70 md:block">{c.role}</span>
                <span className="font-mono text-meta uppercase tracking-wider text-muted">
                  {c.type}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-meta uppercase tracking-wider text-accent">
                Skills
              </p>
              <p className="mt-4 font-display text-lead leading-snug tracking-tight">
                {SKILLS.join(" · ")}
              </p>
            </div>
            <div>
              <p className="font-mono text-meta uppercase tracking-wider text-accent">
                Build Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {BUILD_TOOLS.map((t) => (
                  <span
                    key={t}
                    className="border border-accent px-2 py-1 font-mono text-meta uppercase leading-none tracking-wider text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />
      <ContactCTA />
    </>
  );
}
