import { Download } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation about structures, leadership, or delivery"
        description="The contact details below are placeholders where the resume did not provide public contact information. They can be replaced with live details at any time."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr,0.7fr]">
            <FadeIn className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-panel">
              <div className="space-y-6">
                {portfolioData.contact.map((item) => (
                  <div key={item.label} className="border-b border-ink/10 pb-6 last:border-none last:pb-0">
                    <p className="text-sm uppercase tracking-[0.25em] text-stone">{item.label}</p>
                    <a href={item.href} className="mt-2 block text-xl font-semibold text-ink transition hover:text-accent">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn className="rounded-[2rem] border border-ink/10 bg-panel p-8">
              <h2 className="font-display text-4xl text-ink">Curriculum vitae</h2>
              <p className="mt-4 text-sm leading-7 text-stone">
                Download the CV version for formal submissions, procurement packages, or project introductions.
              </p>
              <Button href="/Bas-van-Ooijen-CV.pdf" className="mt-8">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
