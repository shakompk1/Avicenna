"use client";

import SidebarItem from "./SidebarItem";
import {
  CalendarIcon,
  UsersIcon,
  StaffIcon,
  RoomsIcon,
  ClockIcon,
} from "@/src/shared/ui/icons";

export default function ClinicSidebar() {
  return (
    <aside className="w-[320px] border-r border-black/10 bg-white min-h-screen">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-black text-white">
          <CalendarIcon size={22} />
        </div>
        <div className="text-2xl font-semibold text-black">Avicenna</div>
      </div>

      <div className="border-t border-black/10" />

      {/* Nav */}
      <nav className="px-4 py-6 space-y-3">
        <SidebarItem
          href="/calendar"
          label="Schedule"
          icon={<CalendarIcon size={24} />}
        />
        <SidebarItem
          href="/patients"
          label="Patients"
          icon={<UsersIcon size={24} />}
        />
        <SidebarItem
          href="/staff"
          label="Staff"
          icon={<StaffIcon size={24} />}
        />
        <SidebarItem
          href="/rooms"
          label="Rooms"
          icon={<RoomsIcon size={24} />}
        />
        <SidebarItem
          href="/shifts"
          label="Shifts"
          icon={<ClockIcon size={24} />}
        />
      </nav>
    </aside>
  );
}
