import * as React from "react";

type IconProps = { size?: number; className?: string };

export default function RoomsIcon({ size = 22, className = "" }: IconProps) {
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
        d="M4 20V7a2 2 0 0 1 2-2h3m0 15V5m0 0h8a2 2 0 0 1 2 2v13M9 9h10M9 13h10M9 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
