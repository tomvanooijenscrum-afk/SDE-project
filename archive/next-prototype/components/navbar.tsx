"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/constants";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="font-display text-3xl text-ink">
          Bas van Ooijen
        </Link>
        <nav aria-label="Primary navigation" className="w-full overflow-x-auto lg:w-auto">
          <ul className="flex min-w-max items-center gap-6 pb-1 lg:min-w-0 lg:pb-0">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition hover:text-accent",
                    pathname === item.href ? "text-ink" : "text-stone"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
