import gsap from "gsap";

export function buildCountdownTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-countdown-line="eyebrow"]');
  const heading = scope.querySelector('[data-countdown-line="heading"]');
  const date = scope.querySelector('[data-countdown-line="date"]');
  const cells = scope.querySelectorAll("[data-countdown-cell]");

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
  if (date) {
    gsap.set(date, { opacity: 0, y: 12 });
    tl.to(
      date,
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.3
    );
  }
  if (cells.length) {
    gsap.set(cells, { opacity: 0, y: 24 });
    tl.to(
      cells,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      },
      0.45
    );
  }
}
