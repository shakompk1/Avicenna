import * as React from "react";

type IconProps = { size?: number; className?: string };

export default function BuildingIcon({ size = 22, className = "" }: IconProps) {
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
        d="M3 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M7 7h4M7 11h4M7 15h4M19 21v-8a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
