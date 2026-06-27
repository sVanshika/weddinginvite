import { type CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { Paper } from "@/components/objects/Paper";
import { WaxSeal } from "@/components/objects/WaxSeal";

interface EnvelopeProps {
  className?: string;
  style?: CSSProperties;
  sealMonogram?: string;
  showContent?: boolean;
  children?: React.ReactNode;
}

export function Envelope({
  className,
  style,
  sealMonogram = "&",
  showContent = false,
  children,
}: EnvelopeProps) {
  return (
    <div
      data-object="envelope"
      className={cn(
        "relative aspect-[5/3.2] w-full",
        "[perspective:1400px]",
        className
      )}
      style={style}
    >
      <Paper
        data-envelope-part="back"
        tone="ivory"
        shadow="deep"
        className="absolute inset-0"
      />

      <div
        data-envelope-part="content-pocket"
        className="absolute inset-x-[6%] bottom-[8%] top-[42%] overflow-hidden rounded-[4px]"
        style={{ pointerEvents: "none" }}
      >
        <div
          data-envelope-part="content"
          className="absolute inset-x-0 bottom-0 flex justify-center"
          style={{
            transform: showContent ? "translateY(0%)" : "translateY(72%)",
          }}
        >
          {children}
        </div>
      </div>

      <Paper
        data-envelope-part="front"
        tone="ivory"
        edge={false}
        shadow="none"
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 25%, 50% 62%, 100% 25%, 100% 100%)",
          boxShadow:
            "inset 0 8px 18px -8px rgba(60, 46, 24, 0.25)",
        }}
      />

      <div
        data-envelope-part="flap"
        className="absolute inset-x-0 top-0 origin-top"
        style={{
          height: "62%",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Paper
          tone="ivory"
          edge={false}
          shadow="none"
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            boxShadow:
              "inset 0 -10px 24px -10px rgba(60, 46, 24, 0.22)",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      <div
        data-envelope-part="seal"
        className="absolute left-1/2"
        style={{
          top: "62%",
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity",
        }}
      >
        <WaxSeal size={72} monogram={sealMonogram} />
      </div>
    </div>
  );
}
