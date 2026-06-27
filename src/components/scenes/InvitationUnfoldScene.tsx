"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import { Scene } from "@/components/layout/Scene";
import { Invitation } from "@/components/objects/Invitation";
import { useScrubbedTimeline } from "@/animations/hooks/useScrubbedTimeline";
import { buildInvitationUnfoldTimeline } from "@/animations/timelines/InvitationUnfoldTimeline";

export function InvitationUnfoldScene() {
  const containerRef = useRef<HTMLElement>(null);

  const build = useCallback(
    (tl: gsap.core.Timeline, scope: HTMLElement) => {
      const invitation = scope.querySelector('[data-object="invitation"]');
      if (invitation) {
        gsap.set(invitation, { scale: 1, opacity: 1, yPercent: -12 });
      }
      buildInvitationUnfoldTimeline(tl, scope);
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
    <Scene id="invitation-unfold" ref={containerRef} className="bg-ivory">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-[min(72vw,340px)]">
          <Invitation />
        </div>
      </div>
    </Scene>
  );
}
