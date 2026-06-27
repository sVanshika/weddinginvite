"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseSceneProgressOptions {
  start?: string;
  end?: string;
  pin?: boolean;
  scrub?: boolean | number;
  onUpdate?: (progress: number) => void;
}

export function useSceneProgress<T extends HTMLElement = HTMLElement>({
  start = "top bottom",
  end = "bottom top",
  pin = false,
  scrub = true,
  onUpdate,
}: UseSceneProgressOptions = {}) {
  const ref = useRef<T | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      end,
      pin,
      scrub,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        onUpdate?.(self.progress);
      },
    });

    return () => trigger.kill();
  }, [start, end, pin, scrub, onUpdate]);

  return { ref, progressRef };
}
