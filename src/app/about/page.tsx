import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSection } from "@/components/ProcessSection";
import { JsonLd } from "@/components/JsonLd";
import { Img } from "@/components/Img";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Butterfly Built | Master Carpenters Sydney",
  description:
    "Meet the team behind Butterfly Built — master carpenters based in Dover Heights, Sydney. Bespoke joinery, decking and renovations across the Eastern Suburbs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <Section className="pt-12">
        <Eyebrow>About</Eyebrow>
        <Heading level={1} className="mt-4">
          A workshop in Dover Heights, building across Sydney.
        </Heading>
        <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">
          Butterfly Built was founded by Jon, a master carpenter who grew up working timber
          and never stopped. We're a small, hands-on team based in a workshop in Dover
          Heights — close enough to most jobs that we can be on site quickly, and far enough
          off the main road to do quiet, careful work.
        </p>
      </Section>

      <TrustStrip />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="aspect-[4/5] w-full overflow-hidden bg-charcoal-soft">
              {/* TODO: Replace with Instagram image — Jon in workshop */}
              <Img
                src="/images/about/jon-portrait.jpg"
                alt="Jon, master carpenter and founder of Butterfly Built, in the Dover Heights workshop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            <Heading level={2} className="mt-3">
              Carpentry that respects the material.
            </Heading>
            <div className="mt-6 space-y-5 text-cream/80 leading-relaxed">
              <p>
                {/* TODO: Replace with real founder story */}
                Butterfly Built started with a simple idea — that good carpentry should look
                like furniture, even when it's hidden in a wall. Every piece we build is
                designed to last, finished by hand, and treated with the kind of care a tree
                deserves after sixty years of growth.
              </p>
              <p>
                We work with homeowners directly and alongside Sydney's best architects,
                interior designers and builders. Our work spans bespoke joinery, custom
                kitchens, hardwood decks, staircases, heritage restoration and full
                renovation carpentry packages.
              </p>
              <p>
                We're licensed, insured, and proudly local to the Eastern Suburbs. If you've
                got a project in mind, we'd love to hear about it.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/projects" className="btn-outline">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-charcoal-soft">
        <Eyebrow>Quick facts</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          Butterfly Built at a glance.
        </Heading>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Founded", `${siteConfig.founded}`],
            ["Workshop", "Dover Heights, Sydney"],
            ["Service Area", "Sydney & Eastern Suburbs"],
            ["Licence", siteConfig.licence],
            ["Phone", siteConfig.phone],
            ["Email", siteConfig.email],
            ["Instagram", siteConfig.instagramHandle],
            ["Hours", siteConfig.hours],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-2 font-serif text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <Eyebrow>How we work</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          From first call to final handover.
        </Heading>
        <ProcessSection />
      </Section>

      <Section className="bg-charcoal-soft">
        <Eyebrow>What clients say</Eyebrow>
        <Heading level={2} className="mt-3 mb-10">
          Reviews from Sydney homeowners.
        </Heading>
        <Testimonials />
      </Section>
    </>
  );
}
