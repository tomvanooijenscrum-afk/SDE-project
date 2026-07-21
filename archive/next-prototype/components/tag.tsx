import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone">
      {children}
    </span>
  );
}
