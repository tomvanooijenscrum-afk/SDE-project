import { MapPin } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { Tag } from "@/components/tag";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group rounded-[2rem] border border-ink/10 bg-white p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tag>{project.category}</Tag>
        <p className="text-sm font-medium text-accent">{project.scale}</p>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-ink">{project.name}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-stone">
            <MapPin className="h-4 w-4" />
            {project.location}
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-stone">{project.type}</p>
        <p className="text-sm leading-7 text-stone">{project.description}</p>
        <p className="text-sm font-medium text-ink">Role: {project.role}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full bg-panel px-3 py-1 text-xs font-medium text-stone">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
