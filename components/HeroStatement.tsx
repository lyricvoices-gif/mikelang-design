"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_SNAP = [0.76, 0, 0.24, 1] as const;

// Container drives the whole load choreography.
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

// Type wipes up from behind its clip mask — the signature reveal.
const maskItem: Variants = {
  hidden: { y: "118%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: EASE },
  },
};

// Accent rule sweeps in from the left.
const sweep: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE_SNAP },
  },
};

// Meta locks into place with a short slide.
const lockIn: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const still: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scaleX: 1 },
  visible: { opacity: 1, y: 0, x: 0, scaleX: 1 },
};

/** A clipped line whose inner text translates up into view. */
function Mask({
  children,
  className,
  reduced,
}: {
  children: ReactNode;
  className?: string;
  reduced: boolean;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        variants={reduced ? still : maskItem}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroStatement() {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;

  return (
    <section className="relative grain overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="gutter relative z-10 flex min-h-[92svh] flex-col justify-between pt-28 pb-10"
      >
        {/* Top eyebrow */}
        <div className="flex items-center justify-between font-mono text-meta uppercase tracking-wider text-muted">
          <Mask reduced={reduced} className="text-accent">
            Portfolio — 2026
          </Mask>
          <Mask reduced={reduced} className="hidden sm:block">
            Atlanta, GA
          </Mask>
        </div>

        {/* Name + statement */}
        <div className="py-[clamp(2rem,6vw,5rem)]">
          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.03em] text-hero">
            <Mask reduced={reduced}>Michael</Mask>
            <Mask reduced={reduced}>Lang</Mask>
          </h1>

          {/* Accent sweep */}
          <motion.div
            variants={reduced ? still : sweep}
            className="mt-[clamp(1.5rem,3vw,2.5rem)] h-[3px] w-full max-w-[640px] origin-left bg-accent"
          />

          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-col gap-3">
            <p className="font-display text-lead font-medium leading-[1.05] tracking-tight">
              <Mask reduced={reduced}>Multimodal AI Experience Designer</Mask>
            </p>
            <p className="max-w-[46ch] text-body text-muted">
              <Mask reduced={reduced}>
                Creating at the intersection of AI, voice, and human emotion.
              </Mask>
            </p>
          </div>
        </div>

        {/* Bottom meta locks in */}
        <motion.div
          variants={reduced ? still : lockIn}
          className="flex items-end justify-between font-mono text-meta uppercase tracking-wider text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="text-accent">↓</span> Scroll
          </span>
          <span className="hidden sm:inline">
            Designer <span className="text-accent">/</span> Builder
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
