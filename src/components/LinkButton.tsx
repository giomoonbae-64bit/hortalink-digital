import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost-light";
  children: ReactNode;
}

const variants = {
  primary: "bg-leaf-700 text-white hover:bg-leaf-800 shadow-sm",
  secondary: "bg-white text-leaf-800 border border-leaf-300 hover:bg-leaf-50",
  "ghost-light": "bg-sand-100 text-leaf-900 hover:bg-white",
} as const;

export default function LinkButton({ variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
