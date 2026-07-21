import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Grid } from "@/components/grid";
import { PageHero } from "@/components/page-hero";
import { PublicationCard } from "@/components/publication-card";
import { portfolioData } from "@/data/portfolio";

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Industry contributions through specialist publications"
        description="Selected articles reflect a continuing role in knowledge-sharing within the Dutch structural engineering and steel construction community."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Grid className="xl:grid-cols-2">
            {portfolioData.publications.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <PublicationCard item={item} />
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
}
