import { Check, MessageSquare, Upload, FileText } from 'lucide-react';

export default function ProductFlow() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Schritt-für-Schritt</h2>

            <div className="mt-6 space-y-6">
              <Step
                icon={<MessageSquare className="h-5 w-5" />}
                title="Schnelle Dateneingabe (Konversation)"
                bullets={[
                  'Beantworten Sie einfache Fragen (Name, Rolle, Zeitraum)',
                  'Leistungsbewertung: ⭐ bis ⭐⭐⭐',
                  'Hauptaufgaben als Stichpunkte'
                ]}
              />

              <Step
                icon={<Upload className="h-5 w-5" />}
                title="CSV‑Import (Mehrere Zeugnisse)"
                bullets={[
                  'Export aus HRIS oder Excel hochladen',
                  'Felderzuordnung automatisch erkennen',
                  'Alle Zeugnisse in einem Durchlauf generieren'
                ]}
              />

              <Step
                icon={<FileText className="h-5 w-5" />}
                title="KI‑Generierung & Bearbeitung"
                bullets={[
                  'Rechtlich informierte Formulierungen in 4 Sprachen',
                  'Rollengerechte Verantwortungstexte',
                  'Abschnitte bearbeiten, neu generieren, speichern'
                ]}
              />
            </div>

            <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm">
              ⚠️ Wichtig: Die KI schlägt Formulierungen vor, Sie entscheiden. Keine 100%‑Rechtsgarantie ohne fachliche Prüfung.
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium">Beispiel: Bewertung → Formulierung</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-sm text-neutral-700">Ihre Eingabe</div>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  <li>• Rolle: Senior Produktmanagerin</li>
                  <li>• Zeitraum: 01.03.2021 – 30.06.2025</li>
                  <li>• Leistung: ⭐⭐⭐ (Sehr gut)</li>
                  <li>• Aufgaben: Planung, Koordination, Marktanalyse</li>
                </ul>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-sm text-neutral-700">Generierte Formulierungen</div>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  <li>✓ DE: „stets zur vollsten Zufriedenheit“</li>
                  <li>✓ FR: „toujours à l’entière satisfaction“</li>
                  <li>✓ IT: „sempre con la massima soddisfazione“</li>
                  <li>✓ EN: „always to our fullest satisfaction“</li>
                </ul>
              </div>
            </div>
            <ul className="mt-4 text-sm text-neutral-700 space-y-1">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Kulturell angepasste Sprache, nicht nur Übersetzung</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Vorschau in Echtzeit, jede Passage editierbar</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Export als PDF/Word mit Branding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, bullets }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">{icon}</div>
      <h4 className="mt-3 text-neutral-900 font-medium">{title}</h4>
      <ul className="mt-2 text-sm text-neutral-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
