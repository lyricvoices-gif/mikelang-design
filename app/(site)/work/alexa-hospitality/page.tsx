import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/projects";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Alexa+ Enterprise — Hospitality AI Agent",
};

export default function AlexaHospitality() {
  const project = getCaseStudy("alexa-hospitality");
  if (!project) notFound();
  return <ComingSoon project={project} />;
}
