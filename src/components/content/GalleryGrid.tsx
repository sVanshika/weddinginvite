import { Paper } from "@/components/objects/Paper";

interface GalleryItem {
  tint: string;
  aspect: string;
}

const items: GalleryItem[] = [
  { tint: "linear-gradient(150deg, rgba(232,222,205,0.85), rgba(200,165,165,0.35))", aspect: "aspect-[4/5]" },
  { tint: "linear-gradient(140deg, rgba(125,139,117,0.4), rgba(248,244,237,0.9))", aspect: "aspect-[3/4]" },
  { tint: "linear-gradient(170deg, rgba(201,169,107,0.35), rgba(255,253,249,0.95))", aspect: "aspect-[5/4]" },
  { tint: "linear-gradient(160deg, rgba(200,165,165,0.55), rgba(232,222,205,0.7))", aspect: "aspect-[4/5]" },
  { tint: "linear-gradient(130deg, rgba(106,115,100,0.45), rgba(248,244,237,0.95))", aspect: "aspect-[3/4]" },
  { tint: "linear-gradient(150deg, rgba(255,253,249,0.95), rgba(201,169,107,0.4))", aspect: "aspect-[4/5]" },
];

export function GalleryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
      {items.map((item, i) => (
        <div
          key={i}
          data-gallery-item
          data-gallery-index={i}
          className={i % 2 === 0 ? "" : "sm:mt-12"}
        >
          <Paper
            tone="white"
            shadow="deep"
            edge={false}
            className={item.aspect}
          >
            <div
              aria-hidden
              className="flex h-full w-full items-center justify-center text-charcoal/40"
              style={{ background: item.tint }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.45em]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Memory · {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
}
