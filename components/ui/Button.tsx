import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "whatsapp" | "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-sm",
  primary: "bg-primary-900 text-white hover:bg-primary-800 shadow-sm",
  secondary: "bg-accent-500 text-primary-950 hover:bg-accent-400 shadow-sm",
  ghost:
    "bg-transparent text-primary-900 hover:bg-neutral-100 border border-neutral-200",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
