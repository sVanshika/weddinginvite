import gsap from "gsap";

export function buildInvitationUnfoldTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const cover = scope.querySelector('[data-invitation-part="cover"]');
  const inner = scope.querySelector('[data-invitation-part="inner"]');
  const preamble = scope.querySelector('[data-invitation-line="preamble"]');
  const dividerTop = scope.querySelector(
    '[data-invitation-line="divider-top"]'
  );
  const names = scope.querySelector('[data-invitation-line="names"]');
  const dividerBottom = scope.querySelector(
    '[data-invitation-line="divider-bottom"]'
  );
  const date = scope.querySelector('[data-invitation-line="date"]');

  if (!cover || !inner) return;

  gsap.set(cover, {
    rotateY: 0,
    opacity: 1,
    transformOrigin: "0% 50%",
  });
  gsap.set(inner, { opacity: 0 });

  const lines = [preamble, dividerTop, names, dividerBottom, date].filter(
    Boolean
  ) as Element[];

  gsap.set(lines, { opacity: 0, y: 12 });

  tl.to(
    cover,
    {
      rotateY: -148,
      duration: 0.6,
      ease: "power2.inOut",
    },
    0
  )
    .to(
      cover,
      {
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
      },
      0.55
    )
    .to(
      inner,
      {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      },
      0.35
    )
    .to(
      lines,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.08,
      },
      0.55
    );
}
