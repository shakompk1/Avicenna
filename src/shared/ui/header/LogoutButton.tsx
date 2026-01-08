"use client";

import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/session.store";
import Button from "@/ui/Button";

export function LogoutButton() {
  const router = useRouter();
  const clearSession = useSessionStore((s) => s.clearSession);

  const onLogout = async () => {
    // UI-only: реальная сессия/куки обрабатывается бэком в /api/auth/logout (если сделаешь).
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignore (UI doesn't own auth)
    } finally {
      clearSession();
      router.replace("/login");
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={onLogout}>
      Logout
    </Button>
  );
}
