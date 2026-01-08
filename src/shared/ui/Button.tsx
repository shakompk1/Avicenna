import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
  };

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    outline:
      "border border-border bg-white text-foreground hover:bg-muted focus:ring-muted",
    ghost: "bg-transparent text-foreground hover:bg-muted focus:ring-muted",
    danger:
      "bg-destructive text-white hover:bg-destructive/90 focus:ring-destructive",
  };

  const disabledStyles = disabled ? "opacity-50 pointer-events-none" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        base,
        sizes[size],
        variants[variant],
        disabledStyles,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
export default Button;
