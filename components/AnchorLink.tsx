"use client"

/* In-page anchor with an eased scroll — the native smooth behavior is too
   quick for the page's editorial pacing. The tween moves at full speed the
   moment it starts and decelerates into the target (ease-out), so the click
   feels immediate but the arrival is unhurried. Wheel or touch input hands
   control back to the reader; reduced motion jumps instantly. */

const DURATION_MS = 1100

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function glideTo(targetY: number) {
  const startY = window.scrollY
  const delta = targetY - startY
  if (Math.abs(delta) < 2) return
  /* globals.css sets scroll-behavior: smooth, which would re-smooth every
     frame of this tween and make it lag then leap. Force instant scrolling
     for the tween's lifetime, restore after. */
  const root = document.documentElement
  const prevBehavior = root.style.scrollBehavior
  root.style.scrollBehavior = "auto"
  const start = performance.now()
  let cancelled = false
  const cancel = () => {
    cancelled = true
    root.style.scrollBehavior = prevBehavior
    window.removeEventListener("wheel", cancel)
    window.removeEventListener("touchstart", cancel)
  }
  window.addEventListener("wheel", cancel, { passive: true })
  window.addEventListener("touchstart", cancel, { passive: true })

  const step = (now: number) => {
    if (cancelled) return
    const t = Math.min(1, (now - start) / DURATION_MS)
    window.scrollTo(0, startY + delta * easeOutQuart(t))
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
