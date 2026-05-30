export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="gutter flex flex-col gap-4 py-10 font-mono text-meta uppercase tracking-wider text-muted md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p>
            Michael Lang <span className="text-accent">·</span> mikelang.design
          </p>
          <p>
            <a
              href="mailto:mikelangdesign@gmail.com"
              className="transition-colors hover:text-ink"
            >
              mikelangdesign@gmail.com
            </a>{" "}
            <span className="text-accent">·</span>{" "}
            <a
              href="https://www.linkedin.com/in/mikeybucks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              LinkedIn →
            </a>
          </p>
        </div>
        <p>
          Atlanta <span className="text-accent">·</span> © 2026
        </p>
      </div>
    </footer>
  );
}
