export default function ComparisonSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Manuell vs. Vorlagen vs. ZertAI</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Col title="Manuell" items={[
            'Zeit: 2–4 Stunden',
            'Qualität: abhängig von Erfahrung',
            'Risiko: Mittel',
          ]} />
          <Col title="Word‑Vorlagen" items={[
            'Zeit: 60–90 Minuten',
            'Qualität: generisch, veraltet',
            'Risiko: Mittel',
          ]} />
          <Col title="ZertAI" highlight items={[
            'Zeit: ~5 Minuten',
            'Qualität: rollengerecht, mehrsprachig',
            'Risiko: Informiert*',
          ]} />
        </div>
        <p className="mt-4 text-xs text-neutral-500 whitespace-pre-line">*Rechtlich informierte Formulierungen reduzieren Risiko,\n garantieren aber keine 100%-Konformität ohne Fachprüfung.</p>
      </div>
    </section>
  );
}

function Col({ title, items, highlight }) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? 'border-fuchsia-400/40 bg-white/10' : 'border-white/10 bg-white/5'}`}>
      <h3 className="text-white font-medium">{title}</h3>
      <ul className="mt-3 text-sm text-neutral-300 space-y-1">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
