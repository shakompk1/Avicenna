"use client";

import Link from "next/link";
import { useSessionStore } from "@/stores/session.store";
import { cn } from "@/shared/lib/cn";
import { UserMenu } from "./UserMenu";
import { LogoutButton } from "./LogoutButton";
import Badge from "@/ui/Badge";

type HeaderProps = {
  variant: "platform" | "clinic";
};

export function Header({ variant }: HeaderProps) {
  const role = useSessionStore((s) => s.role);
  const clinicName = useSessionStore((s) => s.clinicName);

  const isSuperAdmin = role === "SUPER_ADMIN";

  return (
    <header
      className={cn(
        "h-14 w-full border-b bg-background",
        "flex items-center justify-between px-4"
      )}
    >
      <div className="flex items-center gap-3">
        <Link
          href={variant === "clinic" ? "/calendar" : "/clinics"}
          className="font-semibold tracking-tight"
        >
          ClinicOS
        </Link>

        {variant === "clinic" && (
          <Badge variant="secondary" className="hidden sm:inline-flex">
            {clinicName ?? "Clinic"}
          </Badge>
        )}

        {isSuperAdmin && variant === "clinic" && (
          <Badge className="hidden sm:inline-flex">SUPER_ADMIN</Badge>
        )}
      </div>

      <div className="flex items-center gap-2">
        <UserMenu />
        <LogoutButton />
      </div>
    </header>
  );
}
