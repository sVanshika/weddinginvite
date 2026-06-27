import gsap from "gsap";

export function buildStoryTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-story-line="eyebrow"]');
  const heading = scope.querySelector('[data-story-line="heading"]');
  const paragraphs = scope.querySelectorAll('[data-story-line="paragraph"]');
  const photos = scope.querySelectorAll('[data-story-line="photo"]');

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
  if (paragraphs.length) {
    gsap.set(paragraphs, { opacity: 0, y: 16 });
    tl.to(
      paragraphs,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      },
      0.35
    );
  }
  if (photos.length) {
    gsap.set(photos, { opacity: 0, y: 32, scale: 0.96 });
    tl.to(
      photos,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.18,
      },
      0.45
    );
  }
}
