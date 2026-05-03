export type Suburb = {
  slug: string;
  name: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  housingStyles: string;
  landmarks: string[];
  commonProjects: string[];
  neighbours: string[]; // slugs
  // approx coords
  geo: { latitude: number; longitude: number };
};

export const suburbs: Suburb[] = [
  {
    slug: "bondi",
    name: "Bondi",
    postcode: "2026",
    metaTitle: "Carpenter Bondi | Custom Carpentry & Joinery | Butterfly Built",
    metaDescription:
      "Trusted carpenter in Bondi. Butterfly Built delivers custom joinery, decking and renovations across Bondi from our Dover Heights workshop.",
    heroImage: "/images/areas/bondi-hero.jpg",
    heroAlt: "Bondi home with custom timber carpentry by Butterfly Built",
    intro:
      "Bondi homes range from Federation cottages to clifftop architectural builds, and they all share one thing — they sit in salt air, with strong UV and a constant breeze. Working from our Dover Heights workshop just up the road, Butterfly Built is the local carpenter Bondi homeowners trust for joinery, decking and renovations that handle the coast and look beautiful for decades.",
    housingStyles:
      "Federation cottages, semi-detached terraces, 1930s art deco apartments, contemporary clifftop builds and renovated workers' cottages.",
    landmarks: [
      "Bondi Beach",
      "Campbell Parade",
      "Bondi to Bronte coastal walk",
      "Hall Street",
      "Bondi Pavilion",
    ],
    commonProjects: [
      "Coastal hardwood decks and pool surrounds",
      "Custom kitchens in renovated terraces",
      "Built-in wardrobes and storage in apartments",
      "Heritage carpentry on Federation homes",
      "Pergolas and outdoor entertaining areas",
    ],
    neighbours: ["bondi-beach", "bondi-junction", "tamarama", "dover-heights"],
    geo: { latitude: -33.8911, longitude: 151.2741 },
  },
  {
    slug: "bondi-beach",
    name: "Bondi Beach",
    postcode: "2026",
    metaTitle: "Carpenter Bondi Beach | Coastal Carpentry | Butterfly Built",
    metaDescription:
      "Carpenter in Bondi Beach for decks, joinery and coastal renovations. Butterfly Built builds for Bondi Beach homes from our Dover Heights base.",
    heroImage: "/images/areas/bondi-beach-hero.jpg",
    heroAlt: "Bondi Beach apartment with custom joinery by Butterfly Built",
    intro:
      "Bondi Beach homes and apartments demand carpentry that handles salt, sand and sun. Butterfly Built is just minutes away in Dover Heights, building decks, joinery and apartment fit-outs designed specifically for beachside conditions.",
    housingStyles:
      "Beachfront apartments, art deco walk-ups, semi-detached cottages and renovated bungalows steps from the sand.",
    landmarks: [
      "Bondi Beach foreshore",
      "Notts Avenue",
      "Bondi Icebergs",
      "Ben Buckler",
      "Campbell Parade strip",
    ],
    commonProjects: [
      "Apartment joinery and built-ins",
      "Salt-resistant timber balconies and balustrades",
      "Beach-house kitchens and laundries",
      "Outdoor showers and pool decks",
    ],
    neighbours: ["bondi", "tamarama", "dover-heights", "north-bondi"],
    geo: { latitude: -33.8908, longitude: 151.2769 },
  },
  {
    slug: "bondi-junction",
    name: "Bondi Junction",
    postcode: "2022",
    metaTitle: "Carpenter Bondi Junction | Joinery & Renovations | Butterfly Built",
    metaDescription:
      "Carpenter in Bondi Junction for terraces, apartments and renovations. Butterfly Built delivers premium carpentry from nearby Dover Heights.",
    heroImage: "/images/areas/bondi-junction-hero.jpg",
    heroAlt: "Bondi Junction terrace with restored timber carpentry by Butterfly Built",
    intro:
      "Bondi Junction is full of beautiful Victorian terraces, art deco walk-ups and modern apartments. We work across all of them, restoring heritage detail, building custom kitchens and fitting out apartments with built-in storage that gets every centimetre working.",
    housingStyles:
      "Victorian terraces, semi-detached homes, art deco walk-ups and modern Bondi Junction apartments.",
    landmarks: ["Westfield Bondi Junction", "Centennial Park", "Oxford Street", "Bondi Junction Station"],
    commonProjects: [
      "Heritage terrace renovations",
      "Apartment built-in wardrobes and study nooks",
      "Custom kitchens and butler's pantries",
      "Roof terrace decks and pergolas",
    ],
    neighbours: ["bondi", "double-bay", "rose-bay"],
    geo: { latitude: -33.8918, longitude: 151.2486 },
  },
  {
    slug: "tamarama",
    name: "Tamarama",
    postcode: "2026",
    metaTitle: "Carpenter Tamarama | Coastal Carpentry | Butterfly Built",
    metaDescription:
      "Custom carpentry in Tamarama. Butterfly Built builds decks, joinery and renovations for Tamarama homes from our nearby Dover Heights workshop.",
    heroImage: "/images/areas/tamarama-hero.jpg",
    heroAlt: "Tamarama clifftop home with custom timber deck by Butterfly Built",
    intro:
      "Tamarama is one of Sydney's most beautiful pockets — small, exposed and architecturally sharp. The homes here demand engineered, detail-driven carpentry: cantilevered decks, refined joinery and weather-tight finishes. We work just up the road and know the suburb well.",
    housingStyles:
      "Clifftop architect-designed homes, semi-detached cottages and apartments overlooking Tamarama Beach.",
    landmarks: ["Tamarama Beach", "Sculpture by the Sea route", "Tamarama Park"],
    commonProjects: [
      "Cantilevered ocean-facing decks",
      "Architectural joinery and feature walls",
      "Heritage cottage renovations",
      "Pool surrounds in tight sites",
    ],
    neighbours: ["bondi", "bronte", "dover-heights"],
    geo: { latitude: -33.9, longitude: 151.273 },
  },
  {
    slug: "bronte",
    name: "Bronte",
    postcode: "2024",
    metaTitle: "Carpenter Bronte | Custom Joinery & Decks | Butterfly Built",
    metaDescription:
      "Carpenter in Bronte. Butterfly Built delivers custom joinery, decks and renovations for Bronte homes — based nearby in Dover Heights.",
    heroImage: "/images/areas/bronte-hero.jpg",
    heroAlt: "Bronte home with timber deck and custom joinery by Butterfly Built",
    intro:
      "Bronte is family heartland — semis, cottages and renovated homes minutes from the beach. We've built decks, kitchens and built-ins for Bronte clients all over the suburb, with a focus on durable detail and finishes that handle kids, sand and sun.",
    housingStyles:
      "Federation semis, weatherboard cottages, modern renovations and split-level family homes.",
    landmarks: ["Bronte Beach", "Bronte Park", "Bronte Road shops", "Macpherson Street"],
    commonProjects: [
      "Family-home renovations and extensions",
      "Hardwood entertaining decks",
      "Mudrooms, laundries and kid-proof joinery",
      "Heritage cottage restoration",
    ],
    neighbours: ["tamarama", "bondi", "dover-heights"],
    geo: { latitude: -33.9039, longitude: 151.2682 },
  },
  {
    slug: "vaucluse",
    name: "Vaucluse",
    postcode: "2030",
    metaTitle: "Carpenter Vaucluse | Premium Carpentry | Butterfly Built",
    metaDescription:
      "Premium carpenter in Vaucluse for harbourside homes. Butterfly Built delivers bespoke joinery, decking and renovations from nearby Dover Heights.",
    heroImage: "/images/areas/vaucluse-hero.jpg",
    heroAlt: "Vaucluse harbourside home with custom timber joinery by Butterfly Built",
    intro:
      "Vaucluse demands quiet, precise carpentry — the kind that sits inside an architecturally significant home and disappears into the architecture. From our workshop in neighbouring Dover Heights, we deliver bespoke joinery, harbourside decks and refined fit-outs across Vaucluse.",
    housingStyles:
      "Architect-designed harbourside homes, Federation mansions, mid-century estates and modern luxury builds.",
    landmarks: ["Vaucluse House", "Nielsen Park", "Parsley Bay", "South Head"],
    commonProjects: [
      "Architect-led full-home joinery packages",
      "Harbourside decks and pool surrounds",
      "Heritage carpentry on listed homes",
      "Wine cellars and library walls",
    ],
    neighbours: ["dover-heights", "rose-bay", "watsons-bay"],
    geo: { latitude: -33.8526, longitude: 151.2772 },
  },
  {
    slug: "rose-bay",
    name: "Rose Bay",
    postcode: "2029",
    metaTitle: "Carpenter Rose Bay | Custom Joinery | Butterfly Built",
    metaDescription:
      "Carpenter in Rose Bay for harbourside homes and apartments. Butterfly Built designs and builds custom joinery from nearby Dover Heights.",
    heroImage: "/images/areas/rose-bay-hero.jpg",
    heroAlt: "Rose Bay home with bespoke kitchen joinery by Butterfly Built",
    intro:
      "Rose Bay sits across the ridge from our Dover Heights workshop. The homes range from harbourside Federation through to luxury apartments, and our work here ranges just as widely — kitchens, wardrobes, decks and full-home fit-outs.",
    housingStyles:
      "Federation harbour homes, Spanish mission, mid-century apartments and modern luxury builds.",
    landmarks: ["Rose Bay foreshore", "Lyne Park", "Rose Bay Marina", "New South Head Road"],
    commonProjects: [
      "Apartment joinery packages",
      "Custom kitchens and butler's pantries",
      "Pool surrounds and harbour decks",
      "Built-in wardrobes",
    ],
    neighbours: ["double-bay", "vaucluse", "dover-heights"],
    geo: { latitude: -33.8758, longitude: 151.2691 },
  },
  {
    slug: "double-bay",
    name: "Double Bay",
    postcode: "2028",
    metaTitle: "Carpenter Double Bay | Premium Carpentry | Butterfly Built",
    metaDescription:
      "Premium carpenter in Double Bay. Butterfly Built delivers bespoke joinery, kitchens and renovations across Double Bay from nearby Dover Heights.",
    heroImage: "/images/areas/double-bay-hero.jpg",
    heroAlt: "Double Bay apartment with custom timber joinery by Butterfly Built",
    intro:
      "Double Bay homes and apartments expect a high finish standard, and that's exactly where Butterfly Built lives. We deliver custom kitchens, walk-in wardrobes and full apartment fit-outs across Double Bay with the precision and material quality the suburb deserves.",
    housingStyles:
      "Boutique luxury apartments, Federation mansions, semi-detached terraces and modernist homes.",
    landmarks: ["Bay Street", "Knox Street", "Steyne Park", "Redleaf Pool"],
    commonProjects: [
      "Apartment joinery and built-ins",
      "Custom kitchens and bars",
      "Walk-in wardrobes and dressing rooms",
      "Pied-à-terre fit-outs",
    ],
    neighbours: ["rose-bay", "bondi-junction"],
    geo: { latitude: -33.8784, longitude: 151.2435 },
  },
  {
    slug: "dover-heights",
    name: "Dover Heights",
    postcode: "2030",
    metaTitle: "Carpenter Dover Heights | Local Carpentry | Butterfly Built",
    metaDescription:
      "Butterfly Built is based in Dover Heights, Sydney. Local custom carpentry, joinery and renovations from your neighbourhood master carpenters.",
    heroImage: "/images/areas/dover-heights-hero.jpg",
    heroAlt: "Dover Heights home with custom carpentry by Butterfly Built",
    intro:
      "Dover Heights is home for Butterfly Built. Our workshop is based here, and a lot of our work happens within walking distance — clifftop renovations, custom kitchens, hardwood decks and everything in between. If you're in Dover Heights and want a local carpenter who knows the suburb, you've found us.",
    housingStyles:
      "Clifftop architectural homes, post-war family homes, renovated 1960s bricks and contemporary new builds.",
    landmarks: ["Rodney Reserve", "Diamond Bay Reserve", "Dudley Page Reserve", "Military Road"],
    commonProjects: [
      "Clifftop deck and balcony rebuilds",
      "Full-home joinery packages",
      "Family-home extensions",
      "Pool surrounds and outdoor rooms",
    ],
    neighbours: ["vaucluse", "rose-bay", "bondi", "watsons-bay"],
    geo: { latitude: -33.8779, longitude: 151.2783 },
  },
  {
    slug: "watsons-bay",
    name: "Watsons Bay",
    postcode: "2030",
    metaTitle: "Carpenter Watsons Bay | Coastal Carpentry | Butterfly Built",
    metaDescription:
      "Carpenter in Watsons Bay for harbour and coastal homes. Butterfly Built builds bespoke joinery and decks from nearby Dover Heights.",
    heroImage: "/images/areas/watsons-bay-hero.jpg",
    heroAlt: "Watsons Bay harbourside home with custom timber joinery by Butterfly Built",
    intro:
      "Watsons Bay is one of Sydney's quietest harbour pockets, with cottages and architectural builds tucked between the harbour and South Head. We work here regularly, delivering joinery, decks and renovations that suit the suburb's heritage character and exposed coastal conditions.",
    housingStyles:
      "Fishermen's cottages, Federation homes, harbourside architectural builds and luxury renovations.",
    landmarks: ["Camp Cove", "Robertson Park", "South Head", "The Gap", "Watsons Bay wharf"],
    commonProjects: [
      "Heritage cottage carpentry",
      "Harbourside decks and balconies",
      "Custom joinery in tight spaces",
      "Boat-shed and outdoor structure work",
    ],
    neighbours: ["vaucluse", "dover-heights"],
    geo: { latitude: -33.8389, longitude: 151.2812 },
  },
  // Stub neighbour referenced from Bondi Beach to keep cross-links valid; remove if not desired.
  {
    slug: "north-bondi",
    name: "North Bondi",
    postcode: "2026",
    metaTitle: "Carpenter North Bondi | Coastal Carpentry | Butterfly Built",
    metaDescription:
      "Carpenter in North Bondi for coastal homes. Butterfly Built delivers custom joinery and decks from nearby Dover Heights.",
    heroImage: "/images/areas/north-bondi-hero.jpg",
    heroAlt: "North Bondi home with timber deck and joinery by Butterfly Built",
    intro:
      "North Bondi homes sit between the beach and the cliffs of Ben Buckler, and they need carpentry built for it. From our nearby Dover Heights workshop, Butterfly Built delivers decks, joinery and renovations to North Bondi homes that face the Pacific.",
    housingStyles: "Coastal cottages, modern renovations and architectural homes overlooking the ocean.",
    landmarks: ["Ben Buckler", "Ramsgate Avenue", "North Bondi RSL", "Hugh Bamford Reserve"],
    commonProjects: [
      "Ocean-facing decks and balconies",
      "Beach-home kitchens",
      "Built-in wardrobes",
      "Coastal renovations",
    ],
    neighbours: ["bondi", "bondi-beach", "dover-heights"],
    geo: { latitude: -33.886, longitude: 151.279 },
  },
];

export const PRIMARY_SUBURB_SLUGS = [
  "bondi",
  "bondi-beach",
  "bondi-junction",
  "tamarama",
  "bronte",
  "vaucluse",
  "rose-bay",
  "double-bay",
  "dover-heights",
];

export const getSuburbBySlug = (slug: string) => suburbs.find((s) => s.slug === slug);
