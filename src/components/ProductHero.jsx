import { ArrowRight, Languages } from 'lucide-react';

export default function ProductHero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Wie ZertAI funktioniert</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">Von der ersten Frage bis zum fertigen Arbeitszeugnis in 5 Minuten. Keine Installation, keine Schulung — einfach starten.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <OverviewCard
            step="SCHRITT 1"
            title="Ihre Angaben"
            time="2 Minuten"
            points={[
              'Name, Rolle, Zeitraum',
              'Leistungsbewertung (1–3)',
              'Hauptaufgaben (Stichpunkte)'
            ]}
          />
          <OverviewCard
            step="SCHRITT 2"
            title="KI‑Generierung"
            time="30 Sekunden"
            points={[
              'Rechtlich informierte Formulierungen',
              'Rollengerechte Verantwortung',
              'Alle 4 Sprachen gleichzeitig'
            ]}
          />
          <OverviewCard
            step="SCHRITT 3"
            title="Prüfen & Export"
            time="2 Minuten"
            points={[
              'Abschnitte bearbeiten',
              'PDF/Word mit Branding',
              'Versionshistorie'
            ]}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-800">
            Jetzt kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
            <Languages className="h-4 w-4" /> DE • FR • IT • EN
          </span>
        </div>
      </div>
    </section>
  );
}

function OverviewCard({ step, title, time, points }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-medium text-neutral-600">{step} • {time}</div>
      <h3 className="mt-1 text-neutral-900 font-medium">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}
