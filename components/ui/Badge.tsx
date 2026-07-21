import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "accent" | "primary";
};

const tones = {
  neutral: "bg-neutral-100 text-neutral-700",
  accent: "bg-accent-100 text-accent-800",
  primary: "bg-primary-100 text-primary-800",
};

export function Badge({
  children,
  className,
  tone = "accent",
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
