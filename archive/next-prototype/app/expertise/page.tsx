import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Grid } from "@/components/grid";
import { PageHero } from "@/components/page-hero";
import { portfolioData } from "@/data/portfolio";

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Technical range anchored by judgment, coordination, and quality"
        description="Bas works comfortably between concept design, detailed engineering, project management, and the leadership systems that keep technical teams performing well."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Grid>
            {portfolioData.expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.04}>
                  <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel">
                    <Icon className="h-8 w-8 text-accent" />
                    <h2 className="mt-6 text-2xl font-semibold text-ink">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-stone">{item.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
}
