import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials, testimonials } from "@/components/Testimonials";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { FAQ } from "@/components/FAQ";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Section, Heading } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, reviewJsonLd } from "@/lib/jsonld";
import { homepageFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { suburbs, PRIMARY_SUBURB_SLUGS } from "@/lib/suburbs";

export const metadata = buildMetadata({
  title: "Carpenter Sydney | Butterfly Built | Master Carpentry & Joinery",
  description:
    "Butterfly Built is a master carpentry company in Sydney, based in Dover Heights. Custom joinery, decking, kitchens, wardrobes and renovations across the Eastern Suburbs.",
  path: "/",
});

export default function HomePage() {
  const featuredSuburbs = suburbs.filter((s) =>
    PRIMARY_SUBURB_SLUGS.includes(s.slug),
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", url: "/" }])} />
      <JsonLd data={faqJsonLd(homepageFaqs)} />
      <JsonLd data={reviewJsonLd(testimonials)} />

      {/* ====================================================== */}
      {/* HERO: display-first, wordmark as the entire first         */}
      {/* screen. Full viewport, left-aligned, massive Fraunces.    */}
      {/* ====================================================== */}
      <section className="relative pt-16 min-h-[92vh] flex flex-col justify-between">
        <div className="container-wide w-full">
          <div className="spec-label reveal">
            <span className="spec-code">01 / Studio</span>
            <span className="spec-rule" />
            <span className="text-cream/40">Est. Dover Heights</span>
          </div>

          <h1 className="display-xl mt-10 sm:mt-16 reveal">
            Butterfly<br />
            Built<span className="text-timber-300">.</span>
          </h1>

          <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-12 md:gap-12">
            <p className="md:col-span-5 text-lg leading-relaxed text-cream/75 max-w-prose2">
              Master carpenters working out of a Dover Heights workshop.
              Bespoke joinery, hardwood decking, structural formwork and
              renovation carpentry across Sydney&apos;s Eastern Suburbs.
            </p>
            <div className="md:col-span-7 md:justify-self-end md:self-end">
              <Link href="/contact" className="btn-arrow">
                Get a quote
              </Link>
              <p className="mt-3 text-[11px] uppercase tracking-wider2 text-cream/50">
                Or call <a href={`tel:${siteConfig.phoneTel}`} className="text-cream hover:text-timber-300">{siteConfig.phone}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <TrustStrip />
        </div>
      </section>

      {/* ====================================================== */}
      {/* HERO IMAGE: full-bleed editorial strip with corner       */}
      {/* caption, not a sidebar accent to the type.               */}
      {/* ====================================================== */}
      <section className="relative mt-24 sm:mt-32">
        <div className="container-wide">
          <div className="spec-label mb-6">
            <span className="spec-code">02 / Field</span>
            <span className="spec-rule" />
          </div>
        </div>
        <figure className="relative w-full overflow-hidden bg-charcoal-soft">
          <img
            src="/images/hero/hero-home.jpg"
            alt="Curved timber arched framing on a Sydney carpentry project by Butterfly Built"
            className="block h-[60vh] w-full object-cover sm:h-[80vh]"
            loading="eager"
            decoding="async"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent px-5 pb-6 pt-16 sm:px-10 sm:pb-10">
            <div className="container-wide !px-0 flex flex-wrap items-end justify-between gap-4">
              <p className="font-serif text-xl text-cream sm:text-2xl">
                Curved timber vaulting, in progress.
              </p>
              <p className="text-[11px] uppercase tracking-wider2 text-cream/60">
                Project No. 024 · 12/06/23
              </p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* ====================================================== */}
      {/* SERVICES: editorial index, not a 6-card grid.           */}
      {/* ====================================================== */}
      <section className="mt-24 sm:mt-32">
        <div className="container-wide">
          <div className="spec-label mb-8">
            <span className="spec-code">03 / Services</span>
            <span className="spec-rule" />
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <Heading level={2} className="display-lg md:col-span-7">
              What we build.
            </Heading>
            <div className="md:col-span-5 md:pt-6">
              <p className="text-cream/70 leading-relaxed">
                Eighteen carpentry disciplines under one roof. From the
                structural formwork that holds a slab to the hand-finished
                joinery that defines a room.
              </p>
              <Link
                href="/services"
                className="btn-ghost mt-6"
              >
                All services <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <ol className="mt-12 sm:mt-16" aria-label="Services">
            {services.slice(0, 10).map((s, i) => (
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
        </div>
      </section>

      {/* ====================================================== */}
      {/* ABOUT / Facts — specification-style numbers block       */}
      {/* ====================================================== */}
      <section className="mt-24 sm:mt-32 bg-charcoal-soft py-20 sm:py-28">
        <div className="container-wide">
          <div className="spec-label mb-10">
            <span className="spec-code">04 / Studio</span>
            <span className="spec-rule" />
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7">
              <Heading level={2} className="display-lg">
                Hand crafted from a Dover Heights workshop.
              </Heading>
              <p className="mt-8 max-w-prose2 text-lg leading-relaxed text-cream/75">
                Butterfly Built is a carpentry company based in Dover Heights,
                Sydney. Founded by master carpenter Jon, we deliver bespoke
                joinery, custom kitchens, hardwood decking, built-in wardrobes
                and renovation carpentry to homes across the Eastern Suburbs
                and greater Sydney. Every project is designed with the
                homeowner, built in our workshop, and finished by hand.
              </p>
              <Link href="/about" className="btn-ghost mt-10">
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>

            <dl className="md:col-span-5 grid grid-cols-2 gap-x-8 gap-y-10 self-center">
              <div>
                <dd className="fact-value">{siteConfig.founded}</dd>
                <dt className="fact-label">Founded</dt>
              </div>
              <div>
                <dd className="fact-value">
                  {PRIMARY_SUBURB_SLUGS.length}+
                </dd>
                <dt className="fact-label">Suburbs served</dt>
              </div>
              <div>
                <dd className="fact-value">{services.length}</dd>
                <dt className="fact-label">Carpentry services</dt>
              </div>
              <div>
                <dd className="fact-value">5.0<span className="text-timber-300">★</span></dd>
                <dt className="fact-label">Reviews</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* AREAS: numbered editorial index by suburb                */}
      {/* ====================================================== */}
      <section className="mt-24 sm:mt-32">
        <div className="container-wide">
          <div className="spec-label mb-8">
            <span className="spec-code">05 / Areas</span>
            <span className="spec-rule" />
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <Heading level={2} className="display-lg md:col-span-7">
              Local, across the Eastern Suburbs.
            </Heading>
            <p className="md:col-span-5 md:pt-6 text-cream/70 leading-relaxed">
              Nine suburbs within 15 minutes of the workshop. Each page has
              its own history, housing stock and street knowledge baked in.
            </p>
          </div>

          <ol className="mt-12 sm:mt-16" aria-label="Areas we serve">
            {featuredSuburbs.map((s, i) => (
              <li key={s.slug}>
                <Link href={`/areas/${s.slug}`} className="index-row">
                  <span className="index-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="index-title">{s.name}</span>
                  <span className="index-tail">
                    {s.postcode} <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ====================================================== */}
      {/* GALLERY — flowing marquee                                */}
      {/* ====================================================== */}
      <section className="mt-24 sm:mt-32">
        <div className="container-wide">
          <div className="spec-label mb-8">
            <span className="spec-code">06 / Recent work</span>
            <span className="spec-rule" />
          </div>
          <Heading level={2} className="display-lg">
            From the workshop.
          </Heading>
        </div>
        <div className="mt-14 sm:mt-16">
          <PhotoMarquee speed={90} />
        </div>
      </section>

      {/* ====================================================== */}
      {/* PROCESS                                                  */}
      {/* ====================================================== */}
      <Section className="mt-24 bg-charcoal-soft">
        <div className="spec-label mb-8">
          <span className="spec-code">07 / Process</span>
          <span className="spec-rule" />
        </div>
        <Heading level={2} className="display-lg mb-12">
          From first call to final handover.
        </Heading>
        <ProcessSection />
      </Section>

      {/* ====================================================== */}
      {/* REVIEWS                                                  */}
      {/* ====================================================== */}
      <Section>
        <div className="spec-label mb-8">
          <span className="spec-code">08 / Reviews</span>
          <span className="spec-rule" />
        </div>
        <Heading level={2} className="display-lg mb-12">
          What Sydney homeowners say.
        </Heading>
        <Testimonials />
      </Section>

      {/* ====================================================== */}
      {/* FAQ                                                      */}
      {/* ====================================================== */}
      <Section className="bg-charcoal-soft">
        <div className="spec-label mb-8">
          <span className="spec-code">09 / FAQ</span>
          <span className="spec-rule" />
        </div>
        <Heading level={2} className="display-lg mb-12">
          Frequently asked.
        </Heading>
        <FAQ faqs={homepageFaqs} />
      </Section>

      {/* ====================================================== */}
      {/* QUICK FACTS (LLM-friendly)                               */}
      {/* ====================================================== */}
      <section className="mt-24 sm:mt-32 bg-black py-20 sm:py-28 text-cream">
        <div className="container-wide">
          <div className="spec-label mb-10">
            <span className="spec-code">10 / Studio Facts</span>
            <span className="spec-rule" />
          </div>
          <Heading level={2} className="display-lg mb-12">
            Butterfly Built at a glance.
          </Heading>
          <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Workshop", "Dover Heights, Sydney NSW 2030"],
                ["Service Area", "Sydney · Eastern Suburbs"],
                ["Phone", siteConfig.phone],
                ["Email", siteConfig.email],
                ["Instagram", siteConfig.instagramHandle],
                ["Founded", String(siteConfig.founded)],
                ["Hours", siteConfig.hours],
                ["ABN", siteConfig.abn],
              ] as [string, string][]
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-wider2 text-cream/50">
                  {k}
                </dt>
                <dd className="mt-2 font-serif text-lg text-cream leading-snug">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ENQUIRE                                                  */}
      {/* ====================================================== */}
      <Section>
        <div className="spec-label mb-8">
          <span className="spec-code">11 / Enquire</span>
          <span className="spec-rule" />
        </div>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Heading level={2} className="display-lg">
              Tell us about your project.
            </Heading>
            <p className="mt-6 text-cream/75">
              We respond within one business day. For urgent jobs call{" "}
              <a className="link-underline text-cream" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
