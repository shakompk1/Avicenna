import * as React from "react";

type IconProps = { size?: number; className?: string };

export default function LogIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
