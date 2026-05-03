"use client";

import { useState } from "react";

export function FAQ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="font-serif text-lg text-charcoal sm:text-xl">{f.question}</span>
              <span aria-hidden className="mt-1 text-2xl text-timber-600">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              id={`faq-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-10 text-charcoal-soft leading-relaxed"
            >
              {f.answer}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
