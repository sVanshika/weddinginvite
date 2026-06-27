"use client";

import { useCallback, useRef } from "react";
import { Scene } from "@/components/layout/Scene";
import { Envelope } from "@/components/objects/Envelope";
import { Paper } from "@/components/objects/Paper";
import { useScrubbedTimeline } from "@/animations/hooks/useScrubbedTimeline";
import { buildEnvelopeTimeline } from "@/animations/timelines/EnvelopeTimeline";
import type gsap from "gsap";

export function EnvelopeOpeningScene() {
  const containerRef = useRef<HTMLElement>(null);

  const build = useCallback(
    (tl: gsap.core.Timeline, scope: HTMLElement) => {
      buildEnvelopeTimeline(tl, scope);
    },
    []
  );

  useScrubbedTimeline({
    scope: containerRef,
    build,
    pin: true,
    scrub: true,
    start: "top top",
    end: "+=140%",
  });

  return (
    <Scene id="envelope-opening" ref={containerRef} className="bg-ivory">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-[min(82vw,440px)]">
          <Envelope>
            <Paper
              tone="white"
              shadow="soft"
              edge={false}
              className="aspect-[4/5] w-[86%]"
            >
              <div aria-hidden className="h-full w-full" />
            </Paper>
          </Envelope>
        </div>
      </div>
    </Scene>
  );
}
