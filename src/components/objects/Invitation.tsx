import { type CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { Paper } from "@/components/objects/Paper";

interface InvitationProps {
  className?: string;
  style?: CSSProperties;
  coupleNames?: string;
  date?: string;
  preamble?: string;
}

export function Invitation({
  className,
  style,
  coupleNames = "Aanya & Vihaan",
  date = "Twelve · December · MMXXVII",
  preamble = "Together with their families",
}: InvitationProps) {
  return (
    <div
      data-object="invitation"
      className={cn(
        "relative aspect-[4/5] w-full",
        "[perspective:1400px]",
        className
      )}
      style={style}
    >
      <Paper
        data-invitation-part="inner"
        tone="white"
        shadow="deep"
        className="absolute inset-0 p-8"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
          <span
            data-invitation-line="preamble"
            className="text-[10px] uppercase tracking-[0.45em] text-charcoal/70"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {preamble}
          </span>

          <span
            data-invitation-line="divider-top"
            aria-hidden
            className="mt-6 block h-px w-16 bg-gold/70"
          />

          <h2
            data-invitation-line="names"
            className="mt-8 text-[clamp(2.25rem,7vw,4rem)] leading-tight text-ink"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {coupleNames}
          </h2>

          <span
            data-invitation-line="divider-bottom"
            aria-hidden
            className="mt-8 block h-px w-16 bg-gold/70"
          />

          <span
            data-invitation-line="date"
            className="mt-6 text-xs uppercase tracking-[0.4em] text-charcoal"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {date}
          </span>
        </div>
      </Paper>

      <Paper
        data-invitation-part="cover"
        tone="ivory"
        shadow="soft"
        className="absolute inset-0 p-8"
        style={{
          transformOrigin: "left center",
          backfaceVisibility: "hidden",
          willChange: "transform, opacity",
        }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
          <span
            className="text-[10px] uppercase tracking-[0.45em] text-charcoal/60"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            An Invitation
          </span>

          <span
            aria-hidden
            className="mt-8 text-7xl text-gold"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            &amp;
          </span>

          <span
            aria-hidden
            className="mt-8 block h-px w-12 bg-gold/60"
          />
        </div>
      </Paper>
    </div>
  );
}
