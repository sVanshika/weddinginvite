import { MapPin } from "lucide-react";
import { Paper } from "@/components/objects/Paper";
import { Divider } from "@/components/content/Divider";
import { Button } from "@/components/ui/Button";

interface VenueCardProps {
  name: string;
  address: string;
  mapHref: string;
}

export function VenueCard({ name, address, mapHref }: VenueCardProps) {
  return (
    <Paper tone="white" shadow="deep" className="p-10 sm:p-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div data-venue-part="info" className="flex flex-col items-start">
          <span
            className="text-[10px] uppercase tracking-[0.45em] text-gold"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            The Venue
          </span>

          <h3
            className="mt-4 text-3xl text-ink sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>

          <Divider className="mt-6" width="sm" />

          <p
            className="mt-6 max-w-xs text-base leading-relaxed text-charcoal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {address}
          </p>

          <Button
            variant="secondary"
            className="mt-10"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(mapHref, "_blank", "noopener");
              }
            }}
          >
            <MapPin size={14} strokeWidth={1.5} />
            View on Map
          </Button>
        </div>

        <div data-venue-part="map" className="relative">
          <Paper
            tone="ivory"
            shadow="soft"
            edge={false}
            className="aspect-[4/5] overflow-hidden"
          >
            <div
              aria-hidden
              className="relative h-full w-full"
              style={{
                background:
                  "linear-gradient(155deg, rgba(232, 222, 205, 0.85) 0%, rgba(200, 165, 165, 0.25) 60%, rgba(125, 139, 117, 0.25) 100%)",
              }}
            >
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full opacity-60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(75, 69, 64, 0.18)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill="url(#grid)" />
                <path
                  d="M 30 420 Q 120 380 180 320 T 320 200 Q 360 160 380 90"
                  fill="none"
                  stroke="#C9A96B"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="420" r="6" fill="#4B4540" />
                <circle
                  cx="320"
                  cy="200"
                  r="10"
                  fill="#C9A96B"
                  stroke="#8B6A3B"
                  strokeWidth="1"
                />
              </svg>

              <div className="absolute inset-x-0 bottom-6 text-center">
                <span
                  className="text-[10px] uppercase tracking-[0.45em] text-charcoal/70"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Illustrative map
                </span>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </Paper>
  );
}
