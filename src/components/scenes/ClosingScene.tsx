"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Divider } from "@/components/content/Divider";
import { buildClosingTimeline } from "@/animations/timelines/ClosingTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ClosingScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      buildClosingTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="closing" ref={containerRef} className="bg-ivory">
      <div className="relative flex min-h-screen items-center justify-center px-6 py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 50%, rgba(201,169,107,0.10) 0%, rgba(248,244,237,0) 75%)",
          }}
        />

        <Section width="narrow" className="relative">
          <Stack gap="l" align="center" className="text-center">
            <span
              data-closing-line="monogram"
              aria-hidden
              className="text-7xl text-gold sm:text-8xl"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              A &amp; V
            </span>

            <div data-closing-line="divider">
              <Divider width="md" />
            </div>

            <h2
              data-closing-line="heading"
              className="text-[clamp(2.25rem,5vw,3.5rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              With love and gratitude
            </h2>

            <p
              data-closing-line="message"
              className="max-w-md text-base italic leading-relaxed text-charcoal sm:text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Thank you for sharing in our story. Your presence — in person or in
              spirit — is the truest gift we could ask for.
            </p>

            <span
              data-closing-line="signoff"
              className="text-[10px] uppercase tracking-[0.5em] text-charcoal/70"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Aanya &amp; Vihaan · December · MMXXVII
            </span>
          </Stack>
        </Section>
      </div>
    </Scene>
  );
}
