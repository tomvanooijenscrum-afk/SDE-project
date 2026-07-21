import { Container } from "@/components/container";
import { EducationCard } from "@/components/education-card";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { portfolioData } from "@/data/portfolio";

export default function SideActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Side Activities"
        title="Professional involvement beyond project delivery"
        description="Board roles, guest lecturing, working groups, and entrepreneurship show a broader commitment to engineering quality, knowledge transfer, and industry development."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Timeline>
            {portfolioData.sideActivities.map((item, index) => (
              <FadeIn key={`${item.title}-${item.organization}`} delay={index * 0.04}>
                <EducationCard item={item} />
              </FadeIn>
            ))}
          </Timeline>
        </Container>
      </section>
    </>
  );
}
