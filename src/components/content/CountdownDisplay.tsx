"use client";

import { useEffect, useState } from "react";

interface CountdownDisplayProps {
  targetIso: string;
}

interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
}

function computeParts(targetMs: number, nowMs: number): TimeParts {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, past: false };
}

export function CountdownDisplay({ targetIso }: CountdownDisplayProps) {
  const targetMs = new Date(targetIso).getTime();
  const [parts, setParts] = useState<TimeParts | null>(null);

  useEffect(() => {
    const update = () => setParts(computeParts(targetMs, Date.now()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const display: TimeParts = parts ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    past: false,
  };

  return (
    <div
      data-countdown
      className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4"
      aria-live="polite"
    >
      <CountdownCell label="Days" value={display.days} pad={3} />
      <CountdownCell label="Hours" value={display.hours} pad={2} />
      <CountdownCell label="Minutes" value={display.minutes} pad={2} />
      <CountdownCell label="Seconds" value={display.seconds} pad={2} />
    </div>
  );
}

function CountdownCell({
  label,
  value,
  pad,
}: {
  label: string;
  value: number;
  pad: number;
}) {
  return (
    <div
      data-countdown-cell
      className="flex flex-col items-center"
    >
      <span
        className="text-[clamp(2.75rem,8vw,4.75rem)] leading-none text-ink tabular-nums"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {String(value).padStart(pad, "0")}
      </span>
      <span
        className="mt-3 text-[10px] uppercase tracking-[0.45em] text-charcoal/70"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {label}
      </span>
    </div>
  );
}
