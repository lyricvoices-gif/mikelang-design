type ProjectMetaProps = {
  year: number;
  yearEnd?: number;
  ongoing?: boolean;
  client?: string;
  role?: string;
  discipline?: string[];
  services?: string[];
  className?: string;
  invert?: boolean;
};

function Row({
  label,
  children,
  invert,
}: {
  label: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt
        className={[
          "font-mono text-meta uppercase tracking-wider",
          invert ? "text-paper/50" : "text-muted",
        ].join(" ")}
      >
        {label}
      </dt>
      <dd className="font-display text-body">{children}</dd>
    </div>
  );
}

export function ProjectMeta({
  year,
  yearEnd,
  ongoing,
  client,
  role,
  discipline,
  services,
  className,
  invert,
}: ProjectMetaProps) {
  const yearLabel = ongoing
    ? `${year}—Present`
    : yearEnd && yearEnd !== year
      ? `${year}—${yearEnd}`
      : `${year}`;

  return (
    <dl
      className={[
        "grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4",
        className ?? "",
      ].join(" ")}
    >
      <Row label="Year" invert={invert}>
        {yearLabel}
      </Row>
      {client && (
        <Row label="Client" invert={invert}>
          {client}
        </Row>
      )}
      {role && (
        <Row label="Role" invert={invert}>
          {role}
        </Row>
      )}
      {discipline && discipline.length > 0 && (
        <Row label="Discipline" invert={invert}>
          {discipline.join(" · ")}
        </Row>
      )}
      {services && services.length > 0 && (
        <div className="col-span-2 flex flex-col gap-1 sm:col-span-4">
          <dt
            className={[
              "font-mono text-meta uppercase tracking-wider",
              invert ? "text-paper/50" : "text-muted",
            ].join(" ")}
          >
            Services
          </dt>
          <dd className="flex flex-wrap gap-x-3 gap-y-1 font-display text-body">
            {services.map((s, i) => (
              <span key={s}>
                {s}
                {i < services.length - 1 && (
                  <span className="ml-3 text-accent">·</span>
                )}
              </span>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
}
