import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow, Heading } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { Img } from "@/components/Img";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { allPostSlugs, getPostBySlug, posts } from "@/lib/posts";

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const { meta } = post;
  return buildMetadata({
    title: meta.metaTitle,
    description: meta.metaDescription,
    path: `/blog/${meta.slug}`,
    image: meta.heroImage,
  });
}

const dateFmt = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const articleJsonLd = (meta: ReturnType<typeof getPostBySlug>) => {
  if (!meta) return null;
  const m = meta.meta;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.title,
    description: m.metaDescription,
    image: `${siteConfig.url}${m.heroImage}`,
    author: { "@type": "Person", name: m.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/butterfly-built-logo.png`,
      },
    },
    datePublished: m.publishedAt,
    dateModified: m.updatedAt || m.publishedAt,
    keywords: m.tags.join(", "),
    articleSection: m.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${m.slug}` },
  };
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const { meta, PostBody } = post;

  const others = posts.filter((p) => p.meta.slug !== meta.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
          { name: meta.title, url: `/blog/${meta.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)!} />

      <Section className="pt-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-xs uppercase tracking-wider2 text-cream/60"
        >
          <Link href="/" className="hover:text-cream">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href="/blog" className="hover:text-cream">
            Journal
          </Link>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider2 text-cream/60">
            <span className="text-timber-300">{meta.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={meta.publishedAt}>
              {dateFmt.format(new Date(meta.publishedAt))}
            </time>
            <span aria-hidden>·</span>
            <span>{meta.readingMinutes} min read</span>
          </div>
          <Heading level={1} className="mt-5">
            {meta.title}
          </Heading>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed">{meta.excerpt}</p>
          <p className="mt-6 text-sm text-cream/60">By {meta.author}</p>
        </div>
      </Section>

      <div className="container-prose">
        <div className="aspect-[16/9] w-full overflow-hidden bg-charcoal-soft">
          <Img
            src={meta.heroImage}
            alt={meta.heroAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Section className="pt-12">
        <article className="mx-auto max-w-3xl prose-bb">
          <PostBody />
        </article>

        {meta.tags.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-cream/10 pt-8">
            <p className="eyebrow mb-3">Tags</p>
            <ul className="flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <li
                  key={t}
                  className="border border-cream/15 px-3 py-1 text-xs uppercase tracking-wider2 text-cream/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {others.length > 0 && (
        <Section className="bg-charcoal-soft">
          <Eyebrow>More from the journal</Eyebrow>
          <Heading level={2} className="mt-3 mb-10">
            Keep reading.
          </Heading>
          <ul className="grid gap-px bg-cream/10 sm:grid-cols-3">
            {others.map(({ meta: m }) => (
              <li key={m.slug} className="bg-charcoal">
                <Link
                  href={`/blog/${m.slug}`}
                  className="group flex h-full flex-col bg-cream/[0.03] p-6 transition hover:bg-cream/10"
                >
                  <span className="eyebrow text-timber-300">{m.category}</span>
                  <h3 className="font-serif text-xl mt-3 text-cream">{m.title}</h3>
                  <p className="mt-3 text-sm text-cream/70 line-clamp-3">
                    {m.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-cream group-hover:text-timber-300">
                    Read <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Got a project?</Eyebrow>
            <Heading level={2} className="mt-3">
              Let&apos;s talk about what you&apos;re building.
            </Heading>
            <p className="mt-4 text-cream/80">
              Carpentry, formwork, joinery, decks — whatever the job, drop us a
              line and we&apos;ll be in touch within one business day.
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
