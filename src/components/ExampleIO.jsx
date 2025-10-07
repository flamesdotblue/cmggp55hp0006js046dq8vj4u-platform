import { Check } from 'lucide-react';

export default function ExampleIO() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900">Von unstrukturiertem Input zu professionellem Zeugnis</h3>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-sm font-medium text-neutral-800">Ihre Eingabe (2 Minuten)</div>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>• Name: Maria Rossi</li>
                <li>• Position: Senior Produktmanagerin</li>
                <li>• Leistung: 3/3 (Sehr gut)</li>
                <li>• Hauptaufgaben: Produktplanung, Team-Koordination</li>
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">🇩🇪 Deutsch</span>
                <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">🇫🇷 Français</span>
                <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">🇮🇹 Italiano</span>
                <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">🇬🇧 English</span>
              </div>
              <div className="mt-3 text-sm text-neutral-800">
                <p className="font-medium text-neutral-900">Arbeitszeugnis — Senior Produktmanager/in</p>
                <p className="mt-2">Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Ihre Aufgaben umfassten die strategische Produktplanung, die cross-funktionale Koordination sowie die Auswertung von Markt- und Kundenanforderungen.</p>
                <p className="mt-2">Sie überzeugte durch sehr gute analytische Fähigkeiten, eine ausgeprägte Lösungsorientierung und ein hohes Qualitätsbewusstsein. Ihr Verhalten gegenüber Vorgesetzten, Kollegen sowie externen Partnern war stets einwandfrei.</p>
              </div>
              <ul className="mt-3 text-sm text-neutral-800 space-y-1">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Rechtlich fundierte Formulierungen</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Alle 4 Sprachen gleichzeitig generiert</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Bearbeitbar vor Export</li>
              </ul>
              <div className="mt-3 text-xs text-neutral-500">—Erstellt mit ZertAI • Immer vor Finalisierung prüfen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
