import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Carpentry Services Sydney | Butterfly Built",
  description:
    "The full range of carpentry services from Butterfly Built in Sydney — bespoke joinery, decking, kitchens, wardrobes, staircases, framing, heritage and more.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <Section>
        <Eyebrow>Services</Eyebrow>
        <Heading level={1} className="mt-4">
          Carpentry services in Sydney.
        </Heading>
        <p className="mt-6 max-w-prose2 text-lg text-charcoal-soft">
          Butterfly Built is a full-service carpentry company based in Dover Heights, Sydney.
          From bespoke joinery to whole-home renovations, every project is hand-crafted in our
          workshop and finished by master carpenters on site. Explore our services below.
        </p>
      </Section>

      <TrustStrip />

      <Section>
        <ServicesGrid />
      </Section>

      <Section className="bg-timber-50/60">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Get a quote</Eyebrow>
            <Heading level={2} className="mt-3">
              Tell us what you'd like to build.
            </Heading>
            <p className="mt-4 text-charcoal-soft">
              Not sure what service you need? Just tell us about your project and we'll point
              you in the right direction.
            </p>
            <Link href="/projects" className="btn-ghost mt-6">
              See our projects →
            </Link>
          </div>
          <div className="md:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
