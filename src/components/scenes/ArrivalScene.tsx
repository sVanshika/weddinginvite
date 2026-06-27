"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { buildArrivalTimeline } from "@/animations/timelines/ArrivalTimeline";

export function ArrivalScene() {
  const containerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = buildArrivalTimeline({
        backdrop: backdropRef.current,
        envelope: envelopeRef.current,
        caption: captionRef.current,
      });

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <Scene id="arrival" ref={containerRef} className="bg-ivory">
      <div
        ref={backdropRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 35%, rgba(255, 253, 249, 1) 0%, rgba(248, 244, 237, 1) 55%, rgba(232, 222, 205, 1) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.45 0 0 0 0 0.4 0 0 0 0 0.32 0 0 0 0.85 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "320px 320px",
        }}
      />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <Section width="narrow">
          <Stack gap="xl" align="center" className="text-center">
            <div
              ref={envelopeRef}
              className="relative aspect-[5/3] w-full max-w-[360px]"
              aria-label="Sealed wedding invitation"
              role="img"
            >
              <svg
                viewBox="0 0 500 300"
                className="absolute inset-0 h-full w-full drop-shadow-[0_24px_50px_rgba(75,69,64,0.18)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFDF9" />
                    <stop offset="100%" stopColor="#F1E9D8" />
                  </linearGradient>
                  <radialGradient id="wax" cx="0.5" cy="0.4" r="0.6">
                    <stop offset="0%" stopColor="#D9B884" />
                    <stop offset="60%" stopColor="#C9A96B" />
                    <stop offset="100%" stopColor="#8B6A3B" />
                  </radialGradient>
                </defs>

                <rect
                  x="6"
                  y="6"
                  width="488"
                  height="288"
                  rx="6"
                  fill="url(#paper)"
                  stroke="#E2D6BA"
                  strokeWidth="1"
                />

                <path
                  d="M 6 6 L 250 180 L 494 6 Z"
                  fill="#F1E9D8"
                  stroke="#D8C7A2"
                  strokeWidth="1"
                />

                <circle
                  cx="250"
                  cy="178"
                  r="32"
                  fill="url(#wax)"
                  stroke="#8B6A3B"
                  strokeWidth="0.5"
                  opacity="0.95"
                />
                <text
                  x="250"
                  y="186"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontSize="22"
                  fill="#3C2E18"
                  fontStyle="italic"
                  opacity="0.85"
                >
                  &amp;
                </text>
              </svg>
            </div>

            <div ref={captionRef}>
              <p
                className="text-sm uppercase tracking-[0.4em] text-charcoal/70"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Scroll to open
              </p>
            </div>
          </Stack>
        </Section>
      </div>
    </Scene>
  );
}
