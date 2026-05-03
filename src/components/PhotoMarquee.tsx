import { galleryImages, type GalleryImage } from "@/lib/gallery";

type Props = {
  /** Speed in seconds for one full row pass. Higher = slower. */
  speed?: number;
  /** Image height in CSS pixels (mobile, desktop). */
  rowHeight?: { mobile: number; desktop: number };
  /** Show two rows flowing in opposite directions. */
  twoRows?: boolean;
};

export function PhotoMarquee({
  speed = 90,
  rowHeight = { mobile: 200, desktop: 280 },
  twoRows = true,
}: Props) {
  if (galleryImages.length === 0) return null;

  // Interleave so each row mixes orientations (less visual clumping)
  const rowA: GalleryImage[] = [];
  const rowB: GalleryImage[] = [];
  galleryImages.forEach((img, i) => {
    (i % 2 === 0 ? rowA : rowB).push(img);
  });

  return (
    <div
      className="relative overflow-hidden"
      style={
        {
          ["--marquee-speed" as string]: `${speed}s`,
          ["--marquee-speed-alt" as string]: `${Math.round(speed * 1.18)}s`,
          ["--row-h" as string]: `${rowHeight.mobile}px`,
          ["--row-h-md" as string]: `${rowHeight.desktop}px`,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-charcoal to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-charcoal to-transparent sm:w-24"
      />

      <MarqueeRow files={rowA} direction="left" />
      {twoRows && rowB.length > 0 && (
        <MarqueeRow files={rowB} direction="right" alt className="mt-3 sm:mt-4" />
      )}
    </div>
  );
}

function MarqueeRow({
  files,
  direction,
  alt,
  className = "",
}: {
  files: GalleryImage[];
  direction: "left" | "right";
  alt?: boolean;
  className?: string;
}) {
  // Duplicate so the translate(-50%) loop is seamless.
  const duplicated = [...files, ...files];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const speedClass = alt ? "marquee-speed-alt" : "";

  return (
    <div
      className={`marquee-row flex w-max flex-nowrap gap-3 sm:gap-4 ${animClass} ${speedClass} ${className}`}
    >
      {duplicated.map((img, i) => {
        // Reserve exact pixel width based on aspect ratio so the row's total
        // width is fixed at first paint — no layout shift, no animation jitter
        // as images load. Use CSS calc with the row-height variables.
        const aspect = img.w / img.h;
        return (
          <figure
            key={`${img.file}-${i}`}
            className="relative shrink-0 overflow-hidden bg-charcoal-soft marquee-item"
            style={
              {
                ["--aspect" as string]: aspect.toString(),
              } as React.CSSProperties
            }
          >
            <img
              src={`/images/gallery/${img.file}`}
              alt="Sydney carpentry by Butterfly Built"
              width={img.w}
              height={img.h}
              loading={i < 6 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              className="block h-full w-full object-cover select-none"
            />
          </figure>
        );
      })}
    </div>
  );
}
