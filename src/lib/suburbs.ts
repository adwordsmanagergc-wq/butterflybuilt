export type SuburbFacts = {
  lga: string;
  population: number | null;
  censusYear: number | null;
  areaKm2: number | null;
  distanceFromCbdKm: number | null;
  elevationM: number | null;
  foundedOrNamedNote: string | null;
  historicalNote: string;
  housingEra: string | null;
  heritageNote: string | null;
  geographyNote: string | null;
  notableStreets: string[];
  notableBuildings: string[];
  demographicsNote: string | null;
};

export type Suburb = {
  slug: string;
  name: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  housingStyles: string;
  landmarks: string[];
  commonProjects: string[];
  neighbours: string[]; // slugs
  geo: { latitude: number; longitude: number };
  facts: SuburbFacts;
};

export const suburbs: Suburb[] = [
  {
    slug: "bondi",
    name: "Bondi",
    postcode: "2026",
    metaTitle: "Carpenter Bondi | Local Carpentry & Joinery | Butterfly Built",
    metaDescription:
      "Local carpenter in Bondi for joinery, decks and renovations. Butterfly Built works from a Dover Heights workshop.",
    intro:
      "Local joinery, decking and renovation carpentry for Bondi homes. Workshop ten minutes up the hill in Dover Heights.",
    housingStyles:
      "Victorian, Federation and interwar stock, with some contemporary apartment blocks and medium density infill.",
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
      "Built-in wardrobes in apartments",
      "Heritage carpentry on Federation homes",
      "Pergolas and outdoor entertaining areas",
    ],
    neighbours: ["bondi-beach", "bondi-junction", "tamarama", "dover-heights"],
    geo: { latitude: -33.8911, longitude: 151.2741 },
    facts: {
      lga: "Waverley Council",
      population: 10411,
      censusYear: 2021,
      areaKm2: 0.87,
      distanceFromCbdKm: 7,
      elevationM: 79,
      foundedOrNamedNote:
        "Name derives from a Dharawal word meaning water breaking over rocks. Current spelling accepted in 1827.",
      historicalNote:
        "Bondi was established in 1851 when Edward Smith Hall of the Sydney Monitor bought the land that forms the suburb today. It sits on 87 hectares of Waverley Council with around 10,400 residents, mostly in medium and high density stock from the Victorian, Federation and interwar eras.",
      housingEra:
        "Mix of Victorian (1840 to 1890), Federation (1890 to 1915), Inter War (1915 to 1940) and contemporary stock, mostly medium and high density.",
      heritageNote:
        "Local heritage items include Scarba House on Wellington Street, Bondi Public School (1883), Electricity Substation No. 269 on Anglesea Street, and St Anne's Catholic Church on Blair Street.",
      geographyNote: null,
      notableStreets: [
        "Bondi Road",
        "Wellington Street",
        "Ocean Street",
        "Denham Street",
        "Campbell Parade",
      ],
      notableBuildings: [
        "Bondi Post Office",
        "Royal Hotel",
        "Bondi Waverley School of Arts",
        "St Matthew's Anglican Church",
      ],
      demographicsNote:
        "2021 census: 47.7% born in Australia, 69.2% English only at home, 13.7% Jewish, 18.7% Catholic.",
    },
  },
  {
    slug: "bondi-beach",
    name: "Bondi Beach",
    postcode: "2026",
    metaTitle: "Carpenter Bondi Beach | Coastal Joinery | Butterfly Built",
    metaDescription:
      "Beachfront apartment joinery, salt-tolerant decks and heritage carpentry in Bondi Beach. Butterfly Built delivers from nearby Dover Heights.",
    intro:
      "Beachfront apartment fit-outs, hardwood balconies and heritage detail for Bondi Beach. Our workshop is minutes away in Dover Heights.",
    housingStyles:
      "Early 20th century commercial and civic frontage, Art Deco apartments and semi-detached beach cottages.",
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
    facts: {
      lga: "Waverley Council",
      population: 11513,
      censusYear: 2021,
      areaKm2: 1.22,
      distanceFromCbdKm: 7,
      elevationM: 21,
      foundedOrNamedNote:
        "Name from the Dharawal language, referring to a loud thud like waves breaking on rocks. Established 1851.",
      historicalNote:
        "Edward Smith Hall and Francis O'Brien bought much of the beach frontage in 1851, the beach became a public reserve in 1882, and a tramway reached it in 1884. The 1938 Black Sunday surf rescues remain the most notable event. Campbell Parade's early 20th century frontage, the 1929 Bondi Pavilion and Hotel Bondi (1915) still shape the beachfront today.",
      housingEra:
        "Early 20th century commercial and civic building dominates the frontage, including Hotel Bondi (1915 to 1920s), the 1920s Campbell Parade rebuild, the 1929 Bondi Pavilion and Art Deco architecture.",
      heritageNote:
        "Bondi Beach is on the Australian National Heritage List (2008). State listings include Hotel Bondi, Bondi Pavilion, Bondi Beach Post Office and the Bondi Beach Cultural Landscape at Queen Elizabeth Drive.",
      geographyNote:
        "The beach is about 1 km long and faces south, unusual for Sydney. Ben Buckler Point shelters the north end and marks sea cliffs extending to South Head.",
      notableStreets: [
        "Campbell Parade",
        "Hall Street",
        "Queen Elizabeth Drive",
        "Glenayr Avenue",
        "Beach Road",
      ],
      notableBuildings: [
        "Bondi Pavilion",
        "Bondi Icebergs Club",
        "Hotel Bondi",
        "Bondi Surf Bathers' Life Saving Club",
      ],
      demographicsNote:
        "2021 census: 48.7% born in Australia, 72.1% English only, 51.2% no religion, 7.6% Jewish.",
    },
  },
  {
    slug: "bondi-junction",
    name: "Bondi Junction",
    postcode: "2022",
    metaTitle: "Carpenter Bondi Junction | Joinery & Renovations | Butterfly Built",
    metaDescription:
      "Victorian terrace renovations and apartment joinery in Bondi Junction. Butterfly Built works from its Dover Heights workshop.",
    intro:
      "Terrace renovations, apartment joinery and heritage carpentry for Bondi Junction. We work from a Dover Heights workshop six kilometres away.",
    housingStyles:
      "Victorian and Federation era homes closer to the edges, high density residential near the town centre.",
    landmarks: [
      "Westfield Bondi Junction",
      "Centennial Park",
      "Oxford Street",
      "Bondi Junction Station",
    ],
    commonProjects: [
      "Heritage terrace renovations",
      "Apartment built-in wardrobes and study nooks",
      "Custom kitchens and butler's pantries",
      "Roof terrace decks and pergolas",
    ],
    neighbours: ["bondi", "double-bay", "rose-bay"],
    geo: { latitude: -33.8918, longitude: 151.2486 },
    facts: {
      lga: "Waverley Council",
      population: 10361,
      censusYear: 2021,
      areaKm2: 1.07,
      distanceFromCbdKm: 6,
      elevationM: 85,
      foundedOrNamedNote:
        "Name derives from the Dharawal word Bondi. Took its current name around the arrival of trams in the 1880s.",
      historicalNote:
        "The first hotel opened in 1854 as the Waverley Tea Gardens, and the area was known as Tea Gardens for the next thirty years. Steam trams from 1881 and a tramway junction in 1884 shaped development. The Eastern Suburbs railway opened in 1979.",
      housingEra:
        "Victorian and Federation era homes, with high density residential near the centre and lower density further out.",
      heritageNote:
        "State listed Waverley Reservoirs on Paul Street, plus local items including Ben Eden, Blair Athol, Charles Terrace, Cotswald Hall, Waverley Library and a Congregationalist Church on Botany Street.",
      geographyNote: null,
      notableStreets: [
        "Oxford Street",
        "Bronte Road",
        "Spring Street",
        "Ebley Street",
        "Newland Street",
      ],
      notableBuildings: [
        "Westfield Bondi Junction",
        "Bondi Junction railway station",
        "Nelson Hotel",
        "Eastgate Bondi Junction",
      ],
      demographicsNote:
        "2021 census: 42.0% born in Australia, 64.2% English only, 11.2% Jewish, 20.6% Catholic.",
    },
  },
  {
    slug: "tamarama",
    name: "Tamarama",
    postcode: "2026",
    metaTitle: "Carpenter Tamarama | Clifftop Carpentry | Butterfly Built",
    metaDescription:
      "Clifftop decks and refined joinery in Tamarama. Butterfly Built operates from its Dover Heights workshop minutes away.",
    intro:
      "Clifftop decks, architectural joinery and precise fit-outs for Tamarama. Based in Dover Heights, a short run up the coast.",
    housingStyles:
      "Clifftop architect-designed homes, semi-detached cottages and small apartment blocks above Tamarama Beach.",
    landmarks: [
      "Tamarama Beach",
      "Sculpture by the Sea route",
      "Tamarama Park",
      "Marks Park",
    ],
    commonProjects: [
      "Cantilevered ocean-facing decks",
      "Architectural joinery and feature walls",
      "Heritage cottage renovations",
      "Pool surrounds on tight sites",
    ],
    neighbours: ["bondi", "bronte", "dover-heights"],
    geo: { latitude: -33.9, longitude: 151.273 },
    facts: {
      lga: "Waverley Council",
      population: 1478,
      censusYear: 2021,
      areaKm2: 0.28,
      distanceFromCbdKm: 7,
      elevationM: null,
      foundedOrNamedNote:
        "Early settlers called it Dixon Bay. Renamed Tamarama in the 1800s, probably from the Aboriginal name Gamma Gamma.",
      historicalNote:
        "From 1887 the Bondi Aquarium amusement park ran a roller coaster above the sand, burnt in 1891, reopened, then gave way to Wonderland City in 1906 before closing in 1911. The NSW Government turned the site into Tamarama Park in 1920. Today around 1,480 people live in the 28 hectare pocket.",
      housingEra: null,
      heritageNote: null,
      geographyNote:
        "A small beach between two headlands, with a sand filled valley behind it and deep water offshore. An offshore rock shelf creates large waves and rip currents.",
      notableStreets: ["Wonderland Avenue"],
      notableBuildings: [
        "Tamarama Surf Life Saving Club",
        "Tamarama Park",
        "Marks Park",
        "Tamarama Beach",
      ],
      demographicsNote:
        "2021 census: 61.6% born in Australia, 72.1% English only, weekly household income $4,522.",
    },
  },
  {
    slug: "bronte",
    name: "Bronte",
    postcode: "2024",
    metaTitle: "Carpenter Bronte | Decks, Joinery & Renovations | Butterfly Built",
    metaDescription:
      "Family-home renovations, hardwood decks and joinery in Bronte. Butterfly Built works from a Dover Heights workshop.",
    intro:
      "Family-home renovations, hardwood decks and joinery for Bronte. Based in Dover Heights, minutes from Bronte Beach.",
    housingStyles:
      "Federation semis, weatherboard cottages, modern renovations and split-level family homes near Bronte Beach.",
    landmarks: [
      "Bronte Beach",
      "Bronte Park",
      "Bronte Road shops",
      "Macpherson Street",
    ],
    commonProjects: [
      "Family-home renovations and extensions",
      "Hardwood entertaining decks",
      "Mudrooms, laundries and kid-proof joinery",
      "Heritage cottage restoration",
    ],
    neighbours: ["tamarama", "bondi", "dover-heights"],
    geo: { latitude: -33.9039, longitude: 151.2682 },
    facts: {
      lga: "Waverley Council",
      population: 7166,
      censusYear: 2021,
      areaKm2: 1.33,
      distanceFromCbdKm: 7,
      elevationM: null,
      foundedOrNamedNote:
        "Bronte House, completed 1845, was named after Lord Nelson, who held the title Duke of Bronte in Sicily. The beach sits on Nelson Bay.",
      historicalNote:
        "Robert Lowe bought 17 hectares of the area from Mortimer Lewis, and Bronte House was completed in 1845. The tram line reached Bronte in 1911 and closed in 1960, replaced by buses.",
      housingEra: null,
      heritageNote:
        "Bronte House at 470 Bronte Road and Waverley Cemetery on St Thomas Street are both on the NSW State Heritage Register.",
      geographyNote:
        "Bronte Beach lies on Nelson Bay, surrounded by Bronte Park, with cliff top walking paths to Coogee and Bondi.",
      notableStreets: [
        "Bronte Road",
        "MacPherson Street",
        "St Thomas Street",
        "Leichhardt Street",
      ],
      notableBuildings: [
        "Bronte House",
        "Waverley Cemetery",
        "Bronte Baths",
        "Bronte Surf Lifesaving Club",
      ],
      demographicsNote:
        "2021 census: 65.2% born in Australia, 81.2% English only, 21.9% Catholic, 10.4% Anglican.",
    },
  },
  {
    slug: "vaucluse",
    name: "Vaucluse",
    postcode: "2030",
    metaTitle: "Carpenter Vaucluse | Harbourside Joinery | Butterfly Built",
    metaDescription:
      "Architect-led joinery and harbourside decks in Vaucluse. Butterfly Built operates from the neighbouring Dover Heights workshop.",
    intro:
      "Architect-led joinery, harbourside decks and heritage carpentry for Vaucluse. Our workshop is in neighbouring Dover Heights.",
    housingStyles:
      "Separate houses and flats split roughly evenly: Federation mansions, mid-century estates and modern luxury builds.",
    landmarks: [
      "Vaucluse House",
      "Nielsen Park",
      "Parsley Bay",
      "South Head",
      "Macquarie Lighthouse",
    ],
    commonProjects: [
      "Architect-led full-home joinery packages",
      "Harbourside decks and pool surrounds",
      "Heritage carpentry on listed homes",
      "Wine cellars and library walls",
    ],
    neighbours: ["dover-heights", "rose-bay", "watsons-bay"],
    geo: { latitude: -33.8526, longitude: 151.2772 },
    facts: {
      lga: "Waverley Council and Woollahra Council",
      population: 9510,
      censusYear: 2021,
      areaKm2: null,
      distanceFromCbdKm: 9,
      elevationM: 76,
      foundedOrNamedNote:
        "Sir Henry Browne Hayes named the original Vaucluse House after Petrarch's poem about the Fontaine de Vaucluse in France.",
      historicalNote:
        "Before European settlement the Birrabirragal, a Dharug language clan, lived in the area. A signal station was built in 1790 and Macquarie Lighthouse followed in 1816. Fortifications at Steel Point (1871) and Signal Hill (1892) joined the wealthy estates that grew through the 19th century.",
      housingEra: "Housing stock splits between separate houses at 48.4% and flats or apartments at 40.4%.",
      heritageNote:
        "Heritage listed sites include Vaucluse House, Greycliffe House, Strickland House, Macquarie Lighthouse, Nielsen Park, Wentworth Memorial Church, Wentworth Mausoleum and South Head General Cemetery.",
      geographyNote:
        "On the South Head peninsula, bordered by Sydney Harbour to the west and the Tasman Sea to the east.",
      notableStreets: [
        "Old South Head Road",
        "New South Head Road",
        "Wentworth Road",
        "Vaucluse Road",
        "Fitzwilliam Road",
      ],
      notableBuildings: [
        "Vaucluse House",
        "Macquarie Lighthouse",
        "Greycliffe House",
        "Signal Hill Battery",
      ],
      demographicsNote:
        "2021 census: 58.7% born in Australia, 24.0% Jewish, 18.3% Catholic, 10.1% Anglican.",
    },
  },
  {
    slug: "rose-bay",
    name: "Rose Bay",
    postcode: "2029",
    metaTitle: "Carpenter Rose Bay | Harbour Joinery | Butterfly Built",
    metaDescription:
      "Harbour-facing apartment joinery, kitchens and decks in Rose Bay, from Butterfly Built's Dover Heights workshop.",
    intro:
      "Apartment joinery, kitchens and harbour decks for Rose Bay. Workshop is in Dover Heights, over the ridge.",
    housingStyles:
      "Flats dominate at around 69 percent, with early 20th century houses like Fernleigh Castle (1892) and Rose Bay Cottage (1834).",
    landmarks: [
      "Rose Bay foreshore",
      "Lyne Park",
      "Rose Bay Marina",
      "New South Head Road",
    ],
    commonProjects: [
      "Apartment joinery packages",
      "Custom kitchens and butler's pantries",
      "Pool surrounds and harbour decks",
      "Built-in wardrobes",
    ],
    neighbours: ["double-bay", "vaucluse", "dover-heights"],
    geo: { latitude: -33.8758, longitude: 151.2691 },
    facts: {
      lga: "Waverley Council and Municipality of Woollahra",
      population: 9911,
      censusYear: 2021,
      areaKm2: 2.6,
      distanceFromCbdKm: 7,
      elevationM: 11,
      foundedOrNamedNote:
        "Named after George Rose, joint Secretary to the British Treasury. Name in use by 1788. Original Aboriginal name: Banarung.",
      historicalNote:
        "HMAS Tingira was moored here from 1912 to 1927 and trained over 3,000 sailors. From 1938 seaplane flights began running to London, making Rose Bay Sydney's first international airport. In 1945 nine Catalina flying boats repatriated Australian prisoners of war.",
      housingEra:
        "Dwellings today are 68.8% flats, 20.6% separate houses and 8.7% semi detached or terraces. Early buildings include Rose Bay Cottage (1834), Fernleigh Castle (1892) and the Convent of the Sacred Heart (1888).",
      heritageNote:
        "State Heritage Register listings include the Rose Bay Sea Wall, Salisbury Court (Rose Bay Cottage) and the site of the Ficus superba var. henneana tree.",
      geographyNote:
        "A harbourside suburb with views of the Opera House and Harbour Bridge. A 1902 reserve was reclaimed from tidal sand flats.",
      notableStreets: [
        "New South Head Road",
        "Old South Head Road",
        "Salisbury Road",
        "Vickery Avenue",
        "Fernleigh Gardens",
      ],
      notableBuildings: [
        "Fernleigh Castle",
        "Rose Bay Police Station",
        "Royal Sydney Golf Club",
        "Kincoppal Rose Bay convent",
      ],
      demographicsNote:
        "2021 census: 54.8% born in Australia, 29.0% Jewish, 17.2% Catholic, median weekly household income $2,539.",
    },
  },
  {
    slug: "double-bay",
    name: "Double Bay",
    postcode: "2028",
    metaTitle: "Carpenter Double Bay | Apartment Joinery | Butterfly Built",
    metaDescription:
      "Luxury apartment fit-outs, custom kitchens and walk-in wardrobes in Double Bay, by Butterfly Built.",
    intro:
      "Apartment fit-outs, custom kitchens and walk-in wardrobes for Double Bay. We work from a Dover Heights workshop.",
    housingStyles:
      "Flats and apartments at around 77 percent, with a smaller proportion of separate houses and semi-detached terraces.",
    landmarks: ["Bay Street", "Knox Street", "Steyne Park", "Redleaf Pool"],
    commonProjects: [
      "Apartment joinery and built-ins",
      "Custom kitchens and bars",
      "Walk-in wardrobes and dressing rooms",
      "Pied-a-terre fit-outs",
    ],
    neighbours: ["rose-bay", "bondi-junction"],
    geo: { latitude: -33.8784, longitude: 151.2435 },
    facts: {
      lga: "Municipality of Woollahra",
      population: 4709,
      censusYear: 2021,
      areaKm2: 0.79,
      distanceFromCbdKm: 4,
      elevationM: 10,
      foundedOrNamedNote:
        "Named after the harbour bay between Point Piper and Darling Point. The eastern part is also called Blackburn Cove.",
      historicalNote:
        "Fishermen used the area for shelter in the colony's early years. By 1814 cattle and lettuce farms covered the surrounding valleys. Charles Amos Messenger opened a boatshed there, and the Messenger family's rowing services shaped the early community.",
      housingEra:
        "Flats or apartments dominate at 76.6%, with separate houses at 13.4% and semi detached or townhouses at 8.9%.",
      heritageNote:
        "Heritage items include the Double Bay Compressed Air Ejector Station on Cross Street, Gladswood House on Gladswood Gardens, Overthorpe and Fairwater on New South Head Road.",
      geographyNote: null,
      notableStreets: [
        "New South Head Road",
        "Knox Street",
        "Cross Street",
        "Bay Street",
        "Gladswood Gardens",
      ],
      notableBuildings: [
        "Golden Sheaf Hotel",
        "Gladswood House",
        "Redleaf (Woollahra Council chambers)",
        "Double Bay ferry wharf",
      ],
      demographicsNote:
        "2021 census: 60.6% born in Australia, 79.2% English only, 13.9% Jewish. Nicknamed Double Pay for its high incomes.",
    },
  },
  {
    slug: "dover-heights",
    name: "Dover Heights",
    postcode: "2030",
    metaTitle: "Carpenter Dover Heights | Local Workshop | Butterfly Built",
    metaDescription:
      "Butterfly Built's home workshop in Dover Heights. Local carpenters for joinery, decks and renovations.",
    intro:
      "The workshop is here. Decks, joinery and renovations for Dover Heights homes, finished by local master carpenters.",
    housingStyles:
      "Clifftop architectural homes, post-war family bricks and contemporary new builds, including multiple award-winning projects.",
    landmarks: [
      "Dudley Page Reserve",
      "Diamond Bay Reserve",
      "Rodney Reserve",
      "Military Road",
    ],
    commonProjects: [
      "Clifftop deck and balcony rebuilds",
      "Full-home joinery packages",
      "Family-home extensions",
      "Pool surrounds and outdoor rooms",
    ],
    neighbours: ["vaucluse", "rose-bay", "bondi", "watsons-bay"],
    geo: { latitude: -33.8779, longitude: 151.2783 },
    facts: {
      lga: "Waverley Council",
      population: 4044,
      censusYear: 2021,
      areaKm2: null,
      distanceFromCbdKm: 9,
      elevationM: 85,
      foundedOrNamedNote:
        "Name likely comes from Pacific Ocean cliffs resembling those at Dover, England. First municipal mention 1886.",
      historicalNote:
        "Daniel Cooper owned land here in 1830. The area was used for market gardens before being subdivided in 1913. It later housed coastal radar and radio astronomy facilities. Today around 4,000 people live along the cliffs.",
      housingEra: null,
      heritageNote:
        "Architect-designed homes in Dover Heights have picked up Wilkinson Awards in 2005 and 2015, and Master Builders awards in 2015.",
      geographyNote:
        "A cliffside suburb bordered by Vaucluse to the north, North Bondi to the south and Rose Bay to the west, with the Pacific Ocean to the east.",
      notableStreets: [
        "Military Road",
        "Portland Street",
        "Wentworth Street",
        "Hunter Street",
        "Douglas Parade",
      ],
      notableBuildings: [
        "Dudley Page Reserve",
        "Butterfly House",
        "Moebius House",
        "Holman House",
      ],
      demographicsNote:
        "2021 census: 49.9% Jewish, 55.7% born in Australia, 14.3% South African born, median weekly household income $3,877.",
    },
  },
  {
    slug: "watsons-bay",
    name: "Watsons Bay",
    postcode: "2030",
    metaTitle: "Carpenter Watsons Bay | Harbour Carpentry | Butterfly Built",
    metaDescription:
      "Bespoke carpentry, harbour decks and heritage cottage work in Watsons Bay, from Butterfly Built in nearby Dover Heights.",
    intro:
      "Harbourside carpentry, heritage cottage work and bespoke joinery for Watsons Bay. Workshop in Dover Heights.",
    housingStyles:
      "Fishermen's cottages, Federation homes, harbourside architectural builds and luxury renovations.",
    landmarks: [
      "Camp Cove",
      "Robertson Park",
      "South Head",
      "The Gap",
      "Watsons Bay wharf",
    ],
    commonProjects: [
      "Heritage cottage carpentry",
      "Harbourside decks and balconies",
      "Custom joinery in tight spaces",
      "Boat-shed and outdoor structure work",
    ],
    neighbours: ["vaucluse", "dover-heights"],
    geo: { latitude: -33.8389, longitude: 151.2812 },
    facts: {
      lga: "Municipality of Woollahra",
      population: 883,
      censusYear: 2021,
      areaKm2: 0.6,
      distanceFromCbdKm: 11,
      elevationM: 6,
      foundedOrNamedNote:
        "Named after Robert Watson, former HMS Sirius crew member and later harbourmaster. European settlement dates to 1801.",
      historicalNote:
        "The Cadigal called the area Kutti. It remained an isolated fishing village until development began in the 1860s. A ferry service in the 1870s led to several hotels opening. Today around 880 people live in the 0.6 square kilometre pocket.",
      housingEra: null,
      heritageNote:
        "Listings include Hornby Lighthouse, St Peter's Church (1864, by Edmund Blacket), Our Lady Star of the Sea Church, a former marine station (1885) and the 1811 sandstone obelisk in Robertson Park.",
      geographyNote:
        "On the end of the South Head peninsula, with The Gap ocean cliff on the eastern side and views across Sydney Harbour.",
      notableStreets: [
        "Old South Head Road",
        "Pacific Street",
        "Military Road",
        "Gap Road",
      ],
      notableBuildings: [
        "Hornby Lighthouse",
        "HMAS Watson",
        "Camp Cove",
        "Doyles on the Beach",
      ],
      demographicsNote:
        "2021 census: 62.6% born in Australia, 80.0% English only, 33.5% no religion, 19.8% Catholic.",
    },
  },
  {
    slug: "north-bondi",
    name: "North Bondi",
    postcode: "2026",
    metaTitle: "Carpenter North Bondi | Coastal Carpentry | Butterfly Built",
    metaDescription:
      "Ocean-facing decks, beach-home kitchens and joinery in North Bondi, by Butterfly Built from Dover Heights.",
    intro:
      "Ocean-facing decks, beach-home kitchens and joinery for North Bondi. Workshop just up the road in Dover Heights.",
    housingStyles:
      "Art Deco shops and flats near the beach, with general residential stock across the suburb.",
    landmarks: [
      "Ben Buckler",
      "Ramsgate Avenue",
      "North Bondi RSL",
      "Hugh Bamford Reserve",
    ],
    commonProjects: [
      "Ocean-facing decks and balconies",
      "Beach-home kitchens",
      "Built-in wardrobes",
      "Coastal renovations",
    ],
    neighbours: ["bondi", "bondi-beach", "dover-heights"],
    geo: { latitude: -33.886, longitude: 151.279 },
    facts: {
      lga: "Waverley Council",
      population: 9290,
      censusYear: 2021,
      areaKm2: 1.26,
      distanceFromCbdKm: 7,
      elevationM: 18,
      foundedOrNamedNote:
        "Established 1851. Name derives from an Aboriginal word meaning water breaking over rock.",
      historicalNote:
        "Aboriginal rock carvings including a turtle sit at Ben Buckler headland. The wider Bondi area was part of an 81 hectare land grant to William Roberts in 1809. Edward Smith Hall bought the land in 1851 for 200 pounds.",
      housingEra:
        "Art Deco shops and flats near the beach, with general residential stock across the suburb.",
      heritageNote:
        "Heritage items include the Ben Buckler Gun Battery, the Bondi Ocean Outfall Sewer on Blair Street, the Bondi Sewer Vent on Military Road, and the Rathouse (Tobruk House) RSL sub branch.",
      geographyNote:
        "Coastal, bordering Bondi Beach and Bondi, with Ben Buckler headland east of the beach. A rocky surface, a cliff near the carvings and a former basalt quarry feature in the landscape.",
      notableStreets: [
        "Campbell Parade",
        "Military Road",
        "Blair Street",
        "Curlewis Street",
        "Fletcher Street",
      ],
      notableBuildings: [
        "Bondi Golf & Diggers Club",
        "North Bondi Surf Life Saving Club",
        "St Anne's Catholic Church",
        "Ben Buckler Gun Battery",
      ],
      demographicsNote:
        "2021 census: 58.3% born in Australia, 22.1% Jewish, 16.2% Catholic, 77.5% English only.",
    },
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
