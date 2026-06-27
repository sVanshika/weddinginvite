"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

type Attending = "yes" | "no";
type Status = "idle" | "submitting" | "success" | "error";

export function RSVPForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<Attending>("yes");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      attending,
      guests: Number(data.get("guests") ?? 1),
      notes: String(data.get("notes") ?? "").trim(),
    };

    if (!payload.name) {
      setErrorMsg("Please share your name.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div data-rsvp-state="success" className="text-center">
        <h3
          className="text-3xl text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thank you
        </h3>
        <p
          className="mt-4 text-base italic text-charcoal"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Your response has been sealed and sent. We can&apos;t wait to celebrate
          with you.
        </p>
      </div>
    );
  }

  return (
    <form data-rsvp-form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div data-rsvp-field className="grid gap-8 sm:grid-cols-2">
        <Input id="rsvp-name" name="name" label="Your Name" required />
        <Input
          id="rsvp-email"
          name="email"
          type="email"
          label="Email"
          required
        />
      </div>

      <div data-rsvp-field className="flex flex-col gap-3">
        <span
          className="text-[10px] uppercase tracking-[0.4em] text-charcoal/70"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Will you join us?
        </span>
        <div className="flex gap-3">
          {(["yes", "no"] as const).map((option) => {
            const active = attending === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setAttending(option)}
                className={
                  "flex-1 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.35em] transition-all duration-300 ease-out " +
                  (active
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-gold/30 text-charcoal/70 hover:border-gold/60 hover:text-ink")
                }
                style={{ fontFamily: "var(--font-ui)" }}
                aria-pressed={active}
              >
                {option === "yes" ? "Joyfully accepts" : "Regretfully declines"}
              </button>
            );
          })}
        </div>
      </div>

      <div data-rsvp-field>
        <Input
          id="rsvp-guests"
          name="guests"
          type="number"
          label="Guests"
          min={1}
          max={6}
          defaultValue={1}
          disabled={attending === "no"}
        />
      </div>

      <div data-rsvp-field>
        <Textarea
          id="rsvp-notes"
          name="notes"
          label="Dietary needs or a note for the couple"
          placeholder="Anything you'd like us to know"
        />
      </div>

      {status === "error" && errorMsg && (
        <p
          role="alert"
          className="text-sm text-rose-700"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {errorMsg}
        </p>
      )}

      <div data-rsvp-field className="flex justify-center pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sealing…" : "Seal RSVP"}
        </Button>
      </div>
    </form>
  );
}
