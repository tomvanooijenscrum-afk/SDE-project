import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative space-y-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-sand", className)}>
      {children}
    </div>
  );
}
