"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/content/Divider";
import { Paper } from "@/components/objects/Paper";
import { RSVPForm } from "@/components/content/RSVPForm";
import { buildRsvpTimeline } from "@/animations/timelines/RSVPTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function RSVPScene() {
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

      buildRsvpTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="rsvp" ref={containerRef} className="bg-paper">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <Section width="default">
          <div className="flex flex-col items-center text-center">
            <span
              data-rsvp-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-gold"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Your response
            </span>

            <h2
              data-rsvp-line="heading"
              className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Will you join us?
            </h2>

            <p
              data-rsvp-line="message"
              className="mt-4 max-w-md text-base italic leading-relaxed text-charcoal"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Kindly seal your response by the thirtieth of October, two thousand
              and twenty-seven.
            </p>

            <div className="mt-6">
              <Divider width="md" />
            </div>
          </div>

          <div className="mt-16">
            <Paper tone="ivory" shadow="deep" className="p-8 sm:p-12">
              <RSVPForm />
            </Paper>
          </div>
        </Section>
      </div>
    </Scene>
  );
}
