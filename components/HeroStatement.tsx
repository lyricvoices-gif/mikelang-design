"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const still: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const HERO_STATEMENT =
  "Michael Lang is a multimodal experience designer who creates at the intersection of AI, voice, and human emotion.";

export function HeroStatement() {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;
  const item = reduced ? still : fadeUp;

  return (
    <section className="relative grain overflow-hidden bg-paper">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="gutter relative z-10 flex min-h-[min(88svh,920px)] flex-col justify-end pb-12 pt-28 md:pb-16 md:pt-32"
      >
        <motion.p
          variants={item}
          className="max-w-[22ch] font-mono text-meta uppercase tracking-[0.12em] text-muted"
        >
          Work
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 max-w-[18ch] font-display text-hero-statement font-medium leading-[1.08] tracking-[-0.025em] text-ink md:max-w-[20ch]"
        >
          {HERO_STATEMENT}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-between border-t border-line pt-6 font-mono text-meta uppercase tracking-wider text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="text-accent">↓</span> Scroll
          </span>
          <span className="hidden sm:inline">Atlanta, GA</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
