import gsap from "gsap";

export function buildVenueTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-venue-line="eyebrow"]');
  const heading = scope.querySelector('[data-venue-line="heading"]');
  const info = scope.querySelector('[data-venue-part="info"]');
  const map = scope.querySelector('[data-venue-part="map"]');

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
  if (info) {
    gsap.set(info, { opacity: 0, y: 24 });
    tl.to(
      info,
      { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
      0.35
    );
  }
  if (map) {
    gsap.set(map, { opacity: 0, scale: 0.96, y: 24 });
    tl.to(
      map,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
      },
      0.45
    );
  }
}
