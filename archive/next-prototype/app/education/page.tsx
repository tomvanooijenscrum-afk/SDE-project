import { Container } from "@/components/container";
import { EducationCard } from "@/components/education-card";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { portfolioData } from "@/data/portfolio";

export default function EducationPage() {
  const timeline = [...portfolioData.certifications, ...portfolioData.education].sort(
    (a, b) => Number(b.period.slice(0, 4)) - Number(a.period.slice(0, 4))
  );

  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Degrees, courses, and certifications built over decades of practice"
        description="Formal education is complemented by sustained professional learning in Eurocodes, seismic engineering, software, safety, communication, and leadership."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Timeline>
            {timeline.map((item, index) => (
              <FadeIn key={`${item.title}-${item.period}`} delay={index * 0.03}>
                <EducationCard item={item} />
              </FadeIn>
            ))}
          </Timeline>
        </Container>
      </section>
    </>
  );
}
