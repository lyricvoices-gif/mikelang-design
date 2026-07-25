import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";

/* The original site chrome, scoped to the legacy pages (about, builds, work).
   The portfolio landing at "/" and the case studies render standalone. */

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </PageTransition>
    </>
  );
}
