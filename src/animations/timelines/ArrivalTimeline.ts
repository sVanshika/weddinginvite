import gsap from "gsap";

interface ArrivalTargets {
  backdrop: Element | null;
  envelope: Element | null;
  caption: Element | null;
}

export function buildArrivalTimeline(targets: ArrivalTargets) {
  const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

  if (targets.backdrop) {
    timeline.from(
      targets.backdrop,
      { opacity: 0, duration: 1.2 },
      0
    );
  }

  if (targets.envelope) {
    timeline.from(
      targets.envelope,
      { opacity: 0, y: 24, duration: 1.1 },
      0.25
    );
  }

  if (targets.caption) {
    timeline.from(
      targets.caption,
      { opacity: 0, y: 8, duration: 0.9 },
      0.7
    );
  }

  return timeline;
}
