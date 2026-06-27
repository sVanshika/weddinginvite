import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  width?: "narrow" | "default" | "wide";
}

const widthClass: Record<NonNullable<SectionProps["width"]>, string> = {
  narrow: "max-w-xl",
  default: "max-w-3xl",
  wide: "max-w-5xl",
};

export function Section({
  width = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-10",
        widthClass[width],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
