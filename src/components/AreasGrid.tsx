import Link from "next/link";
import { suburbs, PRIMARY_SUBURB_SLUGS } from "@/lib/suburbs";

export function AreasGrid({ excludeSlug }: { excludeSlug?: string }) {
  const list = suburbs.filter(
    (s) => PRIMARY_SUBURB_SLUGS.includes(s.slug) && s.slug !== excludeSlug,
  );
  return (
    <div className="grid grid-cols-2 gap-px bg-charcoal/10 sm:grid-cols-3 lg:grid-cols-3">
      {list.map((s) => (
        <Link
          key={s.slug}
          href={`/areas/${s.slug}`}
          className="group flex items-baseline justify-between gap-4 bg-cream px-6 py-5 transition hover:bg-timber-50"
        >
          <span className="font-serif text-xl text-charcoal">{s.name}</span>
          <span className="text-xs uppercase tracking-wider2 text-charcoal-muted group-hover:text-timber-700">
            {s.postcode} →
          </span>
        </Link>
      ))}
    </div>
  );
}
