# ANIMATION_RULES.md

# Motion Philosophy

Animation exists to reinforce the illusion of interacting with a real invitation.

Every animation must answer:

> **Why is this object moving?**

If there is no physical reason, don't animate it.

---

# Motion Principles

* Motion is subtle
* Motion is intentional
* Motion is physically believable
* One focal animation at a time
* Animation guides attention, never distracts

---

# Animation Categories

## Physical

Used for real-world objects.

Examples:

* Open
* Close
* Fold
* Unfold
* Slide
* Lift
* Rotate
* Stack

---

## Environmental

Creates atmosphere.

Examples:

* Floating dust
* Soft light
* Flower movement
* Shadow changes
* Gold shimmer

---

## Typography

Used only for text.

Examples:

* Fade
* Mask reveal
* Ink writing
* Character stagger
* Divider draw

---

# Forbidden Animations

Never use:

* Bounce
* Elastic
* Rubber band
* Overshoot
* Shake
* Spin
* Flash
* Infinite attention-seeking animations
* Large zooms

Luxury is calm.

---

# Easing

Preferred:

* easeOut
* easeInOut
* Custom cubic-bezier

Avoid:

* bounce
* spring
* elastic

---

# Duration Guidelines

Micro interactions

150–250ms

---

Small transitions

300–500ms

---

Scene transitions

600–1200ms

---

Pinned scroll animations

Controlled entirely by scroll progress.

No fixed duration.

---

# Scroll Rules

Scroll never directly moves content.

Scroll controls animation progress.

Example:

```text
Scroll

↓

Timeline Progress (0 → 1)

↓

Animation State
```

---

# Scene Ownership ⭐

Every scene owns its own animation timeline.

Each scene exposes only:

```ts
interface Scene {
    id: string;
    progress: number; // 0 → 1
}
```

GSAP maps scroll distance to `progress`.

The animation only reacts to `progress`.

It never knows how many pixels were scrolled.

Benefits:

* Responsive
* Easier tuning
* Reusable scenes
* Independent timelines
* Cleaner architecture

Never hardcode animation logic to pixel values.

---

# GSAP Structure

Preferred hierarchy:

```text
Master Timeline
│
├── Arrival Timeline
├── Envelope Timeline
├── Reveal Timeline
├── Invitation Timeline
├── Story Timeline
├── Events Timeline
├── Venue Timeline
├── Gallery Timeline
├── RSVP Timeline
└── Closing Timeline
```

Each timeline is isolated.

No scene should modify another scene's animation.

---

# Pinned Sections

Use pinning only for physical interactions.

Allowed:

* Envelope opening
* Invitation reveal
* Invitation unfolding

Everything else scrolls naturally.

---

# Layering Rules

Animate foreground before background.

Preferred order:

1. Physical object
2. Shadow
3. Decorative elements
4. Typography

---

# Performance Rules

* Target 60 FPS
* Animate `transform` and `opacity` whenever possible
* Avoid layout-triggering properties
* Lazy-load heavy assets
* Pause off-screen animations
* Respect `prefers-reduced-motion`

---

# Continuity Rules

Every scene should hand off at least one visual element to the next scene.

Avoid:

* Blank transitions
* Full-screen flashes
* Abrupt cuts

The experience should feel like one continuous invitation.

---

# Animation Review Checklist

Before adding any animation, ask:

* Does it have a physical reason?
* Does it improve storytelling?
* Is it subtle?
* Is it consistent with the rest of the site?
* Can it run smoothly on mobile?
* Is it driven by scene progress instead of scroll pixels?

If any answer is "No", redesign the animation before implementing it.
