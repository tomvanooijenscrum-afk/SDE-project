import { TimelineEntry } from "@/types/portfolio";
import { TimelineItem } from "@/components/timeline-item";

export function EducationCard({ item }: { item: TimelineEntry }) {
  return (
    <TimelineItem
      title={item.title}
      subtitle={item.organization}
      period={item.period}
      type={item.type}
      description={item.description}
    />
  );
}
