"use client"

import { useRef, useEffect } from "react"

/* React omits the `muted` attribute from server-rendered markup, which makes
   browsers block autoplay until hydration — and they never retry the play.
   This forces muted and kicks playback on mount. */

export default function AutoplayVideo(
  props: React.VideoHTMLAttributes<HTMLVideoElement>
) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.muted = true
    el.play().catch(() => {})
  }, [])

  return <video ref={ref} muted playsInline autoPlay loop {...props} />
}
