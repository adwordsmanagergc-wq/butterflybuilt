import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects | Sydney Carpentry Portfolio | Butterfly Built",
  description:
    "Selected carpentry projects by Butterfly Built across Sydney — custom joinery, kitchens, decks and renovations from Bondi to Vaucluse.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />

      <Section className="pt-12">
        <Eyebrow>Projects</Eyebrow>
        <Heading level={1} className="mt-4">
          Recent carpentry work in Sydney.
        </Heading>
        <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">
          A selection of custom joinery, decks, kitchens and renovation carpentry projects
          we've completed across the Eastern Suburbs and greater Sydney. Follow{" "}
          <a
            href="https://www.instagram.com/butterfly.built"
            className="link-underline text-cream"
            target="_blank"
            rel="noreferrer"
          >
            @butterfly.built
          </a>{" "}
          on Instagram for new projects.
        </p>
      </Section>

      <TrustStrip />

      <Section>
        <GalleryGrid />
      </Section>

      <Section className="bg-charcoal-soft">
        <Eyebrow>Have a project in mind?</Eyebrow>
        <Heading level={2} className="mt-3">
          Let's build it.
        </Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
          <Link href="/services" className="btn-outline">
            Explore services
          </Link>
        </div>
      </Section>
    </>
  );
}
