import PlatformSidebar from "@/src/shared/layout/PlatformSidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <PlatformSidebar />
      <main className="flex-1 min-h-screen bg-white p-6">{children}</main>
    </div>
  );
}
