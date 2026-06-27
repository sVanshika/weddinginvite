import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Gap = "xs" | "s" | "m" | "l" | "xl" | "2xl";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: Gap;
  align?: "start" | "center" | "end";
}

const gapClass: Record<Gap, string> = {
  xs: "gap-2",
  s: "gap-4",
  m: "gap-6",
  l: "gap-10",
  xl: "gap-16",
  "2xl": "gap-24",
};

const alignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
} as const;

export function Stack({
  gap = "m",
  align = "start",
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        gapClass[gap],
        alignClass[align],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
