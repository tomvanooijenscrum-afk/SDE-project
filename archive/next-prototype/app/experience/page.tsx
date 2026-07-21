import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A career shaped by structural complexity, team leadership, and delivery"
        description="Each role builds on a long-standing blend of structural design expertise, business-unit leadership, and multidisciplinary project management."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Timeline>
            {portfolioData.experience.map((item, index) => (
              <FadeIn key={`${item.company}-${item.period}`} delay={index * 0.05}>
                <ExperienceCard item={item} />
              </FadeIn>
            ))}
          </Timeline>
        </Container>
      </section>
    </>
  );
}
