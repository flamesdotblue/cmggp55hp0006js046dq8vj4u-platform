import { AlertTriangle, Check } from 'lucide-react';

export default function Objection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900">"Kann ich KI wirklich mit Rechtsdokumenten vertrauen?"</h3>
          <div className="mt-3 text-sm text-neutral-800 space-y-3">
            <p className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" /> Kein Tool—auch unseres nicht—garantiert 100% Rechtskonformität ohne professionelle Prüfung.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Das leistet ZertAI:</p>
                <ul className="mt-1 space-y-1">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Übernimmt 80% Routinearbeit</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Rechtlich fundierte Sprache</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Volle Kontrolle: Prüfen, Bearbeiten, Genehmigen</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Reduziert (eliminiert nicht) Risiko</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Spart 2–4 Stunden pro Zeugnis</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Wann Anwalt statt KI:</p>
                <ul className="mt-1 space-y-1">
                  <li>• Strittige Kündigungen</li>
                  <li>• Laufende Rechtsstreitigkeiten</li>
                  <li>• Führungspositionen</li>
                  <li>• Dokumentierte Leistungsprobleme</li>
                </ul>
              </div>
            </div>
            <p className="text-neutral-600">Sie bleiben verantwortlich für den Inhalt. Wir machen den Prozess nur 10x schneller und weniger stressig.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
