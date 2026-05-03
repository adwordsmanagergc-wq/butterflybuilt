import { galleryImages } from "@/lib/gallery";

/**
 * Masonry-style gallery grid using CSS columns. Photos keep their natural
 * aspect ratio, columns adapt to viewport width, no layout shift because
 * each <img> ships with its width/height attributes.
 */
export function GalleryGrid({ limit }: { limit?: number }) {
  const list = limit ? galleryImages.slice(0, limit) : galleryImages;
  if (list.length === 0) return null;

  return (
    <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
      {list.map((img) => (
        <figure
          key={img.file}
          className="mb-3 break-inside-avoid overflow-hidden bg-charcoal-soft sm:mb-4"
        >
          <img
            src={`/images/gallery/${img.file}`}
            alt="Carpentry project in Sydney by Butterfly Built"
            width={img.w}
            height={img.h}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
