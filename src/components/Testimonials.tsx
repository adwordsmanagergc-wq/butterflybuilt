// TODO: Replace with real testimonials and dates
export const testimonials = [
  {
    author: "Sarah K.",
    suburb: "Bondi",
    rating: 5,
    body:
      "Jon and the Butterfly Built team delivered the kind of joinery you'd expect from a furniture maker — quiet, precise and beautiful. We get compliments every time someone walks in.",
    date: "2025-09-12",
  },
  {
    author: "Michael R.",
    suburb: "Vaucluse",
    rating: 5,
    body:
      "We worked with Butterfly Built on a complete kitchen and butler's pantry. Site management was excellent and the finish is exceptional. Will use them again.",
    date: "2025-07-04",
  },
  {
    author: "Olivia & Tom",
    suburb: "Bronte",
    rating: 5,
    body:
      "Our hardwood deck is the best part of our home now. They cared about the small things — concealed fixings, oil finish, the whole experience.",
    date: "2025-05-22",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-px bg-charcoal/10 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.author} className="flex flex-col bg-cream p-8">
          <div aria-label={`${t.rating} out of 5 stars`} className="text-timber-600">
            {"★".repeat(t.rating)}
            <span className="text-charcoal/20">{"★".repeat(5 - t.rating)}</span>
          </div>
          <blockquote className="mt-4 font-serif text-lg leading-relaxed text-charcoal">
            “{t.body}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-charcoal-muted">
            <span className="font-medium text-charcoal">{t.author}</span> — {t.suburb}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
