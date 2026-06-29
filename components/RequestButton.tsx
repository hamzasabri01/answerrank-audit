"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  plan?: string;
  children: ReactNode;
};

export default function RequestButton({ plan, children, onClick, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        onClick?.(event);
        window.dispatchEvent(new CustomEvent("open-snapshot-form", { detail: { plan } }));
      }}
    >
      {children}
    </button>
  );
}
