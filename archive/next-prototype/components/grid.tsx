import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Grid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>{children}</div>;
}
