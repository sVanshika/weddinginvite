import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  width?: "sm" | "md" | "lg";
  ornament?: boolean;
}

const widthClass: Record<NonNullable<DividerProps["width"]>, string> = {
  sm: "max-w-[3rem]",
  md: "max-w-[6rem]",
  lg: "max-w-[10rem]",
};

export function Divider({
  width = "md",
  ornament = true,
  className,
  ...rest
}: DividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex w-full items-center justify-center",
        widthClass[width],
        className
      )}
      {...rest}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-gold/70" />
      {ornament && (
        <span
          className="mx-3 text-[10px] tracking-[0.4em] text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✦
        </span>
      )}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/70 to-gold/70" />
    </div>
  );
}
