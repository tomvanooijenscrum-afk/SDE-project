import { Stat } from "@/types/portfolio";
import { AnimatedCounter } from "@/components/animated-counter";

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/90 p-6 shadow-panel">
      <p className="text-sm uppercase tracking-[0.25em] text-stone">{stat.label}</p>
      <p className="mt-3 font-display text-4xl text-ink">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-3 text-sm leading-7 text-stone">{stat.description}</p>
    </div>
  );
}
