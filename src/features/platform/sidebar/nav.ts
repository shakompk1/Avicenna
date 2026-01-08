import { LucideIcon, Building2, Users } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const platformNav: NavItem[] = [
  { label: "Clinics", href: "/clinics", icon: Building2 },
  { label: "Users", href: "/users", icon: Users },
];
