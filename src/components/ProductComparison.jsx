export default function ProductComparison() {
  const rows = [
    { label: 'Zeit', word: '1–2 Stunden', berater: '1–2 Wochen', zertai: '5 Minuten' },
    { label: 'Kosten', word: '≈ €50', berater: '€250–500', zertai: '€3–10' },
    { label: 'Sprachen', word: '1', berater: '1–2', zertai: '4 gleichzeitig' },
    { label: 'Konsistenz', word: 'Niedrig', berater: 'Mittel', zertai: 'Hoch' },
    { label: 'Rechtliche Basis', word: 'Fragwürdig', berater: 'Ja', zertai: 'Informiert*' },
    { label: 'Bearbeitbar', word: 'Ja', berater: 'Begrenzt', zertai: 'Vollständig' },
    { label: 'Sofort verfügbar', word: 'Ja', berater: 'Nein', zertai: 'Ja' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Vergleich mit anderen Lösungen</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-700">
              <tr>
                <th className="text-left font-medium p-3 w-1/2">Kriterium</th>
                <th className="text-left font-medium p-3">Word‑Vorlage</th>
                <th className="text-left font-medium p-3">HR‑Berater</th>
                <th className="text-left font-medium p-3">ZertAI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 1 ? 'bg-neutral-50 border-t border-neutral-200' : 'border-t border-neutral-200'}>
                  <td className="p-3 text-neutral-800">{r.label}</td>
                  <td className="p-3 text-neutral-900">{r.word}</td>
                  <td className="p-3 text-neutral-900">{r.berater}</td>
                  <td className="p-3 text-neutral-900">{r.zertai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-neutral-600">* Rechtlich informierte Formulierungen, keine 100%‑Garantie ohne fachliche Prüfung.</p>
      </div>
    </section>
  );
}
