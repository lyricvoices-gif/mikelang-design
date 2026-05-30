type BuildMetaProps = {
  year: number;
  context: string;
  artifactType: string;
  tools: string[];
  className?: string;
};

export function BuildMeta({
  year,
  context,
  artifactType,
  tools,
  className,
}: BuildMetaProps) {
  return (
    <div
      className={[
        "flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-meta uppercase tracking-wider",
        className ?? "",
      ].join(" ")}
    >
      <span className="text-muted">{year}</span>
      <span className="text-accent">/</span>
      <span className="text-muted">
        Context: <span className="text-ink">{context}</span>
      </span>
      <span className="text-accent">/</span>
      <span className="text-muted">
        Artifact: <span className="text-ink">{artifactType}</span>
      </span>
      <span className="text-accent">/</span>
      <span className="flex flex-wrap items-center gap-2">
        {tools.map((t) => (
          <span
            key={t}
            className="border border-accent px-2 py-1 leading-none text-ink"
          >
            {t}
          </span>
        ))}
      </span>
    </div>
  );
}
