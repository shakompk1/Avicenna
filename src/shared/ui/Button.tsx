"use client";

import * as React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

export default function Button({
  children,
  className = "",
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white hover:bg-black/90 shadow-sm",
    outline: "border border-black/10 bg-white hover:bg-black/5 text-black",
    ghost: "bg-transparent hover:bg-black/5 text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
