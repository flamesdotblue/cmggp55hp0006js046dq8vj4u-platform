import { RouterProvider, createBrowserRouter, Outlet, Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
          ✨ KI‑Assistent für DACH‑Arbeitszeugnisse
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
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
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800"
          >
            Jetzt kostenlos testen → <span className="ml-1 hidden sm:inline">3 Zeugnisse gratis</span>
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Wie es funktioniert (2 Min.)
            <ArrowRight className="h-4 w-4" />
          </Link>
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

function ProductPage() {
  return (
    <main className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Wie ZertAI funktioniert</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">Von der ersten Frage bis zum fertigen Arbeitszeugnis in 5 Minuten. Keine Installation, keine Schulung — einfach starten.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-medium text-neutral-600">SCHRITT 1 • 2 Minuten</div>
            <h3 className="mt-1 text-neutral-900 font-medium">Ihre Angaben</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>• Name, Rolle, Zeitraum</li>
              <li>• Leistungsbewertung (1–3)</li>
              <li>• Hauptaufgaben (Stichpunkte)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-medium text-neutral-600">SCHRITT 2 • 30 Sekunden</div>
            <h3 className="mt-1 text-neutral-900 font-medium">KI‑Generierung</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>• Rechtlich informierte Formulierungen</li>
              <li>• Rollengerechte Verantwortung</li>
              <li>• Alle 4 Sprachen gleichzeitig</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-medium text-neutral-600">SCHRITT 3 • 2 Minuten</div>
            <h3 className="mt-1 text-neutral-900 font-medium">Prüfen & Export</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>• Abschnitte bearbeiten</li>
              <li>• PDF/Word mit Branding</li>
              <li>• Versionshistorie</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl text-neutral-900 font-medium">Vergleich mit anderen Lösungen</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200">
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
                {[
                  { label: 'Zeit', word: '1–2 Stunden', berater: '1–2 Wochen', zertai: '5 Minuten' },
                  { label: 'Kosten', word: '≈ €50', berater: '€250–500', zertai: '€3–10' },
                  { label: 'Sprachen', word: '1', berater: '1–2', zertai: '4 gleichzeitig' },
                  { label: 'Konsistenz', word: 'Niedrig', berater: 'Mittel', zertai: 'Hoch' },
                  { label: 'Rechtliche Basis', word: 'Fragwürdig', berater: 'Ja', zertai: 'Informiert*' },
                  { label: 'Bearbeitbar', word: 'Ja', berater: 'Begrenzt', zertai: 'Vollständig' },
                  { label: 'Sofort verfügbar', word: 'Ja', berater: 'Nein', zertai: 'Ja' },
                ].map((r, i) => (
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

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
          <h3 className="text-xl font-semibold text-neutral-900">Bereit, es auszuprobieren?</h3>
          <p className="mt-2 text-neutral-700">3 Zeugnisse kostenlos • Keine Kreditkarte • 5 Minuten Setup</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800">Kostenlos testen</Link>
            <Link to="/pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Preise ansehen</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '€0',
      cadence: 'für immer',
      blurb: ['Für gelegentliche Nutzung', 'Testen Sie ZertAI ohne Risiko'],
      features: ['3 Dokumente / Monat', 'Einzelnutzer', '1 Sprache (Deutsch)', 'Basis‑Vorlagen'],
      cta: 'Jetzt kostenlos starten',
      ctaSub: 'Keine Kreditkarte erforderlich',
      highlight: false,
      disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
    },
    {
      name: 'Team',
      price: '€99',
      cadence: 'pro Monat',
      badge: '🔥 Meistgewählt',
      blurb: ['Für HR‑Teams und wachsende Unternehmen', '∼€5 pro Zeugnis bei 20/Monat'],
      features: ['Unbegrenzte Dokumente', 'Bis zu 10 Nutzer', 'DE • FR • IT • EN', 'Brand‑Export (PDF/Word)'],
      cta: 'Team‑Plan testen →',
      ctaSub: 'Jederzeit kündbar • Alle Features 14 Tage testen',
      highlight: true,
      disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
    },
    {
      name: 'Business',
      price: 'Ab €249',
      cadence: 'pro Monat',
      blurb: ['Für Unternehmen mit hohem Volumen', 'Enterprise‑Features und Compliance'],
      features: ['Unbegrenzte Dokumente', 'SSO & Rollen', 'Policy‑Engine & Audit‑Log', 'Priorisierter Support'],
      cta: 'Angebot anfragen →',
      ctaSub: 'Antwort innerhalb 24 Stunden',
      highlight: false,
      disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Transparente Preise</h1>
        <p className="mt-3 text-neutral-700">Wählen Sie den Plan, der zu Ihrem Workflow passt. Jederzeit kündbar.</p>

        <section id="plans" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.highlight ? 'border-fuchsia-300 bg-fuchsia-50' : 'border-neutral-200 bg-white'} p-6 flex flex-col shadow-sm`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900 shadow-sm">
                  <Star className="h-3.5 w-3.5" /> {plan.badge}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-neutral-900 font-medium text-lg">{plan.name}</h3>
                <div className="mt-1 text-sm text-neutral-700 space-y-0.5">
                  {plan.blurb?.map((b) => (
                    <div key={b}>{b}</div>
                  ))}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-neutral-900">{plan.price}</span>
                  <span className="text-sm text-neutral-600">{plan.cadence}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> {f}</li>
                  ))}
                </ul>
              </div>
              <button className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${plan.highlight ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}`}>
                {plan.cta}
              </button>
              {plan.ctaSub && <div className="mt-2 text-xs text-neutral-600">{plan.ctaSub}</div>}
              <div className="mt-4 text-xs text-neutral-600">{plan.disclaimer}</div>
            </div>
          ))}
        </section>

        <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-neutral-900">404</h1>
        <p className="mt-2 text-neutral-600">Diese Seite wurde nicht gefunden.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Zur Startseite</Link>
      </div>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function RouterView() {
  return <RouterProvider router={router} />;
}
