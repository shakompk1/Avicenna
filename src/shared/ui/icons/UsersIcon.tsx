import * as React from "react";

type IconProps = { size?: number; className?: string };

export default function UsersIcon({ size = 22, className = "" }: IconProps) {
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
        d="M16 11a4 4 0 1 0-3.2-6.4M20 19v-1a4 4 0 0 0-4-4h-1M8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm10 8v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
