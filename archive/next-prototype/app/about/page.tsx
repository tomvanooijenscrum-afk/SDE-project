import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Grid } from "@/components/grid";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { EducationCard } from "@/components/education-card";
import { portfolioData } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Leadership with technical depth and strategic calm"
        description={portfolioData.profile}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Grid>
            {portfolioData.philosophy.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel">
                  <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone">{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="border-t border-ink/10 bg-white/70 py-16 sm:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-display text-4xl text-ink">Education timeline</h2>
          </FadeIn>
          <Timeline className="mt-10">
            {portfolioData.education.map((item, index) => (
              <FadeIn key={`${item.title}-${item.period}`} delay={index * 0.05}>
                <EducationCard item={item} />
              </FadeIn>
            ))}
          </Timeline>
        </Container>
      </section>
    </>
  );
}
