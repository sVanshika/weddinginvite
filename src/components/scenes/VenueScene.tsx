"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/content/Divider";
import { VenueCard } from "@/components/content/VenueCard";
import { buildVenueTimeline } from "@/animations/timelines/VenueTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function VenueScene() {
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

      buildVenueTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="venue" ref={containerRef} className="bg-ivory">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <Section width="wide">
          <div className="flex flex-col items-center text-center">
            <span
              data-venue-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-gold"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Where it all happens
            </span>

            <h2
              data-venue-line="heading"
              className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Join us at the venue
            </h2>

            <div className="mt-6">
              <Divider width="md" />
            </div>
          </div>

          <div className="mt-16">
            <VenueCard
              name="The Leela Palace"
              address="Diplomatic Enclave, Chanakyapuri, New Delhi 110023, India"
              mapHref="https://maps.google.com/?q=The+Leela+Palace+New+Delhi"
            />
          </div>
        </Section>
      </div>
    </Scene>
  );
}
