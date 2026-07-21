import { PublicationItem } from "@/types/portfolio";

export function PublicationCard({ item }: { item: PublicationItem }) {
  return (
    <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel">
      <p className="text-sm uppercase tracking-[0.25em] text-stone">{item.magazine}</p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-4 text-sm font-medium text-accent">{item.year}</p>
    </article>
  );
}
