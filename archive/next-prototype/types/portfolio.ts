import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  description?: string;
  type?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  details: string[];
}

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Infrastructure"
  | "Education"
  | "Utilities"
  | "Large projects";

export interface ProjectItem {
  name: string;
  location: string;
  category: ProjectCategory;
  role: string;
  type: string;
  scale: string;
  description: string;
  technologies: string[];
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PublicationItem {
  title: string;
  magazine: string;
  year: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  yearsExperience: number;
  profile: string;
  location: string;
  languages: string[];
  countries: string[];
  stats: Stat[];
  philosophy: Highlight[];
  expertiseNarrative: Highlight[];
  education: TimelineEntry[];
  certifications: TimelineEntry[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  expertise: ExpertiseItem[];
  publications: PublicationItem[];
  sideActivities: TimelineEntry[];
  skills: string[];
  contact: ContactItem[];
}
