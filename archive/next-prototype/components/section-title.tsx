import { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl leading-none text-ink sm:text-5xl">{title}</h1>
      {description ? (
        <div className="text-base leading-8 text-stone sm:text-lg">{description}</div>
      ) : null}
    </div>
  );
}
