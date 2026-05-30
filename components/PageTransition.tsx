"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { easeInOut, durations } from "@/lib/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="sync" initial={false}>
      <div key={pathname} className="contents">
        {/* Ink wipe: slides up out of view as the new page fades up underneath. */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[100] bg-ink origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: durations.route, ease: easeInOut }}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.reveal,
            ease: easeInOut,
            delay: durations.route * 0.4,
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
