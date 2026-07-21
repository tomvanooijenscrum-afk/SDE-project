import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className
}: ButtonProps) {
  const variants = {
    primary: "bg-ink text-white hover:bg-stone",
    secondary: "border border-ink/10 bg-white text-ink hover:border-ink/30 hover:bg-panel",
    ghost: "text-ink hover:text-accent"
  };

  return (
    <Link
      aria-label={typeof children === "string" ? children : "Button link"}
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
