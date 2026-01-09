"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/session.store";

export function RequireAuth({
  children,
  scope,
}: {
  children: React.ReactNode;
  scope: "platform" | "clinic";
}) {
  // const router = useRouter();
  // const pathname = usePathname();

  // const isAuthenticated = useSessionStore((s) => s.isAuthenticated);
  // const role = useSessionStore((s) => s.role);
  // const clinicId = useSessionStore((s) => s.clinicId);

  // useEffect(() => {
  //   // 1) нет сессии → логин
  //   if (!isAuthenticated) {
  //     if (pathname !== "/login") router.replace("/login");
  //     return;
  //   }

  //   const isSuper = role === "SUPER_ADMIN";

  //   // 2) platform scope только для SUPER_ADMIN
  //   if (scope === "platform" && !isSuper) {
  //     router.replace("/calendar");
  //     return;
  //   }

  //   // 3) clinic scope
  //   if (scope === "clinic") {
  //     // SUPER_ADMIN должен выбрать clinic context
  //     if (isSuper && !clinicId) {
  //       router.replace("/clinics");
  //       return;
  //     }
  //     // обычные роли тоже должны иметь clinicId (из membership)
  //     if (!isSuper && !clinicId) {
  //       router.replace("/login");
  //       return;
  //     }
  //   }
  // }, [isAuthenticated, role, clinicId, scope, router, pathname]);

  // if (!isAuthenticated) return null;

  // // если clinic scope и супер-админ без clinicId — тоже не показываем контент
  // if (scope === "clinic" && role === "SUPER_ADMIN" && !clinicId) return null;

  return <>{children}</>;
}
