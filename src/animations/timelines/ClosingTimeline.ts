import gsap from "gsap";

export function buildClosingTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const monogram = scope.querySelector('[data-closing-line="monogram"]');
  const divider = scope.querySelector('[data-closing-line="divider"]');
  const heading = scope.querySelector('[data-closing-line="heading"]');
  const message = scope.querySelector('[data-closing-line="message"]');
  const signoff = scope.querySelector('[data-closing-line="signoff"]');

  if (monogram) {
    gsap.set(monogram, { opacity: 0, scale: 0.92 });
    tl.to(
      monogram,
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      0
    );
  }
  if (divider) {
    gsap.set(divider, { scaleX: 0, transformOrigin: "50% 50%" });
    tl.to(
      divider,
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
      0.4
    );
  }
  if (heading) {
    gsap.set(heading, { opacity: 0, y: 16 });
    tl.to(
      heading,
      { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
      0.5
    );
  }
  if (message) {
    gsap.set(message, { opacity: 0, y: 12 });
    tl.to(
      message,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      0.75
    );
  }
  if (signoff) {
    gsap.set(signoff, { opacity: 0, y: 12 });
    tl.to(
      signoff,
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.95
    );
  }
}
