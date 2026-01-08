import type { ReactNode } from "react";
import { Header } from "@/shared/ui/header/Header";
import { PlatformSidebar } from "@/features/platform/sidebar/PlatformSidebar";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="platform" />
      <div className="flex">
        <PlatformSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
