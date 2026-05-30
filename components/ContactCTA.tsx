import { Reveal } from "./Reveal";

export function ContactCTA({ invert = false }: { invert?: boolean }) {
  const base = invert ? "bg-ink text-paper" : "bg-paper text-ink";
  const mutedClass = invert ? "text-paper/60" : "text-muted";

  return (
    <section className={`${base} border-t border-line`}>
      <div className="gutter py-[var(--section-space)]">
        <Reveal>
          <p className={`font-mono text-meta uppercase tracking-wider ${mutedClass}`}>
            Contact
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,1rem+5vw,5rem)] font-semibold leading-[1.02] tracking-tight">
            Let&apos;s build something.
          </h2>
          <div className="mt-10 flex flex-col gap-4 font-display text-lead sm:flex-row sm:items-center sm:gap-10">
            <a
              href="mailto:mikelangdesign@gmail.com"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              mikelangdesign@gmail.com
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mikeybucks"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              LinkedIn
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
