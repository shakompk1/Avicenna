"use client";

import SidebarItem from "./SidebarItem";
import {
  CalendarIcon,
  BuildingIcon,
  UsersIcon,
  LogIcon,
  ShieldIcon,
} from "@/src/shared/ui/icons";

export default function PlatformSidebar() {
  return (
    <aside className="w-[320px] border-r border-black/10 bg-white min-h-screen">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-black text-white">
          <ShieldIcon size={22} />
        </div>
        <div>
          <div className="text-2xl font-semibold text-black">Platform</div>
          <div className="text-sm text-gray-500 -mt-0.5">SUPER_ADMIN</div>
        </div>
      </div>

      <div className="border-t border-black/10" />

      <nav className="px-4 py-6 space-y-3">
        <SidebarItem
          href="/admin/clinics"
          label="Clinics"
          icon={<BuildingIcon size={24} />}
        />
        <SidebarItem
          href="/admin/users"
          label="Users"
          icon={<UsersIcon size={24} />}
        />
        <SidebarItem
          href="/admin/audit"
          label="Audit logs"
          icon={<LogIcon size={24} />}
        />
        <SidebarItem
          href="/admin/settings"
          label="Platform settings"
          icon={<CalendarIcon size={24} />}
        />
      </nav>
    </aside>
  );
}
