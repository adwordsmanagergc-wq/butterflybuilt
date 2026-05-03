const defaultSteps = [
  { name: "Consult", desc: "Free site visit. We listen, measure, and understand the brief." },
  { name: "Design", desc: "Detailed drawings, finishes and samples to your home." },
  { name: "Quote", desc: "Transparent fixed-price quote with no surprises." },
  { name: "Build", desc: "Crafted by master carpenters in our Dover Heights workshop." },
  { name: "Handover", desc: "Cleaned, finished, walked through and warrantied." },
];

export function ProcessSection({
  steps = defaultSteps,
}: {
  steps?: { name: string; desc: string }[];
}) {
  return (
    <ol className="grid gap-px bg-charcoal/10 md:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.name} className="flex flex-col bg-cream p-6">
          <span className="font-serif text-3xl text-timber-600">0{i + 1}</span>
          <h3 className="mt-3 font-serif text-xl">{s.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
