"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/content/Divider";
import { GalleryGrid } from "@/components/content/GalleryGrid";
import { buildGalleryTimeline } from "@/animations/timelines/GalleryTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function GalleryScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        },
      });

      buildGalleryTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="gallery" ref={containerRef} className="bg-paper">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <Section width="wide">
          <div className="flex flex-col items-center text-center">
            <span
              data-gallery-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-gold"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Memories
            </span>

            <h2
              data-gallery-line="heading"
              className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Moments along the way
            </h2>

            <div className="mt-6">
              <Divider width="md" />
            </div>
          </div>

          <div className="mt-16">
            <GalleryGrid />
          </div>
        </Section>
      </div>
    </Scene>
  );
}
