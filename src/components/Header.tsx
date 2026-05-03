"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/areas/bondi", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? "bg-cream/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-cream/80"
      }`}
    >
      <div className="container-prose flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Butterfly Built home">
          {/* TODO: Replace with logo from GitHub upload */}
          <img src="/images/logo.svg" alt="Butterfly Built" className="h-9 w-auto" />
          <span className="font-serif text-lg tracking-tight text-charcoal">Butterfly Built</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm uppercase tracking-wider2 text-charcoal hover:text-timber-700 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="text-sm tracking-wider2 text-charcoal hover:text-timber-700"
          >
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="block h-px w-6 bg-charcoal mb-1.5" />
          <span className="block h-px w-6 bg-charcoal mb-1.5" />
          <span className="block h-px w-6 bg-charcoal" />
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream md:hidden">
          <nav aria-label="Mobile" className="container-prose flex flex-col gap-4 py-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-wider2 text-charcoal"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-outline flex-1">
                Call
              </a>
              <Link href="/contact" className="btn-primary flex-1" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
