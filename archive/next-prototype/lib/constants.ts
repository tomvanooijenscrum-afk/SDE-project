import {
  Blocks,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Landmark,
  MessageSquareMore,
  PenTool,
  ShieldCheck,
  Speech,
  Waves
} from "lucide-react";
import { ExpertiseItem, NavItem, ProjectCategory } from "@/types/portfolio";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Education", href: "/education" },
  { label: "Publications", href: "/publications" },
  { label: "Activities", href: "/side-activities" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" }
];

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Education",
  "Utilities",
  "Large projects"
];

export const expertiseIcons: Record<string, ExpertiseItem["icon"]> = {
  "Concrete structures": Building2,
  "Steel structures": Landmark,
  Aluminium: Blocks,
  "Structural design": PenTool,
  "Project management": BriefcaseBusiness,
  Leadership: ShieldCheck,
  "Earthquake engineering": Waves,
  "Concept design": PenTool,
  "Quality assurance": ClipboardCheck,
  Communication: MessageSquareMore
};

export const defaultExpertiseIcon = Speech;
