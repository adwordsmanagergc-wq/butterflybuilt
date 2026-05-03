import Link from "next/link";
import { suburbs, PRIMARY_SUBURB_SLUGS } from "@/lib/suburbs";

export function AreasGrid({ excludeSlug }: { excludeSlug?: string }) {
  const list = suburbs.filter(
    (s) => PRIMARY_SUBURB_SLUGS.includes(s.slug) && s.slug !== excludeSlug,
  );
  return (
    <div className="grid grid-cols-2 gap-px bg-cream/10 sm:grid-cols-3 lg:grid-cols-3">
      {list.map((s) => (
        <Link
          key={s.slug}
          href={`/areas/${s.slug}`}
          className="group flex flex-col gap-1 bg-cream/5 px-4 py-4 transition hover:bg-cream/10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-6 sm:py-5"
        >
          <span className="font-serif text-lg leading-tight text-cream sm:text-xl">
            {s.name}
          </span>
          <span className="text-[10px] uppercase tracking-wider2 text-cream/60 group-hover:text-timber-300 sm:text-xs">
            {s.postcode} <span aria-hidden>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
