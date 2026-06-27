import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, id, className, style, ...rest }, ref) {
    return (
      <label htmlFor={id} className="flex flex-col gap-2">
        <span
          className="text-[10px] uppercase tracking-[0.4em] text-charcoal/70"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {label}
        </span>
        <textarea
          ref={ref}
          id={id}
          rows={3}
          className={cn(
            "resize-none border-0 border-b border-gold/40 bg-transparent px-1 py-2 text-base text-ink",
            "outline-none transition-colors duration-300 ease-out",
            "placeholder:text-charcoal/35 focus:border-gold",
            "disabled:cursor-not-allowed disabled:opacity-60",
            className
          )}
          style={{ fontFamily: "var(--font-body)", ...style }}
          {...rest}
        />
      </label>
    );
  }
);
