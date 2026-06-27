import gsap from "gsap";

export function buildEnvelopeTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const seal = scope.querySelector('[data-envelope-part="seal"]');
  const flap = scope.querySelector('[data-envelope-part="flap"]');
  const content = scope.querySelector('[data-envelope-part="content"]');

  if (!seal || !flap) return;

  gsap.set(flap, { rotateX: 0, transformOrigin: "50% 0%" });
  gsap.set(seal, { opacity: 1, scale: 1, y: 0, rotate: 0 });

  tl.to(
    seal,
    {
      scale: 1.08,
      rotate: 4,
      y: -3,
      duration: 0.15,
      ease: "power2.out",
    },
    0
  )
    .to(
      seal,
      {
        y: -40,
        opacity: 0,
        scale: 1.15,
        duration: 0.25,
        ease: "power2.in",
      },
      0.12
    )
    .to(
      flap,
      {
        rotateX: -162,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0.2
    );

  if (content) {
    tl.to(
      content,
      {
        yPercent: 52,
        duration: 0.35,
        ease: "power2.out",
      },
      0.55
    );
  }
}
