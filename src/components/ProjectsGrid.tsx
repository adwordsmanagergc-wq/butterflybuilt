import Link from "next/link";
import { Img } from "@/components/Img";

// TODO: Replace placeholders with real projects from Instagram (@butterfly.built)
export const projects = [
  {
    slug: "bondi-clifftop-deck",
    title: "Bondi Clifftop Hardwood Deck",
    suburb: "Bondi",
    image: "/images/projects/bondi-clifftop-deck.jpg",
    alt: "Cantilevered spotted gum deck on a Bondi clifftop home by Butterfly Built",
  },
  {
    slug: "vaucluse-butlers-pantry",
    title: "Vaucluse Kitchen & Butler's Pantry",
    suburb: "Vaucluse",
    image: "/images/projects/vaucluse-kitchen.jpg",
    alt: "Custom oak kitchen with butler's pantry in Vaucluse by Butterfly Built",
  },
  {
    slug: "dover-heights-extension",
    title: "Dover Heights Extension",
    suburb: "Dover Heights",
    image: "/images/projects/dover-heights-extension.jpg",
    alt: "Dover Heights home extension carpentry by Butterfly Built",
  },
  {
    slug: "bronte-floating-stair",
    title: "Bronte Floating Timber Stair",
    suburb: "Bronte",
    image: "/images/projects/bronte-stair.jpg",
    alt: "Floating timber staircase with steel balustrade in a Bronte home by Butterfly Built",
  },
  {
    slug: "double-bay-apartment-fitout",
    title: "Double Bay Apartment Fit-out",
    suburb: "Double Bay",
    image: "/images/projects/double-bay-fitout.jpg",
    alt: "Custom apartment joinery in Double Bay by Butterfly Built",
  },
  {
    slug: "rose-bay-pool-surround",
    title: "Rose Bay Pool Surround",
    suburb: "Rose Bay",
    image: "/images/projects/rose-bay-pool.jpg",
    alt: "Hardwood pool surround in Rose Bay by Butterfly Built",
  },
];

export function ProjectsGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <Link
          key={p.slug}
          href="/projects"
          className="group block"
          aria-label={`${p.title} — view projects`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-timber-100">
            {/* TODO: Replace with Instagram image */}
            <Img
              src={p.image}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h3 className="font-serif text-xl text-charcoal">{p.title}</h3>
            <span className="text-xs uppercase tracking-wider2 text-charcoal-muted">
              {p.suburb}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
