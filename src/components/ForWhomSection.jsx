export default function ForWhomSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Für wen ist ZertAI geeignet?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Block title="Perfekt für" points={[
            'HR‑Manager in KMU (10–100 Mitarbeiter)',
            'Schweizer Unternehmen mit mehrsprachigen Teams (Basel: DE, Genf: FR, Lugano: IT)',
            'Firmen mit 5–50 Zeugnissen pro Jahr',
            'Alle, die >€2.000/Jahr an Arbeitszeit sparen wollen',
          ]} />
          <Block title="Wann ZertAI verwenden" points={[
            'Normale Mitarbeiteraustritte (Eigenkündigung)',
            'Vertragsende und Befristungen',
            'Routine‑Leistungsbewertungen',
            'Standardrollen (keine Führungspositionen)',
          ]} />
          <Block title="Wann einen Anwalt verwenden" negative points={[
            'Strittige oder arbeitgeberseitige Kündigungen',
            'Laufende arbeitsrechtliche Streitigkeiten',
            'C‑Level oder Führungspositionen',
            'Dokumentierte schwere Leistungsprobleme',
          ]} />
        </div>
        <div className="mt-6 rounded-lg border border-white/10 p-4 bg-white/5 text-sm text-neutral-300">
          Nicht geeignet: Großunternehmen (>100 Zeugnisse/Monat) — kontaktieren Sie uns. Kein Tool bietet 100%‑Garantien. Sie prüfen weiterhin vor dem Export.
        </div>
      </div>
    </section>
  );
}

function Block({ title, points = [], negative }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-white font-medium">{title}</h3>
      <ul className="mt-3 text-sm text-neutral-300 space-y-1">
        {points.map((p) => (
          <li key={p}>{negative ? '❌' : '✓'} {p}</li>
        ))}
      </ul>
    </div>
  );
}
