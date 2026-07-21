"use client";

import { ProjectCategory } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: ProjectCategory[];
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category as ProjectCategory | "All")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            active === category
              ? "border-ink bg-ink text-white"
              : "border-ink/10 bg-white text-stone hover:border-accent hover:text-accent"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
