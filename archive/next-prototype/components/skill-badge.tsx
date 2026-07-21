export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent">
      {label}
    </span>
  );
}
