import ClinicSidebar from "@/src/shared/layout/ClinicSidebar";

export default function ClinicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <ClinicSidebar />
      <main className="flex-1 min-h-screen bg-white p-6">{children}</main>
    </div>
  );
}
