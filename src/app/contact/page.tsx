import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Butterfly Built | Carpenter Sydney",
  description:
    "Contact Butterfly Built — master carpenters in Sydney. Call 0457 324 417, email jon@butterflybuilt.com.au, or send an enquiry. Workshop in Dover Heights.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <Section className="pt-12">
        <Eyebrow>Contact</Eyebrow>
        <Heading level={1} className="mt-4">
          Get a quote for your Sydney carpentry project.
        </Heading>
        <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">
          Tell us about your project and we'll get back to you within one business day. For
          urgent enquiries, call us directly.
        </p>
      </Section>

      <TrustStrip />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4">
            <h2 className="font-serif text-2xl">By phone</h2>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-2 block font-serif text-3xl text-timber-300"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-1 text-sm text-cream/60">{siteConfig.hours}</p>

            <h2 className="mt-10 font-serif text-2xl">By email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block font-serif text-xl text-timber-300"
            >
              {siteConfig.email}
            </a>

            <h2 className="mt-10 font-serif text-2xl">Workshop</h2>
            <address className="mt-2 not-italic text-cream/80">
              Dover Heights
              <br />
              Sydney NSW 2030
              <br />
              Australia
            </address>

            <h2 className="mt-10 font-serif text-2xl">Instagram</h2>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block link-underline"
            >
              {siteConfig.instagramHandle}
            </a>
          </aside>

          <div className="md:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
