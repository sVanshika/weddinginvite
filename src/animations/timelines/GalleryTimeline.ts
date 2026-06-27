import gsap from "gsap";

export function buildGalleryTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-gallery-line="eyebrow"]');
  const heading = scope.querySelector('[data-gallery-line="heading"]');
  const items = scope.querySelectorAll("[data-gallery-item]");

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
  if (items.length) {
    gsap.set(items, { opacity: 0, y: 40, scale: 0.96 });
    tl.to(
      items,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.12,
      },
      0.35
    );
  }
}
