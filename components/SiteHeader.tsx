"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/builds", label: "Builds" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[80] transition-[background-color,border-color,backdrop-filter] duration-[280ms]",
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="gutter flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Michael Lang
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-display text-sm"
              >
                {item.label}
                <span
                  className={[
                    "absolute -bottom-1 left-0 h-px bg-accent transition-[width] duration-[200ms]",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                  ].join(" ")}
                />
              </Link>
            ))}
            <a
              href="mailto:mikelangdesign@gmail.com"
              className="font-mono text-meta uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              mikelangdesign@gmail.com
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[95] flex h-10 w-10 -mr-2 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={[
                  "block h-px w-6 transition-all duration-[200ms]",
                  menuOpen ? "translate-y-[6px] rotate-45 bg-paper" : "bg-ink",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-6 transition-all duration-[200ms]",
                  menuOpen ? "opacity-0" : "bg-ink opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-6 transition-all duration-[200ms]",
                  menuOpen ? "-translate-y-[6px] -rotate-45 bg-paper" : "bg-ink",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
