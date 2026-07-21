import { Accordion } from "@/components/accordion";
import { ExperienceItem } from "@/types/portfolio";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-stone">{item.company}</p>
          <h3 className="text-2xl font-semibold text-ink">{item.role}</h3>
          <p className="text-sm text-stone">{item.location}</p>
        </div>
        <p className="rounded-full bg-panel px-4 py-2 text-sm font-medium text-accent">{item.period}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-stone">
        {item.responsibilities.map((responsibility) => (
          <li key={responsibility} className="border-b border-ink/5 pb-3 last:border-none last:pb-0">
            {responsibility}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Accordion title="View expanded responsibilities">
          <ul className="space-y-3">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </article>
  );
}
