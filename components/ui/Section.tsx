import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  narrow?: boolean;
  tone?: "default" | "muted" | "primary";
};

const tones = {
  default: "bg-background",
  muted: "bg-neutral-100",
  primary: "bg-primary-900 text-white",
};

export function Section({
  children,
  className,
  narrow = false,
  tone = "default",
  ...rest
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", tones[tone], className)} {...rest}>
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          narrow ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}
