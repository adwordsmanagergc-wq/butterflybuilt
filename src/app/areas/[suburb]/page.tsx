import { notFound } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { Section, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
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

  const featuredServices = services.slice(0, 10);
  const faqs = suburbFaqs(sub);
  const f = sub.facts;
  const chapter = (n: string, label: string) => (
    <div className="spec-label mb-8">
      <span className="spec-code">{n} / {label}</span>
      <span className="spec-rule" />
    </div>
  );

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

      {/* HERO */}
      <section className="pt-12 sm:pt-16">
        <div className="container-wide">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-[10px] uppercase tracking-wider2 text-cream/55"
          >
            <Link href="/" className="hover:text-timber-300">Home</Link>
            <span aria-hidden> / </span>
            <Link href="/areas/bondi" className="hover:text-timber-300">Areas</Link>
            <span aria-hidden> / </span>
            <span className="text-cream">{sub.name}</span>
          </nav>

          <div className="spec-label reveal">
            <span className="spec-code">AREA / {sub.postcode}</span>
            <span className="spec-rule" />
            <span className="text-cream/50">{f.lga}</span>
          </div>

          <h1 className="display-xl mt-8 reveal">
            {sub.name.split(" ").map((w, i, arr) => (
              <span key={i}>
                {w}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
            <span className="text-timber-300">.</span>
          </h1>

          <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-12 md:gap-16">
            <p className="md:col-span-6 text-lg leading-relaxed text-cream/75 max-w-prose2">
              {sub.intro}
            </p>
            <div className="md:col-span-6 md:justify-self-end md:self-end">
              <Link href="#enquire" className="btn-arrow">
                Get a quote
              </Link>
              <p className="mt-3 text-[11px] uppercase tracking-wider2 text-cream/50">
                Carpenter in {sub.name}, {sub.postcode}
              </p>
            </div>
          </div>

          {/* Fact tiles */}
          <div className="mt-16 sm:mt-20">
            <div className="spec-label mb-6">
              <span className="spec-code">AT A GLANCE</span>
              <span className="spec-rule" />
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-6">
              <FactTile label="Council" value={shortLga(f.lga)} />
              <FactTile label="Postcode" value={sub.postcode} />
              {f.population != null && (
                <FactTile
                  label="Population"
                  value={formatCompact(f.population)}
                  sub={f.censusYear ? `Census ${f.censusYear}` : undefined}
                />
              )}
              {f.areaKm2 != null && (
                <FactTile label="Area" value={`${f.areaKm2}`} sub="km²" />
              )}
              {f.distanceFromCbdKm != null && (
                <FactTile
                  label="From CBD"
                  value={`${f.distanceFromCbdKm}`}
                  sub="km east"
                />
              )}
              <FactTile
                label="From workshop"
                value={sub.slug === "dover-heights" ? "Local" : "10"}
                sub={sub.slug === "dover-heights" ? undefined : "minutes"}
              />
            </dl>
          </div>
        </div>
      </section>

      <div className="mt-20 sm:mt-24">
        <TrustStrip />
      </div>

      {/* ABOUT */}
      <section className="mt-24 sm:mt-32">
        <div className="container-wide">
          {chapter("02", `About ${sub.name}`)}
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <Heading level={2} className="display-lg">
                The suburb, in brief.
              </Heading>
              <div className="mt-8 space-y-5 text-cream/85 text-lg leading-relaxed">
                {f.foundedOrNamedNote && <p>{f.foundedOrNamedNote}</p>}
                <p>{f.historicalNote}</p>
                {f.geographyNote && <p>{f.geographyNote}</p>}
                {f.demographicsNote && (
                  <p className="text-cream/60 text-sm">{f.demographicsNote}</p>
                )}
              </div>
            </div>

            <aside className="md:col-span-5 md:pl-8 md:border-l md:border-cream/10 space-y-10">
              {(f.housingEra || sub.housingStyles) && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider2 text-cream/50 mb-3">
                    Housing stock
                  </p>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    {f.housingEra || sub.housingStyles}
                  </p>
                </div>
              )}
              {f.heritageNote && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider2 text-cream/50 mb-3">
                    Heritage items
                  </p>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    {f.heritageNote}
                  </p>
                </div>
              )}
              {f.notableBuildings.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider2 text-cream/50 mb-3">
                    Landmarks
                  </p>
                  <ul className="text-cream/80 text-sm leading-relaxed">
                    {f.notableBuildings.slice(0, 4).map((b) => (
                      <li
                        key={b}
                        className="border-t border-cream/10 py-2 first:border-t-0"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* WORKING IN SUBURB */}
      <section className="mt-24 sm:mt-32 bg-charcoal-soft py-20 sm:py-28">
        <div className="container-wide">
          {chapter("03", `Working in ${sub.name}`)}
          <Heading level={2} className="display-lg mb-12">
            What a {sub.name} project looks like.
          </Heading>

          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="h-full border border-cream/10 p-8 sm:p-10">
                <p className="text-[10px] uppercase tracking-wider2 text-timber-300 mb-5">
                  Access &amp; logistics
                </p>
                <p className="text-cream/85 text-lg leading-relaxed">
                  Regularly on {streetListSentence(f.notableStreets)}. Based in
                  Dover Heights, {sub.name} is a short run for us, and we
                  arrange parking permits, out-of-hours deliveries and traffic
                  management as the site needs. On tight lots we plan material
                  drops around the street rhythm rather than leaving timber on
                  the kerb overnight.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 grid gap-6">
              <div className="border border-cream/10 p-7 sm:p-8">
                <p className="text-[10px] uppercase tracking-wider2 text-timber-300 mb-4">
                  Terrain &amp; substructure
                </p>
                <p className="text-cream/85 leading-relaxed">
                  {terrainLine(f.geographyNote, f.elevationM)}
                </p>
              </div>
              <div className="border border-cream/10 p-7 sm:p-8">
                <p className="text-[10px] uppercase tracking-wider2 text-timber-300 mb-4">
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
        </div>
      </section>

      {/* SERVICES as editorial index */}
      <section className="mt-24 sm:mt-32">
        <div className="container-wide">
          {chapter("04", `Services in ${sub.name}`)}
          <Heading level={2} className="display-lg mb-12">
            What we build for {sub.name} homes.
          </Heading>
          <ol aria-label={`Carpentry services for ${sub.name}`}>
            {featuredServices.map((s, i) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="index-row">
                  <span className="index-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="index-title">{s.name}</span>
                  <span className="index-tail">
                    See <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/services" className="btn-ghost">
              All services <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section className="bg-charcoal-soft">
        {chapter("05", "Process")}
        <Heading level={2} className="display-lg mb-12">
          How we work in {sub.name}.
        </Heading>
        <ProcessSection />
      </Section>

      {/* FAQ */}
      <Section>
        {chapter("06", "FAQ")}
        <Heading level={2} className="display-lg mb-12">
          {sub.name}, answered.
        </Heading>
        <FAQ faqs={faqs} />
      </Section>

      {/* NEARBY SUBURBS */}
      {neighbourSubs.length > 0 && (
        <section className="mt-24 sm:mt-32 bg-charcoal-soft py-20 sm:py-28">
          <div className="container-wide">
            {chapter("07", "Nearby")}
            <Heading level={2} className="display-lg mb-12">
              Nearby suburbs.
            </Heading>
            <ol>
              {neighbourSubs.map((n, i) => (
                <li key={n.slug}>
                  <Link href={`/areas/${n.slug}`} className="index-row">
                    <span className="index-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="index-title">{n.name}</span>
                    <span className="index-tail">
                      {n.postcode} <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ENQUIRE */}
      <Section id="enquire">
        {chapter("08", "Enquire")}
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <Heading level={2} className="display-lg">
              Carpenter in {sub.name}.
            </Heading>
            <p className="mt-6 text-cream/80">
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

/* ================= helpers ================= */

function formatCompact(n: number) {
  if (n >= 1000) {
    const t = (n / 1000).toFixed(n >= 10000 ? 0 : 1);
    return `${t}k`;
  }
  return n.toLocaleString();
}

function shortLga(lga: string) {
  if (/Waverley/.test(lga) && /Woollahra/.test(lga)) return "Wav / Wool";
  if (/Waverley/.test(lga)) return "Waverley";
  if (/Woollahra/.test(lga)) return "Woollahra";
  if (/Randwick/.test(lga)) return "Randwick";
  return lga.split(" ")[0];
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

/* ================= FactTile ================= */

function FactTile({
  label,
  value,
  sub,
}: {
  label: string;
  value: ReactNode;
  sub?: string;
}) {
  return (
    <div>
      <p className="fact-value">{value}</p>
      <p className="fact-label">{label}</p>
      {sub && (
        <p className="text-[10px] uppercase tracking-wider2 text-cream/40 mt-1">
          {sub}
        </p>
      )}
    </div>
  );
}
