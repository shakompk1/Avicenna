import * as React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "w-full max-w-md rounded-xl border border-black/10 bg-white p-6 shadow-sm " +
        className
      }
    >
      {children}
    </div>
  );
}
