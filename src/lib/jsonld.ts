import { siteConfig } from "./site";
import { suburbs } from "./suburbs";

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteConfig.url}#business`,
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.suburb,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: suburbs.map((s) => ({
    "@type": "City",
    name: `${s.name}, NSW ${s.postcode}`,
  })),
  sameAs: [siteConfig.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/butterfly-built-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneTel,
    contactType: "customer service",
    email: siteConfig.email,
    areaServed: "AU",
    availableLanguage: ["English"],
  },
  sameAs: [siteConfig.instagram],
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const serviceJsonLd = (params: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: params.name,
  name: params.name,
  description: params.description,
  url: `${siteConfig.url}${params.url}`,
  provider: { "@id": `${siteConfig.url}#business` },
  areaServed: (params.areaServed || ["Sydney"]).map((a) => ({
    "@type": "City",
    name: a,
  })),
});

export const reviewJsonLd = (
  review: { author: string; rating: number; body: string; date: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}#business`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: review.length.toString(),
  },
  review: review.map((r) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.body,
  })),
});
