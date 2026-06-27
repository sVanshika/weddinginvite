# SCROLL_TIMELINE.md

# Scroll Philosophy

* One continuous experience
* One active scene at a time
* Scroll controls animation progress
* Scenes may pin while animations complete
* No abrupt jumps between sections

---

# Timeline Overview

```
0% ───────────────► 100%

Arrival
│
Envelope
│
Open Envelope
│
Reveal Invitation
│
Unfold Invitation
│
Welcome
│
Story
│
Events
│
Venue
│
Gallery
│
Countdown
│
RSVP
│
Closing
```

---

# Scene Timeline

## Scene 01 — Arrival

**Trigger**

* Page load

**Animation**

* Background fade in
* Envelope floats
* Subtle parallax

**Exit**

* User scrolls or taps

---

## Scene 02 — Envelope Opening (Pinned)

**Trigger**

* First scroll

**Animation**

* Wax seal highlights
* Flap opens
* Inner paper revealed

**Scroll**

* 0 → 100%

---

## Scene 03 — Invitation Reveal (Pinned)

**Animation**

* Invitation slides upward
* Camera slowly zooms
* Soft shadow grows

**Scroll**

* 0 → 100%

---

## Scene 04 — Invitation Unfold (Pinned)

**Animation**

* Invitation unfolds
* Names appear
* Decorative elements reveal

**Scroll**

* 0 → 100%

---

## Scene 05 — Welcome

**Animation**

* Letter fades in
* Text reveals
* Scroll resumes normally

---

## Scene 06 — Story

**Animation**

* Photos reveal
* Memories fade
* Light parallax

---

## Scene 07 — Events

**Animation**

* Event cards rise
* Dividers draw
* Icons fade

---

## Scene 08 — Venue

**Animation**

* Map reveals
* Route draws
* CTA appears

---

## Scene 09 — Gallery

**Animation**

* Images scale
* Gentle parallax
* Smooth stagger

---

## Scene 10 — Countdown

**Animation**

* Numbers animate
* Background subtly moves

---

## Scene 11 — RSVP

**Animation**

* Form fades
* Inputs reveal
* CTA highlights

---

## Scene 12 — Closing

**Animation**

* Thank you message
* Invitation gently fades
* End state

---

# Pinning Rules

Only use pinned sections when the user is interacting with a physical object.

Pinned scenes:

* Envelope Opening
* Invitation Reveal
* Invitation Unfold

All remaining sections scroll naturally.

---

# Transition Rules

Each scene must:

* Finish before the next begins
* Pass one visual element to the next scene
* Never fade to an empty screen
* Maintain visual continuity

---

# Performance Rules

* One master GSAP timeline
* One timeline per scene
* Lazy-load heavy assets after the invitation opens
* Never animate off-screen elements
* Target 60 FPS on modern mobile devices
