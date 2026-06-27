import gsap from "gsap";

export function buildInvitationRevealTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const envelope = scope.querySelector('[data-object="envelope"]');
  const invitation = scope.querySelector('[data-object="invitation"]');
  const invitationShadow = scope.querySelector(
    '[data-reveal-part="invitation-shadow"]'
  );

  if (!invitation) return;

  gsap.set(invitation, {
    yPercent: 38,
    scale: 0.6,
    opacity: 0,
    transformOrigin: "50% 50%",
  });

  if (invitationShadow) {
    gsap.set(invitationShadow, { opacity: 0, scale: 0.5 });
  }

  if (envelope) {
    gsap.set(envelope, { scale: 1, opacity: 1, yPercent: 0 });
  }

  tl.to(
    invitation,
    {
      opacity: 1,
      yPercent: -8,
      scale: 0.78,
      duration: 0.55,
      ease: "power3.out",
    },
    0
  );

  if (envelope) {
    tl.to(
      envelope,
      {
        yPercent: 28,
        scale: 0.92,
        opacity: 0.55,
        duration: 0.45,
        ease: "power2.inOut",
      },
      0.15
    ).to(
      envelope,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      0.55
    );
  }

  tl.to(
    invitation,
    {
      yPercent: -12,
      scale: 1,
      duration: 0.45,
      ease: "power2.inOut",
    },
    0.5
  );

  if (invitationShadow) {
    tl.to(
      invitationShadow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0.35
    );
  }
}
