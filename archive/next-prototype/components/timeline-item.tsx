import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: ReactNode;
  type?: string;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  type
}: TimelineItemProps) {
  return (
    <article className="relative rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel">
      <div className="absolute left-0 top-8 h-px w-8 bg-sand" />
      <div className="space-y-3 pl-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          {type ? (
            <span className="rounded-full bg-panel px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone">
              {type}
            </span>
          ) : null}
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-stone">{subtitle}</p>
        <p className="text-sm font-medium text-accent">{period}</p>
        {description ? <div className="text-sm leading-7 text-stone">{description}</div> : null}
      </div>
    </article>
  );
}
