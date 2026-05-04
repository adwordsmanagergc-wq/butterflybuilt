export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "custom-carpentry-bespoke-joinery",
    name: "Custom Carpentry & Bespoke Joinery",
    shortName: "Custom Joinery",
    tagline: "One-of-a-kind joinery, hand-crafted in Sydney.",
    metaTitle: "Custom Joinery Sydney | Butterfly Built Bespoke Carpentry",
    metaDescription:
      "Bespoke custom joinery in Sydney by Butterfly Built. Hand-crafted cabinetry, built-ins and feature pieces from our Dover Heights workshop.",
    heroImage: "/images/services/custom-joinery-hero.jpg",
    heroAlt: "Custom timber joinery installed in a Sydney home by Butterfly Built carpenters",
    intro:
      "Our custom carpentry and bespoke joinery service is the heart of Butterfly Built. Every piece is designed with you, drawn in detail, and crafted in our Dover Heights workshop using premium Australian and European timbers. From statement living-room walls to butler's pantries and library walls, we produce joinery that fits your home perfectly and lasts a lifetime.",
    benefits: [
      "Designed and built to millimetre precision for your space",
      "Premium Australian hardwoods and architectural-grade veneers",
      "Hand-finished by master carpenters in Sydney",
      "Seamless integration with existing architecture",
      "Fixed quotes and detailed drawings before we build",
    ],
    process: [
      { step: "Consultation", description: "We meet on site, listen carefully and understand how you live." },
      { step: "Design", description: "We produce detailed drawings, material samples and finishes." },
      { step: "Quote", description: "Transparent fixed-price quote with no surprises." },
      { step: "Build", description: "Crafted in our Dover Heights workshop by experienced carpenters." },
      { step: "Install & Finish", description: "Clean, careful install with a final hand-finish on site." },
    ],
    faqs: [
      {
        question: "How long does custom joinery take in Sydney?",
        answer:
          "Most projects run 4–8 weeks from sign-off to install, depending on size, finish and timber lead times. Larger fit-outs may run longer; we'll give you a clear timeline before you commit.",
      },
      {
        question: "Do you design joinery as well as build it?",
        answer:
          "Yes. We work with homeowners directly and alongside architects and interior designers across Sydney. We can produce full shop drawings or build to your designer's plans.",
      },
      {
        question: "What timbers and finishes can I choose?",
        answer:
          "We work with American oak, Tasmanian oak, blackbutt, spotted gum, walnut, and architectural veneers, plus 2-pac, hand-rubbed oils and natural waxes. We'll bring samples to your home.",
      },
    ],
    keywords: [
      "custom joinery Sydney",
      "bespoke carpentry Sydney",
      "carpenter Sydney",
      "custom cabinetry Sydney",
    ],
  },
  {
    slug: "decking-timber-deck-construction",
    name: "Decking & Timber Deck Construction",
    shortName: "Decking",
    tagline: "Hardwood decks built for Sydney's coastal climate.",
    metaTitle: "Decking Sydney | Timber Deck Builders | Butterfly Built",
    metaDescription:
      "Premium timber decking in Sydney. Spotted gum, blackbutt and merbau decks built by master carpenters. Servicing the Eastern Suburbs from Dover Heights.",
    heroImage: "/images/services/decking-hero.jpg",
    heroAlt: "Spotted gum timber deck overlooking Sydney coastline built by Butterfly Built",
    intro:
      "A great deck is a structural project as much as a finish. We build hardwood decks designed for Sydney's salt air and harsh sun — properly footed, well ventilated and finished to last. From cantilevered ocean decks in Bondi to entertainer decks in the Eastern Suburbs, our decks are flat, square and solid for decades.",
    benefits: [
      "Australian hardwoods: spotted gum, blackbutt, merbau, ironbark",
      "Engineered substructure with stainless or hot-dip galv fixings",
      "Coastal-grade detailing for salt and UV exposure",
      "Hidden fixings available for a clean finish",
      "Compliant with NSW BCA, balustrade and waterproofing rules",
    ],
    process: [
      { step: "Site assessment", description: "We measure, check levels and map services." },
      { step: "Design & engineering", description: "Span tables, footings and drainage planned properly." },
      { step: "Quote", description: "Fixed price including timber grade and finish." },
      { step: "Build", description: "Demolition (if required), substructure, then board lay-up." },
      { step: "Finish", description: "Sanded edges, oiled or coated, inspected and handed over." },
    ],
    faqs: [
      {
        question: "What's the best decking timber for Sydney?",
        answer:
          "For most Eastern Suburbs homes we recommend spotted gum or blackbutt — both are durable Australian hardwoods that handle Sydney's UV and salt well. Merbau and ironbark also work, with different colour profiles.",
      },
      {
        question: "How long does a deck take to build?",
        answer:
          "A typical residential deck takes 1–3 weeks on site, depending on size, height and substructure. Cantilevered or multi-level decks take longer.",
      },
      {
        question: "Do I need council approval for a deck?",
        answer:
          "Many low-set decks are exempt development under NSW SEPP. Higher decks, decks near boundaries or in heritage areas usually need a CDC or DA. We'll advise based on your site.",
      },
    ],
    keywords: ["decking Sydney", "timber deck builder Sydney", "carpenter Sydney"],
  },
  {
    slug: "pergolas-patios-outdoor-structures",
    name: "Pergolas, Patios & Outdoor Structures",
    shortName: "Pergolas & Patios",
    tagline: "Outdoor rooms designed for Sydney living.",
    metaTitle: "Pergolas & Patios Sydney | Outdoor Carpentry | Butterfly Built",
    metaDescription:
      "Custom pergolas, patios and outdoor structures in Sydney. Butterfly Built designs and builds timber-framed outdoor rooms across the Eastern Suburbs.",
    heroImage: "/images/services/pergola-hero.jpg",
    heroAlt: "Hardwood pergola over a Sydney patio designed and built by Butterfly Built",
    intro:
      "We design and build pergolas, patios and outdoor structures that turn back gardens and rooftop terraces into proper outdoor rooms. Hardwood posts, exposed rafters, integrated lighting and louvre roofs — all engineered for Sydney's wind and rain.",
    benefits: [
      "Custom designed to your home's architecture",
      "Engineered to NSW wind loading requirements",
      "Hardwood, oiled steel or composite frame options",
      "Integrated lighting, fans and louvre roofing",
      "Council-approval ready drawings if required",
    ],
    process: [
      { step: "Concept", description: "We sketch options that suit your home and site." },
      { step: "Design & engineering", description: "Detailed drawings, certifier-ready if needed." },
      { step: "Quote", description: "Itemised fixed price." },
      { step: "Build", description: "Footings, frame, roof, finishes — done in sequence." },
      { step: "Handover", description: "Cleaned, oiled and walked through with you." },
    ],
    faqs: [
      {
        question: "Do pergolas need council approval in Sydney?",
        answer:
          "Many pergolas qualify as exempt or complying development, but it depends on size, height, boundary setbacks and overlay zones. We help you navigate it.",
      },
      {
        question: "Can you integrate a louvre roof or outdoor kitchen?",
        answer:
          "Yes. We regularly integrate louvre systems, outdoor kitchens, ceiling fans and low-voltage lighting into our pergolas and patios.",
      },
    ],
    keywords: ["pergola builder Sydney", "patio builder Sydney", "carpenter Sydney"],
  },
  {
    slug: "timber-flooring",
    name: "Timber Flooring (Installation, Sanding & Polishing)",
    shortName: "Timber Flooring",
    tagline: "Solid and engineered timber floors, expertly laid.",
    metaTitle: "Timber Flooring Sydney | Install, Sand & Polish | Butterfly Built",
    metaDescription:
      "Solid and engineered timber flooring in Sydney. Supply, install, sand and polish by Butterfly Built. Servicing Bondi, the Eastern Suburbs and greater Sydney.",
    heroImage: "/images/services/timber-flooring-hero.jpg",
    heroAlt: "Engineered oak flooring laid in a Sydney home by Butterfly Built",
    intro:
      "From wide-board European oak to traditional herringbone parquetry, we install, sand and finish timber floors that lift the entire home. We work with both solid and engineered floors and we get the substrate right before a single board is laid.",
    benefits: [
      "Solid and engineered hardwood options",
      "Herringbone, chevron and traditional patterns",
      "Moisture testing and proper substrate prep",
      "Low-VOC oils, water-based polys, hard-wax oils",
      "Tight, level finish with feature board matching",
    ],
    process: [
      { step: "Sample selection", description: "Choose timber, board width, finish and pattern." },
      { step: "Subfloor prep", description: "Moisture test, levelling, acoustic underlay." },
      { step: "Install", description: "Glued, floated or secret-nailed depending on system." },
      { step: "Sand & finish", description: "Multi-stage sand and your chosen finish." },
    ],
    faqs: [
      {
        question: "Solid or engineered flooring — which is better in Sydney?",
        answer:
          "Both work. Engineered is more stable in coastal humidity and works well over concrete; solid timber is the traditional choice and can be sanded back many times.",
      },
      {
        question: "Can you sand and re-finish my existing floor?",
        answer:
          "Yes — re-sanding and re-finishing is one of the highest-value renovations you can do. We dust-extract, fill, sand and re-coat to bring tired floors back to life.",
      },
    ],
    keywords: ["timber flooring Sydney", "floor sanding Sydney", "carpenter Sydney"],
  },
  {
    slug: "built-in-wardrobes-custom-storage",
    name: "Built-in Wardrobes & Custom Storage",
    shortName: "Wardrobes & Storage",
    tagline: "Storage that disappears into the architecture.",
    metaTitle: "Built-in Wardrobes Sydney | Custom Storage | Butterfly Built",
    metaDescription:
      "Built-in wardrobes and custom storage in Sydney. Walk-ins, robes, mudrooms and study nooks designed and built by Butterfly Built carpenters.",
    heroImage: "/images/services/wardrobes-hero.jpg",
    heroAlt: "Custom built-in wardrobe with oak interior in a Sydney bedroom",
    intro:
      "Built-in wardrobes, walk-ins, mudrooms and concealed storage — designed to maximise every centimetre. We focus on quiet detail: soft-close everything, integrated lighting, oak interiors, and finishes that match the rest of your home.",
    benefits: [
      "Floor-to-ceiling, wall-to-wall integration",
      "Soft-close drawers, push-to-open doors",
      "Integrated LED lighting and dressing mirrors",
      "Oak or veneer interiors, 2-pac or timber doors",
      "Designed around your wardrobe contents, not the other way around",
    ],
    process: [
      { step: "Brief", description: "We list everything you need to store." },
      { step: "Design", description: "Drawings, finishes, internals." },
      { step: "Build", description: "Made in our Dover Heights workshop." },
      { step: "Install", description: "Cleanly fitted and adjusted on site." },
    ],
    faqs: [
      {
        question: "Can you replace existing built-ins?",
        answer:
          "Yes. We carefully remove old units, patch and paint where needed, and install your new wardrobes with minimal mess.",
      },
    ],
    keywords: ["built-in wardrobes Sydney", "custom storage Sydney", "carpenter Sydney"],
  },
  {
    slug: "kitchen-carpentry-cabinetry",
    name: "Kitchen Carpentry & Cabinetry",
    shortName: "Kitchens",
    tagline: "Kitchens built like furniture.",
    metaTitle: "Kitchen Cabinetry Sydney | Custom Kitchens | Butterfly Built",
    metaDescription:
      "Custom kitchen cabinetry and carpentry in Sydney by Butterfly Built. Premium kitchens, butler's pantries and island benches built to last.",
    heroImage: "/images/services/kitchens-hero.jpg",
    heroAlt: "Custom kitchen cabinetry in a Sydney home by Butterfly Built",
    intro:
      "We build custom kitchens that feel like furniture, not flat-pack. Hardwood face-frames, fluted detail, integrated appliances and stone benchtops — all delivered with the precision a great kitchen needs.",
    benefits: [
      "Custom-built cabinetry — not assembled from a catalogue",
      "Integrated appliance fit-outs (Miele, Sub-Zero, Wolf, Gaggenau)",
      "Stone, timber and steel benchtops",
      "Butler's pantries and concealed working kitchens",
      "Trade-coordinated install with electrician, plumber, stonemason",
    ],
    process: [
      { step: "Discovery", description: "How you cook, entertain and live." },
      { step: "Design", description: "Plans, elevations, finishes, appliance schedule." },
      { step: "Quote & contract", description: "Fixed price, full inclusions." },
      { step: "Build & install", description: "Workshop fabrication, then on-site install with trades." },
    ],
    faqs: [
      {
        question: "Do you supply appliances and stone?",
        answer:
          "We can. Most clients prefer to choose their own appliances; we coordinate stonemasons and integrate everything into one project.",
      },
    ],
    keywords: ["kitchen cabinetry Sydney", "custom kitchens Sydney", "carpenter Sydney"],
  },
  {
    slug: "bathroom-carpentry-vanities",
    name: "Bathroom Carpentry & Vanities",
    shortName: "Bathroom Carpentry",
    tagline: "Vanities, mirror cabinets and joinery built to handle bathrooms.",
    metaTitle: "Bathroom Vanities & Carpentry Sydney | Butterfly Built",
    metaDescription:
      "Custom bathroom vanities and carpentry in Sydney. Marine-grade builds, integrated mirror cabinets and timber detailing by Butterfly Built.",
    heroImage: "/images/services/bathroom-hero.jpg",
    heroAlt: "Custom timber vanity in a Sydney bathroom by Butterfly Built",
    intro:
      "Bathrooms are the hardest place to put joinery — humid, splashy and constantly used. We build vanities and bathroom carpentry that's properly sealed, ventilated and fixed, using moisture-resistant substrates and quality hardware.",
    benefits: [
      "Marine-ply and moisture-resistant substrates",
      "Solid timber, 2-pac and stone-topped vanities",
      "Integrated mirror cabinets with LED lighting",
      "Wall-hung and floor-standing options",
      "Coordinated with tiler, plumber and electrician",
    ],
    process: [
      { step: "Design", description: "Vanity, cabinetry, mirror, storage." },
      { step: "Build", description: "Made in our workshop in moisture-rated materials." },
      { step: "Install", description: "Coordinated with bathroom trades." },
    ],
    faqs: [
      {
        question: "Can you match my existing tapware and stone?",
        answer:
          "Yes — we'll align timber tones, hardware and stone with the rest of the bathroom design.",
      },
    ],
    keywords: ["bathroom vanity Sydney", "bathroom carpentry Sydney", "carpenter Sydney"],
  },
  {
    slug: "doors-and-windows",
    name: "Doors & Windows (Supply & Install)",
    shortName: "Doors & Windows",
    tagline: "Solid timber doors and windows, hung properly.",
    metaTitle: "Door & Window Installation Sydney | Butterfly Built Carpentry",
    metaDescription:
      "Supply and install of solid timber doors and windows in Sydney. Pivot doors, French doors, sashless and bi-folds installed by Butterfly Built.",
    heroImage: "/images/services/doors-windows-hero.jpg",
    heroAlt: "Pivot timber entry door installed in a Sydney home by Butterfly Built",
    intro:
      "Doors and windows are the details everyone touches. We supply and install solid timber doors, pivot entries, French doors, bi-folds and timber-framed windows across Sydney — properly hung, weather-sealed, and finished without fuss.",
    benefits: [
      "Solid timber, veneered and clad-timber options",
      "Pivot, French, bi-fold, sliding and sashless windows",
      "Weather-stripped and properly sealed",
      "Heritage-matched profiles for older homes",
    ],
    process: [
      { step: "Survey", description: "Site measure of openings and structure." },
      { step: "Order", description: "Made-to-order or trade-supplied units." },
      { step: "Install", description: "Hung, sealed, locked off and adjusted." },
    ],
    faqs: [
      {
        question: "Can you replace heritage doors and windows like-for-like?",
        answer:
          "Yes. We profile-match and source heritage timber doors and sash windows for older Eastern Suburbs homes.",
      },
    ],
    keywords: ["door installation Sydney", "window installation Sydney", "carpenter Sydney"],
  },
  {
    slug: "skirting-architraves-mouldings",
    name: "Skirting, Architraves & Mouldings",
    shortName: "Skirting & Mouldings",
    tagline: "The trim that defines a room.",
    metaTitle: "Skirting & Architraves Sydney | Mouldings | Butterfly Built",
    metaDescription:
      "Premium skirting, architraves and mouldings in Sydney. Heritage profile matching and modern detailing by Butterfly Built carpenters.",
    heroImage: "/images/services/skirting-hero.jpg",
    heroAlt: "Tall skirting and architraves in a Sydney home installed by Butterfly Built",
    intro:
      "The trim is what separates a renovation that looks finished from one that doesn't. We supply and install skirting, architraves, picture rails and ceiling mouldings, including bespoke heritage-profile matches.",
    benefits: [
      "Heritage profile matching",
      "Tall, modern square-set details",
      "Tight mitres and scribed joints",
      "Pre-primed or hardwood",
    ],
    process: [
      { step: "Profile selection", description: "Match heritage or specify modern profiles." },
      { step: "Install", description: "Cut, fixed, filled and ready to paint." },
    ],
    faqs: [
      {
        question: "Can you match Federation or Victorian profiles?",
        answer:
          "Yes — we have a network of mills who reproduce period profiles for our heritage and Eastern Suburbs work.",
      },
    ],
    keywords: ["skirting Sydney", "architrave installation Sydney", "carpenter Sydney"],
  },
  {
    slug: "staircases-and-balustrades",
    name: "Staircases & Balustrades",
    shortName: "Staircases",
    tagline: "Stairs as architectural moments.",
    metaTitle: "Staircase Builder Sydney | Timber Stairs & Balustrades | Butterfly Built",
    metaDescription:
      "Custom staircases and balustrades in Sydney by Butterfly Built. Floating timber stairs, traditional joined stairs and steel-and-timber balustrades.",
    heroImage: "/images/services/staircase-hero.jpg",
    heroAlt: "Custom timber staircase with steel balustrade in a Sydney home by Butterfly Built",
    intro:
      "Stairs are the most demanding piece of carpentry in a house. We build floating timber stairs, traditional joined stairs and timber-and-steel hybrids — all engineered, certified and tightly built.",
    benefits: [
      "Floating, cantilevered and traditional stairs",
      "Steel, glass and timber balustrades",
      "Hardwood treads matched to your floor",
      "Compliant with NCC stair and balustrade rules",
    ],
    process: [
      { step: "Design", description: "Plans, elevations, balustrade detailing." },
      { step: "Engineering", description: "Certifier-ready where required." },
      { step: "Build & install", description: "Stringers, treads, balustrades, hand-finish." },
    ],
    faqs: [
      {
        question: "Can you re-clad my existing stairs?",
        answer:
          "Yes — re-cladding existing stairs in solid timber treads and risers is a high-impact upgrade we do regularly.",
      },
    ],
    keywords: ["staircase builder Sydney", "timber stairs Sydney", "carpenter Sydney"],
  },
  {
    slug: "cladding-and-feature-walls",
    name: "Cladding & Feature Walls (timber, VJ, shiplap)",
    shortName: "Cladding & Feature Walls",
    tagline: "Walls that become the feature of the room.",
    metaTitle: "Timber Cladding & Feature Walls Sydney | Butterfly Built",
    metaDescription:
      "Internal and external timber cladding, VJ panelling and feature walls in Sydney by Butterfly Built. Shiplap, batten, and tongue-and-groove specialists.",
    heroImage: "/images/services/cladding-hero.jpg",
    heroAlt: "Vertical timber batten feature wall in a Sydney living room by Butterfly Built",
    intro:
      "Timber cladding, VJ panelling, batten walls and shiplap — internal and external. We install them tight, true and properly fixed, with proper expansion allowance and concealed fixings where the look demands it.",
    benefits: [
      "VJ, shiplap, batten and tongue-and-groove",
      "Internal feature walls and external cladding",
      "Properly fixed with expansion control",
      "Pre-finished or hand-finished options",
    ],
    process: [
      { step: "Design", description: "Profile, spacing, finish and direction." },
      { step: "Install", description: "Concealed fixings, tight scribes, hand-finished." },
    ],
    faqs: [
      {
        question: "Can timber cladding be used externally in coastal Sydney?",
        answer:
          "Yes — we use durable hardwoods and oil systems specified for coastal exposure. Detailing is critical and we get it right.",
      },
    ],
    keywords: ["timber cladding Sydney", "feature wall Sydney", "carpenter Sydney"],
  },
  {
    slug: "renovations-extensions-carpentry",
    name: "Renovations & Home Extensions Carpentry",
    shortName: "Renovations & Extensions",
    tagline: "The carpentry backbone of a great renovation.",
    metaTitle: "Renovation Carpentry Sydney | Extensions | Butterfly Built",
    metaDescription:
      "Carpentry for renovations and home extensions in Sydney. Framing, second-fix, joinery and finishing — all delivered by Butterfly Built.",
    heroImage: "/images/services/renovations-hero.jpg",
    heroAlt: "Sydney home extension under construction by Butterfly Built carpenters",
    intro:
      "Carpentry is the spine of any renovation. We work as the head carpenter on renovations and extensions across Sydney — framing, second-fix, joinery and finishing — or as a trusted subcontractor to your builder.",
    benefits: [
      "Framing, lock-up, fix-out and finish",
      "Trade coordination and program management",
      "Heritage-sensitive workmanship",
      "Licensed and insured",
    ],
    process: [
      { step: "Pre-construction", description: "Plans review, programming, trade coordination." },
      { step: "Frame", description: "Structural framing to engineer's spec." },
      { step: "Lock-up", description: "Roof, wraps, doors, windows." },
      { step: "Fix-out", description: "Joinery, skirting, doors, finishes." },
    ],
    faqs: [
      {
        question: "Do you take on whole renovations as head contractor?",
        answer:
          "Yes — for the right project. We can also work as the lead carpenter under your existing builder or architect.",
      },
    ],
    keywords: ["renovation carpenter Sydney", "extension carpenter Sydney", "carpenter Sydney"],
  },
  {
    slug: "formwork-concrete-formwork",
    name: "Formwork & Concrete Formwork",
    shortName: "Formwork",
    tagline: "Square, plumb and properly braced — formwork that holds the pour.",
    metaTitle: "Formwork Sydney | Concrete Formwork Carpenters | Butterfly Built",
    metaDescription:
      "Concrete formwork in Sydney by Butterfly Built. Suspended slabs, retaining walls, pool shells and architectural off-form work for the Eastern Suburbs.",
    heroImage: "/images/services/formwork-hero.jpg",
    heroAlt:
      "Plywood and timber formwork ready for a concrete pour on a Sydney project by Butterfly Built",
    intro:
      "Formwork is the temporary structure that holds wet concrete in shape until it cures — and it's a carpentry discipline. We design, build and strike formwork for slabs, walls, columns, beams, pool shells and pits across Sydney, working off engineered drawings and detailing tolerances tight enough for off-form finishes. From small house slabs to suspended floors and retaining walls cut into Hawkesbury sandstone, our formwork crew is set up for the difficult sites the Eastern Suburbs throws at us.",
    benefits: [
      "Suspended slabs, walls, columns, beams, lift pits and pool shells",
      "Engineered set-out and bracing built off your structural drawings",
      "Plywood, formply, steel-framed proprietary systems and traditional timber",
      "Architectural off-form, board-form and feature finishes",
      "Coastal and steep-terrain experience — Hawkesbury sandstone benching, raked formwork, retaining walls",
      "Coordinated with steel fixers, plumbers and your concreter for the pour",
      "Compliant with NSW WHS — SWMS, edge protection and certified props",
    ],
    process: [
      {
        step: "Set-out",
        description:
          "Drawings reviewed with the engineer, levels shot in, lines snapped — accuracy starts here.",
      },
      {
        step: "Build",
        description:
          "Bearers, joists, plywood, walers and ties — braced and propped to take a full pour with no movement.",
      },
      {
        step: "Coordination",
        description:
          "Steel fixers and services pre-pour, sign-off from the engineer and certifier where required.",
      },
      {
        step: "Pour day",
        description:
          "We're on site for the pour to monitor formwork, check ties, and call any issues early.",
      },
      {
        step: "Strike & finish",
        description:
          "Form stripped at the right cure point, edges tidied, off-form faces protected.",
      },
    ],
    faqs: [
      {
        question: "What types of formwork do you build?",
        answer:
          "Ground slabs, suspended floors, retaining walls, blade walls, columns, beams, lift pits, pool shells, capping beams, footings — both conventional plywood / timber formwork and proprietary systems like Acrow and Doka where the job suits.",
      },
      {
        question: "Do you do architectural off-form concrete?",
        answer:
          "Yes. Off-form, board-form and feature finishes need formwork built to a different tolerance — flatter ply, tighter joints, controlled tie patterns. We've delivered off-form work that's gone in as the finished surface.",
      },
      {
        question: "Can you handle steep, rocky Eastern Suburbs sites?",
        answer:
          "Yes. A lot of Vaucluse, Dover Heights, Tamarama and South Coogee sit on Hawkesbury sandstone with severe slopes. We bench rock, set raked formwork, chemset rebar back into rock, and brace against engineered tie-downs.",
      },
      {
        question: "Do you pour the concrete as well?",
        answer:
          "We focus on the formwork carpentry — the build and strike — and coordinate closely with a trusted concreter for the pour, finish and curing. We can recommend pour crews we've worked with for years.",
      },
      {
        question: "How is formwork priced?",
        answer:
          "Usually by square metre of formed face for slabs and walls, or as a lump sum for one-off pours. Pricing reflects complexity — a flat ground slab is straightforward; a curved retaining wall on a sloping rock site is not. We give a fixed-price quote off the structural drawings.",
      },
      {
        question: "Are you compliant with NSW WHS for high-risk work?",
        answer:
          "Yes. We document SWMS for every formwork job, provide edge protection on any work above two metres, use certified props and bracing, and carry public liability and workers' compensation cover.",
      },
    ],
    keywords: [
      "formwork Sydney",
      "concrete formwork Sydney",
      "formwork carpenter Sydney",
      "suspended slab formwork Sydney",
      "Eastern Suburbs formwork",
      "carpenter Sydney",
    ],
  },
  {
    slug: "framing-structural-carpentry",
    name: "Framing & Structural Carpentry",
    shortName: "Framing",
    tagline: "Square, plumb and on time.",
    metaTitle: "Framing & Structural Carpentry Sydney | Butterfly Built",
    metaDescription:
      "Wall, floor and roof framing in Sydney by Butterfly Built. Engineered timber, LVL and steel-supported framing for new builds and extensions.",
    heroImage: "/images/services/framing-hero.jpg",
    heroAlt: "Timber-framed extension under construction in Sydney by Butterfly Built",
    intro:
      "Frame work sets the tone for the rest of the build. We frame walls, floors and roofs square, plumb and on program — including LVL beams, parallel chord trusses and engineered timber.",
    benefits: [
      "Wall, floor and roof framing",
      "LVL, glulam and parallel chord systems",
      "Engineer-spec compliant",
      "Tidy site, tight program",
    ],
    process: [
      { step: "Plans review", description: "Engineer and architect plans cross-checked." },
      { step: "Frame", description: "On-site or pre-fab, square and plumb." },
    ],
    faqs: [
      {
        question: "Do you work with steel structural elements?",
        answer:
          "Yes — we coordinate with structural steel fabricators and tie our framing into steel beams and columns.",
      },
    ],
    keywords: ["framing carpenter Sydney", "structural carpenter Sydney", "carpenter Sydney"],
  },
  {
    slug: "pool-surrounds-outdoor-timber",
    name: "Pool Surrounds & Outdoor Timber",
    shortName: "Pool Surrounds",
    tagline: "Decking and timber detailing around the pool, done properly.",
    metaTitle: "Pool Surrounds & Outdoor Timber Sydney | Butterfly Built",
    metaDescription:
      "Timber pool surrounds and outdoor carpentry in Sydney. Compliant pool fencing, decks and timber detailing by Butterfly Built.",
    heroImage: "/images/services/pool-hero.jpg",
    heroAlt: "Hardwood pool surround in a Sydney backyard by Butterfly Built",
    intro:
      "Pool areas are the harshest environment in any backyard — chlorine, salt, sun and water. We build pool decks and surrounds that look beautiful and last, with proper drainage, slip detail and pool-fence compliance.",
    benefits: [
      "Coastal-grade hardwoods and fixings",
      "Compliant pool barriers and gates",
      "Slip-rated finishes",
      "Drainage and substructure designed for wet zones",
    ],
    process: [
      { step: "Design", description: "Layout, fencing and deck levels." },
      { step: "Build", description: "Substructure, deck, fencing, finish." },
    ],
    faqs: [
      {
        question: "Do you handle pool fence compliance?",
        answer:
          "Yes — we build to the NSW Swimming Pools Act and coordinate certification.",
      },
    ],
    keywords: ["pool deck Sydney", "pool surround carpenter Sydney", "carpenter Sydney"],
  },
  {
    slug: "fences-gates-privacy-screens",
    name: "Fences, Gates & Privacy Screens",
    shortName: "Fences & Gates",
    tagline: "Boundary lines that look as good from your side as the street.",
    metaTitle: "Timber Fencing, Gates & Screens Sydney | Butterfly Built",
    metaDescription:
      "Custom timber fences, gates and privacy screens in Sydney. Hardwood batten fences, automated gates and architectural screens by Butterfly Built.",
    heroImage: "/images/services/fences-hero.jpg",
    heroAlt: "Spotted gum batten fence and gate in front of a Sydney home by Butterfly Built",
    intro:
      "We build hardwood fences, automated gates and privacy screens that look architectural — not industrial. Vertical batten, horizontal slat, traditional pickets and modern slatted screens, all properly footed and finished.",
    benefits: [
      "Hardwood batten, slat and picket fences",
      "Automated swing and sliding gates",
      "Architectural privacy screens",
      "Engineered footings",
    ],
    process: [
      { step: "Design", description: "Profile, height, finish, automation." },
      { step: "Build", description: "Footings, frame, infill, gate hardware." },
    ],
    faqs: [
      {
        question: "Can you automate an existing gate?",
        answer:
          "Yes — we install gate motors, intercoms and controllers on new and existing gates.",
      },
    ],
    keywords: ["timber fence Sydney", "gate builder Sydney", "carpenter Sydney"],
  },
  {
    slug: "shopfitting-commercial-carpentry",
    name: "Shopfitting & Commercial Carpentry",
    shortName: "Shopfitting",
    tagline: "Retail and hospitality fit-outs that hit the deadline.",
    metaTitle: "Shopfitting & Commercial Carpentry Sydney | Butterfly Built",
    metaDescription:
      "Shopfitting and commercial carpentry in Sydney. Cafés, retail, hospitality and office fit-outs delivered by Butterfly Built.",
    heroImage: "/images/services/shopfitting-hero.jpg",
    heroAlt: "Café shopfitting and joinery in a Sydney venue by Butterfly Built",
    intro:
      "Commercial work needs a different kind of carpenter — fast, organised and used to night-shift programs. We deliver café, retail and office fit-outs across Sydney with the same quality as our residential work.",
    benefits: [
      "Cafés, restaurants, retail and offices",
      "Out-of-hours work",
      "Coordination with other trades and certifiers",
      "Custom fixtures, joinery and counters",
    ],
    process: [
      { step: "Pre-fab", description: "Built in our workshop where possible." },
      { step: "Install", description: "On-site assembly during your downtime." },
    ],
    faqs: [
      {
        question: "Can you work overnight to hit a fit-out deadline?",
        answer:
          "Yes — we regularly work after-hours for retail and hospitality clients to keep trading.",
      },
    ],
    keywords: ["shopfitter Sydney", "commercial carpenter Sydney", "carpenter Sydney"],
  },
  {
    slug: "maintenance-repairs-handyman",
    name: "Maintenance, Repairs & Handyman Carpentry",
    shortName: "Maintenance & Repairs",
    tagline: "The small jobs done well.",
    metaTitle: "Carpenter Maintenance & Repairs Sydney | Butterfly Built",
    metaDescription:
      "Carpentry maintenance, repairs and handyman work in Sydney. Door adjustments, deck repairs, joinery touch-ups by Butterfly Built.",
    heroImage: "/images/services/maintenance-hero.jpg",
    heroAlt: "Carpenter making a door repair in a Sydney home for Butterfly Built",
    intro:
      "Doors that won't close, decks with the odd loose board, drawers that need a tune-up — small carpentry jobs are usually the most annoying and the hardest to get someone good for. We do them properly, on time, and tidy up after ourselves.",
    benefits: [
      "Door, window and lock adjustments",
      "Deck repairs and re-oiling",
      "Joinery touch-ups and re-painting",
      "Property-manager friendly",
    ],
    process: [
      { step: "Quote", description: "Quick visit or phone quote." },
      { step: "Job", description: "Booked, done, cleaned up." },
    ],
    faqs: [
      {
        question: "Is there a minimum job size?",
        answer:
          "We have a half-day minimum for maintenance visits. We'll always try to bundle small jobs together.",
      },
    ],
    keywords: ["carpenter handyman Sydney", "carpentry repairs Sydney", "carpenter Sydney"],
  },
  {
    slug: "heritage-restoration-carpentry",
    name: "Heritage & Restoration Carpentry",
    shortName: "Heritage & Restoration",
    tagline: "Carpentry that respects the original.",
    metaTitle: "Heritage & Restoration Carpentry Sydney | Butterfly Built",
    metaDescription:
      "Heritage and restoration carpentry in Sydney. Federation, Victorian and Art Deco home restoration by Butterfly Built carpenters.",
    heroImage: "/images/services/heritage-hero.jpg",
    heroAlt: "Restored Federation timber detailing on an Eastern Suburbs Sydney home by Butterfly Built",
    intro:
      "The Eastern Suburbs are full of beautiful Federation, Victorian and Art Deco homes that deserve careful, respectful carpentry. We restore sash windows, profile-match heritage trim, and rebuild verandahs to their original detail.",
    benefits: [
      "Sash window restoration",
      "Profile-matched skirting, architraves and ceilings",
      "Verandah and balustrade rebuilds",
      "Sensitive to heritage overlays",
    ],
    process: [
      { step: "Survey", description: "Photograph, measure and identify original profiles." },
      { step: "Source & build", description: "Match timbers and remill profiles." },
      { step: "Install", description: "Restored on site by experienced hands." },
    ],
    faqs: [
      {
        question: "Do you work with heritage architects?",
        answer:
          "Yes — we work alongside heritage architects and council heritage advisors regularly.",
      },
    ],
    keywords: ["heritage carpenter Sydney", "restoration carpenter Sydney", "carpenter Sydney"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
