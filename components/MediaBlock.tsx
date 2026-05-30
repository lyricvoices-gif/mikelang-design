import Image from "next/image";
import type { MediaEntry } from "@/lib/projects";

type MediaBlockProps = {
  media: MediaEntry;
  className?: string;
  priority?: boolean;
  /** Show the caption beneath the block when present. */
  showCaption?: boolean;
};

export function MediaBlock({
  media,
  className,
  priority,
  showCaption = true,
}: MediaBlockProps) {
  const aspect = media.aspectRatio ?? "16/9";
  const wrap = className ?? "";

  if (media.type === "image" && media.src) {
    return (
      <figure className={wrap}>
        <div
          className="relative w-full overflow-hidden bg-ink/5"
          style={{ aspectRatio: aspect }}
        >
          <Image
            src={media.src}
            alt={media.caption ?? ""}
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
        {showCaption && media.caption && (
          <figcaption className="mt-3 font-mono text-meta uppercase tracking-wider text-muted">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.type === "video" && media.src) {
    return (
      <figure className={wrap}>
        <div
          className="relative w-full overflow-hidden bg-ink"
          style={{ aspectRatio: aspect }}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={media.src}
          />
        </div>
        {showCaption && media.caption && (
          <figcaption className="mt-3 font-mono text-meta uppercase tracking-wider text-muted">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // placeholder — intentional design annotation, not a grey box
  const note = media.note ?? "Asset to be added";
  return (
    <figure className={wrap}>
      <div
        className="relative flex w-full items-center justify-center overflow-hidden border border-dashed border-line"
        style={{ aspectRatio: aspect }}
      >
        <div className="absolute left-3 top-3 font-mono text-meta uppercase tracking-wider text-accent">
          ◇ Placeholder
        </div>
        <p className="max-w-[40ch] px-6 text-center font-mono text-meta uppercase leading-relaxed tracking-wider text-muted">
          {note}
        </p>
        {media.aspectRatio && (
          <div className="absolute bottom-3 right-3 font-mono text-meta uppercase tracking-wider text-muted/70">
            {media.aspectRatio}
          </div>
        )}
      </div>
      {showCaption && media.caption && (
        <figcaption className="mt-3 font-mono text-meta uppercase tracking-wider text-muted">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
