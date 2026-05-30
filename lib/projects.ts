import data from "@/projects.json";

export type MediaEntry = {
  type: "image" | "video" | "placeholder";
  src?: string;
  caption?: string;
  note?: string;
  existingPlaceholder?: string;
  aspectRatio?: string;
};

export type Voice = {
  name: string;
  archetype: string;
  description?: string;
  tones: string[];
  useCases?: string[];
  sampleUrl?: string;
};

export type Edition = {
  number: number;
  status: string;
  voiceCount?: number;
  voices: Voice[];
};

export type Pricing = {
  plan: string;
  price: number | null;
  period: string | null;
  highlights: string[];
};

export interface CaseStudy {
  id: string;
  slug: string;
  contentType: "case-study";
  tier: 1 | 2 | 3;
  featured: boolean;
  title: string;
  subtitle?: string;
  client?: string;
  role?: string;
  year: number;
  yearEnd?: number;
  ongoing?: boolean;
  discipline?: string[];
  sector?: string;
  type?: string;
  tags?: string[];
  designerToBuilder?: boolean;
  buildNote?: string;
  shortDescription?: string;
  challenge?: string;
  insight?: string;
  approach?: string;
  outcome?: string;
  reflection?: string;
  liveUrl?: string;
  marketingUrl?: string;
  editionsUrl?: string;
  heroBackground?: string;
  ndaNote?: string;
  externalLink?: { label: string; url: string };
  heroMedia?: MediaEntry;
  heroVideo?: MediaEntry;
  media?: MediaEntry[];
  services?: string[];
  product?: {
    tagline: string;
    composerUrl: string;
    ethicsStatement: string;
    editions: Edition[];
    pricing: Pricing[];
  };
}

export interface Build {
  id: string;
  slug: string;
  contentType: "build";
  featured: boolean;
  title: string;
  subtitle?: string;
  context: string;
  year: number;
  artifactType: string;
  tools: string[];
  shareable?: boolean;
  shareableNote?: string;
  problem: string;
  whatWasBuilt: string;
  outcome: string;
  whyItMatters: string;
  liveUrl: string | null;
  liveUrlNote?: string;
}

export type Project = CaseStudy | Build;

const projects = data as unknown as Project[];

export function getAll(): Project[] {
  return projects;
}

export function getCaseStudies(): CaseStudy[] {
  return projects.filter((p): p is CaseStudy => p.contentType === "case-study");
}

export function getBuilds(): Build[] {
  return projects.filter((p): p is Build => p.contentType === "build");
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies()
    .filter((p) => p.featured)
    .sort((a, b) => a.tier - b.tier);
}

export function getFeaturedBuilds(): Build[] {
  return getBuilds().filter((p) => p.featured);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((p) => p.slug === slug);
}

export function getBuild(slug: string): Build | undefined {
  return getBuilds().find((p) => p.slug === slug);
}

export function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return match ? match[0].trim() : text;
}
