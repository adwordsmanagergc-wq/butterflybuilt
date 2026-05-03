"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-charcoal/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="btn-outline flex-1"
        aria-label={`Call Butterfly Built on ${siteConfig.phone}`}
      >
        Call
      </a>
      <Link href="/contact" className="btn-primary flex-1">
        Get a Quote
      </Link>
    </div>
  );
}
