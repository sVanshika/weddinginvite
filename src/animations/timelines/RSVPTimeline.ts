import gsap from "gsap";

export function buildRsvpTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-rsvp-line="eyebrow"]');
  const heading = scope.querySelector('[data-rsvp-line="heading"]');
  const message = scope.querySelector('[data-rsvp-line="message"]');
  const fields = scope.querySelectorAll("[data-rsvp-field]");

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
  if (message) {
    gsap.set(message, { opacity: 0, y: 16 });
    tl.to(
      message,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      0.3
    );
  }
  if (fields.length) {
    gsap.set(fields, { opacity: 0, y: 24 });
    tl.to(
      fields,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
      },
      0.45
    );
  }
}
