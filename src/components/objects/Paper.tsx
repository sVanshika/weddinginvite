import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "ivory" | "white";
  grain?: boolean;
  edge?: boolean;
  shadow?: "none" | "soft" | "deep";
}

const toneStyle: Record<NonNullable<PaperProps["tone"]>, string> = {
  ivory:
    "bg-[linear-gradient(180deg,#FFFDF9_0%,#F8F4ED_55%,#F0E8D6_100%)]",
  white:
    "bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFDF9_50%,#F4ECD9_100%)]",
};

const shadowStyle: Record<NonNullable<PaperProps["shadow"]>, string> = {
  none: "",
  soft: "shadow-[0_18px_40px_-20px_rgba(60,46,24,0.35),0_4px_10px_-4px_rgba(60,46,24,0.18)]",
  deep: "shadow-[0_40px_80px_-30px_rgba(60,46,24,0.5),0_10px_24px_-10px_rgba(60,46,24,0.28)]",
};

export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(
  {
    tone = "ivory",
    grain = true,
    edge = true,
    shadow = "soft",
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden rounded-[6px]",
        toneStyle[tone],
        shadowStyle[shadow],
        className
      )}
      {...rest}
    >
      {grain && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.42 0 0 0 0 0.36 0 0 0 0 0.27 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "260px 260px",
          }}
        />
      )}
      {edge && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 rounded-[6px]"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(184, 158, 110, 0.18), inset 0 0 38px rgba(120, 92, 50, 0.12)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
});
