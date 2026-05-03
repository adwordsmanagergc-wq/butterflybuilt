const items = [
  "Licensed",
  "Fully Insured",
  "5-Star Reviews",
  "Eastern Suburbs Specialists",
  "Free Quotes",
];

export function TrustStrip() {
  return (
    <div className="border-y border-cream/10 bg-cream/5">
      <div className="container-prose flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs uppercase tracking-wider2 text-cream/60">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 rounded-full bg-timber-500" />
            {item}
            {i < items.length - 1 ? (
              <span aria-hidden className="ml-8 hidden text-cream/20 sm:inline">·</span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
