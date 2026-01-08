"use client";

import Link from "next/link";
import { useSessionStore } from "@/stores/session.store";

import Button from "@/ui/Button";

export function UserMenu() {
  const user = useSessionStore((s) => s.user);
  const role = useSessionStore((s) => s.role);

  const profileHref = "/profile"; // сделаем заглушку страницей ниже

  return (
    <div>
      <Button variant="ghost" size="sm">
        {user?.name ?? "User"} · {role ?? "—"}
      </Button>
    </div>
  );
}
