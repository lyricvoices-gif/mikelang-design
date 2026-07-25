import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/projects";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "BMW Concierge — AI Powered App",
};

export default function BmwConcierge() {
  const project = getCaseStudy("bmw-concierge");
  if (!project) notFound();
  return <ComingSoon project={project} />;
}
