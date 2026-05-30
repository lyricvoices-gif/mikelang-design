"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { easeSnap, durations } from "@/lib/motion";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/builds", label: "Builds" },
  { href: "/about", label: "About" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ink text-paper md:hidden origin-top"
          initial={
            prefersReduced
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
          }
          animate={
            prefersReduced
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
          }
          exit={
            prefersReduced
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
          }
          transition={{ duration: durations.base, ease: easeSnap }}
        >
          <nav className="flex h-full flex-col justify-between gutter pt-24 pb-10">
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-display text-[clamp(2.5rem,14vw,4rem)] font-semibold leading-[1.05]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:mikelangdesign@gmail.com"
              className="font-mono text-meta uppercase tracking-wider text-accent"
            >
              mikelangdesign@gmail.com
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
