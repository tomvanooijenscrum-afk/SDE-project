import { ReactNode } from "react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionTitle } from "@/components/section-title";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-ink/10 py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        </FadeIn>
      </Container>
    </section>
  );
}
