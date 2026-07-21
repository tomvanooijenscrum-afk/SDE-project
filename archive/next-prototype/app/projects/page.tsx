import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work across housing, industry, utilities, education, and infrastructure"
        description="The portfolio emphasizes structurally demanding assignments, multidisciplinary coordination, and projects where concept quality had to stay intact through delivery."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProjectsExplorer projects={portfolioData.projects} />
        </Container>
      </section>
    </>
  );
}
