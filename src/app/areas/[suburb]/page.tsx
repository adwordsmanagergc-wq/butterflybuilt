import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQ } from "@/components/FAQ";
import { ProcessSection } from "@/components/ProcessSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { Img } from "@/components/Img";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  reviewJsonLd,
} from "@/lib/jsonld";
import { suburbs, getSuburbBySlug } from "@/lib/suburbs";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/components/Testimonials";
import { galleryImages } from "@/lib/gallery";

/**
 * Deterministic 4-photo pick per suburb from the workshop gallery.
 * Each suburb gets a stable, distinct starting offset derived from its
 * slug, so photos don't shuffle between builds and neighbouring suburbs
 * show different-looking work.
 */
function suburbGalleryPicks(slug: string) {
  const n = galleryImages.length;
  if (n === 0) return [];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const start = hash % n;
  const stride = 7; // coprime with 50 → good spread
  return Array.from({ length: Math.min(4, n) }, (_, i) => galleryImages[(start + i * stride) % n]);
}

export function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export function generateMetadata({ params }: { params: { suburb: string } }) {
  const sub = getSuburbBySlug(params.suburb);
  if (!sub) return {};
  return buildMetadata({
    title: sub.metaTitle,
    description: sub.metaDescription,
    path: `/areas/${sub.slug}`,
    image: sub.heroImage,
  });
}

const suburbFaqs = (suburbName: string) => [
  {
    question: `Are you a local carpenter in ${suburbName}?`,
    answer: `Yes — Butterfly Built is based in nearby Dover Heights and works in ${suburbName} regularly. We can usually be on site within a day or two for a free quote.`,
  },
  {
    question: `What carpentry projects do you take on in ${suburbName}?`,
    answer: `Custom joinery, kitchens, built-in wardrobes, decks, pergolas, staircases, timber flooring, doors and windows, heritage restoration and renovation carpentry — all delivered locally in ${suburbName}.`,
  },
  {
    question: `Do you work with architects and designers in ${suburbName}?`,
    answer: `Yes, we frequently work alongside architects, interior designers and builders on ${suburbName} projects, building to their drawings or contributing constructability advice during design.`,
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call 0457 324 417, email jon@butterflybuilt.com.au, or fill in the enquiry form on this page. We respond within one business day.",
  },
];

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const sub = getSuburbBySlug(params.suburb);
  if (!sub) return notFound();

  const neighbourSubs = sub.neighbours
    .map((slug) => getSuburbBySlug(slug))
    .filter(Boolean);

  const featuredServices = services.slice(0, 6);
  const faqs = suburbFaqs(sub.name);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Areas", url: `/areas/bondi` },
          { name: sub.name, url: `/areas/${sub.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `Carpentry in ${sub.name}`,
          description: sub.metaDescription,
          url: `/areas/${sub.slug}`,
          areaServed: [sub.name],
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={reviewJsonLd(testimonials)} />

      <Section className="pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-wider2 text-cream/60">
          <Link href="/" className="hover:text-timber-300">Home</Link>
          <span aria-hidden> / </span>
          <Link href="/areas/bondi" className="hover:text-timber-300">Areas</Link>
          <span aria-hidden> / </span>
          <span className="text-cream">{sub.name}</span>
        </nav>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Carpenter · {sub.name} · {sub.postcode}</Eyebrow>
            <Heading level={1} className="mt-4">
              Carpenter <span className="text-timber-300">{sub.name}</span> | Butterfly Built
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">{sub.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#enquire" className="btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:+61457324417" className="btn-outline">
                Call 0457 324 417
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft">
              <Img src={sub.heroImage} alt={sub.heroAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <TrustStrip />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>About {sub.name}</Eyebrow>
            <Heading level={2} className="mt-3">
              Carpentry that suits the suburb.
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">{sub.housingStyles}</p>
            <h3 className="mt-8 font-serif text-xl">Common projects in {sub.name}</h3>
            <ul className="mt-4 space-y-2 text-cream/80">
              {sub.commonProjects.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-timber-300" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-cream/10 bg-cream/5 p-6 sm:p-8">
              <h3 className="font-serif text-xl">Local landmarks</h3>
              <ul className="mt-4 space-y-2 text-sm text-cream/80">
                {sub.landmarks.map((l) => (
                  <li key={l}>• {l}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-serif text-xl">Postcode</h3>
              <p className="mt-2 text-cream/80">{sub.postcode}</p>
              <h3 className="mt-8 font-serif text-xl">From our workshop</h3>
              <p className="mt-2 text-cream/80">
                Butterfly Built is based in Dover Heights — minutes from {sub.name}.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Recent-work photo strip pulled from the workshop gallery */}
      <Section className="bg-charcoal-soft">
        <Eyebrow>Recent carpentry work</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          A glimpse from the workshop.
        </Heading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {suburbGalleryPicks(sub.slug).map((img) => (
            <figure
              key={img.file}
              className="relative aspect-square overflow-hidden bg-charcoal"
            >
              <img
                src={`/images/gallery/${img.file}`}
                alt={`Carpentry project by Butterfly Built — servicing ${sub.name} and Sydney's Eastern Suburbs`}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
        <p className="mt-6 max-w-prose2 text-sm text-cream/60">
          Photos are from recent Butterfly Built projects across Sydney&apos;s
          Eastern Suburbs. See more on our{" "}
          <Link className="link-underline text-cream" href="/projects">
            projects page
          </Link>
          {" "}or Instagram{" "}
          <a
            className="link-underline text-cream"
            href="https://www.instagram.com/butterfly.built"
            target="_blank"
            rel="noreferrer"
          >
            @butterfly.built
          </a>
          .
        </p>
      </Section>

      <Section>
        <Eyebrow>Services in {sub.name}</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          What we build for {sub.name} homes.
        </Heading>
        <ServicesGrid limit={featuredServices.length} />
      </Section>

      <Section className="bg-charcoal-soft">
        <Eyebrow>Process</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          How we work in {sub.name}.
        </Heading>
        <ProcessSection />
      </Section>

      <Section>
        <Eyebrow>FAQs</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          Carpentry in {sub.name} — common questions.
        </Heading>
        <FAQ faqs={faqs} />
      </Section>

      {neighbourSubs.length > 0 && (
        <Section className="bg-charcoal-soft">
          <Eyebrow>Nearby suburbs</Eyebrow>
          <Heading level={2} className="mt-3 mb-10">
            We also work in…
          </Heading>
          <div className="grid grid-cols-2 gap-px bg-cream/10 sm:grid-cols-3 lg:grid-cols-4">
            {neighbourSubs.map((n) =>
              n ? (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="bg-cream/5 px-6 py-5 hover:bg-cream/10"
                >
                  <div className="font-serif text-xl">{n.name}</div>
                  <div className="text-xs uppercase tracking-wider2 text-cream/60">
                    {n.postcode}
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        </Section>
      )}

      <Section id="enquire">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Enquire</Eyebrow>
            <Heading level={2} className="mt-3">
              Carpenter in {sub.name}? Let's talk.
            </Heading>
            <p className="mt-4 text-cream/80">
              Tell us about your project. We'll respond within one business day.
            </p>
          </div>
          <div className="md:col-span-7">
            <EnquiryForm defaultSuburb={sub.name} />
          </div>
        </div>
      </Section>
    </>
  );
}
