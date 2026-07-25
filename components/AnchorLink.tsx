"use client"

/* In-page anchor with a slow, eased scroll — the native smooth behavior is
   too quick for the page's editorial pacing. A rAF tween (easeInOutCubic,
   ~1.15s) glides to the target; any wheel or touch input hands control back
   to the reader immediately. Reduced motion gets an instant jump. */

const DURATION_MS = 1150

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function glideTo(targetY: number) {
  const startY = window.scrollY
  const delta = targetY - startY
  if (Math.abs(delta) < 2) return
  const start = performance.now()
  let cancelled = false
  const cancel = () => {
    cancelled = true
    window.removeEventListener("wheel", cancel)
    window.removeEventListener("touchstart", cancel)
  }
  window.addEventListener("wheel", cancel, { passive: true })
  window.addEventListener("touchstart", cancel, { passive: true })

  const step = (now: number) => {
    if (cancelled) return
    const t = Math.min(1, (now - start) / DURATION_MS)
    window.scrollTo(0, startY + delta * easeInOutCubic(t))
    if (t < 1) requestAnimationFrame(step)
    else cancel()
  }
  requestAnimationFrame(step)
}

export default function AnchorLink({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        const el = document.querySelector(href)
        if (!el) return
        e.preventDefault()
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const top =
          el.getBoundingClientRect().top + window.scrollY - 12 /* scroll margin */
        if (reduced) {
          window.scrollTo(0, top)
        } else {
          glideTo(top)
        }
      }}
    >
      {children}
    </a>
  )
}
