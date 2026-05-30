const NAMES = [
  "Amazon Alexa",
  "United Airlines",
  "BMW Group",
  "Motorola Mobility",
  "Nokia",
  "Sapient Razorfish",
  "Hearst",
  "Avalere Health",
];

// Row 2 starts offset by ~3 items for visual rhythm.
const ROW2 = [...NAMES.slice(3), ...NAMES.slice(0, 3)];

function Track({ names }: { names: string[] }) {
  return (
    <>
      {names.map((name, i) => (
        <span key={`${name}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-6">{name}</span>
          <span className="text-accent" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </>
  );
}

function Row({ names, dir }: { names: string[]; dir: "left" | "right" }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee ${dir === "left" ? "marquee--left" : "marquee--right"} font-mono text-meta uppercase tracking-wider text-ink`}
      >
        {/* Original + clone for a gapless loop. */}
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          <Track names={names} />
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          <Track names={names} />
        </div>
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section
      aria-label="Selected experience"
      className="w-full overflow-hidden bg-paper py-12"
    >
      <div className="gutter mb-6">
        <p className="font-mono text-meta uppercase tracking-wider text-muted">
          Experience
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Row names={NAMES} dir="left" />
        <Row names={ROW2} dir="right" />
      </div>
    </section>
  );
}
