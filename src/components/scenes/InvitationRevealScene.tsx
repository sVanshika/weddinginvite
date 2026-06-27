"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import { Scene } from "@/components/layout/Scene";
import { Envelope } from "@/components/objects/Envelope";
import { Invitation } from "@/components/objects/Invitation";
import { Paper } from "@/components/objects/Paper";
import { useScrubbedTimeline } from "@/animations/hooks/useScrubbedTimeline";
import { buildInvitationRevealTimeline } from "@/animations/timelines/InvitationRevealTimeline";

export function InvitationRevealScene() {
  const containerRef = useRef<HTMLElement>(null);

  const build = useCallback(
    (tl: gsap.core.Timeline, scope: HTMLElement) => {
      const flap = scope.querySelector('[data-envelope-part="flap"]');
      const seal = scope.querySelector('[data-envelope-part="seal"]');
      const content = scope.querySelector('[data-envelope-part="content"]');

      if (flap) {
        gsap.set(flap, { rotateX: -162, transformOrigin: "50% 0%" });
      }
      if (seal) {
        gsap.set(seal, { opacity: 0, y: -40, scale: 1.15 });
      }
      if (content) {
        gsap.set(content, { yPercent: 52 });
      }

      buildInvitationRevealTimeline(tl, scope);
    },
    []
  );

  useScrubbedTimeline({
    scope: containerRef,
    build,
    pin: true,
    scrub: true,
    start: "top top",
    end: "+=160%",
  });

  return (
    <Scene id="invitation-reveal" ref={containerRef} className="bg-ivory">
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="relative mx-auto h-full w-[min(82vw,440px)]">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
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

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="mx-auto w-[min(72vw,340px)]">
              <Invitation />
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
