import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProcessSection } from "@/components/ProcessSection";
import { AreasGrid } from "@/components/AreasGrid";
import { JsonLd } from "@/components/JsonLd";
import { Img } from "@/components/Img";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { services, getServiceBySlug } from "@/lib/services";
import { suburbs, PRIMARY_SUBURB_SLUGS } from "@/lib/suburbs";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);
  const areaNames = suburbs
    .filter((s) => PRIMARY_SUBURB_SLUGS.includes(s.slug))
    .map((s) => s.name);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.shortName, url: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          url: `/services/${service.slug}`,
          areaServed: areaNames,
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <Section className="pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-wider2 text-charcoal-muted">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span aria-hidden> / </span>
          <Link href="/services" className="hover:text-charcoal">Services</Link>
          <span aria-hidden> / </span>
          <span className="text-charcoal">{service.shortName}</span>
        </nav>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>{service.shortName}</Eyebrow>
            <Heading level={1} className="mt-4">
              {service.name} <span className="text-timber-600">in Sydney</span>
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-soft">{service.tagline}</p>
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
            <div className="relative aspect-[4/5] overflow-hidden bg-timber-100">
              {/* TODO: Replace with Instagram image */}
              <Img src={service.heroImage} alt={service.heroAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <TrustStrip />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <Heading level={2} className="mt-3">
              {service.shortName} done right.
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-soft">{service.intro}</p>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-charcoal/10 bg-cream p-6 sm:p-8">
              <h3 className="font-serif text-xl">Why Butterfly Built for {service.shortName.toLowerCase()}</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-timber-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-timber-50/60">
        <Eyebrow>Process</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          How we deliver your project.
        </Heading>
        <ProcessSection
          steps={service.process.map((p) => ({ name: p.step, desc: p.description }))}
        />
      </Section>

      <Section>
        <Eyebrow>FAQs</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          {service.shortName} questions, answered.
        </Heading>
        <FAQ faqs={service.faqs} />
      </Section>

      <Section className="bg-timber-50/60">
        <Eyebrow>Where we work</Eyebrow>
        <Heading level={2} className="mt-3">
          {service.shortName} across Sydney.
        </Heading>
        <p className="mt-4 max-w-prose2 text-charcoal-soft">
          We deliver {service.shortName.toLowerCase()} for clients across the Eastern Suburbs and
          greater Sydney, from our Dover Heights workshop.
        </p>
        <div className="mt-10">
          <AreasGrid />
        </div>
      </Section>

      <Section id="enquire">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Enquire</Eyebrow>
            <Heading level={2} className="mt-3">
              Get a quote for your {service.shortName.toLowerCase()} project.
            </Heading>
            <p className="mt-4 text-charcoal-soft">
              Fill in the form and we'll be in touch within one business day.
            </p>
          </div>
          <div className="md:col-span-7">
            <EnquiryForm defaultService={service.shortName} />
          </div>
        </div>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Eyebrow>Other services</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          Explore more of our work.
        </Heading>
        <div className="grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-cream p-6 hover:bg-timber-50">
              <div className="eyebrow text-timber-700">{s.shortName}</div>
              <div className="mt-2 font-serif text-xl">{s.name}</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
