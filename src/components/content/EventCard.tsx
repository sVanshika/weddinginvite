import { Paper } from "@/components/objects/Paper";
import { Divider } from "@/components/content/Divider";

export interface EventCardProps {
  index: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  dressCode?: string;
}

export function EventCard({
  index,
  title,
  date,
  time,
  venue,
  dressCode,
}: EventCardProps) {
  return (
    <div data-event-card data-event-index={index}>
      <Paper tone="white" shadow="soft" className="px-8 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col items-center text-center">
          <span
            className="text-[10px] uppercase tracking-[0.45em] text-gold"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {`No. 0${index}`}
          </span>

          <h3
            className="mt-4 text-3xl text-ink sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>

          <Divider className="mt-6" width="sm" />

          <dl className="mt-6 grid gap-3 text-charcoal">
            <div>
              <dt
                className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Date
              </dt>
              <dd
                className="mt-1 text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {date}
              </dd>
            </div>
            <div>
              <dt
                className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Time
              </dt>
              <dd
                className="mt-1 text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {time}
              </dd>
            </div>
            <div>
              <dt
                className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Venue
              </dt>
              <dd
                className="mt-1 text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {venue}
              </dd>
            </div>
            {dressCode && (
              <div>
                <dt
                  className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Dress code
                </dt>
                <dd
                  className="mt-1 text-base italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {dressCode}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </Paper>
    </div>
  );
}
