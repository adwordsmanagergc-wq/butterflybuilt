import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Carpentry Journal | Butterfly Built",
  description:
    "Field notes, how-tos and guides from Butterfly Built — master carpenters in Sydney's Eastern Suburbs.",
  path: "/blog",
});

const dateFmt = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
        ])}
      />

      <Section className="pt-12">
        <Eyebrow>Journal</Eyebrow>
        <Heading level={1} className="mt-4">
          Notes from the workshop.
        </Heading>
        <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">
          Field guides, how-tos and the things we learn building carpentry
          across Sydney&apos;s Eastern Suburbs.
        </p>
      </Section>

      <TrustStrip />

      <Section>
        <ul className="grid gap-px bg-cream/10 sm:grid-cols-2">
          {posts.map(({ meta }) => (
            <li key={meta.slug} className="bg-charcoal">
              <Link
                href={`/blog/${meta.slug}`}
                className="group flex h-full flex-col bg-cream/[0.03] p-8 transition hover:bg-cream/10"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider2 text-cream/60">
                  <span className="text-timber-300">{meta.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={meta.publishedAt}>
                    {dateFmt.format(new Date(meta.publishedAt))}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{meta.readingMinutes} min read</span>
                </div>
                <h2 className="h-display mt-5 text-2xl sm:text-3xl">{meta.title}</h2>
                <p className="mt-4 text-cream/75">{meta.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-cream group-hover:text-timber-300">
                  Read article <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
