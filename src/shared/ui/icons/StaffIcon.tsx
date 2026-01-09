import * as React from "react";

type IconProps = { size?: number; className?: string };

export default function StaffIcon({ size = 22, className = "" }: IconProps) {
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
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7 10v-1a6 6 0 0 0-6-6H11a6 6 0 0 0-6 6v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
