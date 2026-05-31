import { getHomeGridProjects } from "@/lib/projects";
import { HeroStatement } from "@/components/HeroStatement";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  const gridProjects = getHomeGridProjects();

  return (
    <>
      <HeroStatement />
      <ProjectGrid projects={gridProjects} />
    </>
  );
}
