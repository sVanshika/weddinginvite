"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Divider } from "@/components/content/Divider";
import { buildWelcomeTimeline } from "@/animations/timelines/WelcomeTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WelcomeScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      buildWelcomeTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="welcome" ref={containerRef} className="bg-paper">
      <div className="flex min-h-screen items-center justify-center px-6 py-32">
        <Section width="narrow">
          <Stack gap="l" align="center" className="text-center">
            <span
              data-welcome-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-charcoal/70"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Together with their families
            </span>

            <div data-welcome-line="divider-top">
              <Divider width="md" />
            </div>

            <h1
              data-welcome-line="names"
              className="text-[clamp(3.5rem,12vw,7rem)] leading-[1.05] text-ink"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Aanya &amp; Vihaan
            </h1>

            <div data-welcome-line="divider-bottom">
              <Divider width="md" />
            </div>

            <span
              data-welcome-line="date"
              className="text-sm uppercase tracking-[0.45em] text-charcoal"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Twelve · December · MMXXVII
            </span>

            <p
              data-welcome-line="message"
              className="mt-2 max-w-md text-base italic leading-relaxed text-charcoal sm:text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              request the honour of your presence at the celebration of their
              marriage.
            </p>
          </Stack>
        </Section>
      </div>
    </Scene>
  );
}
