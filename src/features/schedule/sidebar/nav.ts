import {
  CalendarDays,
  Users,
  Stethoscope,
  DoorOpen,
  Clock,
  Ban,
  Settings,
  LucideIcon,
} from "lucide-react";

export type ClinicNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const clinicNav: ClinicNavItem[] = [
  { label: "Schedule", href: "/calendar", icon: CalendarDays },
  { label: "Patients", href: "/patients", icon: Users },
  { label: "Staff", href: "/staff", icon: Stethoscope },
  { label: "Rooms", href: "/rooms", icon: DoorOpen },
  { label: "Shifts", href: "/shifts", icon: Clock },
  { label: "Absences", href: "/absences", icon: Ban },
  { label: "Settings", href: "/settings", icon: Settings },
];
