"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "@/components/layout/Scene";
import { Section } from "@/components/layout/Section";
import { Paper } from "@/components/objects/Paper";
import { Divider } from "@/components/content/Divider";
import { buildStoryTimeline } from "@/animations/timelines/StoryTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "It began, as the loveliest stories often do, on an ordinary evening in late autumn — a borrowed umbrella, a shared cab through the rain, and a conversation that lasted long after the city had quieted.",
  "Six summers, three cities, and a thousand small moments later, what began as chance has become a promise — one we now invite you to witness.",
];

export function StoryScene() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });

      buildStoryTimeline(tl, root);
    },
    { scope: containerRef }
  );

  return (
    <Scene id="story" ref={containerRef} className="bg-ivory">
      <div className="flex min-h-screen items-center justify-center px-6 py-32">
        <Section width="wide">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-col items-start">
                <span
                  data-story-line="eyebrow"
                  className="text-[10px] uppercase tracking-[0.45em] text-gold"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Our Story
                </span>

                <h2
                  data-story-line="heading"
                  className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  How we met
                </h2>

                <Divider className="mt-6" width="sm" />

                <div className="mt-8 space-y-6">
                  {paragraphs.map((text, i) => (
                    <p
                      key={i}
                      data-story-line="paragraph"
                      className="max-w-prose text-lg leading-relaxed text-charcoal"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative flex flex-col gap-6">
                <div
                  data-story-line="photo"
                  className="relative ml-auto w-[72%]"
                >
                  <Paper
                    tone="white"
                    shadow="deep"
                    className="aspect-[4/5]"
                    edge={false}
                  >
                    <div
                      aria-hidden
                      className="flex h-full w-full items-center justify-center text-charcoal/40"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(232, 222, 205, 0.7) 0%, rgba(200, 165, 165, 0.35) 100%)",
                      }}
                    >
                      <span
                        className="text-xs uppercase tracking-[0.4em]"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Photo
                      </span>
                    </div>
                  </Paper>
                </div>

                <div
                  data-story-line="photo"
                  className="relative -mt-16 w-[64%]"
                >
                  <Paper
                    tone="white"
                    shadow="deep"
                    className="aspect-[3/4]"
                    edge={false}
                  >
                    <div
                      aria-hidden
                      className="flex h-full w-full items-center justify-center text-charcoal/40"
                      style={{
                        background:
                          "linear-gradient(140deg, rgba(125, 139, 117, 0.35) 0%, rgba(240, 232, 214, 0.85) 100%)",
                      }}
                    >
                      <span
                        className="text-xs uppercase tracking-[0.4em]"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Photo
                      </span>
                    </div>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Scene>
  );
}
