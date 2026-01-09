"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "soft"; // soft = как Rooms (светлая плашка)
};

export default function SidebarItem({
  href,
  label,
  icon,
  variant = "default",
}: Props) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  // стили под твой скрин
  const base =
    "flex items-center gap-3 rounded-2xl px-4 py-3 text-[22px] font-semibold transition select-none";
  const activeCls = "bg-black text-white shadow-sm";
  const softCls = "bg-gray-100 text-gray-700";
  const idleCls = "text-gray-600 hover:bg-gray-50";

  const cls = active
    ? `${base} ${activeCls}`
    : variant === "soft"
    ? `${base} ${softCls} hover:bg-gray-200/60`
    : `${base} ${idleCls}`;

  const iconCls = active ? "text-white" : "text-gray-500";

  return (
    <Link href={href} className={cls}>
      <span className={iconCls}>{icon}</span>
      <span className="truncate">{label}</span>
    </Link>
  );
}
