"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/content/Divider";
import { CountdownDisplay } from "@/components/content/CountdownDisplay";
import { buildCountdownTimeline } from "@/animations/timelines/CountdownTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TARGET_ISO = "2027-12-12T11:00:00+05:30";

export function CountdownScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });

      buildCountdownTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="countdown" ref={containerRef} className="bg-ivory">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(201,169,107,0.10) 0%, rgba(248,244,237,0) 70%)",
          }}
        />

        <Section width="default" className="relative">
          <div className="flex flex-col items-center text-center">
            <span
              data-countdown-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-gold"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Counting the days
            </span>

            <h2
              data-countdown-line="heading"
              className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Until forever begins
            </h2>

            <span
              data-countdown-line="date"
              className="mt-6 text-xs uppercase tracking-[0.45em] text-charcoal"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              12 December 2027 · 11:00 IST
            </span>

            <div className="mt-6">
              <Divider width="md" />
            </div>
          </div>

          <div className="mt-20">
            <CountdownDisplay targetIso={TARGET_ISO} />
          </div>
        </Section>
      </div>
    </Scene>
  );
}
