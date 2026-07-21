import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Grid } from "@/components/grid";
import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { StatCard } from "@/components/stat-card";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-ink/10 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <FadeIn className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone">
                Structural engineering portfolio
              </p>
              <div className="space-y-6">
                <h1 className="font-display text-6xl leading-[0.9] text-ink sm:text-7xl">
                  {portfolioData.name}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-stone sm:text-xl">
                  {portfolioData.title}
                </p>
                <p className="max-w-3xl text-base leading-8 text-stone">
                  {portfolioData.profile}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/Bas-van-Ooijen-CV.pdf" variant="secondary">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge label={`${portfolioData.yearsExperience}+ years experience`} />
                <SkillBadge label="Head of Structural Engineering" />
                <SkillBadge label="Project Manager" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative mx-auto max-w-md rounded-[2.5rem] border border-white/60 bg-white p-4 shadow-panel">
                <div className="absolute inset-0 rounded-[2.5rem] bg-grid opacity-50" />
                <div className="relative overflow-hidden rounded-[2rem] bg-panel">
                  <Image
                    src="/images/bas-van-ooijen.jpg"
                    alt="Portrait of Bas van Ooijen"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Grid className="md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.05}>
                <StatCard stat={stat} />
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-white/70 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
            <FadeIn>
              <SectionTitle
                eyebrow="Profile"
                title="A composed leader for technically demanding projects"
                description={portfolioData.profile}
              />
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {portfolioData.philosophy.slice(0, 4).map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <article className="rounded-[2rem] border border-ink/10 bg-panel p-6">
                    <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-stone">{item.description}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
