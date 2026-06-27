# COMPONENT_LIBRARY.md

# Component Philosophy

Components represent physical objects, not web pages.

Each component should have:

* A single responsibility
* Encapsulated styling
* Independent animation
* Reusable API

---

# Layout Components

## Scene

Purpose:

* Full-screen experience wrapper
* Owns one timeline
* Handles pinning (if required)

---

## Section

Purpose:

* Standard content container
* Consistent spacing
* Responsive width

---

## Stack

Purpose:

* Vertical spacing
* Layout composition

---

# Core Components

## Envelope

Purpose:

* Hero object
* Entry interaction
* Opens to reveal invitation

Children:

* EnvelopeFlap
* WaxSeal

---

## WaxSeal

Purpose:

* Decorative seal
* Opening interaction
* Gold reflection

---

## Invitation

Purpose:

* Main storytelling container
* Expands into website

Children:

* InvitationCover
* InvitationContent

---

## Paper

Purpose:

* Reusable paper surface
* Shared texture and styling

---

# Content Components

## WelcomeCard

Purpose:

* Couple names
* Invitation message
* Wedding date

---

## StorySection

Purpose:

* Couple story
* Timeline
* Photos

---

## EventCard

Purpose:

* Individual wedding event

Properties:

* Title
* Date
* Time
* Venue

---

## VenueCard

Purpose:

* Venue information
* Directions
* CTA

---

## GalleryGrid

Purpose:

* Display memories
* Scroll reveals

---

## Countdown

Purpose:

* Wedding countdown

---

## RSVPForm

Purpose:

* Guest confirmation
* Submission

---

## ClosingCard

Purpose:

* Thank you message
* Final animation

---

# Decorative Components

## FloralDecoration

Purpose:

* Watercolor flowers
* Corners
* Background accents

---

## Divider

Purpose:

* Separate sections
* Gold ornamental line

---

## Monogram

Purpose:

* Couple initials
* Branding element

---

## ParticleLayer

Purpose:

* Dust
* Soft atmosphere

---

# UI Components

## Button

Variants:

* Primary
* Secondary
* Ghost

---

## Icon

Style:

* Thin outline
* Gold or charcoal

---

## ProgressIndicator

Purpose:

* Optional reading progress

---

## MusicToggle

Purpose:

* Background music control

---

# Component Rules

* One responsibility per component
* No duplicated components
* Prefer composition over inheritance
* Animation logic is separate from UI
* Shared styles come from the design system
* Components must be reusable across scenes

---

# Naming Convention

Use clear, descriptive names.

Examples:

```text
Envelope
WaxSeal
Invitation
Paper
WelcomeCard
StorySection
EventCard
VenueCard
GalleryGrid
RSVPForm
ClosingCard
```

Avoid generic names like:

```text
Card1
Section2
Container
Wrapper
Box
```
