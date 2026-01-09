"use client";

import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string | null;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, hint, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label ? (
          <label className="text-sm font-medium text-black">{label}</label>
        ) : null}

        <input
          ref={ref}
          {...props}
          className={
            "w-full rounded-md bg-gray-100 px-3 py-2 text-sm " +
            "placeholder:text-gray-400 outline-none " +
            "ring-1 ring-black/5 focus:ring-2 focus:ring-black/10 " +
            (error ? "ring-red-500/40 focus:ring-red-500/30 " : "") +
            className
          }
        />

        {error ? (
          <p className="text-xs text-red-600">{error}</p>
        ) : hint ? (
          <p className="text-xs text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
