import gsap from "gsap";

export function buildEventsTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-events-line="eyebrow"]');
  const heading = scope.querySelector('[data-events-line="heading"]');
  const divider = scope.querySelector('[data-events-line="divider"]');
  const cards = scope.querySelectorAll("[data-event-card]");

  if (eyebrow) {
    gsap.set(eyebrow, { opacity: 0, y: 12 });
    tl.to(
      eyebrow,
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      0
    );
  }
  if (heading) {
    gsap.set(heading, { opacity: 0, y: 24 });
    tl.to(
      heading,
      { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
      0.15
    );
  }
  if (divider) {
    gsap.set(divider, { scaleX: 0, transformOrigin: "50% 50%" });
    tl.to(
      divider,
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
      0.35
    );
  }
  if (cards.length) {
    gsap.set(cards, { opacity: 0, y: 40 });
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.18,
      },
      0.45
    );
  }
}
