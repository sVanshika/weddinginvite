import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface WaxSealProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  monogram?: string;
}

export const WaxSeal = forwardRef<HTMLDivElement, WaxSealProps>(function WaxSeal(
  { size = 88, monogram = "&", className, style, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative grid place-items-center rounded-full",
        "will-change-transform",
        className
      )}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #E5C896 0%, #C9A96B 38%, #8B6A3B 90%)",
          boxShadow:
            "inset -4px -6px 10px rgba(58, 38, 12, 0.45), inset 4px 6px 10px rgba(255, 232, 188, 0.35), 0 6px 14px -6px rgba(58, 38, 12, 0.5)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full"
        style={{
          border: "1px solid rgba(58, 38, 12, 0.35)",
        }}
      />
      <span
        className="relative z-10 select-none italic"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: size * 0.42,
          color: "#3C2E18",
          textShadow:
            "0 1px 0 rgba(255, 232, 188, 0.4), 0 -1px 0 rgba(40, 24, 6, 0.4)",
        }}
      >
        {monogram}
      </span>
    </div>
  );
});
