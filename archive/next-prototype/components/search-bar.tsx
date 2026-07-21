"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">Search projects</span>
      <input
        aria-label="Search projects"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by project, location, role, or technology"
        className="w-full rounded-full border border-ink/10 bg-white px-5 py-3 text-sm text-ink outline-none transition placeholder:text-stone focus:border-accent"
      />
    </label>
  );
}
