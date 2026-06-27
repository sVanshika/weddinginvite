# TECH_ARCHITECTURE.md

# Tech Stack

Framework

* Next.js 15
* React 19
* TypeScript

Styling

* Tailwind CSS
* CSS Variables
* CSS Modules (only if needed)

Animation

* GSAP
* ScrollTrigger
* Lenis

Utilities

* clsx
* lucide-react

Deployment

* Vercel

---

# Project Structure

```text
src/

app/

components/
    layout/
    scenes/
    objects/
    ui/

animations/
    timelines/
    hooks/

lib/

styles/

assets/
    images/
    textures/
    icons/
    audio/

types/

docs/
```

---

# Folder Responsibilities

## app/

Next.js routing only.

No business logic.

---

## components/scenes/

Each full-screen experience.

Examples

ArrivalScene

EnvelopeScene

WelcomeScene

GalleryScene

RSVPScene

---

## components/objects/

Reusable physical objects.

Examples

Envelope

Invitation

WaxSeal

Flower

Divider

Paper

---

## components/ui/

Generic reusable UI.

Button

Input

Modal

Progress

---

## animations/

Contains ALL animation logic.

Never place GSAP timelines inside UI components.

---

## animations/timelines/

One file per scene.

Example

EnvelopeTimeline.ts

GalleryTimeline.ts

RSVPTimeline.ts

---

# Scene Architecture

Each scene owns

* Layout
* Timeline
* Assets
* Progress

Scenes never animate other scenes.

---

# Progress Model ⭐

Every scene exposes only

```ts
interface Scene {
    id: string;
    progress: number; // 0 → 1
}
```

ScrollTrigger maps scroll distance to progress.

Animation reacts only to progress.

Never write logic like

```ts
if(scrollY > 1200)
```

Instead

```ts
if(progress > 0.65)
```

Benefits

* Responsive
* Easier tuning
* Independent timelines
* Cleaner code
* Reusable scenes

---

# Timeline Structure

```text
Master Timeline

↓

Arrival Timeline

↓

Envelope Timeline

↓

Invitation Timeline

↓

Story Timeline

↓

Gallery Timeline

↓

RSVP Timeline
```

Each timeline is isolated.

---

# GSAP Rules

Register plugins once.

Kill timelines on unmount.

Use context().

Avoid duplicate ScrollTriggers.

Use transforms instead of layout changes.

---

# ScrollTrigger Rules

One ScrollTrigger per scene.

Pinned scenes only when necessary.

Never nest pinned sections.

Always clean up triggers.

---

# Lenis Integration

Lenis owns scrolling.

ScrollTrigger listens to Lenis.

One RAF loop.

No competing scroll libraries.

---

# State Management

Prefer local state.

Use Context only for global concerns.

Examples

Theme

Music

Loading

Asset cache

Avoid unnecessary global state.

---

# Asset Strategy

Load only what the current scene needs.

Lazy-load:

Gallery

Maps

Audio

High-resolution photos

---

# Performance Budget

Target

* 60 FPS
* Lighthouse >90
* First Load JS <250 KB (excluding images)
* Minimal layout shifts

Prefer

* transform
* opacity

Avoid

* width
* height
* top
* left

---

# Naming Convention

Components

PascalCase

Envelope.tsx

Timelines

EnvelopeTimeline.ts

Hooks

useEnvelope.ts

Types

Envelope.types.ts

---

# Development Workflow

Every new feature follows this order

1. Design
2. Component
3. Timeline
4. Assets
5. Integration
6. Optimization

Never skip directly to animation.

---

# AI Implementation Rules

Before creating new code

1. Check if a component already exists.
2. Check if a timeline already exists.
3. Reuse before creating.
4. Keep UI and animation separate.
5. Preserve scene independence.
6. Never break the design system.

When uncertain, extend the existing architecture instead of introducing a new pattern.
