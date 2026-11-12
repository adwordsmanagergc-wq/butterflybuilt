"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

const strokeProps = {
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      stroke="currentColor"
      {...strokeProps}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      stroke="currentColor"
      {...strokeProps}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0c3.181 0 6.167 1.24 8.413 3.488 2.248 2.248 3.484 5.235 3.482 8.414 0 6.555-5.335 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.869 9.869 0 0 0 1.511 5.26l-.999 3.648 3.977-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      stroke="currentColor"
      {...strokeProps}
    >
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

const phoneDigits = siteConfig.phoneTel.replace(/^\+/, "");

export function FloatingBar() {
  const base =
    "flex items-center justify-center text-cream/90 transition hover:text-timber-300";
  return (
    <div
      role="group"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <div
        className="flex items-stretch gap-0 border border-cream/15 bg-black/90 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md"
        style={{ borderRadius: "999px" }}
      >
        <Link
          href="/contact"
          className={`${base} gap-2 pl-5 pr-4 py-3 text-[11px] uppercase tracking-wider2 sm:pl-6 sm:pr-5`}
          aria-label="Get a quote"
        >
          <QuoteIcon />
          <span className="hidden sm:inline">Get a quote</span>
        </Link>
        <span aria-hidden className="my-2 w-px bg-cream/15" />
        <a
          href={`https://wa.me/${phoneDigits}`}
          target="_blank"
          rel="noreferrer"
          className={`${base} px-4 py-3 sm:px-5`}
          aria-label="Message on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <span aria-hidden className="my-2 w-px bg-cream/15" />
        <a
          href={`sms:${siteConfig.phoneTel}`}
          className={`${base} px-4 py-3 sm:px-5`}
          aria-label="Send a text"
        >
          <SmsIcon />
        </a>
        <span aria-hidden className="my-2 w-px bg-cream/15" />
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className={`${base} px-4 py-3 pr-5 sm:px-5 sm:pr-6`}
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
}
