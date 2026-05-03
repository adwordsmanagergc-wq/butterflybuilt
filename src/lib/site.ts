export const siteConfig = {
  name: "Butterfly Built",
  legalName: "Butterfly Built Carpentry",
  description:
    "Butterfly Built is a premium carpentry company based in Dover Heights, Sydney, delivering bespoke joinery, decking, renovations and custom carpentry across the Eastern Suburbs and greater Sydney.",
  shortDescription:
    "Master carpenters in Sydney — bespoke joinery, decking, renovations & custom carpentry.",
  url: "https://butterflybuilt.com.au",
  // TODO: Replace with confirmed ABN
  abn: "00 000 000 000",
  // TODO: Replace with confirmed NSW Builder Licence number
  licence: "NSW Licensed Builder",
  phone: "0457 324 417",
  phoneTel: "+61457324417",
  email: "jon@butterflybuilt.com.au",
  instagram: "https://www.instagram.com/butterfly.built",
  instagramHandle: "@butterfly.built",
  address: {
    streetAddress: "Dover Heights",
    suburb: "Dover Heights",
    region: "NSW",
    postcode: "2030",
    country: "AU",
  },
  // Approximate coordinates for Dover Heights, Sydney
  geo: { latitude: -33.8779, longitude: 151.2783 },
  // TODO: Replace with real founding year
  founded: 2015,
  hours: "Mon–Fri 7am–5pm, Sat 8am–2pm",
  ogImage: "/images/og-default.svg",
};

export type SiteConfig = typeof siteConfig;
