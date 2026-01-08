import React from "react";

type BadgeVariant =
  | "default"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "outline";
type BadgeSize = "sm" | "md";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
};

export default function Badge({
  children,
  className = "",
  variant = "default",
  size = "sm",
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full font-medium whitespace-nowrap";

  const sizes: Record<BadgeSize, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  const variants: Record<BadgeVariant, string> = {
    default: "bg-primary text-white",
    secondary: "bg-muted text-foreground",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-500 text-white",
    danger: "bg-destructive text-white",
    outline: "border border-border bg-transparent text-foreground",
  };

  return (
    <span
      className={[base, sizes[size], variants[variant], className].join(" ")}
    >
      {children}
    </span>
  );
}
