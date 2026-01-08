import type { ReactNode } from "react";
import { RequireAuth } from "@/shared/auth/RequireAuth";
import { Header } from "@/shared/ui/header/Header";
import { ClinicSidebar } from "@/features/schedule/sidebar/ClinicSidebar";

export default function ClinicLayout({ children }: { children: ReactNode }) {
  return (
    <RequireAuth scope="clinic">
      <div className="min-h-screen bg-background">
        <Header variant="clinic" />
        <div className="flex">
          <ClinicSidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </RequireAuth>
  );
}
