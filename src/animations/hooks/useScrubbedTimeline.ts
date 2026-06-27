"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrubbedTimelineOptions {
  scope: RefObject<HTMLElement | null>;
  build: (
    timeline: gsap.core.Timeline,
    scope: HTMLElement
  ) => void;
  pin?: boolean;
  scrub?: boolean | number;
  start?: string;
  end?: string;
}

export function useScrubbedTimeline({
  scope,
  build,
  pin = true,
  scrub = true,
  start = "top top",
  end = "bottom top",
}: UseScrubbedTimelineOptions) {
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "none" },
      });

      build(tl, el);

      const trigger = ScrollTrigger.create({
        trigger: el,
        start,
        end,
        pin,
        scrub,
        animation: tl,
      });

      triggerRef.current = trigger;
    }, el);

    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
      ctx.revert();
    };
  }, [scope, build, pin, scrub, start, end]);
}
