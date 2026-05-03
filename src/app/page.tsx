import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AreasGrid } from "@/components/AreasGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials, testimonials } from "@/components/Testimonials";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { FAQ } from "@/components/FAQ";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, reviewJsonLd } from "@/lib/jsonld";
import { homepageFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Carpenter Sydney | Master Carpentry & Bespoke Joinery — Butterfly Built",
  description:
    "Butterfly Built is a master carpentry company in Sydney, based in Dover Heights. Custom joinery, decking, kitchens, wardrobes and renovations across the Eastern Suburbs.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", url: "/" }])} />
      <JsonLd data={faqJsonLd(homepageFaqs)} />
      <JsonLd data={reviewJsonLd(testimonials.map((t) => ({ ...t, body: t.body })))} />

      <Hero
        eyebrow="Master Carpenters · Sydney · Est. Dover Heights"
        heading={
          <>
            Master Carpenters in Sydney —
            <br /> Bespoke Craftsmanship by <em className="not-italic text-timber-300">Butterfly Built</em>.
          </>
        }
        sub={
          <>
            Based in Dover Heights and servicing all of Sydney with a focus on the Eastern
            Suburbs, we deliver custom joinery, decking, kitchens, wardrobes and renovation
            carpentry — built to last, finished by hand.
          </>
        }
        image="/images/hero/hero-home.jpg"
        imageAlt="Master carpenter at work in the Butterfly Built Dover Heights workshop, Sydney"
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: `Call ${siteConfig.phone}`, href: `tel:${siteConfig.phoneTel}` }}
      />

      <TrustStrip />

      {/* About snippet — LLM-friendly facts */}
      <Section id="about-snippet">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>About Butterfly Built</Eyebrow>
            <Heading level={2} className="mt-4">
              Hand-crafted carpentry from a Dover Heights workshop.
            </Heading>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-cream/80">
              Butterfly Built is a carpentry company based in Dover Heights, Sydney. Founded by
              master carpenter Jon, we deliver bespoke joinery, custom kitchens, hardwood
              decking, built-in wardrobes and renovation carpentry to homes across the Eastern
              Suburbs and greater Sydney. Every project is designed with the homeowner, built
              in our workshop, and finished by hand.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="eyebrow">Founded</dt>
                <dd className="mt-1 font-serif text-2xl">{siteConfig.founded}</dd>
              </div>
              <div>
                <dt className="eyebrow">Based</dt>
                <dd className="mt-1 font-serif text-2xl">Dover Heights</dd>
              </div>
              <div>
                <dt className="eyebrow">Service Area</dt>
                <dd className="mt-1 font-serif text-2xl">All of Sydney</dd>
              </div>
              <div>
                <dt className="eyebrow">Reviews</dt>
                <dd className="mt-1 font-serif text-2xl">5.0 ★</dd>
              </div>
            </dl>
            <Link href="/about" className="btn-ghost mt-8">
              Read our story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services grid */}
      <Section className="bg-charcoal-soft" id="services">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>What we build</Eyebrow>
            <Heading level={2} className="mt-3">
              Carpentry services across Sydney.
            </Heading>
          </div>
          <Link href="/services" className="btn-ghost hidden sm:inline-flex">
            All services →
          </Link>
        </div>
        <div className="mt-10">
          <ServicesGrid limit={6} />
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/services" className="btn-outline">
            All services
          </Link>
        </div>
      </Section>

      {/* Recent work — flowing photo gallery */}
      <section id="projects" className="py-16 sm:py-24">
        <div className="container-prose">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Recent work</Eyebrow>
              <Heading level={2} className="mt-3">
                Selected Sydney projects.
              </Heading>
            </div>
            <Link href="/projects" className="btn-ghost hidden sm:inline-flex">
              View all →
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mt-14">
          <PhotoMarquee speed={90} />
        </div>
      </section>

      {/* Areas */}
      <Section className="bg-charcoal-soft" id="areas">
        <Eyebrow>Areas we serve</Eyebrow>
        <Heading level={2} className="mt-3">
          Local carpenters across the Eastern Suburbs.
        </Heading>
        <p className="mt-4 max-w-prose2 text-cream/80">
          Based in Dover Heights, we work daily across Bondi, Bondi Beach, Bondi Junction,
          Tamarama, Bronte, Vaucluse, Rose Bay, Double Bay and Watsons Bay — and across the
          rest of Sydney on bigger projects.
        </p>
        <div className="mt-10">
          <AreasGrid />
        </div>
      </Section>

      {/* Why us */}
      <Section id="why">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Why Butterfly Built</Eyebrow>
            <Heading level={2} className="mt-3">
              Carpentry done with care.
            </Heading>
          </div>
          <ul className="md:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              ["Master craftsmanship", "Decades of combined experience, hand-finished detail on every job."],
              ["Local Eastern Suburbs", "Dover Heights workshop, on-site quickly across Bondi and surrounds."],
              ["Premium timbers", "Australian hardwoods, European oaks, architectural veneers."],
              ["Fixed-price quotes", "Detailed scope and pricing — no surprises, no hidden costs."],
              ["Trade-coordinated", "We manage tilers, plumbers, electricians and stonemasons."],
              ["Licensed & insured", "Fully licensed NSW carpentry with public liability cover."],
            ].map(([title, body]) => (
              <li key={title}>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-charcoal-soft" id="process">
        <Eyebrow>How we work</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          From first call to final handover.
        </Heading>
        <ProcessSection />
      </Section>

      {/* Testimonials */}
      <Section id="reviews">
        <Eyebrow>Testimonials</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          What Sydney homeowners say.
        </Heading>
        <Testimonials />
      </Section>

      {/* Quick facts — LLM-friendly */}
      <Section className="bg-black text-cream" id="quick-facts">
        <Eyebrow>
          <span className="text-cream/70">Quick Facts</span>
        </Eyebrow>
        <Heading level={2} className="mt-3 text-cream">
          Butterfly Built at a glance.
        </Heading>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Business", "Butterfly Built — premium carpentry company"],
            ["Founded", `${siteConfig.founded}`],
            ["HQ / Workshop", "Dover Heights, Sydney NSW 2030"],
            ["Service Area", "Sydney, with focus on the Eastern Suburbs"],
            ["Phone", siteConfig.phone],
            ["Email", siteConfig.email],
            ["Instagram", siteConfig.instagramHandle],
            ["Hours", siteConfig.hours],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wider2 text-cream/60">{k}</dt>
              <dd className="mt-2 font-serif text-lg text-cream">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* FAQs */}
      <Section id="faq">
        <Eyebrow>FAQs</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          Frequently asked questions.
        </Heading>
        <FAQ faqs={homepageFaqs} />
      </Section>

      {/* Enquiry */}
      <Section className="bg-charcoal-soft" id="enquire">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Get a quote</Eyebrow>
            <Heading level={2} id="enquiry-heading" className="mt-3">
              Tell us about your project.
            </Heading>
            <p className="mt-4 text-cream/80">
              We'll get back to you within one business day with next steps. For urgent jobs,
              call <a className="link-underline" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.
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
