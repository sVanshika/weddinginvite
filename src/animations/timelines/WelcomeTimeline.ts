import gsap from "gsap";

export function buildWelcomeTimeline(
  tl: gsap.core.Timeline,
  scope: HTMLElement
) {
  const eyebrow = scope.querySelector('[data-welcome-line="eyebrow"]');
  const dividerTop = scope.querySelector('[data-welcome-line="divider-top"]');
  const names = scope.querySelector('[data-welcome-line="names"]');
  const dividerBottom = scope.querySelector(
    '[data-welcome-line="divider-bottom"]'
  );
  const date = scope.querySelector('[data-welcome-line="date"]');
  const message = scope.querySelector('[data-welcome-line="message"]');

  const targets = [eyebrow, dividerTop, names, dividerBottom, date, message];
  if (targets.every((t) => !t)) return;

  if (eyebrow) {
    gsap.set(eyebrow, { opacity: 0, y: 12 });
  }
  if (dividerTop) {
    gsap.set(dividerTop, { scaleX: 0, transformOrigin: "50% 50%" });
  }
  if (names) {
    gsap.set(names, { opacity: 0, y: 28 });
  }
  if (dividerBottom) {
    gsap.set(dividerBottom, { scaleX: 0, transformOrigin: "50% 50%" });
  }
  if (date) {
    gsap.set(date, { opacity: 0, y: 12 });
  }
  if (message) {
    gsap.set(message, { opacity: 0, y: 16 });
  }

  if (eyebrow) {
    tl.to(
      eyebrow,
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      0
    );
  }
  if (dividerTop) {
    tl.to(
      dividerTop,
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
      0.2
    );
  }
  if (names) {
    tl.to(
      names,
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
      0.4
    );
  }
  if (dividerBottom) {
    tl.to(
      dividerBottom,
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
      0.9
    );
  }
  if (date) {
    tl.to(
      date,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      1.0
    );
  }
  if (message) {
    tl.to(
      message,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      1.2
    );
  }
}
