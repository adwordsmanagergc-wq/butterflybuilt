import { notFound } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQ } from "@/components/FAQ";
import { ProcessSection } from "@/components/ProcessSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  reviewJsonLd,
} from "@/lib/jsonld";
import { suburbs, getSuburbBySlug, type Suburb } from "@/lib/suburbs";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/components/Testimonials";

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
  });
}

// Per-suburb FAQ generator. Pulls a local street list and (when the
// Wikipedia article mentions one) a heritage line into the Q&A so the
// four questions on each suburb page differ meaningfully for SEO.
function suburbFaqs(sub: Suburb) {
  const streetsList = sub.facts.notableStreets.slice(0, 3).join(", ");
  const heritageQ = sub.facts.heritageNote
    ? [
        {
          question: `Can you work on heritage-listed homes in ${sub.name}?`,
          answer: `Yes. ${sub.facts.heritageNote} We've worked alongside heritage architects and council advisors on homes like these before, with carpentry delivered to NSW heritage standards.`,
        },
      ]
    : [];

  return [
    {
      question: `Where in ${sub.name} do you most often work?`,
      answer: `We cover all of ${sub.name}, with projects regularly on ${
        streetsList || "the main residential streets"
      }. We're based 10 minutes away in Dover Heights, so a site visit is quick to arrange.`,
    },
    ...heritageQ,
    {
      question: "How quickly can you start?",
      answer:
        "For most enquiries we can be on site for a free quote within two or three working days. Once a quote is approved, most carpentry jobs start within a week, depending on materials and crew availability.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Call 0457 324 417, email jon@butterflybuilt.com.au, or send the enquiry form on this page. We respond within one business day.",
    },
  ];
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const sub = getSuburbBySlug(params.suburb);
  if (!sub) return notFound();

  const neighbourSubs = sub.neighbours
    .map((slug) => getSuburbBySlug(slug))
    .filter((s): s is Suburb => Boolean(s));

  const featuredServices = services.slice(0, 6);
  const faqs = suburbFaqs(sub);
  const f = sub.facts;

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

      {/* ============================================================== */}
      {/* Hero: asymmetric 7/5 split, text left, facts card right.        */}
      {/* Variance 7 per design brief: no centred hero, keep it           */}
      {/* information-rich, no photo. Hero copy is one short subtext      */}
      {/* line so it fits viewport with the facts card.                   */}
      {/* ============================================================== */}
      <section className="pt-12 sm:pt-16">
        <div className="container-prose">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-xs uppercase tracking-wider2 text-cream/60"
          >
            <Link href="/" className="hover:text-timber-300">
              Home
            </Link>
            <span aria-hidden> / </span>
            <Link href="/areas/bondi" className="hover:text-timber-300">
              Areas
            </Link>
            <span aria-hidden> / </span>
            <span className="text-cream">{sub.name}</span>
          </nav>

          <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
            <div className="md:col-span-7">
              <Eyebrow>
                Carpenter &middot; {sub.name} &middot; {sub.postcode}
              </Eyebrow>
              <Heading level={1} className="mt-5">
                Carpenter in{" "}
                <span className="text-timber-300">{sub.name}</span>.
              </Heading>
              <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">
                {sub.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="#enquire" className="btn-primary">
                  Get a quote
                </Link>
                <a href="tel:+61457324417" className="btn-outline">
                  Call 0457 324 417
                </a>
              </div>
            </div>

            <aside className="md:col-span-5">
              <SuburbFactSheet sub={sub} />
            </aside>
          </div>
        </div>
      </section>

      <div className="mt-20 sm:mt-24">
        <TrustStrip />
      </div>

      {/* ============================================================== */}
      {/* About: historical prose from Wikipedia, with a right aside      */}
      {/* for housing era and heritage. Information architecture that     */}
      {/* makes every suburb page genuinely unique.                       */}
      {/* ============================================================== */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-7">
            <Eyebrow>About {sub.name}</Eyebrow>
            <Heading level={2} className="mt-5 mb-6">
              The suburb, in brief.
            </Heading>
            <div className="space-y-5 text-cream/85 text-base leading-relaxed sm:text-lg">
              {f.foundedOrNamedNote && <p>{f.foundedOrNamedNote}</p>}
              <p>{f.historicalNote}</p>
              {f.geographyNote && <p>{f.geographyNote}</p>}
              {f.demographicsNote && (
                <p className="text-cream/60 text-sm">{f.demographicsNote}</p>
              )}
            </div>
          </div>

          <aside className="md:col-span-5 md:pl-6 md:border-l md:border-cream/10">
            {(f.housingEra || sub.housingStyles) && (
              <div>
                <p className="text-[11px] uppercase tracking-wider2 text-cream/50 mb-3">
                  Housing stock
                </p>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {f.housingEra || sub.housingStyles}
                </p>
              </div>
            )}
            {f.heritageNote && (
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-wider2 text-cream/50 mb-3">
                  Heritage items
                </p>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {f.heritageNote}
                </p>
              </div>
            )}
            {f.notableBuildings.length > 0 && (
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-wider2 text-cream/50 mb-3">
                  Landmarks
                </p>
                <ul className="text-cream/80 text-sm leading-relaxed">
                  {f.notableBuildings.slice(0, 4).map((b) => (
                    <li key={b} className="border-t border-cream/10 py-2 first:border-t-0">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* ============================================================== */}
      {/* Working in {suburb}: asymmetric bento, 2 columns (not 3         */}
      {/* identical cards). Left: large prose block pulling the local    */}
      {/* streets. Right: small stacked terrain + typical-work blocks.    */}
      {/* ============================================================== */}
      <Section className="bg-charcoal-soft">
        <Eyebrow>Working in {sub.name}</Eyebrow>
        <Heading level={2} className="mt-5 mb-10">
          What a {sub.name} project looks like.
        </Heading>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="h-full border border-cream/10 bg-cream/[0.03] p-8">
              <p className="text-[11px] uppercase tracking-wider2 text-timber-300 mb-4">
                Access &amp; logistics
              </p>
              <p className="text-cream/85 text-lg leading-relaxed">
                We&apos;re regularly on {streetListSentence(f.notableStreets)}. Being
                based in Dover Heights, {sub.name} is a short run for us, and we
                arrange parking permits, out-of-hours deliveries and traffic
                management as the site needs. On tight lots we plan material
                drops around the street rhythm rather than leaving timber on
                the kerb overnight.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 grid gap-6">
            <div className="border border-cream/10 bg-cream/[0.03] p-6">
              <p className="text-[11px] uppercase tracking-wider2 text-timber-300 mb-3">
                Terrain &amp; substructure
              </p>
              <p className="text-cream/85 leading-relaxed">
                {terrainLine(f.geographyNote, f.elevationM)}
              </p>
            </div>
            <div className="border border-cream/10 bg-cream/[0.03] p-6">
              <p className="text-[11px] uppercase tracking-wider2 text-timber-300 mb-3">
                Typical work
              </p>
              <ul className="space-y-2 text-cream/85 text-sm leading-relaxed">
                {sub.commonProjects.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-px w-3 flex-shrink-0 bg-timber-300"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= Services ================= */}
      <Section>
        <Heading level={2} className="mb-10">
          What we build for {sub.name} homes.
        </Heading>
        <ServicesGrid limit={featuredServices.length} />
      </Section>

      {/* ================= Process ================= */}
      <Section className="bg-charcoal-soft">
        <Heading level={2} className="mb-10">
          How we work in {sub.name}.
        </Heading>
        <ProcessSection />
      </Section>

      {/* ================= FAQs ================= */}
      <Section>
        <Heading level={2} className="mb-10">
          {sub.name} questions, answered.
        </Heading>
        <FAQ faqs={faqs} />
      </Section>

      {/* ================= Nearby suburbs ================= */}
      {neighbourSubs.length > 0 && (
        <Section className="bg-charcoal-soft">
          <Heading level={2} className="mb-10">
            Nearby suburbs we also work in.
          </Heading>
          <div className="grid grid-cols-2 gap-px bg-cream/10 sm:grid-cols-3 lg:grid-cols-4">
            {neighbourSubs.map((n) => (
              <Link
                key={n.slug}
                href={`/areas/${n.slug}`}
                className="group flex flex-col gap-1 bg-cream/5 px-5 py-5 transition hover:bg-cream/10 sm:px-6"
              >
                <span className="font-serif text-lg leading-tight text-cream sm:text-xl">
                  {n.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider2 text-cream/60 group-hover:text-timber-300 sm:text-xs">
                  {n.postcode} <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ================= Enquire ================= */}
      <Section id="enquire">
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <Eyebrow>Enquire</Eyebrow>
            <Heading level={2} className="mt-5">
              Carpenter in {sub.name}. Let&apos;s talk.
            </Heading>
            <p className="mt-4 text-cream/80">
              Tell us about your project. We respond within one business day.
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

/* ---- Local helpers kept here so the template reads top to bottom ---- */

function formatPopulation(n: number | null, year: number | null) {
  if (n == null) return null;
  return year ? `${n.toLocaleString()} (${year})` : n.toLocaleString();
}

function streetListSentence(streets: string[]) {
  const list = streets.slice(0, 4);
  if (list.length === 0) return "the main residential streets";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
}

function terrainLine(geo: string | null, elevationM: number | null) {
  const pieces: string[] = [];
  if (geo) pieces.push(geo);
  if (elevationM != null) pieces.push(`Elevation around ${elevationM} m.`);
  if (pieces.length === 0) {
    pieces.push(
      "Most of the Eastern Suburbs sits on Hawkesbury sandstone, which makes substructure and formwork a careful job: we bench rock where needed and detail properly for salt and sun.",
    );
  }
  return pieces.join(" ");
}

/* ============================= Fact sheet ============================ */

function SuburbFactSheet({ sub }: { sub: Suburb }) {
  const f = sub.facts;
  const population = formatPopulation(f.population, f.censusYear);
  return (
    <div className="border border-cream/15 bg-cream/[0.03] p-6 sm:p-7">
      <div className="mb-5 flex items-baseline justify-between">
        <p className="text-[10px] uppercase tracking-wider2 text-cream/50">
          Suburb facts
        </p>
        <p className="text-[10px] uppercase tracking-wider2 text-cream/50">
          NSW
        </p>
      </div>
      <dl>
        <FactRow label="Council" value={f.lga} />
        <FactRow label="Postcode" value={sub.postcode} />
        {population && <FactRow label="Population" value={population} />}
        {f.areaKm2 != null && (
          <FactRow label="Area" value={`${f.areaKm2} km²`} />
        )}
        {f.distanceFromCbdKm != null && (
          <FactRow
            label="From Sydney CBD"
            value={`${f.distanceFromCbdKm} km east`}
          />
        )}
        {f.elevationM != null && (
          <FactRow label="Elevation" value={`${f.elevationM} m`} />
        )}
        <FactRow
          label="From our workshop"
          value={sub.slug === "dover-heights" ? "Local" : "10 minutes"}
        />
      </dl>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-cream/10 py-3 first:border-t-0">
      <dt className="text-[11px] uppercase tracking-wider2 text-cream/50">
        {label}
      </dt>
      <dd className="text-right font-serif text-base text-cream">{value}</dd>
    </div>
  );
}
