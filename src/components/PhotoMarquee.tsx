import fs from "node:fs";
import path from "node:path";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

function readGallery(): string[] {
  try {
    return fs
      .readdirSync(GALLERY_DIR)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

type Props = {
  /** Speed in seconds for one full row pass. Higher = slower. Default 80. */
  speed?: number;
  /** Image height in px (mobile / desktop). */
  heightClass?: string;
  /** Show two rows flowing in opposite directions. */
  twoRows?: boolean;
};

export function PhotoMarquee({
  speed = 80,
  heightClass = "h-56 sm:h-72",
  twoRows = true,
}: Props) {
  const files = readGallery();
  if (files.length === 0) return null;

  const half = Math.ceil(files.length / 2);
  const rowA = twoRows ? files.slice(0, half) : files;
  const rowB = twoRows ? files.slice(half) : [];

  return (
    <div
      className="relative overflow-hidden"
      // Speed is set via CSS variables so the keyframes can be reused.
      style={
        {
          ["--marquee-speed" as string]: `${speed}s`,
          ["--marquee-speed-alt" as string]: `${speed * 1.15}s`,
        } as React.CSSProperties
      }
    >
      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-charcoal to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-charcoal to-transparent sm:w-24"
      />

      <MarqueeRow files={rowA} direction="left" heightClass={heightClass} />
      {rowB.length > 0 && (
        <MarqueeRow
          files={rowB}
          direction="right"
          heightClass={`${heightClass} mt-3 sm:mt-4`}
          alt
        />
      )}
    </div>
  );
}

function MarqueeRow({
  files,
  direction,
  heightClass,
  alt,
}: {
  files: string[];
  direction: "left" | "right";
  heightClass: string;
  alt?: boolean;
}) {
  // Duplicate the list so the translate(-50%) loop is seamless.
  const duplicated = [...files, ...files];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const speedClass = alt ? "marquee-speed-alt" : "marquee-speed";

  return (
    <div className={`flex w-max flex-nowrap gap-3 sm:gap-4 ${animClass} ${speedClass}`}>
      {duplicated.map((f, i) => (
        <figure
          key={`${f}-${i}`}
          className={`relative shrink-0 ${heightClass} overflow-hidden bg-charcoal-soft`}
        >
          <img
            src={`/images/gallery/${f}`}
            alt="Sydney carpentry by Butterfly Built"
            loading="lazy"
            decoding="async"
            className="block h-full w-auto object-cover select-none"
            draggable={false}
          />
        </figure>
      ))}
    </div>
  );
}
