"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages } from "@/lib/gallery";

export function ProjectCarousel() {
  const total = galleryImages.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback(
    (i: number) => {
      const clamped = ((i % total) + total) % total;
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    },
    [total],
  );

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const w = track.clientWidth;
    if (w === 0) return;
    const i = Math.round(track.scrollLeft / w);
    setIndex((prev) => (prev === i ? prev : i));
  }, []);

  // Keep the active thumbnail visible in the rail
  useEffect(() => {
    const rail = thumbsRef.current;
    const active = rail?.querySelector<HTMLElement>(`[data-thumb="${index}"]`);
    if (rail && active) {
      const target =
        active.offsetLeft - rail.clientWidth / 2 + active.clientWidth / 2;
      rail.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(index + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, scrollToIndex]);

  if (total === 0) return null;

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Carpentry projects gallery"
    >
      {/* Slide track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex aspect-[4/5] w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden bg-charcoal-soft sm:aspect-[16/10]"
      >
        {galleryImages.map((img, i) => (
          <figure
            key={img.file}
            className="relative flex h-full w-full flex-shrink-0 snap-center items-center justify-center bg-black"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
          >
            <img
              src={`/images/gallery/${img.file}`}
              alt={`Carpentry project ${i + 1} of ${total} in Sydney by Butterfly Built`}
              width={img.w}
              height={img.h}
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              className="max-h-full max-w-full object-contain"
            />
          </figure>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={() => scrollToIndex(index - 1)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-cream/30 bg-charcoal/60 text-cream backdrop-blur transition hover:bg-cream hover:text-charcoal sm:flex"
      >
        <span aria-hidden className="text-2xl">‹</span>
      </button>
      <button
        type="button"
        onClick={() => scrollToIndex(index + 1)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-cream/30 bg-charcoal/60 text-cream backdrop-blur transition hover:bg-cream hover:text-charcoal sm:flex"
      >
        <span aria-hidden className="text-2xl">›</span>
      </button>

      {/* Counter + progress */}
      <div className="mt-4 flex items-center gap-4">
        <span
          aria-live="polite"
          className="font-serif text-sm tabular-nums text-cream/80"
        >
          <span className="text-cream">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-cream/40"> / {String(total).padStart(2, "0")}</span>
        </span>
        <div
          aria-hidden
          className="h-px flex-1 bg-cream/15"
        >
          <div
            className="h-px bg-cream transition-[width] duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <div className="flex gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            aria-label="Previous photo"
            className="flex h-9 w-9 items-center justify-center border border-cream/30 text-cream"
          >
            <span aria-hidden className="text-lg">‹</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            aria-label="Next photo"
            className="flex h-9 w-9 items-center justify-center border border-cream/30 text-cream"
          >
            <span aria-hidden className="text-lg">›</span>
          </button>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div
        ref={thumbsRef}
        className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-2"
        aria-label="Jump to photo"
      >
        {galleryImages.map((img, i) => (
          <button
            key={img.file}
            type="button"
            data-thumb={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden border-2 transition sm:h-20 sm:w-20 ${
              i === index
                ? "border-cream"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={`/images/gallery/${img.file}`}
              alt=""
              width={img.w}
              height={img.h}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
