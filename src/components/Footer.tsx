import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { suburbs, PRIMARY_SUBURB_SLUGS } from "@/lib/suburbs";

export function Footer() {
  const featured = services.slice(0, 8);
  const featuredSuburbs = suburbs.filter((s) => PRIMARY_SUBURB_SLUGS.includes(s.slug));

  return (
    <footer className="mt-24 border-t border-cream/10 bg-black text-cream">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center" aria-label="Butterfly Built home">
              <img
                src="/images/butterfly-built-logo.png"
                alt="Butterfly Built"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-cream/80">
              Master carpenters in Sydney. Bespoke joinery, decking and renovations from our
              workshop in Dover Heights.
            </p>
            <div className="mt-6 space-y-2 text-sm text-cream/80">
              <a className="block hover:text-timber-300" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phone}
              </a>
              <a className="block hover:text-timber-300" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a
                className="block hover:text-timber-300"
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-cream/70">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link className="text-cream/80 hover:text-timber-300" href={`/services/${s.slug}`}>
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="text-cream hover:underline" href="/services">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/70">Areas Served</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {featuredSuburbs.map((s) => (
                <li key={s.slug}>
                  <Link className="text-cream/80 hover:text-timber-300" href={`/areas/${s.slug}`}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/70">Visit</h3>
            <address className="mt-4 not-italic text-sm text-cream/80">
              Workshop & HQ
              <br />
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.region} {siteConfig.address.postcode}
              <br />
              Australia
            </address>
            <p className="mt-4 text-xs text-cream/60">
              {siteConfig.licence}
              <br />
              ABN: {siteConfig.abn}
              <br />
              Hours: {siteConfig.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Carpenter Sydney • Bondi • Eastern Suburbs • Custom Joinery</p>
        </div>
      </div>
    </footer>
  );
}
