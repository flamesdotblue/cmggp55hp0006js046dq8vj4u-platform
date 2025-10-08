import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.03)_0%,rgba(2,6,23,0)_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
          ✨ KI‑Assistent für DACH‑Arbeitszeugnisse
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
          Arbeitszeugnisse in 5 Minuten erstellen—
          <br className="hidden sm:block" />
          nicht mehr 2 Stunden
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700">
          KI‑gestützte Zeugnisse in DE • FR • IT • EN nach DACH‑Arbeitsrecht <span className="ml-2">🇩🇪 🇫🇷 🇮🇹 🇬🇧</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
          Trainiert mit 10.000+ realen Arbeitszeugnissen und DACH‑Rechtsprechung (§109 GewO, OR Art. 330a). Sie prüfen und genehmigen jedes Wort.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800"
          >
            Jetzt kostenlos testen → <span className="ml-1 hidden sm:inline">3 Zeugnisse gratis</span>
          </a>
          <a
            href="#value"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Wie es funktioniert (2 Min.)
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Ihre Eingabe (2 Minuten):</h3>
            <div className="mt-3 text-sm text-neutral-700 space-y-1">
              <div>Name: Maria Rossi</div>
              <div>Position: Senior Produktmanagerin</div>
              <div>Leistung: ⭐⭐⭐ (3/3 – Sehr gut)</div>
              <div>Aufgaben: Produktplanung, Team‑Koordination</div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Generiertes Ergebnis (30 Sekunden):</h3>
            <div className="mt-3 rounded-md bg-neutral-50 border border-neutral-200 p-4 text-sm text-neutral-800">
              <p className="font-medium text-neutral-900">Arbeitszeugnis — Senior Produktmanager/in</p>
              <p className="mt-2">Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Ihre Aufgaben umfassten die strategische Produktplanung, die cross‑funktionale Koordination sowie die Auswertung von Markt‑ und Kundenanforderungen.</p>
              <p className="mt-2">Sie überzeugte durch sehr gute analytische Fähigkeiten, eine ausgeprägte Lösungsorientierung und ein hohes Qualitätsbewusstsein. Ihr Verhalten gegenüber Vorgesetzten, Kolleginnen und Kollegen sowie externen Partnern war stets einwandfrei.</p>
              <ul className="mt-3 text-neutral-700 space-y-1">
                <li>✓ In 4 Sprachen gleichzeitig generiert</li>
                <li>✓ Jederzeit bearbeitbar vor Export</li>
                <li>✓ Rechtlich fundierte Formulierungen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
