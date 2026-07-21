import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <Container className="flex flex-col gap-4 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>
          {portfolioData.name} | {portfolioData.title}
        </p>
        <Link href="/contact" className="transition hover:text-accent">
          Contact and CV download
        </Link>
      </Container>
    </footer>
  );
}
