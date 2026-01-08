"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { platformNav } from "./nav";
import { cn } from "@/shared/lib/cn";

export function PlatformSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-[calc(100vh-3.5rem)] w-64 border-r bg-background">
      <div className="p-3">
        <div className="text-xs font-medium text-muted-foreground px-2 py-2">
          Platform
        </div>

        <nav className="space-y-1">
          {platformNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm",
                  active
                    ? "bg-muted font-medium"
                    : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
