"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { clipReveal, fadeUp, metaSlide, reducedMotion } from "@/lib/motion";

type CaseStudyHeroProps = {
  eyebrow?: string;
  title: string;
  tagline?: string;
  meta?: ReactNode;
};

/** Choreographed case-study hero: title clip-reveals, tagline fades, meta slides. */
export function CaseStudyHero({ eyebrow, title, tagline, meta }: CaseStudyHeroProps) {
  const reduced = useReducedMotion();
  const v = (variant: typeof clipReveal) => (reduced ? reducedMotion : variant);

  return (
    <header className="bg-ink text-paper">
      <div className="gutter pt-36 pb-[var(--section-space)]">
        {eyebrow && (
          <motion.p
            variants={v(fadeUp)}
            initial="hidden"
            animate="visible"
            className="font-mono text-meta uppercase tracking-wider text-accent"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          variants={v(clipReveal)}
          initial="hidden"
          animate="visible"
          className="mt-8 font-display text-section font-bold leading-[0.92] tracking-[-0.02em]"
        >
          {title}
        </motion.h1>

        {tagline && (
          <motion.p
            variants={v(fadeUp)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-[34ch] font-display text-lead text-paper/60"
          >
            {tagline}
          </motion.p>
        )}

        {meta && (
          <motion.div
            variants={v(metaSlide)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-14"
          >
            {meta}
          </motion.div>
        )}
      </div>
    </header>
  );
}
