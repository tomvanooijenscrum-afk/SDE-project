import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { SkillBadge } from "@/components/skill-badge";
import { portfolioData } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="A consulting profile built around leadership, structure, and clarity"
        description="Skills are presented as a professional capability set rather than proficiency bars, keeping the experience calm, direct, and credible."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn className="flex flex-wrap gap-4">
            {portfolioData.skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
