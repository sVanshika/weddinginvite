import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs uppercase tracking-[0.35em] transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-ink text-paper shadow-[0_8px_18px_-10px_rgba(60,46,24,0.5)] hover:bg-charcoal hover:shadow-[0_10px_24px_-10px_rgba(60,46,24,0.55)]",
  secondary:
    "border border-gold/70 text-ink hover:border-gold hover:bg-gold/5 hover:shadow-[0_6px_18px_-12px_rgba(201,169,107,0.6)]",
  ghost:
    "text-charcoal hover:text-ink hover:bg-ink/5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className, style, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(base, variantClass[variant], className)}
      style={{ fontFamily: "var(--font-ui)", ...style }}
      {...rest}
    >
      {children}
    </button>
  );
});
