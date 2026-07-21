"use client";

import { useMemo, useState } from "react";
import { projectCategories } from "@/lib/constants";
import { ProjectItem, ProjectCategory } from "@/types/portfolio";
import { FadeIn } from "@/components/fade-in";
import { FilterBar } from "@/components/filter-bar";
import { Grid } from "@/components/grid";
import { ProjectCard } from "@/components/project-card";
import { SearchBar } from "@/components/search-bar";

export function ProjectsExplorer({ projects }: { projects: ProjectItem[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(() => {
    const normalized = query.toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ? true : project.category === activeCategory;

      const haystack = [
        project.name,
        project.location,
        project.type,
        project.role,
        project.description,
        ...project.technologies
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && haystack.includes(normalized);
    });
  }, [activeCategory, projects, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar
          categories={projectCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>
      <Grid className="xl:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.name} delay={index * 0.03}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </Grid>
      {filteredProjects.length === 0 ? (
        <p className="text-sm text-stone">No projects match the current search and filter selection.</p>
      ) : null}
    </div>
  );
}
