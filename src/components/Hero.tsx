import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Img } from "@/components/Img";

type HeroProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  sub: React.ReactNode;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({
  eyebrow,
  heading,
  sub,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream/5">
      <div className="container-prose grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-6">
          {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
          <h1 className="h-display text-4xl sm:text-5xl md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-cream/80">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryCta?.href || "/contact"} className="btn-primary">
              {primaryCta?.label || "Get a Free Quote"}
            </Link>
            <a
              href={secondaryCta?.href || `tel:${siteConfig.phoneTel}`}
              className="btn-outline"
            >
              {secondaryCta?.label || `Call ${siteConfig.phone}`}
            </a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal-soft">
            {/* TODO: Replace with Instagram image */}
            <Img
              src={image}
              alt={imageAlt}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
