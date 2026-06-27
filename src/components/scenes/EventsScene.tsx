"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/content/Divider";
import { EventCard, type EventCardProps } from "@/components/content/EventCard";
import { buildEventsTimeline } from "@/animations/timelines/EventsTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const events: EventCardProps[] = [
  {
    index: 1,
    title: "Mehndi",
    date: "Friday · 10 December 2027",
    time: "4:00 pm onwards",
    venue: "Garden Lawns, The Leela Palace",
    dressCode: "Festive · Yellow & Green",
  },
  {
    index: 2,
    title: "Sangeet",
    date: "Saturday · 11 December 2027",
    time: "7:30 pm onwards",
    venue: "The Grand Ballroom, The Leela Palace",
    dressCode: "Indian formal · Jewel tones",
  },
  {
    index: 3,
    title: "Wedding Ceremony",
    date: "Sunday · 12 December 2027",
    time: "11:00 am — Baraat at 10:00 am",
    venue: "Royal Lawns, The Leela Palace",
    dressCode: "Traditional",
  },
  {
    index: 4,
    title: "Reception",
    date: "Sunday · 12 December 2027",
    time: "8:00 pm onwards",
    venue: "Crystal Hall, The Leela Palace",
    dressCode: "Black tie · Ivory & Gold",
  },
];

export function EventsScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });

      buildEventsTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="events" ref={containerRef} className="bg-paper">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <Section width="wide">
          <div className="flex flex-col items-center text-center">
            <span
              data-events-line="eyebrow"
              className="text-[10px] uppercase tracking-[0.45em] text-gold"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Wedding Events
            </span>

            <h2
              data-events-line="heading"
              className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Four days of celebration
            </h2>

            <div data-events-line="divider" className="mt-6">
              <Divider width="md" />
            </div>
          </div>

          <div className="mt-20 grid gap-8 sm:gap-10 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.index} {...event} />
            ))}
          </div>
        </Section>
      </div>
    </Scene>
  );
}
