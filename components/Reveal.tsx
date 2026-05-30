"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, reducedMotion, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  /** Animate on mount instead of on scroll into view. */
  onLoad?: boolean;
};

/** Single element that reveals on scroll (or on load). Respects reduced motion. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay,
  onLoad = false,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const active = prefersReduced ? reducedMotion : variants;

  return (
    <motion.div
      className={className}
      variants={active}
      initial="hidden"
      {...(onLoad
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  onLoad?: boolean;
};

/** Stagger container. Children should be <RevealItem> or use the staggerItem variant. */
export function RevealGroup({ children, className, onLoad = false }: RevealGroupProps) {
  const prefersReduced = useReducedMotion();
  const active = prefersReduced ? reducedMotion : staggerContainer;

  return (
    <motion.div
      className={className}
      variants={active}
      initial="hidden"
      {...(onLoad
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
};

/** Child of RevealGroup. */
export function RevealItem({ children, className, variants = staggerItem }: RevealItemProps) {
  const prefersReduced = useReducedMotion();
  const active = prefersReduced ? reducedMotion : variants;
  return (
    <motion.div className={className} variants={active}>
      {children}
    </motion.div>
  );
}
