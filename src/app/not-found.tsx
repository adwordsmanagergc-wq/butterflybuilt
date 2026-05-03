import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="py-32">
      <Eyebrow>404</Eyebrow>
      <Heading level={1} className="mt-3">
        Page not found.
      </Heading>
      <p className="mt-4 max-w-prose2 text-charcoal-soft">
        The page you're looking for doesn't exist. Try the homepage or get in touch.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact us
        </Link>
      </div>
    </Section>
  );
}
