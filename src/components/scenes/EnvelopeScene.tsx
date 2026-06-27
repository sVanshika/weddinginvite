"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Envelope } from "@/components/objects/Envelope";
import { Paper } from "@/components/objects/Paper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EnvelopeScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const envelope = root.querySelector('[data-object="envelope"]');
      if (!envelope) return;

      gsap.fromTo(
        envelope,
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      gsap.to(envelope, {
        y: -56,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <Scene id="envelope" ref={containerRef} className="bg-ivory">
      <div className="flex min-h-screen items-center justify-center px-6 py-24">
        <Section width="narrow">
          <div className="mx-auto w-[min(82vw,440px)]">
            <Envelope>
              <Paper
                tone="white"
                shadow="none"
                edge={false}
                className="aspect-[4/5] w-[86%]"
              >
                <div aria-hidden className="h-full w-full" />
              </Paper>
            </Envelope>
          </div>
        </Section>
      </div>
    </Scene>
  );
}
