import Link from "next/link";
import { services } from "@/lib/services";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="group flex flex-col bg-cream/5 p-8 transition hover:bg-cream/10"
        >
          <span className="eyebrow mb-3 text-timber-300">{s.shortName}</span>
          <h3 className="h-display text-2xl">{s.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">{s.tagline}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-cream group-hover:text-timber-300">
            Learn more <span aria-hidden>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
