import type { Variants, Transition } from "framer-motion";

// Durations (seconds) mirroring the CSS duration tokens.
const D = {
  fast: 0.16,
  base: 0.28,
  reveal: 0.52,
  slow: 0.65,
  route: 0.76,
} as const;

// Easings mirroring the CSS easing tokens.
export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];
export const easeInOut: Transition["ease"] = [0.83, 0, 0.17, 1];
export const easeSnap: Transition["ease"] = [0.76, 0, 0.24, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: D.reveal, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: D.reveal, ease: easeOut },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: D.slow, ease: easeInOut },
  },
};

export const metaSlide: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: D.base, ease: easeOut },
  },
};

export const pageTransition: Variants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: { duration: D.route, ease: easeInOut },
  },
  exit: {
    scaleY: 1,
    transition: { duration: D.route, ease: easeInOut },
  },
};

// Applied in place of any of the above when prefers-reduced-motion is set.
export const reducedMotion: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, clipPath: "none" },
  visible: { opacity: 1, y: 0, x: 0, clipPath: "none" },
};

// Shared viewport config for scroll reveals.
export const viewportOnce = { once: true, margin: "-10%" } as const;

export const durations = D;
